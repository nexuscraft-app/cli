import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('servers', () => {
  it('runs servers cmd', async () => {
    const {stdout} = await runCommand('servers')
    expect(stdout).to.contain('hello world')
  })

  it('runs servers --name oclif', async () => {
    const {stdout} = await runCommand('servers --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
