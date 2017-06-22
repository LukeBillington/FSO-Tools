var run = setInterval(findModules, 100);
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
var dLong = new Date();
var dMonth = monthNames[dLong.getMonth()];
var date = `${dMonth} ${dLong.getDate()}`;

function findModules() {

  // Module Due Date Highlight
  var dateLocation = document.querySelectorAll('.card--primary .card__column-metadata .card__meta:nth-of-type(3) .card__meta-value');
  for (var i = 0; i < dateLocation.length; i++) {
    var pCard = dateLocation[i].parentElement.parentElement.parentElement;
    var pSrc = dateLocation[i].innerText.toUpperCase();
    var pData = pSrc.split(" @ ");
    console.log(pData);
    var pDate = pData[0];
    var pTime = pData[1];
    if(pDate == date) {
      pCard.classList.add('highlight');
    }
  }

  // Assignment Due Date Highlight
  var dateSubLocation = document.querySelectorAll('.card--secondary .card__column-metadata .card__meta:nth-of-type(3) .card__meta-value');
  for (var j = 0; j < dateSubLocation.length; j++) {
    var vSubCard = dateSubLocation[j].parentElement.parentElement.parentElement;
    var vSubSrc = dateSubLocation[j].innerText.toUpperCase();
    var vSubData = vSubSrc.split(" @ ");
    console.log(vSubData);
    var vSubDate = vSubData[0];
    var vSubTime = vSubData[1];
    if(vSubDate == date) {
      vSubCard.classList.add('highlight');
    }
  }

  // Unlocked Assignment
  var unlocked = document.querySelectorAll('.circle-progress:not(.circle-progress--completed) i.fa-check');
  for (var k = 0; k < unlocked.length; k++) {
    var icon = unlocked[k];
    icon.classList.remove('fa-check');
    icon.classList.add('fa-unlock');
  }

}
