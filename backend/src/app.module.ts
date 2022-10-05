import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './config/constants';


import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
// import { User } from './user/entities/user.entity';
import { DemoModule } from './demo/demo.module';
import { UsersModule } from './auth/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        // entities: [Product],
        autoLoadEntities: true,
        synchronize: true,
        logging: false
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
    DemoModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
