# wap to find the factorial of a number using for loop with proper code explaination in comments


n = int(input("enter number: "))
factorial = 1
for i in range(1,n+1):
    factorial = factorial * i
print("The factorial of",n,"is",factorial)

# while loop factorial
n = int(input("enter number: "))
factorial = 1
i = 1
while i <= n:
    factorial = factorial * i
    i += 1
print("The factorial of",n,"is",factorial) 
