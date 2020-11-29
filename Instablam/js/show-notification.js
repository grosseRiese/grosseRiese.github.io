 
 let notificationPermission = false;

 export const askPermission = async () => {
     const answer = await Notification.requestPermission();
     if( answer == 'granted' ) {
         notificationPermission = true;
         console.log('Notification: permission GRANTED, user allowed notifications');
     } else if( answer == 'denied' ) {
         console.log('Notification: user denied notifications');
     } else {  // answer == 'default'
         console.log('Notification: user declined to answer');
     }
 }

 
 export const showNotification =  (bild) => {
  if( !notificationPermission ) {
      console.log('We do not have permission to show notification');
      return;
  }
  const options = {
      body: "You have captured a picture!",
     icon: bild,
     image:bild
  }
 
  let notif = new Notification('Notice', options);
  notif.addEventListener('show', () => {
      console.log('Showing notification');
  })
  notif.addEventListener('click', () => {
      console.log('User clicked on notification');
  })
}