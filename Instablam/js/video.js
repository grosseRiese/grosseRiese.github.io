import {
	btnsnapCpture as btn
}
from './capturePhoto.js';
export
const video = document.querySelector('#myVideo');
export
const closeBtn = document.querySelector('#snapStop');
closeBtn.disabled = true;
export async function playVideo() {
	if ('mediaDevices' in navigator) {
		try {
			if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
				await navigator.mediaDevices.getUserMedia({
					video: {
						width: 320,
						height: 220
					}
				}).then(stream => {
					video.srcObject = stream;
				});
				closeBtn.disabled = false;
				btn.disabled = false;
				console.log('video app.js');
			}
		} catch (error) {
			console.log('Could not show camera window. ', error);
		} //..catch
	} //IF
} // EndOf playVideo()
export
function stopVideo() {
	btn.disabled = true;
	closeBtn.disabled = true;
	return video.srcObject && video.srcObject.getTracks().map(t => t.stop());
}