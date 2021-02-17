# NEO•ONE HelloWorld Demo Repo

Use this as a template for NEO•ONE v2.7.x for use with the Neo2 network.

Make sure to put your private key in the config file `.neo-one.config.ts`. If you're trying to run the Jest test in `src/__tests__/TestNet.test.ts` make sure you also put your private key and address in the designated spots. Be careful not to commit your private key to version control (Git). Accounts can be added to the user account provider in the NEO•ONE CLI, but this is just a simple demonstration.

To run the unit test run `yarn jest src/__tests__/TestNet.test.ts`

To deploy the `HelloWorld` smart contract run `yarn neo-one deploy --network <network>` where `<network>` is the name of the network your are deploying to. In this case, for the Neo2 TestNet it would be `yarn neo-one deploy --network testnet`
