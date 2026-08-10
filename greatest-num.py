# wap to check the greatest number among three numbers
a = int(input("Enter a number: "))
b = int(input("Enter a number: "))
c = int(input("Enter a number: "))

if a > b and a > c:
    print("The greatest number is", a)
elif b > a and b > c:
    print("The greatest number is", b)
else:
    print("The greatest number is", c)
    