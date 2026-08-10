# print the elements of the list using for loop and range function 
list = [1,2,3,4,5]
for i in range(len(list)):
    print(list[i])

# search the element in the list using for loop and range function 
list1 = [1,4,9,16,25]
element = 16
index = -1
for i in range(len(list1)):
    if list1[i] == element:
        index = i
        break
if(index != -1):
    print("Element is present at index",index)
else:
    print("Element is not present")



# range() it is a function returns aseuential numbers. starting from 0 by default, and increement by
