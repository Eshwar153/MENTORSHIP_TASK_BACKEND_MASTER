import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { PurchaseMasterRepository } from './purchase-master.repository';

@Injectable()
export class PurchaseMasterService {
  constructor(private readonly repo: PurchaseMasterRepository) {}

  private generatePurchaseNumber() {
    const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `PUR${date}-${random}`;
  }

  async create(dto: CreatePurchaseDto) {
    const purchaseNumber = this.generatePurchaseNumber();
    const purchaseDate = new Date().toISOString().split('T')[0];

    const payload = {
      purchaseNumber,
      purchaseDate,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...dto,
    };

    const saved = await this.repo.createPurchase(payload);

    return {
      statusCode: 201,
      message: 'Purchase created successfully',
      data: saved,
    };
  }
}
