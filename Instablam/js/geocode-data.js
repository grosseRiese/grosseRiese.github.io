import {
	latitude, longitude
}
from './capturePhoto.js';
export
let place = '';
export
const fetchData = async() => {
	const url = `https://geocode.xyz/${latitude},${longitude}?json=1`;
	console.log(` Latitude: ${latitude} °, Longitude: ${longitude} °`);
	try {
		//fetch function
		await fetch(url, {
			method: 'GET'
		}).then(response => {
			return response.json();
		}).then(data => {
			pickSome(data);
		}).catch(error => {
			console.error('There\'s an error with the API. ', error);
		});
	} catch (err) {
		console.log('Geo_location error: ', err);
	}
}
const pickSome = (data) => {
	try {
		place = data.country + ' , ' + data.city;
	} catch (e) {
		console.log('Error with data from url: ', e);
	}
}