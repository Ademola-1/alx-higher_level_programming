#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    numOfArg = len(argv)
    if numOfArg == 1:
        print("{} arguments.".format(numOfArg - 1))
    elif numOfArg == 2:
        print("{} argument:".format(numOfArg - 1))
    else:
        print("{} arguments:".format(numOfArg - 1))

    for i in range(1, numOfArg):
        print("{}: {}".format(i, argv[i]))
