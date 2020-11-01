let d = new Date();
//
// get day
let day = d.getDate();
//get month

//
// int month
let inTmonth = d.getMonth();
// get year
let year = d.getFullYear();
// right now we will get hours minutes abd seconds
//###########################################################################//
let hour = d.getHours();
// get minutes
let minutes = d.getMinutes();
// get seconds
let seconds = d.getSeconds();
// get miliseconds
let miliseconds = d.getMilliseconds();
/// let sort it out with functions

// first of all we will get unike key

export const getKeySentAt = () => {
  let d = new Date();
  let year = d.getFullYear();
  let inTmonth = d.getMonth();
  let day = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let miliseconds = d.getMilliseconds();

  let h = 0;
  let m = 0;
  let s = 0;
  let ms = 0;
  /// day and year
  let da = 0;
  let mo = 0;

  if (hour < 10) {
    h = "0" + h;
  } else {
    h = hour;
  }
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }

  if (miliseconds < 10) {
    ms = "0" + miliseconds;
  } else {
    ms = miliseconds;
  }

  if (inTmonth < 10) {
    mo = "0" + inTmonth;
  } else {
    mo = inTmonth;
  }

  if (day < 10) {
    da = "0" + day;
  } else {
    da = day;
  }

  let key = year + "" + mo + "" + da + "" + h + "" + m + "" + s + "" + ms;
  let uniKey = parseInt(key);
  return uniKey;
};

//console.log(getKeySentAt(year, inTmonth, day, hour,  minutes, seconds, miliseconds  ))

export const getDayMonthYear = () => {
  let d = new Date();
  let day = d.getDate();
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let stringMonth = month[d.getMonth()];
  let year = d.getFullYear();

  let dayMonthYr;
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(stringMonth[i]);
  }
  let mon = arr.join(" ");
  dayMonthYr = day + " " + mon.replace(/\s/g, "") + " " + year;

  return dayMonthYr;
};

//console.log(getDayMonthYear(day, stringMonth, year  ))

export const getHoMiSe = () => {
  let d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  let h = 0;
  let min = 0;
  let sec = 0;

  if (hour < 10) {
    h = "0" + hour;
  } else {
    h = hour;
  }
  if (minutes < 10) {
    min = "0" + minutes;
  } else {
    min = minutes;
  }
  if (seconds < 10) {
    sec = "0" + seconds;
  } else {
    sec = seconds;
  }

  let time = h + ":" + min + ":" + sec;
  return time;
};

//console.log(getHoMiSe(hour, minutes, seconds ))

export const sentAt = () => {
  let d = new Date();
  let year = d.getFullYear();
  let inTmonth = d.getMonth();
  let day = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let miliseconds = d.getMilliseconds();

  let da = 0;
  let m = 0;
  let hor = 0;
  let min = 0;
  let sec = 0;
  if (day < 10) {
    da = "0" + day;
  } else {
    da = day;
  }

  if (inTmonth < 10) {
    m = "0" + inTmonth;
  } else {
    m = inTmonth;
  }

  if (hour < 10) {
    hor = "0" + hour;
  } else {
    hor = hour;
  }

  if (minutes < 10) {
    min = "0" + minutes;
  } else {
    min = minutes;
  }

  if (seconds < 10) {
    sec = "0" + seconds;
  } else {
    sec = seconds;
  }

  let time = da + "/" + m + "/" + year + ", " + hor + ":" + min + ":" + sec;
  return time;
};
