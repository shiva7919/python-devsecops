#Polymorphism means one interface/method
# can have different behavior depending on the object.
class Dog:

    def speak(self):
        print("Woof")


class Cat:

    def speak(self):
        print("Meow")


dog = Dog()
cat = Cat()

dog.speak()
cat.speak()