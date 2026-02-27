# Main processing to test leap year function
def main(year):
    leap = is_leap_year(year)
    print(f"{year}: {'Leap year' if leap else 'Not a leap year'}")

from datetime import datetime

def format_datetime(dt=None, date_format="%Y-%m-%d %H:%M:%S"):
    if dt is None:
        dt = datetime.now()
    return dt.strftime(date_format)

def is_leap_year(year):
    year = int(year)
    return (year % 4 == 0) and ((year % 100 != 0) or (year % 400 == 0))

if __name__ == "__main__":
    print(format_datetime())
    print(format_datetime(date_format="%Y年%m月%d日 %H時%M分%S秒"))
    year = format_datetime(date_format="%Y")
    print(f"Current year: {year}")
    main(year)