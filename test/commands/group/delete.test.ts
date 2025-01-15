import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('group:delete', () => {
  it('runs group:delete cmd', async () => {
    const {stdout} = await runCommand('group:delete')
    expect(stdout).to.contain('hello world')
  })

  it('runs group:delete --name oclif', async () => {
    const {stdout} = await runCommand('group:delete --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
