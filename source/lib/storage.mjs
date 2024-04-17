import { MongoClient } from 'mongodb';
const DATABASE_URL = process.env.DATABASE_URL_CONN;
const CLIENT =  new MongoClient(DATABASE_URL);

const modelTemplate = {
  "id:string": { pk: true, immutable: true },
  "messages:string[]": {
    // model: {
    //   "attestation:obj": { immutable: true },
    //   "authorization:obj": { immutable: true },
    //   "descriptor:obj": {
    //     model: {
    //       "objectId:string": { immutable: true, notNull: true },
    //       "cid:string": { immutable: true, notNull: true },
    //       "method:string": { immutable: true, notNull: true },
    //       "schema:string": { immutable: true },
    //       "tags:string[]": {},
    //       "datePublished:int": { immutable: true },
    //       "dataFormat:string": { immutable: true, notNull: true },
    //       "encryption:string": { immutable: true },
    //       "parent:string": { immutable: true }
    //     }
    //   }
    // }
  }
};

const tables = [
  'stack',
  'profile',
  'permissions',
  'collections',
  'threads',
  'actions'
]

export default class Storage {

  constructor(did, options = {}){
    this.did = did;
    this.did = did;
    this.dbName = "dwn"//did.replace(/:/g, '-');
    console.log(this.dbName,"----------------------")
    this.ready = CLIENT.connect();

  }
  async txn(fn){
    console.log(new Date().toUTCString() +  " -- DB save data" )
    await this.ready
    
    return (CLIENT.db("dwn"))
  }
  

  async set (table, entries){
    return CLIENT.db("dwn").collection(table).insertMany(entries)
  }

  async get (table, id){
    return CLIENT.db("dwn").collection(table).findOne({ "objectId": id })
  }

  async find (table, filter){
    function printData(data) {
      let str = '';
      for (let key in data) {
          if (typeof data[key] == 'object') str += key + printData(data[key]) + ' ';
          else str += key + ' => ' + data[key] + ' ';
      }
      return str;
  };
  
    console.log("AAAAAAAA",printData(filter));
    let messages = CLIENT.db("dwn").collection(table).find(filter).toArray();
    console.log("LO QUE PASA ES QUE NO ESTA GUARDANDO EL TARRRGUETT")
    return messages 

  }

  async getStackFromIndex (id){
    return this.txn(db => db(table).query('select').where([
      'order', '>', id
    ]).exec()).catch(e => console.log(e))
  }

  async getBySchema(table, schema){
    return this.txn(db => db(table).query('select').where([
      'schema', '=', schema.trim()
    ]).exec()).catch(e => console.log(e))
  }

  async delete (table, id){
    return this.txn(db => db(table).query('delete').where([
      'id', '=', id
    ]).exec()).catch(e => console.log(e));
  }

  async clear (table) {
    this.txn(db => {
    return table ? 
      db(table).query('delete').exec().catch(e => console.log(e)) : 
      Promise.all(this.tables.map(table => db(table).query('delete').exec())).catch(e => console.log(e))
    });
  }

  async modify (table, id, fn){
    return this.txn(db => db(table).query('select').where([
      'id', '=', id
    ]).exec())
    .then(async rows => this.set(table, await fn(rows[0])))
    .catch(e => console.log(e));
  }

  // async merge (store, id, changes){
  //   return this.get(store, id).then((entry = {}) => {
  //     return this.set(store, id, Natives.merge(entry, changes));
  //   })
  // }
}
