const Cert = artifacts.require('./Cert.sol')

contract('Cert', (accounts) => {
  before(async () => {
    this.cert = await Cert.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.cert.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('adds certificate', async () => {
    const result = await this.cert.addCert(2 , 2021 , "Enoch,1stClass;Terra,1stClass")
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.d, 'Enoch,1stClass;Terra,1stClass')
  })

  it('get certificate', async () => {
    const result = await this.cert.getCert(1)
    const event = results.logs[0].args
    assert.equal(event.)
  })

})