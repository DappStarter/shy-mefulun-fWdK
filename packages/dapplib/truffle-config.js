require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure suspect filter deny range punch coral light army genius'; 
let testAccounts = [
"0x87ca2c57fd71d6731f55033539abbc54960a5634d8d4438c2d908ac1809d8fb3",
"0x53dd2cc174c23c7d3a23211d965734f7c021bffa8fcc8dc536a989519c474d04",
"0x5e478533950b874e2de9ca449fe02d6f9640aaa7c3eeeef1423c991239013fc3",
"0xd887d20c6b3884ae9a6c0db616ad075d4856698e7e939128c4887070ec987263",
"0x443ff1aa40e9a8b7bda766093c0022fa16e8aaa8d90e3cff2b8d2e20ebb884a7",
"0x1c81dc95588645b2d1697f742d107b3003bd1c46165378de5f1b215cd39bc141",
"0x127018d93882a073609a888c0f43d33caddb2c9ff532319e8c5e771975675349",
"0x5706b6f85f95eae67e1e3c7c056177b94eb551a8644a2206800f72e3a3aa4b2e",
"0x51defd97952e982646c0d5857e5af40640f5f1c19e935250728f2882125bb902",
"0x654ca4e91c3a065bce90a395629b243e98e6ef5be1cc790c00996c92350ec14e"
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

