if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        console.log("Registration worked!");
    }).catch((e) => {
        console.log("Registration failed!", e);
    });
}
