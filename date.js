
module.exports = getDate

function getDate(){
    let today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  months: "long"
};

let day = today.toLocaleDateString("en-US",options);

return day;

}

