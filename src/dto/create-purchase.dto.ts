import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CreatePurchaseDto {
  @IsNumber()
  @IsNotEmpty()
  supplierId: number;

  @IsOptional()
  @IsString()
  gstNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @Length(10, 10)
  phoneNumber?: string;

  @IsNotEmpty()
  @IsString()
  invoiceNumber: string;

  @IsNotEmpty()
  @IsString()
  invoiceDate: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discountPercent?: number;

  @IsNotEmpty()
  @IsString()
  paymentStatus: string;

  @IsNotEmpty()
  @IsString()
  paymentMode: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  amountPayable: number;

  @IsOptional()
  @IsString()
  paymentDate?: string;
}
