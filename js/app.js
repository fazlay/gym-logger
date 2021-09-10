const currentDate = new Date('september 15, 2021 01:15:00');
const date = currentDate.getDate();
const day = currentDate.getDay();

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(day);

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
    console.log('date clicked');
    console.log(dateValue);
  });

fetch('https://jsonkeeper.com/b/E1MG')
  .then((response) => response.json())
  .then((data) => displayData(data));

const displayData = (data) => {
  document.getElementById(
    'currentUser'
  ).innerText = `Currently Booked : ${data[0].morning.length}`;
  console.log(data[0].morning.length);
};
//
//
//
//
//
/*
 const gymMember= [
  {
    morning: [
      { name: 'fazlay', sex: 'male' },
      { name: 'nafisa', sex: 'Female' },
      { name: 'titli', sex: 'Female' },
    ],
    'noon': [
      { name: 'jalal', sex: 'male' },
      { name: 'hossain', sex: 'male' },
    ],
    'evening': [{ 'name': 'tamasa', 'sex': 'male' }],
  },
  {
    'morning': [],
    'noon': [],
    'evening': [],
  }
];

[
  {
    "morning": [
      { "name": "fazlay", "sex": "male" },
      { "name": "nafisa", "sex": "Female" },
      { "name": "titli", "sex": "Female" }
    ],
  "noon": [
      { "name": "jalal", "sex": "male" },
      { "name": "hossain", "sex": "male"}
    ],
    "evening": [{ "name": "tamasa", "sex":"male"}]
  },
  {
    "morning": [],
    "noon": [],
    "evening": []
  }
]

//JSON BIN.io ACCESS KEY : https://api.jsonbin.io/b/613badad9548541c29afa06f

//API KEY :$2b$10$OFvGksPGYZySDS/h0HLo4.CBYjYQmXydM7HMNMglI0fHDWJb7/Cq6
















*/
