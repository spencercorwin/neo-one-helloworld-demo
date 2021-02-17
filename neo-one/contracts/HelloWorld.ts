import { SmartContract } from '@neo-one/smart-contract';

export class HelloWorld extends SmartContract {
  public readonly properties = {
    codeVersion: '1.0',
    author: 'Spencer',
    email: '',
    description: 'NEO•ONE HelloWorld Contract',
  };

  public hello(name: string): string {
    return `Hello ${name}`;
  }
}
