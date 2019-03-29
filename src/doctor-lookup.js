export default class DoctorLookup {

  getDoctorInfo(searchString) {

    console.log(searchString);

//    let url = "https://api.betterdoctor.com/2016-03-01/doctors?last_name=thomas&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=6402b0aa24731977bbac070145140419";
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
}
