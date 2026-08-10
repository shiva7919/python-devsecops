#  Class Method
# Definition: A class method receives the class as its first argument, 
# conventionally called cls. It is commonly used for alternative constructors 
# or class-level operations.

class Employee:

    company = "ABC"

    @classmethod
    def show_company(cls):
        print(cls.company)


Employee.show_company()
# Output:
# ABC
