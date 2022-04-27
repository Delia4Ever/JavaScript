import moment from "moment"

const myBirthday = moment("1998-11-19");
const today = moment();
const diff = today.diff(myBirthday, "day");

console.log(`私が生まれて${diff}日経ちました。`);


// import getTriangleArea from "./_sub";

// console.log(getTriangleArea(10,9));

// const now = new Date();
// const today = now.getDate();
// console.log(`今日は${today}日です。`);