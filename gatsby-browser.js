/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using its
exports.registerServiceWorker = () => true;

// export const onServiceWorkerUpdateFound = () => {
  // const showNotification = () => {
  //   Notification.requestPermission(result => {
  //       if (result === 'granted') {
  //           navigator.serviceWorker.ready.then(registration => {
  //               registration.showNotification('Update', {
  //                   body: 'New content is available!',
  //                   icon: 'images/example.png',
  //                   vibrate: [200, 100, 200, 100, 200, 100, 400],
  //                   tag: 'request',
  //                   actions: [ // you can customize these actions as you like
  //                     {
  //                       action: 'explore', title: 'Explore this new world',
  //                       // icon: 'images/checkmark.png'
  //                     },
  //                     {
  //                         action: 'close', title: 'Close',
  //                         // icon: 'images/xmark.png'
  //                     },
  //                   ]
  //               })
  //           })
  //       }
  //   })
  // }

  // showNotification()
// }
