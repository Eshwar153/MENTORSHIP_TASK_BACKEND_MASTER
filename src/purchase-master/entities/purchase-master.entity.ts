import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('purchase_master')
export class PurchaseMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'purchase_number', type: 'varchar', length: 50 })
  purchaseNumber: string;

  @Column({ name: 'purchase_date', type: 'date' })
  purchaseDate: string;

  @Column({ name: 'supplier_manufacturer_id', type: 'int' })
  supplierId: number;

  @Column({ name: 'gst_number', type: 'varchar', length: 50 })
  gstNumber: string;

  @Column({ name: 'address', type: 'varchar', length: 500 })
  address: string;

  @Column({ name: 'phone_no', type: 'varchar', length: 15 })
  phoneNumber: string;

  @Column({ name: 'invoice_no', type: 'varchar', length: 50 })
  invoiceNumber: string;

  @Column({ name: 'invoice_date', type: 'date' })
  invoiceDate: string;

  @Column({ name: 'discount_percent', type: 'decimal', precision: 12, scale: 2, nullable: true })
  discountPercent: number;

  @Column({ name: 'discount_amount', type: 'int', nullable: true })
  discountAmount: number;

  @Column({ name: 'payment_status', type: 'varchar', length: 50 })
  paymentStatus: string;

  @Column({ name: 'payment_date', type: 'datetime', nullable: true })
  paymentDate: string;

  @Column({ name: 'payment_mode', type: 'varchar', length: 50 })
  paymentMode: string;

  @Column({ name: 'amount_payable', type: 'int' })
  amountPayable: number;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy: number;

  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy: number;

  @Column({ name: 'created_at', type: 'datetime', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', type: 'datetime', nullable: true })
  updatedAt: string;
}
