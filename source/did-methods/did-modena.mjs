
import ION from '@decentralized-identity/ion-tools';
import * as dotenv from 'dotenv'

export default {
  name: 'modena',
  getBaseId(did){
    return did.split(':').slice(0, 4).join(':');
  },
  async resolve (did){
    const nodeEndpoint=process.env.RESOLVER
    return ION.resolve(did, nodeEndpoint);
  }
}
