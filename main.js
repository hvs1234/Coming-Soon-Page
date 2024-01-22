const {app,BrowserWindow} = require('electron')

createwindow = () => {
    const newapp = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {nodeIntegration: true},
        resizable: false,
        fullscreenable: false,
    })
    newapp.loadFile('index.html')
}
app.whenReady().then(createwindow)