#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    from calculator_1 import add, sub, mul, div

    numArgs = len(argv)
    if numArgs != 4:
        print("Usage: ./100-my-calculator.py <a> <operator> <b>")
        exit (1)
    
    a = int(argv[1])
    op = argv[2]
    b = int(argv[3])
    match op:
        case '+':
            print("{} {} {} = {}".format(a, op, b, add(a, b)))
        case '-':
            print("{} {} {} = {}".format(a, op, b, sub(a, b)))
        case '*':
            print("{} {} {} = {}".format(a, op, b, mul(a, b)))
        case '/':
            print("{} {} {} = {}".format(a, op, b, div(a, b)))
        case _:
            print("Unknown opeartor. Available operators: +, -, *, /")
            exit(1)
