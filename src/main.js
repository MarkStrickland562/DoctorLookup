import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import DoctorLookup from './../src/doctor-lookup.js';

$(document).ready(function() {

  let nameSearch = "thomas";
  let issueSearch = "";
  let locationSearch = "";
  let searchString = "";

  if (nameSearch != "") {
    searchString = "?name=" + nameSearch;
  } else if (issueSearch != "") {
    searchString = "?query=" + issueSearch;
  } else {
    searchString = "?location=47.608013%2C%20-122.335167" + locationSearch;
  }

  let doctorLookup = new DoctorLookup();

  let promise = doctorLookup.getDoctorInfo(searchString);
  promise.then(function(response) {
    let body = JSON.parse(response);

console.log(body.data[0].profile.first_name);
// console.log(body.data[0].profile.last_name);
// console.log(body.data[0].practices[0].visit_address.street);
// console.log(body.data[0].practices[0].visit_address.city);
// console.log(body.data[0].practices[0].visit_address.state);
// console.log(body.data[0].practices[0].visit_address.zip);
// console.log(body.data[0].practices[0].accepts_new_patients);
// console.log(body.data[0].practices[0].phones[0].number);
// console.log(body.data[0].practices[0].website);
// console.log(body.data[0].profile.image_url);
// console.log(body.data[0].uid);

// website:  doctor.
  });
});
