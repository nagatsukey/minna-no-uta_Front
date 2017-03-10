const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 450, height: 800 });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
app.on('window-all-closed', () => {
  app.quit();
});
