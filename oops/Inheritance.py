#inheritance = parent/child classes
#parent class = base class
#child class = derived class
#child class inherits properties of parent class

class Animal:

    def eat(self):
        print("Animal eats")


class Dog(Animal):

    def bark(self):
        print("Dog barks")


dog = Dog()

dog.eat()
dog.bark()