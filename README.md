## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **Super Galactic Age Calculator**

###### Created March 22nd, 2019.

----------

## Description
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. This application will determine a user's age based on a planet's solar years
including the planets Mercury, Venus, Mars, Jupiter and Saturn. The application will also calculate how many years a user has left on each planet based on average life expectancy.
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
    <td>The application must allow input of a user's date of birth</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Date of Birth</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Acknowledgment that a date of birth was entered</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 02</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>A non-null value for date of birth must be entered</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>A non-null value</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Error message if a value was not entered</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 03</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The value must be a valid date in the past</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Valid date in the past</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Error message if the entered value is not valid</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 04</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the user's age in Earth years</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Valid date in the past</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Earth years</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 05</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Mercury years (1 Mercury year = .24 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Mercury years</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 06</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Venus years (1 Venus year = .62 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Venus years</td>
  </tr>      
</table>

<table>
  <tr>
    <th>Specification 07</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Mars years (1 Mars year = 1.88 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Mars years</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 08</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Jupiter years (1 Jupiter year = 11.86 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Jupiter years</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 09</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Saturn years (1 Saturn year = 29.457 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Age in Saturn years</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 10</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must allow input of a user's life expectancy</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Life Expectancy</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Acknowledgment that a life expectancy was entered</td>
  </tr>
</table>

<table>
  <tr>
    <th>Specification 11</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Mercury</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Life expectancy on Mercury</td>
  </tr>    
</table>

<table>
  <tr>
    <th>Specification 12</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Venus</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Life expectancy on Venus</td>
  </tr>    
</table>

<table>
  <tr>
    <th>Specification 13</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Mars</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Life expectancy on Mars</td>
  </tr>    
</table>

<table>
  <tr>
    <th>Specification 14</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Jupiter</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Life expectancy on Jupiter</td>
  </tr>    
</table>

<table>
  <tr>
    <th>Specification 15</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Saturn</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Life expectancy on Saturn</td>
  </tr>    
</table>

<table>
  <tr>
    <th>Specification 16</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>If the user has surpassed their life expectancy, the application must return the number of years they have lived past their life expectancy</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Number of years lived passed life expectancy</td>
  </tr>    
</table>
<table>
  <tr>
    <th>Specification 17</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must account for leap years in calculating age.</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>
    <td>Output</td>
    <td>Number of leap days to be accounted for</td>
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
1. Clone [this repository](https://github.com/MarkStrickland562/GalacticAgeCalculator):

       $ git clone https://github.com/MarkStrickland562/GalacticAgeCalculator.git

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd GalacticAgeCalculator
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
