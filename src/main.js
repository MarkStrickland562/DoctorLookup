import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import DoctorLookup from './../src/doctor-lookup.js';

$(document).ready(function() {
  $("#search-form").submit(function(event){
    event.preventDefault();

    let searchString = "";

    if ($('#searchFirstName').val() != "") {
      searchString = "?first_name=" + $('#searchFirstName').val();
    } else if ($('#searchLastName').val() != "") {
      searchString = "?last_name=" + $('#searchLastName').val();
    } else if ($('#searchFullName').val() != "") {
      searchString = "?name=" + $('#searchFullName').val();
    } else if ($('#searchIssue').val() != "") {
      searchString = "?query=" + $('#searchIssue').val();
    } else if ($('#searchLocation').val() != "") {
//     searchString = "?location=" + $('#searchLocation').val();
      searchString = "?location=47.608013%2C%20-122.335167"
    } else {
      alert("Please enter search criteria!");
    }

    let doctorLookup = new DoctorLookup();

    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);

// console.log(body.data[0].profile.first_name);
 console.log(body.data[0].profile.last_name);
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
});
