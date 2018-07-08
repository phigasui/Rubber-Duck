'use strict'

const electron = require('electron')
const {app, BrowserWindow} = require('electron')

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
    alwaysOnTop: true
  });
  win.setIgnoreMouseEvents(true)
  win.maximize()
  win.loadFile('dist/index.html')

  // win.openDevTools()
  
  win.on('closed', () => {
    win = null
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