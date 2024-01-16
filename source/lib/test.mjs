import {CID} from 'multiformats/cid'
import {sha256} from 'multiformats/hashes/sha2'
import * as dagPB from '@ipld/dag-pb'

async function run() {
	const bytes = dagPB.encode({
	  Data: new TextEncoder().encode('Hola'),
	  Links: []
	})

	console.log('Encoded bytes: ', bytes)
	const hash = await sha256.digest(bytes)
	const cid = CID.create(1, dagPB.code, hash)

	console.log(cid, '=>', Buffer.from(bytes).toString('hex'))

	const decoded = dagPB.decode(bytes);
	console.log('Decoded bytes: ', decoded.Data)

	console.log(decoded)
	console.log(`decoded "Data": ${new TextDecoder().decode(decoded.Data)}`)
}

run().catch((err) => {
	console.error(err)
	process.exit(1)
})