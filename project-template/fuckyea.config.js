module.exports = {
    networks:{
        jungle: {
            // node_url: 'https://eos.greymass.com',
            chain: 'Jungle4',
            account: {
                name: 'youraccount',
                // permission: 'owner', // defaults to active
                private_key: process.env.PRIVATE_KEY
            }
        }
    }
}
