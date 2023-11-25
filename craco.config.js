const CarcoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CarcoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}
