
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let thatDate = new Date(dateString);
    return dayName[thatDate.getDay()];
}


(function main() {
    const date = ["10/11/2009", "11/10/2010"];
    
    for (let i = 0; i < date.length; i++) {

        console.log(getDayName(date[i]));
    }
})();