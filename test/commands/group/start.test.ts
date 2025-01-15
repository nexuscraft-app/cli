import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('group:start', () => {
  it('runs group:start cmd', async () => {
    const {stdout} = await runCommand('group:start')
    expect(stdout).to.contain('hello world')
  })

  it('runs group:start --name oclif', async () => {
    const {stdout} = await runCommand('group:start --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
