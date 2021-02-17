/* @hash 59d3f1690278628e77c2f94dfc7cfb01 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const helloWorldABI: ABI = {
  events: [],
  functions: [
    {
      claim: false,
      constant: false,
      name: 'hello',
      parameters: [
        {
          forwardedValue: false,
          name: 'name',
          optional: false,
          type: 'String',
        },
      ],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        type: 'String',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      name: 'deploy',
      parameters: [],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
