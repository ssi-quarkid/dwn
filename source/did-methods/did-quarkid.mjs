
import ION from '@decentralized-identity/ion-tools';

export default {
  name: 'quarkid',
  getBaseId(did){
    return did.split(':').slice(0, 4).join(':');
  },
  async resolve (did){
    const nodeEndpoint="http://modena.gcba-extrimian.com:6900/resolve"
    return ION.resolve(did, nodeEndpoint);
  }
}
