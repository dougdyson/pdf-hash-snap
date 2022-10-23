const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const keccak256 = require('keccak256');
const web3 = require('web3');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.post('/extract-text', (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
  }

  pdfParse(req.files.pdfFile).then((result) => {
    // TODO: parse and append PDF meta data to response
    const { text } = result;
    const hash = keccak256(result.text).toString('hex');
    const extractedPDF = {
      text,
      hash,
    };
    res.send(extractedPDF);
  });
});

// app.post('/sign', (req, res) => {
  
// });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'wallet_getAddress':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Signature Confirmation`,
            description: 'Confirm document signature!',
            textAreaContent:
              'I confirm that I have read and agree to all terms and conditions of {document name} etc...',
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
