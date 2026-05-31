using System;

class Calendar {
    static bool IsLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    static int GetFirstDayOfMonth(int year, int month) {
        if (month < 3) { month += 12; year--; }
        int K = year % 100;
        int J = year / 100;
        int h = (1 + (13 * (month + 1)) / 5 + K + K / 4 + J / 4 + 5 * J) % 7;
        int dayOfWeek = (h + 5) % 7;
        return dayOfWeek == 0 ? 6 : dayOfWeek - 1;
    }

    static int GetDaysInMonth(int year, int month) {
        if (month == 2) return IsLeapYear(year) ? 29 : 28;
        return (month == 4 || month == 6 || month == 9 || month == 11) ? 30 : 31;
    }

    static void PrintCalendar(int year, int month) {
        string[] months = {"January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"};
        Console.WriteLine($"\n     {months[month-1]} {year}");
        Console.WriteLine("Su Mo Tu We Th Fr Sa");

        int firstDay = GetFirstDayOfMonth(year, month);
        int daysInMonth = GetDaysInMonth(year, month);

        for (int i = 0; i < firstDay; i++) Console.Write("   ");
        for (int day = 1; day <= daysInMonth; day++) {
            Console.Write($"{day,2} ");
            if ((firstDay + day) % 7 == 0) Console.WriteLine();
        }
        Console.WriteLine();
    }

    static void Main() {
        Console.Write("Enter month (1-12): ");
        int month = int.Parse(Console.ReadLine());
        Console.Write("Enter year: ");
        int year = int.Parse(Console.ReadLine());
        PrintCalendar(year, month);
    }
}
