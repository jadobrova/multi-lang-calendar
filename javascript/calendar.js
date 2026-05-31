const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getFirstDayOfMonth(year, month) {
    let m = month;
    let y = year;
    if (m < 3) {
        m += 12;
        y--;
    }
    const K = y % 100;
    const J = Math.floor(y / 100);
    const h = (1 + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;
    let dayOfWeek = (h + 5) % 7;
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

function getDaysInMonth(year, month) {
    if (month === 2) return isLeapYear(year) ? 29 : 28;
    return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : 31;
}

function printCalendar(year, month) {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    console.log(`\n     ${months[month-1]} ${year}`);
    console.log("Su Mo Tu We Th Fr Sa");

    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    let line = "";
    for (let i = 0; i < firstDay; i++) line += "   ";
    for (let day = 1; day <= daysInMonth; day++) {
        line += `${day.toString().padStart(2, ' ')} `;
        if ((firstDay + day) % 7 === 0) {
            console.log(line);
            line = "";
        }
    }
    if (line) console.log(line);
    console.log();
}

function main() {
    readline.question("Enter month (1-12): ", monthStr => {
        const month = parseInt(monthStr);
        readline.question("Enter year: ", yearStr => {
            const year = parseInt(yearStr);
            printCalendar(year, month);
            readline.close();
        });
    });
}

main();
