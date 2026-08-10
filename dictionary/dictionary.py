# dictionaries are used to store data values in the key : "value" format
# they are unordered
# they are mutable
# keys are unique 
# values are not unique
# keys are immutable
# values are mutable
# keys are case sensitive
# values are case sensitive
# keys are ordered
# values are ordered


info = {
    "key" : "value",
    "name" : "John",
    "age" : 20,
    "gender" : "Male",
    "height" : 5.8,
    # list store in dictionary
    "hobbies" : ["reading", "swimming", "coding"],
    # dictionary store in tuple
    "skills" : ("python", "java", "c++")
}
print(info["skills"])
print(type(info))

info["name"] = "shiva"
print(info)
