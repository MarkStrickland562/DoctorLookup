export default class DoctorLookup {

  getDoctorInfo(searchString) {

    let url = "https://api.betterdoctor.com/2016-03-01/doctors" + searchString + "&limit=100" + "&user_key=" + `${process.env.exports.apiKey}`;
console.log(url);
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

  getGeocode(searchString) {
    let url = "http://open.mapquestapi.com/geocoding/v1/address?key=KEY" + searchString;
    url = "http://open.mapquestapi.com/geocoding/v1/address?key=XcbhlLw3WZC8OaYNR5xlIXIqnZWH2SoO&location=Washington,DC";
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
