const express    = require('express');
const Webtask    = require('webtask-tools');
const bodyParser = require('body-parser');
const twilio       = require('twilio');
const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendStatus(200)
})

app.post('/sms', function(req, res) {
  const twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports = Webtask.fromExpress(app);
