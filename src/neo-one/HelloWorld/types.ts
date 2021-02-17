/* @hash 6a8005c6183a984ea8ccdf6cff4d86e5 */
// tslint:disable
/* eslint-disable */
import {
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';

export type HelloWorldEvent = never;

export interface HelloWorldSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, HelloWorldEvent> {
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, HelloWorldEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly hello: {
    (name: string, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<string, HelloWorldEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      name: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface HelloWorldMigrationSmartContract {
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  readonly hello: (
    name: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
}
