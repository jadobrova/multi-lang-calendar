package main

import "fmt"

func isLeapYear(year int) bool {
    return (year%4 == 0 && year%100 != 0) || (year%400 == 0)
}

func getFirstDayOfMonth(year, month int) int {
    m := month
    y := year
    if m < 3 {
        m += 12
        y--
    }
    K := y % 100
    J := y / 100
    h := (1 + (13*(m+1))/5 + K + K/4 + J/4 + 5*J) % 7
    dayOfWeek := (h + 5) % 7
    if dayOfWeek == 0 {
        return 6
    }
    return dayOfWeek - 1
}

func getDaysInMonth(year, month int) int {
    if month == 2 {
        if isLeapYear(year) {
            return 29
        }
        return 28
    }
    if month == 4 || month == 6 || month == 9 || month == 11 {
        return 30
    }
    return 31
}

func printCalendar(year, month int) {
    months := []string{"January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"}
    fmt.Printf("\n     %s %d\n", months[month-1], year)
    fmt.Println("Su Mo Tu We Th Fr Sa")

    firstDay := getFirstDayOfMonth(year, month)
    daysInMonth := getDaysInMonth(year, month)

    for i := 0; i < firstDay; i++ {
        fmt.Print("   ")
    }
    for day := 1; day <= daysInMonth; day++ {
        fmt.Printf("%2d ", day)
        if (firstDay+day)%7 == 0 {
            fmt.Println()
        }
    }
    fmt.Println()
}

func main() {
    var year, month int
    fmt.Print("Enter month (1-12): ")
    fmt.Scan(&month)
    fmt.Print("Enter year: ")
    fmt.Scan(&year)
    printCalendar(year, month)
}
