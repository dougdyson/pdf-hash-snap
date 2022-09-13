module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Hello, ${origin}!`,
            description:
              'Doing some cool pre-interview coding.',
            textAreaContent:
              'Meta Snaps is very cool indeed and will further enable support for w3 Dapps!',
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
