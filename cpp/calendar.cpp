 ```cpp
    #include <iostream>
    #include <iomanip>
    using namespace std;

    bool isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    int getFirstDayOfMonth(int year, int month) {
        if (month < 3) { month += 12; year--; }
        int K = year % 100;
        int J = year / 100;
        int h = (1 + (13 * (month + 1)) / 5 + K + K / 4 + J / 4 + 5 * J) % 7;
        int dayOfWeek = (h + 5) % 7;
        return dayOfWeek == 0 ? 6 : dayOfWeek - 1;
    }

    int getDaysInMonth(int year, int month) {
        if (month == 2) return isLeapYear(year) ? 29 : 28;
        return (month == 4 || month == 6 || month == 9 || month == 11) ? 30 : 31;
    }

    void printCalendar(int year, int month) {
        const char* months[] = {"January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"};
        cout << "\n     " << months[month-1] << " " << year << "\n";
        cout << "Su Mo Tu We Th Fr Sa\n";

        int firstDay = getFirstDayOfMonth(year, month);
        int daysInMonth = getDaysInMonth(year, month);

        for (int i = 0; i < firstDay; i++) cout << "   ";
        for (int day = 1; day <= daysInMonth; day++) {
            cout << setw(2) << day << " ";
            if ((firstDay + day) % 7 == 0) cout << "\n";
        }
        cout << "\n";
    }

    int main() {
        int year, month;
        cout << "Enter month (1-12): "; cin >> month;
        cout << "Enter year: "; cin >> year;
        printCalendar(year, month);
        return 0;
    }
