export type TransactionStatus = 
  | "matched" 
  | "unmatched" 
  | "partially_matched" 
  | "reconciled" 
  | "exception";

export type PaymentMethod = 
  | "bank_deposit" 
  | "online_payment" 
  | "credit_card" 
  | "upi" 
  | "wallet";

export type PaymentSource = 
  | "amazon"
  | "flipkart"
  | "kindle"
  | "google"
  | "direct";

export interface Transaction {
  id: string;
  orderId: string;
  gemId?: string;
  vendorId?: string;
  challanNumber: string;
  date: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
  customerName: string;
  bankReference?: string;
  paymentReference?: string;
  source: PaymentSource;
  matchedWith?: string[];
  discrepancy?: number;
}

export interface BankDeposit {
  id: string;
  reference: string;
  date: string;
  amount: number;
  accountNumber: string;
  bankName: string;
  status: TransactionStatus;
  matchedWith?: string[];
}

export interface OnlinePayment {
  id: string;
  reference: string;
  date: string;
  amount: number;
  gateway: string;
  status: TransactionStatus;
  matchedWith?: string[];
}

export interface ReconciliationSummary {
  totalTransactions: number;
  matchedTransactions: number;
  unmatchedTransactions: number;
  partiallyMatchedTransactions: number;
  reconciledTransactions: number;
  exceptions: number;
  totalValue: number;
  unmatchedValue: number;
  discrepancyValue: number;
}

export interface ReconciliationTrend {
  date: string;
  matched: number;
  unmatched: number;
  exceptions: number;
}
