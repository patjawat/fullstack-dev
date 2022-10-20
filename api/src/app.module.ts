import { Module } from '@nestjs/common';
import { RouterModule,Routes } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { ExampleModule } from './modules/example/example.module';


@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),

    MulterModule.register({
      storage: diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/uploads')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          let extension = (file.originalname.split('.').pop())
          cb(null, file.fieldname + '-' + uniqueSuffix+'.'+extension)
        }
      })
    }),
   ExampleModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
