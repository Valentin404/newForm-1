// Calculator

const depositRange = document.querySelector(".control__dep");
const daysRange = document.querySelector(".control__days");
const resultSum = document.querySelector(".output__earn");
const resultRev = document.querySelector(".output__revenue");
const resultProf = document.querySelector(".output__profitability");
const euroCounty = [
  "AT",
  "CH",
  "DE",
  "LI",
  "LU",
  "BE",
  "CZ",
  "ES",
  "FR",
  "GR",
  "HU",
  "IT",
  "NL",
  "PL",
  "PT",
  "RO",
  "RS",
  "HR",
  "SK",
  "SL",
  "DK",
  "FI",
  "NO",
  "SE",
];

function updateAllInputResults(data) {
  const sum = depositRange.value;
  const days = daysRange.value;
  let coeficient = days / 12;
  let profitability = sum / 4;

  if (days > 30) {
    coeficient *= 8;
    profitability *= 2;
  }

  coeficient++;

  resultSum.innerText = `CAD${Math.round(sum * 8 * coeficient)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  resultRev.innerText = `CAD${(Math.round(sum * 8 * coeficient) - sum)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  resultProf.innerText = `${Math.round(profitability)}%`;
}
$(".control__dep").ionRangeSlider({
  min: 350,
  max: 10000,
  from: 5250,
  prefix: "CAD",
  onChange: function (data) {
    updateAllInputResults(data);
  },
});

$(".control__days").ionRangeSlider({
  min: 1,
  max: 90,
  from: 45,
  postfix: " days",
  onChange: function (data) {
    updateAllInputResults(data);
  },
});
