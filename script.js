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

  //   console.log(employee, role, startDate, monthlyRate);

  database.ref().push({
    employee: employee,
    role: role,
    startDate: moment(startDate).format("X"),
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().on(
  "child_added",
  function(childSnapshot) {
    console.log(childSnapshot.val().employee);
    console.log(childSnapshot.val().dateAdded);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().startDate);

    var cSVal = childSnapshot.val();
    var unixDate = moment.unix(cSVal.startDate);

    var newTr = $("<tr>");
    newTr
      .append("<td>" + cSVal.employee + "</td>")
      .append("<td>" + cSVal.role + "</td>")
      .append("<td>" + unixDate.format("MM/DD/YYYY") + "</td>")
      .append("<td>" + moment().diff(unixDate, "months") + "</td>")
      .append("<td>" + cSVal.monthlyRate + "</td>")
      .append(
        "<td>" +
          parseInt(moment().diff(unixDate, "months")) *
            parseInt(cSVal.monthlyRate) +
          "</td>"
      );
    $(".employee-data").append(newTr);
  },
  function(errorObject) {
    alert(errorObject.data);
  }
);

// WORK WITH MOMENT JS  and calculate months working since employee started working

alert(moment().format("MM/DD/YYYY"));
