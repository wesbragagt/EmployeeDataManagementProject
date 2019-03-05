//

// FIREBASE CONFIG
var config = {
  apiKey: "AIzaSyDQ5qTtJ_H8RNDcFST-d7W20xqUnUKAlPE",
  authDomain: "employeedatamanagement-68d33.firebaseapp.com",
  databaseURL: "https://employeedatamanagement-68d33.firebaseio.com",
  projectId: "employeedatamanagement-68d33",
  storageBucket: "employeedatamanagement-68d33.appspot.com",
  messagingSenderId: "887296605908"
};
firebase.initializeApp(config);

var database = firebase.database();

var employee = "";
var role = "";
var startDate = "";
var monthlyRate = 0;

$("#employee-submit-btn").on("click", function(event) {
  event.preventDefault();

  // Object

  employee = $("#employee-name-input")
    .val()
    .trim();
  role = $("#employee-role-input")
    .val()
    .trim();
  startDate = $("#employee-start-date")
    .val()
    .trim();
  monthlyRate = $("#employee-monthly-rate")
    .val()
    .trim();

  console.log(employee, role, startDate, monthlyRate);

  database.ref().push({
    employee: employee,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});
