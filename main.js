'use strict'

const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const Twitter = require('node-twitter-api')
const dotenv = require('dotenv')

dotenv.config()

let access_token_key
let access_token_secret

const twitter = new Twitter({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callback: 'http://phigasui.com/phigabot'
})



let win
const createWindow = () => {
  const size = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({
    left: 0,
    top: 0,
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    hasShadow: false
  })
  win.maximize()

  init()

  // win.openDevTools()

  win.on('closed', () => {
    win = null
  })
}


const init = () => {
  twitter.getRequestToken((error, requestToken, requestTokenSecret, results) => {
    const url = twitter.getAuthUrl(requestToken)
    win.webContents.on('will-navigate', (event, url) => {
      const matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)

      if (matched) {
        twitter.getAccessToken(requestToken, requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret, results) => {
          access_token_key = accessToken
          access_token_secret = accessTokenSecret

          twitter.verifyCredentials(access_token_key, access_token_secret, {}, (error, data, respons) => {
            win.loadFile('dist/index.html')
            win.setIgnoreMouseEvents(true)
          })
        })

        event.preventDefault()
      }
    })

    win.loadURL(url)
  })
}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

exports.getTimeline = function(type, params, callback) {
  const hoge = twitter.getTimeline(
    type,
    params,
    access_token_key,
    access_token_secret,
    function(error, data, response) {
      if (error) {
        console.log(error)
      } else {
        callback(data[0]['text'])
      }
    }
  )
}
