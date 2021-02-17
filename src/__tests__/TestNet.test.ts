import {
  NEOONEProvider,
  LocalKeyStore,
  LocalMemoryStore,
  Client,
  NEOONEDataProvider,
  LocalUserAccountProvider,
} from '@neo-one/client';
import { createHelloWorldSmartContract } from '../neo-one';

jest.setTimeout(60000);

describe('HelloWorld', () => {
  let myClient: Client;
  beforeAll(async () => {
    const keystore = new LocalKeyStore(new LocalMemoryStore());
    await keystore.addUserAccount({
      network: 'testnet',
      privateKey: '', // Put your TestNet private key here
      name: 'MyTestNetUserAccount',
    });

    myClient = new Client({
      memory: new LocalUserAccountProvider({
        keystore,
        provider: new NEOONEProvider([
          new NEOONEDataProvider({
            network: 'testnet',
            rpcURL: 'https://testnet.neotracker.io/rpc',
          }),
        ]),
      }),
    });

    await myClient.selectNetwork('testnet');
    await myClient.selectUserAccount({
      network: 'testnet',
      address: '', // Put your TestNet address that corresponds to your TestNet private key
    });
  });

  test('responds with the given name', async () => {
    const helloWorld = createHelloWorldSmartContract(myClient);
    const name = 'spencer';
    const receipt = await helloWorld.hello.confirmed(name);

    if (receipt.result.state === 'FAULT') {
      throw new Error(receipt.result.message);
    }

    console.log(receipt.transaction.hash);
    console.log(receipt);

    expect(receipt.result.value).toEqual(`Hello ${name}`);
  });
});
