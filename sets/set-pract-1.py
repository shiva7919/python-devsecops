# figure out a way to store 9 and 9.0 as a separate value in the set.

# values = {9, 9.0}
# print(values)
# print(type(values))   


values = {
    ("float", 9.0),
    (int, 9)
}
print(values)

