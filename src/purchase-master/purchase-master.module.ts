import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseMaster } from './entities/purchase-master.entity';
import { PurchaseMasterRepository } from './purchase-master.repository';
import { PurchaseMasterService } from './purchase-master.service';
import { PurchaseMasterController } from './purchase-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseMaster])],
  controllers: [PurchaseMasterController],
  providers: [PurchaseMasterService, PurchaseMasterRepository],
  exports: [PurchaseMasterRepository],
})
export class PurchaseMasterModule {}
