const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'helpcoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'helpcore-mnemonic.js'
  }
};
