#Question 1: Easy — Sum of Digits (Recursion)
#Write a recursive function sum_of_digits(n) that takes a non-negative integer n and returns
#the sum of all its individual digits. Do not use loops (for or while) or string conversions.

def sum_of_digits(n):
    if n < 10:
        return n
    else:
        return (n % 10) + sum_of_digits(n // 10)

# Test cases
print(sum_of_digits(123))
print(sum_of_digits(49))
print(sum_of_digits(5))
print(sum_of_digits(0))
