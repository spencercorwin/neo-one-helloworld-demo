import { defaultNetworks } from '@neo-one/cli';
import {
  LocalKeyStore,
  LocalMemoryStore,
  NEOONEProvider,
} from '@neo-one/client-core';
import { LocalUserAccountProvider } from '@neo-one/client-full-core';

const createUserAccountProviderFunc = (
  network: string,
  rpcURL: string,
) => async () => {
  const keystore = new LocalKeyStore(new LocalMemoryStore());
  await keystore.addUserAccount({
    network,
    privateKey: 'L2h6tjLeGh8ycX4PuDhmoxFzKf2nmHsN8XSjTaw2hkkyC3ZirGc6',
  }); // Need to add private key here

  return new LocalUserAccountProvider({
    keystore,
    provider: new NEOONEProvider([{ network, rpcURL }]),
  });
};

export default {
  contracts: {
    // NEO•ONE will look for smart contracts in this directory.
    path: 'neo-one/contracts',
    avm: true,
    opcodes: true,
    debug: true,
    json: true,
  },
  artifacts: {
    // NEO•ONE will store build and deployment artifacts that should be checked in to vcs in this directory.
    path: 'neo-one/artifacts',
  },
  migration: {
    // NEO•ONE will load the deployment migration from this path.
    path: 'neo-one/migration.ts',
  },
  codegen: {
    // NEO•ONE will write source artifacts to this directory. This directory should be committed.
    path: 'src/neo-one',
    // NEO•ONE will generate code in the language specified here. Can be one of 'javascript' or 'typescript'.
    language: 'typescript',
    // NEO•ONE will generate client helpers for the framework specified here. Can be one of 'react', 'angular', 'vue' or 'none'.
    framework: 'react',
    // Set this to true if you're using an environment like Expo that doesn't handle browserifying dependencies automatically.
    browserify: false,
    // Set this to true if you're running in codesandbox to workaround certain limitations of codesandbox.
    codesandbox: false,
  },
  network: {
    // NEO•ONE will store network data here. This path should be ignored by your vcs, e.g. by specifiying it in a .gitignore file.
    path: '.neo-one/network',
    // NEO•ONE will start the network on this port.
    port: 9040,
  },
  // NEO•ONE will configure various parts of the CLI that require network accounts using the value provided here, for example, when deploying contracts.
  // Refer to the documentation at https://neo-one.io/docs/configuration for more information.
  networks: {
    ...defaultNetworks,
    testnet: {
      userAccountProvider: createUserAccountProviderFunc(
        'testnet',
        'https://testnet.neotracker.io/rpc',
      ),
    },
  },
  neotracker: {
    // NEO•ONE will start an instance of NEO tracker using this path for local data. This directory should not be committed.
    path: '.neo-one/neotracker',
    // NEO•ONE will start an instance of NEO tracker using this port.
    port: 9042,
    // Set to true if you'd like NEO•ONE to skip starting a NEO tracker instance when running 'neo-one build'.
    skip: true,
  },
};
