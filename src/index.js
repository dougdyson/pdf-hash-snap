module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Signature Confirmation`,
            description:
              'Confirm document signature!',
            textAreaContent:
              'I confirm that I have read and agree to all terms and conditions of {document name} etc...',
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
