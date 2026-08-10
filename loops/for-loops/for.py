# for loops are used for traversal. for travesing list, tuple, set, string, dict, etc
# example 
list = [1,2,3,4,5]
for i in list:
    print(i)

# take example of veggies list and print them 

veggies = ["potato","tomato","onion","carrot","broccoli"]
for veggie in veggies:
    print(veggie)

# range function in for loop
for i in range(5):
    print(i)

#  take example values in the tuple and print them 
fruits = ("apple","banana","cherry","orange","mango")
for fruit in fruits:
    print(fruit)

# take a string and print them 
str = "shiva sarla"
for char in str:
    if(char == "a"):
        break
    print(char)

# range() it is a function returns aseuential numbers. starting from 0 by default, and increement by 1 by default
# range(stop)
# range(start,stop)
# range(start,stop,step)

# example 
for b in range(1,10): # it prints numbers from 1 to 9  start stop 
    print(b)

for a in range(1,10,2): # it prints numbers from 1 to 9 with increment of 2 start stop step
    print(a)

for c in range(10,1,-1): # it prints numbers from 10 to 2 with decrement of 1 start stop step
    print(c)



    
