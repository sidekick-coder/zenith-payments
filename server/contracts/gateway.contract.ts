export interface PaymentModuleCreateData {
  amountCents: number;
  currency: string;
  metadata?: any;
}

export interface PaymentModuleCreateResult {
  externalId: string;
  clientSecret?: string;
}

export interface PaymentModule {
  create(data: PaymentModuleCreateData): Promise<PaymentModuleCreateResult>;
}

export interface Gateway {
    id: string
    name: string
    description: string

    payments?: PaymentModule
}