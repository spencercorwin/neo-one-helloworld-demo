import { MigrationContracts } from '../src/neo-one';

export default (
  { helloWorld, token }: MigrationContracts,
  _network: string,
) => {
  // helloWorld.deploy();
  token.deploy();
};
