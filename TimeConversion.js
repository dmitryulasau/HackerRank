//www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  // Write your code here
  let result = [];

  let hours = s.split(":")[0];
  let minutes = s.split(":")[1];
  let seconds = s.split(":")[2].slice(0, 2);

  if (s.includes("PM") && Number(hours) != 12) {
    result.push((Number(hours) + 12).toString(), minutes, seconds);
  } else if (s.includes("PM") && Number(hours) === 12) {
    result.push(Number(hours).toString(), minutes, seconds);
  } else if (s.includes("AM") && Number(hours) != 12) {
    result.push(hours, minutes, seconds);
  } else if (s.includes("AM") && Number(hours) === 12) {
    result.push("0" + (Number(hours) - 12).toString(), minutes, seconds);
  }

  return result.join(":");
}

s = "07:05:45PM";
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("01:00:00AM"));

console.log(parseInt("01:00:00AM"));
