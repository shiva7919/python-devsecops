# nested dictionaries are dictionaries that contain other dictionaries
# it is used to store complex data structures

student = {
    "name" : "John",
    "subjects" : {
        "python" : 90,
        "java" : 80,
        "c++" : 70
    }
}

# access
print(student["subjects"]["python"])

# update
student["subjects"]["python"] = 100
print(student["subjects"]["python"])

# add
student["subjects"]["math"] = 60
print(student["subjects"]["math"])
print(student)

# delete
del student["subjects"]["math"]
print(student["subjects"]["math"])
print(student)


