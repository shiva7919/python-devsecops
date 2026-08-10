# wap to find the sum of first n numbers

n = int(input("Enter number: "))
i = 1
sum = 0
while i <= n:  # Fixed condition
    sum += i
    i += 1     # Increment i (important!)
print(sum)      # it prints the sum of first n numbers 
