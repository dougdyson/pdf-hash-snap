const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.post('/extract-text', (req, res) => {
  console.log('JS:');
  console.log(req.body);
  res.send(req.body);

  // if (!req.files && !req.files.pdfFile) {
  //   res.status(400);
  //   res.end();
  // }

  // pdfParse(req.files.pdfFile).then((result) => {
  //   res.send(result.text);
  // });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
