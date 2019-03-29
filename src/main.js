import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import DoctorLookup from './../src/doctor-lookup.js';

$(document).ready(function() {
  $("#search-form").submit(function(event){
    event.preventDefault();

    $("#doctor-info").hide();
    $("#searching").show();

    let searchString = "";
    let tableText = "";
    let phone = "";

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
      var table = $('#doctor-info');

      table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Phone Number(s)</th><th>Website</th><th>Accepting Patients?</th></tr></thead>');
          body.data.forEach(function(doctor) {
            tableText = '<tr><td>' + doctor.profile.first_name + '</td>' +
                             '<td>' + doctor.profile.last_name + '</td>';
            phone = '<td>';
            doctor.practices.forEach(function(practice) {
              phone += practice.phones[0].number + ' ';
            });
            phone += '</td>';
            tableText += phone;
//                             '<td>' + doctor.practices[0].website + '</td>' +
//                             '<td>' + doctor.practices[0].accepts_new_patients + '</td>' +
            tableText += '</tr>';
            table.append(tableText);
doctor.practices.forEach(function(practice) {
console.log(doctor.profile.first_name + ' ' + doctor.uid);
console.log(practice.phones);
});
          });
          $("#searching").hide();
          $("#doctor-info").show();

// console.log(body.data[0].profile.first_name);
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
});
