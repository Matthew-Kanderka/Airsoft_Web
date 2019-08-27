// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Humming Bird Airsoft Solutions',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Hummingbird Airsoft',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,css,html,png,jpg,jpeg,webp',
        shortName: 'Gridsome',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'dist/favicon.ico' // must be supplied!
      }
    }
  ]
}
