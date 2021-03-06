const result = require('./result.json')
const {getSummary, getTable, getExamples} = require('../src/utils')

test('getSummary', async () => {
  expect(getSummary(result.stats)).toEqual('Passes: 41, failures: 16, pending: 1, skipped: 0, other: 0.')
})

test('getTable', async () => {
  const data = `| State | Description                                                                                                                                                                                                      |\n` +
               `| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n` +
               `| fail  | **Filepath**: test/cypress/integration/pages/Profile/Component.spec.js<br>**Title**: F<br>**Error**: AssertionError: Timed out retrying: Expected to find content: '12' within the selector: 'h1' but never did. |`

  expect(getTable(getExamples(result.results))).toEqual(data)
})
