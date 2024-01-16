
import ION from '@decentralized-identity/ion-tools';
import * as dotenv from "dotenv"
dotenv.config()
export default {
  name: 'modena',
  getBaseId(did){
    return did.split(':').slice(0, 4).join(':');
  },
  async resolve (did){
    return ION.resolve(did, nodeEndpoint=process.env.MODENA_RESOLVER);
  }
}
