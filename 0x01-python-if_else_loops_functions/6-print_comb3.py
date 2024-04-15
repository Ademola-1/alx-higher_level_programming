#!/usr/bin/python3
for tens_digit in range(10):
    for units_digit in range(tens_digit + 1, 10):
        num = tens_digit * 10 + units_digit
        print("{:02d}".format(num), end=', ' if num < 89 else '\n')
