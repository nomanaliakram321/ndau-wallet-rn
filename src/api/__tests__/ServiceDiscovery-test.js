import ServiceDiscovery from '../ServiceDiscovery'
import MockHelper from '../../helpers/MockHelper'

describe('...testing ServiceDiscovery', () => {
  test('getServiceNodeURL should return something back', async () => {
    MockHelper.mockServiceDiscovery()

    const serverUrl = await ServiceDiscovery.getServiceNodeURL()

    // its testnet because that is what we pull in within MockHelper
    expect(serverUrl.includes('api.ndau.tech:31300')).toBeTruthy()
  })
})
