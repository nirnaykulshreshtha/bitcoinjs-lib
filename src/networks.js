'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.bitcoin = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
};
exports.regtest = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
};
exports.testnet = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
};
exports.dogecoin = {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
        public: 0x02facafd,
        private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
}
exports.dogecointestnet = {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
        public: 0x0432a9a8,
        private: 0x0432a243
    },
    pubKeyHash: 0x71,
    scriptHash: 0xc4,
    wif: 0x9e,
};

