import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        name:configService.get('SECRET_DB_CONNECTION'),
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
  ],
})
class DatabaseModule {}
 
export default DatabaseModule;
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Employee } from './modules/hr/employee/entities/employee.entity';

// const defaultOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
// };

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       // ...defaultOptions,
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       database: 'nestjs',
//       password: 'docker',
//       entities: [Employee],
//       autoLoadEntities: true,
//       synchronize: true,
//     } as any),
//     TypeOrmModule.forRoot({
//       // ...defaultOptions,
//       type: 'mysql',
//       host: 'localhost',
//       port: 3307,
//       username: 'root',
//       database: 'tcds',
//       password: 'docker',
//       name: 'tcds',
//       entities: [],
//     } as any),
//   ],
// })
// class DatabaseModule { }

// export default DatabaseModule;