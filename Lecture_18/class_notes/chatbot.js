/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  // Twilio Credentials
  const accountSid = context.secrets.accountSid;
  const authToken = context.secrets.authToken;
  
  // require the Twilio module and create a REST client
  const client = require('twilio')(accountSid, authToken);

  client.messages.create(
    {
      to: '+1646XXXXXX',
      from: '+1646XXXXXX',
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    },
    (err, message) => {
      console.log(message.sid);
    }
  );
  cb(null, { hello: context.query.name || 'Anonymous' });
};
