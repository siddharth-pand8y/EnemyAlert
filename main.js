const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function onReady() {
  win = new BrowserWindow({ width: 1920, height: 1080 });
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, "dist/enemy-alert/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  // win.loadFile("./dist/enemy-alert/index.html");
}

app.on("ready", onReady);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
