class Telegram {
  constructor(token, message) {
    this.token = token
    this.message = message
    this.telegramUrl = 'https://api.telegram.org/bot' + this.token
    this.header = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }
  }

  sendText (text) {
    this.text = text
    let postUrl = this.telegramUrl + '/sendMessage?chat_id=' + this.message.id + '&parse_mode=markdown&text=' + this.text
    let res = fetch(postUrl, this.header)

    return res
  }

  sendAnimation (animation) {
    this.animation = animation
    let postUrl = this.telegramUrl + '/sendAnimation?chat_id=' + this.message.id

    if (this.animation.caption) {
      postUrl += '&caption=' + this.animation.caption
    }
    postUrl += '&animation=' + this.animation.url
    let res = fetch(postUrl, this.header)

    return res
  }

  sendPhoto (photo) {
    this.photo = photo
    let postUrl = this.telegramUrl + '/sendPhoto?chat_id=' + this.message.id

    if (this.photo.caption) {
      postUrl += '&caption=' + this.photo.caption
    }
    postUrl += '&photo=' + this.photo.url
    let res = fetch(postUrl, this.header)

    return res
  }

  sendVideo (video) {
    this.video = video
    let postUrl = this.telegramUrl + '/sendVideo?chat_id=' + this.message.id

    if (this.video.caption) {
      postUrl += '&caption=' + this.video.url
    }

    postUrl += '&video=' + this.photo
    let res = fetch(postUrl, this.header)

    return res
  }

  getUpdate () {
    let postUrl = this.telegramUrl + '/getUpdates'
    let res = fetch(postUrl, this.header)

    return res
  }

}

module.exports = Telegram
