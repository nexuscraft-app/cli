import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('group:create', () => {
  it('runs group:create cmd', async () => {
    const {stdout} = await runCommand('group:create')
    expect(stdout).to.contain('hello world')
  })

  it('runs group:create --name oclif', async () => {
    const {stdout} = await runCommand('group:create --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
