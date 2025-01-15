import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('groups', () => {
  it('runs groups cmd', async () => {
    const {stdout} = await runCommand('groups')
    expect(stdout).to.contain('hello world')
  })

  it('runs groups --name oclif', async () => {
    const {stdout} = await runCommand('groups --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
