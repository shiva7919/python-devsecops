# arithmetic operators
a = 2
b = 3
print(a+b)  #addition
print(a-b)  #subtraction
print(a*b)  #multiplication
print(a/b)  #division
print(a%b)  #modulo -- reminder 
print(a**b) #exponentiation -- power of a number
print(a//b) #floor division -- division without decimal

# relational operators
c = 50
d = 45
print(c==d)  #equal to = false
print(c!=d)  #not equal to = true
print(c>d)   #greater than = true
print(c<d)   #less than = false
print(c>=d)  #greater than or equal to = true
print(c<=d)  #less than or equal to = false

# assignment operators
e =10
e = e + 5
print(e)  #15
e += 5
print("e:",e)  #20

e -= 5
print("e:",e)  #15

e *= 5
print("e:",e) #75

e /= 5
print("e:",e) #15.0

e %= 5
print("e:",e) #0.0

e **= 5
print("e:",e) #0.0

e //= 5
print("e:",e) #0.0

# logical operators
print(not True)   # false
print(not False)  # true

val1 = True
val2 = True
print(val1 and val2) # true
val3 = False
val4 = False
print(val3 or val4)  # false
val5 = True
val6 = False
print(val5 or val6)  # true
val7 = True
print(not val7)   # false
val8 = False
print(not val8)   # true


# type conversion
x = int(45.8)
print(x) # 45
y = float(45)
print(y) # 45.0
num_str = "100"
z = int(num_str)
print(z) # 100


# name = input("Enter your name: ")
# age_str = input("Enter your age: ")
# age = int(age_str)
# print("Name:", name, "Type:", type(name))
# print("Age:", age, "Type:", type(age))
