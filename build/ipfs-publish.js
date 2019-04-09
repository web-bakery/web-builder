const path = require('path')
const IPFSFactory = require('ipfsd-ctl')
const factory = IPFSFactory.create()

console.log('\nStarting IPFS node...')

factory.spawn(function (err, ipfsd) {
    if (err) { throw err }
    const dist = path.resolve('./', 'dist')

    ipfsd.api.addFromFs(dist, { recursive: true }).then(filesAdded => {
        console.log(filesAdded)
        console.log('\nFiles were added... Publishing...\n')
        const addr = '/ipfs/' + filesAdded.pop().hash
        console.log('addr', addr)
        console.log('\nPublishing page ...\n')
        ipfsd.api.name.publish(addr).then(result => {
            console.log('result!', result)
            console.log('Site was published!')
            console.log(`\nVisit: https://gateway.ipfs.io/ipns/${result.name}\n`)
            ipfsd.stop()
        })
        
    })
})