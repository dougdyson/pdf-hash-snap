async function connect () {
  console.log('Connecting to MetaMask...');
  await ethereum.request({
    method: 'wallet_enable',
    params: [{
      wallet_snap: { [snapId]: {} },
    }]
  })
}
