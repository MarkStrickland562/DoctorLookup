## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **Doctor Looup**

###### Created March 29th, 2019.

----------

## Description
This project uses the BetterDoctor API for providing access to a dataset of medical data that will be used for enabling the end-user to search
for a list of Doctors in the Seattle area based on a medical issue or name of the doctor or location. The data returned will include the first name, last
name, address, phone number, website and whether or not the doctor is accepting new patients. The list of specialties available will be provided in a
dropdown menu. If the API call returns an error, the user will be notified about the error and what the error is. If the search returns no results,
the user will be notified accordingly.

## Known Bugs

* No known bugs.

## User Stories and Specifications

<details>
  <summary>Click Here for Specifications</summary>

  <table>
    <tr>
      <th>Specification 01</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>The application will require that the end-user enter search criteria. If no criteria are entered, the user will be alerted</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>No search criteria</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>A message indicating that search criteria are required</td>
    </tr>
  </table>


  <table>
    <tr>
      <th>Specification 02</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>The application will query the BetterDoctor API for a list of doctors based on last name</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>Name of a doctor</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>Information about that doctor if it exists</td>
    </tr>
  </table>

  <table>
    <tr>
      <th>Specification 03</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>The application will query the BetterDoctor API for a list of doctors based on medical issue</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>A medical issue</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>A list of doctors who can treat the medical issue</td>
    </tr>
  </table>

  <table>
    <tr>
      <th>Specification 03</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>The application will query the BetterDoctor API for a list of doctors based on location</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>A location</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>A list of doctors who are located in that location</td>
    </tr>
  </table>

  <table>
    <tr>
      <th>Specification 04</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>If the search returns data, the list of doctors will include first name, last name, phone number, website, and whether the doctor is accepting new patients</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>Search criteria that will return data</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>Doctor(s) first name, last name, phone number, website, and if the doctor(s) are accepting new patients</td>
    </tr>
  </table>

  <table>
    <tr>
      <th>Specification 05</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>If the API call returns an error, the user will be notified about the error and what the error is.</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>A misspelled version of the API's URL</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>An error number and message</td>
    </tr>
  </table>

  <table>
    <tr>
      <th>Specification 06</th>
      <th></th>
    </tr>
    <tr>
      <td>Behavior</td>
      <td>If the API call returns no data, the user will be notified accordingly</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>A search guaranteed to not return data</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>A message indicating that no doctors were found that meet the search criteria</td>
    </tr>      
  </table>
</details>

## Setup and Use

#### Prerequisites
* bootstrap 4.3.1
* jquery 3.2.1
* popper.js 1.14.7
* babel-core 6.26.0
* babel-loader 7.1.3
* babel-preset-es2015 6.24.1
* clean-webpack-plugin 0.1.18
* css-loader 0.28.10
* eslint 4.18.2
* eslint-loader 2.0.0
* file-loader 3.0.1
* html-webpack-plugin 3.0.6
* jasmine 3.1.0
* jasmine-core 2.99.1
* karma 2.0.0
* karma-chrome-launcher 2.2.0
* karma-cli 1.0.1
* karma-jasmine 1.1.1
* karma-jasmine-html-reporter 0.2.2
* karma-jquery 0.2.2
* karma-sourcemap-loader 0.3.7
* karma-webpack 2.0.13
* style-loader 0.20.2
* uglifyjs-webpack-plugin 1.2.2
* url-loader 1.1.2
* webpack 4.19.1
* webpack-cli 2.0.9
* webpack-dev-server 3.1.0


#### Download the Repository
1. Clone [this repository](https://github.com/MarkStrickland562/DoctorLooup):

       $ git clone https://github.com/MarkStrickland562/DoctorLookup.git

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd DoctorLookup
2. Install the required packages:

       $ npm install
3. Build the application:

       $ npm run build
4. Run the application:

       $ npm run start

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ npm run test

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* Atom (IDE)

## Support and contact details

If you have any feedback or concerns, please contact Mark Strickland.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 [Mark Strickland](https://github.com/MarkStrickland562). All Rights Reserved.
```
MIT License

Copyright (c) 2019 Mark Strickland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
