str1 = "my name is shiva"
str2 = 'shiva'
str3 = """ my name is shiva"""
str4 = "shiva \n he is very good boy"   # newline
str5 = "this is used to show how tab \t works in the python"  # tab

print(str4)
print(str5)
print(str1)
print(str2)
print(str3)

# concatenation of strings
str6 = str1 + str2 + str3
print(str6)

# length of string
print(len(str1))

# index of string
print(str1[0])
print(str1[1:-1])
print(str1[-1])
print(str1[0:3:-1])
print(str1[0:-1:1])
print(str1[0:-1:-1])

# slicing of string
str = "hyderabad"

print(str[1:5:2])
print(str[::-1])
print(str[::1])
print(str[1:6:1])

# membership operator
print("shiva" in str1)
print("shiva" not in str1)

#  string functions
# print(str1.count("shiva"))
# print(str.find("derabad"))
# print(str.find("hyderabad"))
# print(str.upper())
# print(str.lower())
# print(str.title())
# print(str.count("derabad"))
# print(str.count("hyderabad"))
# print(str.replace("hyderabad", "hyd"))
# print(str.replace("hyderabad", "hyd", 1))
# print(str.swapcase())
# print(str.find("hyderabad"))
# print(str.find("delhi"))
# print(str.find("delhi", 1))
# print(str.find("delhi", 1, 3))
# print(str.find("delhi", 1, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3, 3, 3, 3, 3))
# print(str.find("delhi", 1, 3, 3, 3, 3, 3, 3, 3, 3, 3))
# print(str.capitalize())
