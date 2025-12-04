import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseMaster } from './entities/purchase-master.entity';

@Injectable()
export class PurchaseMasterRepository extends Repository<PurchaseMaster> {
  constructor(
    @InjectRepository(PurchaseMaster)
    repo: Repository<PurchaseMaster>,
  ) {
    super(repo.target, repo.manager, repo.queryRunner);
  }

  async createPurchase(data: any) {
    const purchase = this.create(data);
    return await this.save(purchase);
  }
}
