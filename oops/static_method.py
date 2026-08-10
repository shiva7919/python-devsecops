# 12. Static Method
# Definition: A static method does not receive self or cls automatically. 
# It behaves like a normal function placed inside a class for organizational purposes.

class Calculator:

    @staticmethod
    def add(a, b):
        return a + b


print(Calculator.add(10, 20))
# Output:
# 30
