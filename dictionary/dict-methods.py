# keys() method is used to get the keys of the dictionary
# values() method is used to get the values of the dictionary
# items() method is used to get the key-value pairs of the dictionary
# update() method is used to update the dictionary
# pop() method is used to remove the key-value pair from the dictionary
# popitem() method is used to remove the last key-value pair from the dictionary
# clear() method is used to remove all the key-value pairs from the dictionary
# copy() method is used to copy the dictionary
# fromkeys() method is used to create a new dictionary with the keys from the given iterable and values set to a default value

student = {
    "name" : "John",
    "age" : 20,
    "gender" : "Male",
    "height" : 5.8,
    "hobbies" : ["reading", "swimming", "coding"],
    "skills" : ("python", "java", "c++")
}

print(student.keys())       # list of keys
print(student.values())     # list of values
print(student.items())      # list of key-value pairs
print(student.update())     # update the dictionary
print(student.pop())        # remove the key-value pair from the dictionary
print(student.popitem())    # remove the last key-value pair from the dictionary
print(student.clear())      # remove all the key-value pairs from the dictionary
print(student.copy())       # copy the dictionary
print(student.fromkeys())   # create a new dictionary with the keys from the given iterable and values set to a default value
print(student.get("name"))  # get the value of the key
