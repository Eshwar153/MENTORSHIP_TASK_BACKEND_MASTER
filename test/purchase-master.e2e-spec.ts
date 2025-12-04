import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('PurchaseMaster (E2E Test Placeholder)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should load the PurchaseMaster module', () => {
    expect(app).toBeDefined();
  });



  afterAll(async () => {
    await app.close();
  });
});
