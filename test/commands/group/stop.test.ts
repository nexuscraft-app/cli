import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('group:stop', () => {
  it('runs group:stop cmd', async () => {
    const {stdout} = await runCommand('group:stop')
    expect(stdout).to.contain('hello world')
  })

  it('runs group:stop --name oclif', async () => {
    const {stdout} = await runCommand('group:stop --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
