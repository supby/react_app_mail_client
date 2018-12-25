export default () => new Promise((resolve, reject) => {
  const gapiScript = document.createElement('script')
  gapiScript.src = 'https://apis.google.com/js/api.js?onload=onGapiLoad'
  window.onGapiLoad = function onGapiLoad () {
    window.gapi.load('auth', {'callback': () => window.gapi.load('client:auth2', resolve)})
  }
  document.body.appendChild(gapiScript)
})
