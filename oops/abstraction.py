#Abstraction means hiding implementation 
# details and exposing only the required functionality.


from abc import ABC, abstractmethod


class Payment(ABC):

    @abstractmethod
    def pay(self):
        pass


class UPI(Payment):

    def pay(self):
        print("Payment using UPI")


class Card(Payment):

    def pay(self):
        print("Payment using Card")


upi = UPI()
card = Card()

upi.pay()
card.pay()