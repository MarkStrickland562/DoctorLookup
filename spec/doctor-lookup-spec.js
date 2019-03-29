import DoctorLookup from './../src/doctor-lookup.js';

describe('DoctorLookup', function() {
  it('should verify if the API is working', function() {
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getAPIHealth();
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.status).toEqual("OK");
    });
  });

  // it('should verify that a bad API call returns an error', function() {
  //   let searchString = "last_name=thomas";
  //   let doctorLookup = new DoctorLookup();
  //   let promise = doctorLookup.getDoctorInfo(searchString);
  //   promise.then(function(statusText) {
  //     let body = JSON.parse(statusText);
  //     console.log(statusText);
  //     console.log(body);
  //     console.log("Here");
  //
  //   });
  //     expect("").toEqual("klkklkl");
  // });

  it('should test if a search on a common last name returns at least one result', function() {
    let searchString = "?last_name=thomas";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.data[0].profile.last_name).toEqual("thomas");
    });
  });

  it('should test if a search on a common first name returns at least one result', function() {
    let searchString = "?first_name=thomas";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.data[0].profile.first_name).toEqual("thomas");
    });
  });

  it('should test if a search on a common full name returns at least one result', function() {
    let searchString = "?name=thomas";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.data[0].profile.name).toEqual("thomas");
    });
  });

  it('should test if a search on a common medical issue returns at least one result', function() {
    let searchString = "?query=fever";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.length).toBeGreaterThan(0);
    });
  });

  it('should test if a search on a location returns at least one result', function() {
    let searchString = "?location=47.608013%2C%20-122.335167";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.length).toBeGreaterThan(0);
    });
  });

})
