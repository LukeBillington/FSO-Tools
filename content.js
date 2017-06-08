var run = setInterval(findModules, 100);
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
var dLong = new Date();
var dMonth = monthNames[dLong.getMonth()];
var date = `${dMonth} ${dLong.getDate()}`;

function findModules() {

  // Module Due Date Highlight
  var dateLocation = document.querySelectorAll('.card--primary .card__column-metadata .card__meta:nth-of-type(2) .card__meta-value');
  for (var i = 0; i < dateLocation.length; i++) {
    var pDate = dateLocation[i].parentElement.parentElement.parentElement;
    if(dateLocation[i].innerText == date) {
      pDate.classList.add('highlight');
    }
  }

  // Assignment Due Date Highlight
  var dateSubLocation = document.querySelectorAll('.card--secondary .card__column-metadata .card__meta:nth-of-type(2) .card__meta-value');
  for (var j = 0; j < dateSubLocation.length; j++) {
    var vSubDate = dateSubLocation[j].parentElement.parentElement.parentElement;
    if(dateSubLocation[j].innerText.toUpperCase() == date) {
      vSubDate.classList.add('highlight');
    }
  }

  // Unlocked Assignment
  var unlocked = document.querySelectorAll('.circle-progress:not(.circle-progress--completed) i.fa-check');
  console.log(unlocked.length);
  for (var k = 0; k < unlocked.length; k++) {
    var icon = unlocked[k];
    icon.classList.remove('fa-check');
    icon.classList.add('fa-unlock');
  }

}
