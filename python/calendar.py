import calendar

def print_calendar():
    try:
        month = int(input("Enter month (1-12): "))
        year = int(input("Enter year: "))
        
        print(calendar.month(year, month))
    except ValueError:
        print("ERROR: Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    print_calendar()
