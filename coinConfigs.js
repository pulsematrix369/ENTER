window.coinConfigs = [
  {
    "chainId": 369,
    "name": "PuMa 3x3",
    "vault": "0xF2fF86e9478200DF100D0A1152a8732D972831c9",
    "receipt": "0x0426e270d1DE6c4f7f52b2753C2bBbC6773004cf",
    "token": "0xbc2C3D958b858E044A1d99875b276c56C5d07E36",
    "abiKey": "PuMa3x3",
    "decimals": 18,
    "color": "#ffd700"
  },
  {
    "chainId": 369,
    "name": "PuMa 4x4",
    "vault": "0x4E893c22fd469b3Fc343cfC1d8A9F7ddd64B16d0",
    "receipt": "0x8E4d176bb0E7B32103fA60e880614441aDe701F9",
    "token": "0xbc2C3D958b858E044A1d99875b276c56C5d07E36",
    "abiKey": "PuMa4x4",
    "decimals": 18,
    "color": "#f39c12"
  },
  // Testnet V4 entries (chainId 943)
  {
    "chainId": 943,
    "name": "PuMa 3x3",
    "vault": "0x1b7710871a50DE185f788A8E88675D7676140b5b",
    "receipt": "0xC6D28a09931DB11Ee2e702624DbB7F62364Cdb34",
    "token": "0x625C5eAa59527Fee32c77efdce75aaeAFC649Dd0",
    "abiKey": "PuMa3x3",
    "decimals": 18,
    "color": "#ffd700"
  },
  // NOTE: Per user confirmation, on testnet (943) PuMa 4x4 uses these exact addresses
  // and has deployed bytecode at them. Do not "correct" to different testnet values.
  {
    "chainId": 943,
    "name": "PuMa 4x4",
    "vault": "0xF2fF86e9478200DF100D0A1152a8732D972831c9",
    "receipt": "0x0426e270d1DE6c4f7f52b2753C2bBbC6773004cf",
    "token": "0x625C5eAa59527Fee32c77efdce75aaeAFC649Dd0",
    "abiKey": "PuMa4x4",
    "decimals": 18,
    "color": "#f39c12"
  },
  // NOTE: Intentionally reusing mainnet PUMA token address as PLS token on testnet (943): 0xbc2C3D...
  // This is deliberate and verified; do not auto-rewrite during merges.
  {
    "chainId": 943,
    "name": "PLS 3x3",
    "vault": "0xDFC2EAd34b018c12b4A71F9ae526B9d663c90fEd",
    "receipt": "0xAb860299E96340893D984E85966a9dCE6096D7ee",
    "token": "0xbc2C3D958b858E044A1d99875b276c56C5d07E36",
    "abiKey": "PLS3x3",
    "decimals": 18,
    "color": "#ff6b6b"
  },
  {
    "chainId": 943,
    "name": "PLS 4x4",
    "vault": "0xaa8A00dd27293955Baf6F1f31a85E03C5EB13056",
    "receipt": "0xD08b730fE1BbBeD3fEEA1c23646646E9F6AD3DD7",
    "token": "0xbc2C3D958b858E044A1d99875b276c56C5d07E36",
    "abiKey": "PLS4x4",
    "decimals": 18,
    "color": "#ff4757"
  }
];
