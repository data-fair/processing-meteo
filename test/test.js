process.env.NODE_ENV = 'test'
const config = require('config')
const testUtils = require('@data-fair/processings-test-utils')
const rencensementProcessing = require('../')

describe('test', function () {
  it('try', async function () {
    this.timeout(1000000)

    const context = testUtils.context({
      pluginConfig: {
        apiAccessToken: config.apiAccessToken
      },
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'Meteo Test' },
        years: [2023, 2024],
        departements: ['56'],
        frequency: 3,
        clearFiles: false
      },
      tmpDir: 'data'
    }, config, false)

    await rencensementProcessing.run(context)
  })
})
