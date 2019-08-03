// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const {GenerateSW} = require('workbox-webpack-plugin');


module.exports = {
  siteName: 'Humming Bird Airsoft Solutions',
  plugins: [
    // {
    //   use: 'gridsome-plugin-pwa',
    //   options: {
    //     title: 'Gridsome',
    //     startUrl: '/',
    //     display: 'standalone',
    //     statusBarStyle: 'default',
    //     manifestPath: 'manifest.json.json',
    //     serviceWorkerPath: 'service-worker.js',
    //     shortName: 'Gridsome',
    //     themeColor: '#666600',
    //     backgroundColor: '#ffffff',
    //     icon: '' // must be supplied!
    //   }
    // }
  ], configureWebpack: {
    plugins: [
    new GenerateSW()
    ]
  }
}
