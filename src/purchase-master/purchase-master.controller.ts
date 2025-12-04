import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { PurchaseMasterService } from './purchase-master.service';

@Controller('product/master')
export class PurchaseMasterController {
  constructor(private readonly service: PurchaseMasterService) {}

  @Post()
  create(@Body() dto: CreatePurchaseDto) {
    return this.service.create(dto);
  }
}
