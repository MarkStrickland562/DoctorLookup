import GeocodeLookup from './../src/geocode-lookup.js';

export default class DoctorLookup {
  getDoctorInfo(searchString) {
    let url = "";
    return new Promise(function(resolve, reject) {
      if (searchString.includes("&location=")) {
        searchString = searchString.replace(',', '%2C');
        searchString = searchString.replace(' ', '');
        let url = "http://open.mapquestapi.com/geocoding/v1/address?key=" + `${process.env.exports.geoCodeKey}` + searchString;
        let geocodeLookup = new GeocodeLookup(url);
        let promise = geocodeLookup.getGeocode(url);
        promise.then(function(response) {
          let body = JSON.parse(response);
          let lat = body.results[0].locations[0].displayLatLng.lat;
          let lng = body.results[0].locations[0].displayLatLng.lng;
          searchString = "?location=" + lat + "%2C" + lng + "%2C100";
          url = "https://api.betterdoctor.com/2016-03-01/doctors" + searchString + "&limit=100" + "&user_key=" + `${process.env.exports.apiKey}`;
          let request = new XMLHttpRequest();
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
        });
      } else {
        url = "https://api.betterdoctor.com/2016-03-01/doctors" + searchString + "&limit=100" + "&user_key=" + `${process.env.exports.apiKey}`;
        let request = new XMLHttpRequest();
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      }
    });
  }

  getSpecialties() {
    let url = "https://api.betterdoctor.com/2016-03-01/specialties" + "?user_key=" + `${process.env.exports.apiKey}`;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getAPIHealth() {

    let url = "https://api.betterdoctor.com/2016-03-01/info?user_key=" + `${process.env.exports.apiKey}`;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
