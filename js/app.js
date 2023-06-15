if('ServiceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service worker registered:', reg))
    .catch(err => console.warn('Error registering service worker:', err))
}