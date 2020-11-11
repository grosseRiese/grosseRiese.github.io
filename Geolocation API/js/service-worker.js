if ('serviceWorker' in navigator) {
	// Assumes your service worker has file name "sw.js"
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registration succeeded. Scope is ' + reg.scope);
    });
    //.then((reg)=>console.log('service worker registered',reg))
    //.catch((err)=> console.log('service worker not registered',err))
}

  