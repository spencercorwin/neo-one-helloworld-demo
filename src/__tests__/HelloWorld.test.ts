import { withContracts } from '../neo-one/test';

jest.setTimeout(10000);

describe('HelloWorld', () => {
  it('responds with the given name', async () => {
    await withContracts(async ({ helloWorld }) => {
      const receipt = await helloWorld.hello.confirmed('Foo');
      if (receipt.result.state === 'FAULT') {
        throw new Error(receipt.result.message);
      }

      expect(receipt.result.value).toEqual('Hello Foo');
    });
  });
});
