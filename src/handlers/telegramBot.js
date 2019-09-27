import Telegram from '../utils/telegram'
import { ALLOWED_GROUPS } from '../config'
import { BOT_TOKEN } from '../config'

export default async request => {
  try {
    const body = await request.json()

    const MESSAGE = {
      id: body.message.chat.id,
      message_id: body.message.message_id,
      first_name: body.message.chat.first_name,
      last_name: body.message.chat.last_name,
      text: body.message.text.toLowerCase()
    }

    const headers = new Headers({'content-type': 'application/json;charset=UTF-8'})
    const RETURN_FORBIDDEN = new Response('Oops...', {status: 403, statusText: 'Forbidden'})
    const RETURN_OK = new Response('working', {status: 200, headers: headers})

    const bot = new Telegram(BOT_TOKEN, MESSAGE)

    /******************************/
    /****** pseudo-security *******/
    if (!(ALLOWED_GROUPS.includes(MESSAGE.id))) {
      bot.sendText("Sorry, I can't talk to strangers")
      return RETURN_OK
    }
    /*** end of pseudo-security ***/
    /******************************/


    if ( MESSAGE.text.startsWith('/start')) {
      bot.sendText('Hey!')
      return RETURN_OK

    } else if ( MESSAGE.text.startsWith('/help')) {
      let media = {
        caption: 'Maybe this can help you...',
        url: 'https://media.giphy.com/media/pYw2Mmqkncj2E/giphy.gif'
      }
      bot.sendPhoto(media)
      return RETURN_OK

    } else if ( MESSAGE.text.startsWith('/hey')) {
      let media = {
        caption: 'Heeeeeeeeeeeeey!!',
        url: 'https://i.pinimg.com/originals/77/32/a0/7732a07aff30ef054bee2c26428ca7b8.jpg'
      }
      bot.sendPhoto(media)
      return RETURN_OK

    }

    return RETURN_OK

  } catch (err) {
    return new Response(err.stack || err)
  }
}
