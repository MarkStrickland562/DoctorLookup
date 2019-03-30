import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import DoctorLookup from './../src/doctor-lookup.js';

let clearSearch = function() {
  $("#searchFirstName").val('');
  $("#searchLastName").val('');
  $("#searchFullName").val('');
  $("#searchIssue").val('');
  $("#searchLocation").val('');
}

let formatPhone = function(phoneNumber) {
  if (phoneNumber.length === 10) {
    return '(' + phoneNumber.substring(0,3) + ') ' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6,10);
  }
  else {
    return phoneNumber;
  }
}

let validateSearchCriteria = function() {
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
  return searchString;
}

let getDoctorData = function(searchString) {

  let tableText = "";
  let phone = "";
  let website = "";
  let accepting = "";
  let table="";

  let doctorLookup = new DoctorLookup();
  let promise = doctorLookup.getDoctorInfo(searchString);
  promise.then(function(response) {
    let body = JSON.parse(response);
    table = $('#table-data');
    tableText = '<table id="table-rows"><thead class="table-header"><tr><th>Photo</th><th>First Name</th><th>Last Name</th><th>Phone Number(s)</th><th>Website</th><th>Accepting Patients?</th></tr></thead>';
    body.data.forEach(function(doctor) {
      tableText += '<tr>';
      if (doctor.profile.image_url != undefined) {
        if (doctor.profile.image_url.includes('general_doctor_male.png') ||
            doctor.profile.image_url.includes('general_doctor_female.png')) {
          tableText += '<td>No image available</td>';
        }
        else {
        tableText += '<td><img src="' + doctor.profile.image_url + '"></td>';
        }
      }
      else {
        tableText += '<td>No image available</td>';
      }
      tableText += '<td>' + doctor.profile.first_name + '</td>' +
                   '<td>' + doctor.profile.last_name + '</td>';
      phone = '<td>';
      website = '<td>';
      accepting = '<td>';
      doctor.practices.forEach(function(practice) {
        practice.phones.forEach(function(thephone) {
          phone += formatPhone(thephone.number) + '<br>';
        });
        if (practice.website != undefined) {
          website += '<a href="' + practice.website + '">' + practice.website + '</a>';
        }
      });
      if (doctor.practices[0] != undefined && doctor.practices[0].accepts_new_patients != undefined) {
        if (doctor.practices[0].accepts_new_patients === true) {
          accepting += 'Yes';
        } else {
          accepting += 'No';
        }
      } else {
        accepting += 'No';
      }
      phone += '</td>';
      website += '</td>';
      accepting += '</td>';
      tableText += phone;
      tableText += website;
      tableText += accepting;
      tableText += '</tr>';
    });
    table.append(tableText);
    tableText += '</table>';
    let doctorsCount = body.data.length;
    if (doctorsCount > 0) {
      if (doctorsCount === 100) {
        $("#doctorCount").text(doctorsCount + " (Note: Results are limited to 100)");
      }
      else {
        $("#doctorCount").text(doctorsCount);
      }
      $("#searching").hide();
      $("#doctor-info").show();
      $("#table-data").show();
    } else {
      $("#searching").hide();
      $("#nodata").show();
    }

  // console.log(body.data[0].profile.first_name);
  // console.log(body.data[0].profile.last_name);
  // console.log(body.data[0].practices[0].visit_address.street);
  // console.log(body.data[0].practices[0].visit_address.city);
  // console.log(body.data[0].practices[0].visit_address.state);
  // console.log(body.data[0].practices[0].visit_address.zip);
  // console.log(body.data[0].practices[0].accepts_new_patients);
  // console.log(body.data[0].practices[0].phones[0].number);
  // console.log(body.data[0].practices[0].website);
  //console.log(body.data[0].profile.image_url);
  // console.log(body.data[0].uid);
  }, function(error) {
    $("#searching").hide();
    $("#error").show();
    $('#error').text(`There was an error processing your request: ${error.message}`);
  });
}

let getSpecialties = function() {

  let specialties = new DoctorLookup();
  let promise = specialties.getSpecialties();
  promise.then(function(response) {
    let body = JSON.parse(response);
console.log(body);
  });
}

$(document).ready(function() {
  getSpecialties();
  $("#search-form").submit(function(event){
    event.preventDefault();

    $("#table-rows").remove();
//    $("#table-data").hide();
    $("#doctor-info").hide();
    $("#searching").show();
    $("#nodata").hide();

    let searchString = validateSearchCriteria();
    clearSearch();
    getDoctorData(searchString);
  });
});
