import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('server:stop', () => {
  it('runs server:stop cmd', async () => {
    const {stdout} = await runCommand('server:stop')
    expect(stdout).to.contain('hello world')
  })

  it('runs server:stop --name oclif', async () => {
    const {stdout} = await runCommand('server:stop --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
