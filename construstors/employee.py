
#Definition:
#A constructor is used when creating an object to initialize its data. 
# In Python, __init__() is commonly used for initialization. 
# Technically, __new__() creates the object and __init__() initializes it.

#Syntax
class Employee:
    #instance variable
    def __init__(self, name, role):
        self.name = name
        self.role = role

#calling the constuctor
employee1 = Employee("Shiva", "DevOps")

print(employee1.name)
print(employee1.role)


