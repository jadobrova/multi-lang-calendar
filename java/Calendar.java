import java.util.Scanner;

public class Calendar {
    static boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    static int getFirstDayOfMonth(int year, int month) {
        if (month < 3) { month += 12; year--; }
        int K = year % 100;
        int J = year / 100;
        int h = (1 + (13 * (month + 1)) / 5 + K + K / 4 + J / 4 + 5 * J) % 7;
        int dayOfWeek = (h + 5) % 7;
        return dayOfWeek == 0 ? 6 : dayOfWeek - 1;
    }

    static int getDaysInMonth(int year, int month) {
        if (month == 2) return isLeapYear(year) ? 29 : 28;
        return (month == 4 || month == 6 || month == 9 || month == 11) ? 30 : 31;
    }

    static void printCalendar(int year, int month) {
        String[] months = {"January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"};
        System.out.printf("\n     %s %d\n", months[month-1], year);
        System.out.println("Su Mo Tu We Th Fr Sa");

        int firstDay = getFirstDayOfMonth(year, month);
        int daysInMonth = getDaysInMonth(year, month);

        for (int i = 0; i < firstDay; i++) System.out.print("   ");
        for (int day = 1; day <= daysInMonth; day++) {
            System.out.printf("%2d ", day);
            if ((firstDay + day) % 7 == 0) System.out.println();
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter month (1-12): ");
        int month = scanner.nextInt();
        System.out.print("Enter year: ");
        int year = scanner.nextInt();
        scanner.close();
        printCalendar(year, month);
    }
}
