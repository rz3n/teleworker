import webhook from './src/handlers/webhook'
import telegramBot from './src/handlers/telegramBot'
import Router from './router'

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  const r = new Router()

  r.post('/telebot', telegramBot)

  let response = await r.route(request)

  if (!response) {
    response = new Response('Not Found', { status: 404})
  }

  return response

}