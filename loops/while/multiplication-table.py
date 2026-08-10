# wap to print multiplication table of a number n
n = int(input("enter a number: "))

# use while loop    
i = 1
print("using while loop")
while i <= 10:
    print(f"{n} * {i} = {n*i}")
    i += 1 
print("\n")    

# use for loop   
# print("using for loop") 
# for i in range(1, 11):
#     print(f"{n} * {i} = {n*i}")    

