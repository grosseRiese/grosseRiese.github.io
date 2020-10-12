let datum = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let htmlCopyFootYear = document.querySelector('#footer-date-year');
let htmlCopyFootMonth = document.querySelector('#footer-month');
let htmlCopyFootDay = document.querySelector('#footer-day');

htmlCopyFootYear.innerHTML = datum.getFullYear();
htmlCopyFootMonth.innerHTML = months[datum.getMonth()];
htmlCopyFootDay.innerHTML = datum.getUTCDate();