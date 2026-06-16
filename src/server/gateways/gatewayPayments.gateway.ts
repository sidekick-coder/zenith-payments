
export interface PaymentModuleCreateData {
  amountCents: number;
  currency: string;
  metadata?: any;
}

export interface PaymentModuleCreateResult {
  externalId: string;
  clientSecret?: string;
}

export default class GatewayPayment {
    public create(data: PaymentModuleCreateData): Promise<PaymentModuleCreateResult> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { data })

        throw error
    }
}
