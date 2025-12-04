import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseMasterModule } from './purchase-master/purchase-master.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
     PurchaseMasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
