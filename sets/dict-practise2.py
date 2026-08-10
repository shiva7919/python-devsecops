# wap to enter marks of 3 subjects from the user and store them in a set 
# start with an empty dict and add by one . use subject name as a key and marks as a value 

# figure out a way to store 9 and 9.0 as a separate value in the set.
 # Complete program

marks = {}

x = int(input("enter phy : " ))
marks.update({"phy" : x})

y = int(input("enter chem : " ))
marks.update({"chem" : y})

z = int(input("enter bio : " ))
marks.update({"bio" : z})

print(marks)

