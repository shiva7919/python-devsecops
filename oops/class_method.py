# Class Method
# Definition: A class method is bound to the class and not the object instance.
# It receives 'cls' as its first parameter and can modify class-level attributes 
# that affect all instances of the class.

class Person:
    name = "anonymous"  # Class attribute

    @classmethod
    def change_name(cls, name):
        cls.name = name  # Modifies the class attribute directly


# Demonstrating @classmethod behavior:
p1 = Person()
print("Before change:")
print("p1.name:", p1.name)         # anonymous
print("Person.name:", Person.name) # anonymous

# Calling @classmethod updates the class attribute for the class and all instances
p1.change_name("Rahul")

print("\nAfter change via @classmethod:")
print("p1.name:", p1.name)         # Rahul
print("Person.name:", Person.name) # Rahul (Class attribute updated!)
