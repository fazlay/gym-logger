const currentDate = new Date('september 15, 2021 01:15:00');
const date = currentDate.getDate();
const day = currentDate.getDay();

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ------------------------------

const firstDateElement = document.getElementById('first-date');
const secoundtDateElement = document.getElementById('secound-date');
const thirdDateElement = document.getElementById('third-date');
const fouthDateElement = document.getElementById('fourth-date');
const fifthDateElement = document.getElementById('fifth-date');
const sixthDateElement = document.getElementById('sixth-date');
const seventhDateElement = document.getElementById('seventh-date');

const firstDayElement = document.getElementById('first-day');
const secoundtDayElement = document.getElementById('secound-day');
const thirdDayElement = document.getElementById('third-day');
const fouthDayElement = document.getElementById('fourth-day');
const fifthDayElement = document.getElementById('fifth-day');
const sixthDayElement = document.getElementById('sixth-day');
const seventhDayElement = document.getElementById('seventh-day');

firstDateElement.textContent = date;
secoundtDateElement.textContent = date + 1;
thirdDateElement.textContent = date + 2;
fouthDateElement.textContent = date + 3;
fifthDateElement.textContent = date + 4;
sixthDateElement.textContent = date + 5;
seventhDateElement.textContent = date + 6;

firstDayElement.textContent = weekDays[day];
secoundtDayElement.textContent =
  weekDays[day + 1 > 6 ? Math.abs(1 - day) : 1 + day];
thirdDayElement.textContent =
  weekDays[day + 2 > 6 ? Math.abs(2 - day) : 2 + day];
fouthDayElement.textContent =
  weekDays[day + 3 > 6 ? Math.abs(3 - day) : 3 + day];
fifthDayElement.textContent =
  weekDays[day + 4 > 6 ? Math.abs(4 - day) : 4 + day];
sixthDayElement.textContent =
  weekDays[day + 5 > 6 ? Math.abs(5 - day) : 5 + day];
seventhDayElement.textContent =
  weekDays[day + 6 > 6 ? Math.abs(6 - day) : 6 + day];

document
  .getElementById('first-date')
  .addEventListener('click', function (event) {
    const dateValue = event.target.textContent;
    // console.log('date clicked');
    // console.log(dateValue);
  });

// ---------GET DATA------------------------------------

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     const data = JSON.parse(req.responseText);
//     displayData(data);
//     console.log(data);
//   }
// };

// req.open('GET', 'https://api.jsonbin.io/b/613f8ca5aa02be1d44478310', true);
// req.setRequestHeader(
//   'VFy7XrHmq3NJT9zMb8EqumEUEoBIO',
//   '$2b$10$qF.NBkRKLS8cB5wjqiVpE.P'
// );
// req.send();
// --------------GET DATA-------------------------------------

fetch('data.JSON')
  .then((response) => response.json())
  .then((data) => displayData(data));

const displayData = (data) => {
  console.log(data);
  document.getElementById(
    'currentUser'
  ).innerText = `Currently Booked : ${data[0].morning.length}`;
};
//
//
//
// const gymMember = [
//   {
//     morning: [
//       { name: 'UPDATED2 fazlay', sex: 'male' },
//       { name: ' UPDATED2 nafisa', sex: 'Female' },
//       { name: ' UPDATED2c titli', sex: 'Female' },
//     ],
//     noon: [
//       { name: ' UPDATED jalal', sex: 'male' },
//       { name: ' UPDATED hossain', sex: 'male' },
//     ],
//     evening: [{ UPDATEDname: 'tamasa', sex: 'male' }],
//   },
//   {
//     morning: [],
//     noon: [],
//     evening: [],
//   },
// ];
//
// ---------------------------------------------------------------POST DATA--------------------------

// const sendData = () => {
//   console.log('sending Data .......');
//   let req = new XMLHttpRequest();

//   req.onreadystatechange = () => {
//     if (req.readyState == XMLHttpRequest.DONE) {
//       console.log(req.responseText);
//     }
//   };

//   req.open('PUT', 'https://api.jsonbin.io/b/613f8ca5aa02be1d44478310', true);
//   req.setRequestHeader('Content-Type', 'application/json');
//   req.setRequestHeader(
//     'VFy7XrHmq3NJT9zMb8EqumEUEoBIO',
//     '$2b$10$qF.NBkRKLS8cB5wjqiVpE.P'
//   );
//   req.send(JSON.stringify(gymMember));
// };

// ------------------------------------------------------------POST DATA--------------------------

//
/*
 

[
  {
    "morning": [ {"name": "fazlay", "gender": "male" }, { "name": "nafisa", "gender": "Female" },{ "name": "titli", "gender": "Female" }],
    "noon": [{ "name": "jalal", "gender": "male" },{ "name": "hossain", "gender": "male"}],
   "evening": [{ "name": "tamasa", "gender":"male"}]
  },
  {
     "morning": [],
     "noon": [],
     "evening": []
  }

]

//JSON BIN.io ACCESS KEY : https://api.jsonbin.io/b/613badad9548541c29afa06f

//API KEY :$2b$10$qF.NBkRKLS8cB5wjqiVpE.P/VFy7XrHmq3NJT9zMb8EqumEUEoBIO


//X-Master-Key:$2b$10$qF.NBkRKLS8cB5wjqiVpE.P/VFy7XrHmq3NJT9zMb8EqumEUEoBIO













*/
