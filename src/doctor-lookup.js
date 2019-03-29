export default class DoctorLookup {

  getDoctorInfo(searchString) {

    let url = "https://api.betterdoctor.com/2016-03-01/doctors" + searchString + "&user_key=" + `${process.env.exports.apiKey}`;
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
