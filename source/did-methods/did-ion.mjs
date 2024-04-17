
import ION from '@decentralized-identity/ion-tools';

export default {
  name: 'ion',
  getBaseId(did){
    return did.split(':').slice(0, 3).join(':');
  },
  async resolve (did){
    const nodeEndpoint="https://saas.extrimian.com/ion-testnet";
    return ION.resolve(did, nodeEndpoint);
  }
}