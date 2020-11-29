
import * as videoFile from './video.js';
import * as pictureFile from './capturePhoto.js';
import * as notification from './show-notification.js';

  function ready() {
    notification.askPermission();

    document.querySelector('#snapPlay').addEventListener('click',videoFile.playVideo);//Play the video
    document.querySelector('#snapStop').addEventListener('click',videoFile.stopVideo);//Stop the video

    pictureFile.btnsnapCpture.disabled = true;
    pictureFile.loopSrcPIc();
    pictureFile.Storage.getPictures();
  
  }
  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready())
  } else {
      ready();
  }