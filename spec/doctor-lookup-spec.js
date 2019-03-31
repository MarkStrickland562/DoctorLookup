import DoctorLookup from './../src/doctor-lookup.js';
import GeocodeLookup from './../src/geocode-lookup.js';

describe('DoctorLookup', function() {
  it('should verify if the DoctorLookup API is working', function() {
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getAPIHealth();
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.status).toEqual("OK");
    });
  });

  it('should verify if the Geocode API is working', function() {
    let url = "http://open.mapquestapi.com/geocoding/v1/address?key=" + `${process.env.exports.geoCodeKey}` + "&location=Seattle%2CWA";
    let geocodeLookup = new GeocodeLookup();
    let promise = geocodeLookup.getGeocode(url);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.length).toBeGreaterThan(0);
    });
  });

  it('should verify that a bad API call returns an error', function() {
    let searchString = "dklskldsldks";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
    }, function(error) {
      let errorMsg = `${error.message}`
      expect(errorMsg).toEqual("Not Found");
    });
  });

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

  it('should test if a search on a specialty returns at least one result', function() {
    let searchString = "?query=Sports Vision";
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorInfo(searchString);
    promise.then(function(response) {
      let body = JSON.parse(response);
      expect(body.length).toBeGreaterThan(0);
    });
  });

})
