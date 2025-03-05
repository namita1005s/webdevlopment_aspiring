//Date 
// 1. Current Date and Time : const now = new Date();
// 2. Specific Date: const specificDate = new Date('2025-03-04');
// 3. Date from String: const dateFromString = new Date('2025-03-04T14:10:58');
// 4. Using Timestamps: const fromTimestamp = new Date(1630839058721);

// Date & Time Components
// 1. const now = new Date();
// 2. console.log(now.getFullYear()); // 2025
// 3. console.log(now.getMonth()); // 2
// 4. console.log(now.getDate()); // 4
// 5. console.log(now.getDay()); // 2
// 6. console.log(now.getHours()); // 20
// 7. console.log(now.getMinutes()); // 6
// 8. console.log(now.getSeconds()); // 7
// 9. console.log(now.getMilliseconds()); // 474

//JavaScript Date Formats
// Type	          Example
// ISO Date	      "2015-03-25" (The International Standard)
// Short Date	  "03/25/2015"
// Long Date	  "Mar 25 2015" or "25 Mar 2015"

// Setting Date Components
//1. const d = new Date();
//2. d.setFullYear(2024);
//3. d.setMonth(4);
//4. d.setDate(28);
//5. d.setHours(18);
//6. d.setMinutes(30);
//7. d.setSeconds(0);

//console.log(d);  //modified date

// Formatting Dates
//console.log(d.toString()); //Tue May 28 2024 18:30:00 GMT+0530 (India Standard Time)
//console.log(d.toDateString()); //Sun May 28 2024
//console.log(d.toISOString()); //2024-05-28T13:00:00.000Z
//console.log(d.toUTCString()); //Tue, 28 May 2024 13:00:00 GMT
//console.log(d.toLocaleString()); //5/28/2024, 6:00:00 PM
//console.log(d.toLocaleDateString()); //5/28/2024
//console.log(d.toLocaleTimeString()); //6:00:00 PM

//Another Format
//new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Date Calculation
//const date1 = new Date("2025-03-04");
//const date2 = new Date("2025-03-05");
//const diff = date2 - date1; // DIFFERENCE IN MILLISECONDS
//date.setDate(date.getDate() + 1); // ADD 1 DAY
//date.setDate(date.getDate() - 1); // SUBTRACT 1 DAY
//console.log(date); // 2025-03-05T00:00:00.000Z

//countdown timer



const d = new Date();
console.log(d); // 2025-03-04T14:10:58.018Z
console.log(d.toDateString()); // Tue Mar 04 2025
console.log(d.toString()); //Tue Mar 04 2025 19:43:19 GMT+0530 (India Standard Time)
console.log(d.toISOString()); // 2025-03-04T14:14:25.721Z
console.log(typeof d); // object

// Question is time a kase raha h? 
// Answer is ye date object humara hardware time le raha h
//a JavaScript Date object stores a specific date and time. It counts milliseconds from January 1, 1970, UTC (called the epoch).
// 1 jan 1970 s pahle ka time negative hoga and 1 jan 1970 k baad ka time positive hoga

console.log(d.getDate()); // 4
console.log(d.getDay()); // 2
// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
console.log(d.getMonth()); // 2
console.log(d.getFullYear()); // 2025
console.log(d.getHours()); // 20
console.log(d.getMinutes()); // 6
console.log(d.getSeconds()); // 7
console.log(d.getMilliseconds()); // 474
console.log(d.getTime()); // 1741099164207
const now = Date.now();
console.log(now); // 1741099164225
//many more

// const de = new Date("2022-10-20");
// console.log(de); // 2022-10-20T00:00:00.000Z
// console.log(de.toDateString()); // Thu Oct 20 2022

// const dat = new Date("2015-03-25T10:10:12");
// console.log(dat.toDateString()); // Wed Mar 25 2015
// // year /month /date /hours /minutes /seconds /milliseconds
// //Number : 0 based start hoga
// // example-
// const date1 = new Date(2024, 4, 28);
// console.log(date1); // 2024-05-27T18:30:00.000Z
// // 0 based h to month 4 hoga
// // 0 based h to date 28 hoga
// //String : 1 based start hoga
// // example-
// const date2 = new Date("2024-05-28");
// console.log(date2); // 2024-05-27T18:30:00.000Z
// // 1 based h to month 5 hoga

//setting date components
const d1 = new Date();
d1.setFullYear(2024);
d1.setMonth(4);
// 0-jan, 1-feb, 2-mar, 3-apr, 4-may, 5-jun, 6-jul, 7-aug, 8-sep, 9-oct, 10-nov, 11-dec
d1.setDate(28);
console.log(d1); // 2024-05-27T18:30:00.000Z
console.log(d1.toString()); // Tue May 28 2024 00:00:00 GMT+0530 (India Standard Time)
console.log(d1.toLocaleDateString());// 28/5/2024
console.log(d1.toLocaleString());// 28/5/2024, 12:00:00 AM

//Dtae Calculation
const date4 = new Date();
const date5 = new Date("2025-03-05");

console.log(date5 - date4); // 86400000 milisecond m answer aayega
console.log(date5>date4); // true
console.log(date5<date4); // false
console.log(date5==date4); // false
console.log(date5.getTime() === date4.getTime()); // false
//getTime() method returns the number of milliseconds since January 1, 1970
// difference comes in milliseconds

//countdown timer
//countdwon timer for next olmpics 2028
// days, hours, minutes, seconds
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2 - date1;
console.log(date); //105959781148 
// kitna milisecond baki h
// 1 day = 1000 milisecond * 60 seconds * 60 minutes * 24 hours
// 1 hour = 1000 milisecond * 60 seconds * 60 minutes
// 1 minute = 1000 milisecond * 60 seconds
const days = Math.floor(date / (1000 * 60 * 60 * 24)); 
// 1000 milisecond * 60 seconds * 60 minutes * 24 hours
// 105959781148 / (1000 * 60 * 60 * 24) = 1227.5
// Math.floor(1227.5) = 1227
const hour = Math.floor((date/(1000 * 60 * 60))%24);
const minute = Math.floor((date/(1000 * 60))%60);
const second = Math.floor((date/1000)%60);
console.log(`Next Olympics will be in: ${days} days, ${hour} hours, ${minute} minutes, ${second} seconds`);
console.log(days);
console.log(hour);
console.log(minute);
console.log(second);