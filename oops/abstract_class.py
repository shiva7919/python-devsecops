# 14. Abstract Class
# Definition: An abstract class is a class that defines required methods 
# for its child classes. A class containing abstract methods cannot be 
# instantiated directly.

from abc import ABC, abstractmethod


class Vehicle(ABC):

    @abstractmethod
    def start(self):
        pass


class Car(Vehicle):

    def start(self):
        print("Car starts")


car = Car()
car.start()
# Output:
# Car starts
