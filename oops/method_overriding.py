# 13. Method Overriding
# Definition: Method overriding occurs when a child class provides its own 
# implementation of a method inherited from the parent class.

class Animal:

    def speak(self):
        print("Animal sound")


class Dog(Animal):

    def speak(self):
        print("Woof")


dog = Dog()
dog.speak()
# Output:
# Woof
