# pass statement : it is a null operation. nothing happens when it is executed. it is used as a placeholder
for i in range(5):
    pass
print("done")


# example with a list
numbers = [1,2,3,4,5]
for num in numbers:
    if num % 2 == 0:
        pass
    else:
        print(num)

        
        