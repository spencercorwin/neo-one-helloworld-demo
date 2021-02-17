/* @hash 4601f86fbd344fd22db37c2f486e283b */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { HelloWorldSmartContract } from './types';
import { helloWorldABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AYtg7yHRZNn9Qbvh6czfqgRpNK6mGW9GDP',
    },
  },
  abi: helloWorldABI,
  sourceMaps,
};

export const createHelloWorldSmartContract = <TClient extends Client>(
  client: TClient,
): HelloWorldSmartContract<TClient> => client.smartContract(definition);
