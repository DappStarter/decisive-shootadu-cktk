require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind home hunt knife blue silent'; 
let testAccounts = [
"0x0a99cdddb8300dd602f9c8be80e7a6116ab42350b344a837a2276d703039ae83",
"0x1deb2e55e1911dc598c062095a160506d51456dddf990ab4bbdbf6264df2c81a",
"0x6ab7729ed86f792b21026f47b642bc6a19ca2bd60a7e15843b78038f99e71659",
"0xed1b349e10186fed64c8f6a5a25d44e49e6479ea9c3fcb165079ad97ac33c131",
"0xe9c02df1c694973b0a9aaa6ed2674fe08e95137bf27cb7fbc5664c726f5b0ce9",
"0x0f55fb9a8aee01155720b2097c85a417b1669490d88895aea970f042223e392d",
"0x38ac443df3182f3e30efb69ff618b15222557a2377ef8b5a093be33cbb86ce0c",
"0xf795b833b6dd529eb5131de73b3594eefd9f602bb5c855e3e5e44af42981e72e",
"0xc9850746bf46df19ca6763eeddb9e8a12b9ea95c3f6a90ca81443b83ac0f5933",
"0x8b2c8f92b1a27834ce5be7c0af62ad613725dac54f30c9fd97e2bd91f99b8e1d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

