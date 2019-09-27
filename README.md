# Simple Telegram Bot using Cloudflare Workers

## teleworker
Telegram Bot designed to run using Cloudflare Workers.

## Proof of Concept
This bot is just a proof of concept.


To be clear, I'm not a programmer, so don't expect a beautiful code or the best practices. It's just the result of an idea and the effort searching and trying to make something useful.

## Contributing
Do you like that idea? Want to help to turn into something bigger? Please feel free to contact me and let's discuss about that.

[t.me/rfranzen](https://t.me/rfranzen)


## Testing
### Wrangler and Cloudflare
Wrangler is used to publish your application on Cloudflare Workers structure.

Using Wrangler: https://github.com/cloudflare/wrangler

**wrangler.toml** shows how the configuration must be.



### Telegram
#### Configure your bot to use the webhook
```
curl https://api.telegram.org/bot<YOUR-BOT-ID>/setWebhook -F 'url=https://your-bot-url'
```

#### Delete webhook configuration from your bot
```
curl https://api.telegram.org/bot<YOUR-BOT-ID>/DeleteWebhook
```

#### Get info from your webhook configuration
```
curl https://api.telegram.org/bot<YOUR-BOT-ID>/getWebhookInfo
```

#### Using curl to send a message to your bot:
```
curl --tlsv1 -v -k -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache"  -d '{
"update_id":10000,
"message":{
  "date":1441645532,
  "chat":{
     "last_name":"Test Lastname",
     "id":000001010,
     "first_name":"Test",
     "username":"Test"
  },
  "message_id":1365,
  "from":{
     "last_name":"Test Lastname",
     "id":000001010,
     "first_name":"Test",
     "username":"Test"
  },
  "text":"Testing"
}
}' "https://your-bot-url"
```