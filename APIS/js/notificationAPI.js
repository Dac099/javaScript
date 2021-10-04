const notifyMe = document.querySelector('#notify');
const notifications = document.querySelector('#notifications');

notifyMe.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(result => {
            console.log(result);
        })
})

notifications.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notification = new Notification('Welcome to my webPage');
        notification.onclick = function() {
            window.open('https:www.google.com');
        }
    }
})
