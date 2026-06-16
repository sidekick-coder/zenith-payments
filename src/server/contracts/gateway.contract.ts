import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import type Plan from '#zpayments/shared/entities/plan.entity.ts'

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

export interface PlanModule {
  link(plan: Plan): void;
}
  
export interface Gateway {    
    id: string
    name: string
    description: string

    payments?: PaymentModule
    plans?: PlanModule
}