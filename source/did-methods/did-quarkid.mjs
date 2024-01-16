import ION from '@decentralized-identity/ion-tools';
const resolver = process.env.DEFAULT_RESOLVER;

export default {
  name: 'quarkid',
  getBaseId(did){
    return did;
  },
  async resolve (did){
    return ION.resolve(did, nodeEndpoint=resolver);
  }
}
