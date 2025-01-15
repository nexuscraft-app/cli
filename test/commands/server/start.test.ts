import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('server:start', () => {
  it('runs server:start cmd', async () => {
    const {stdout} = await runCommand('server:start')
    expect(stdout).to.contain('hello world')
  })

  it('runs server:start --name oclif', async () => {
    const {stdout} = await runCommand('server:start --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
