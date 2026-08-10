# functions in python 

# what is function? 
# function is a block of code that performs a specific task. 
# it is used to make the code reusable and organized. 

# how to define a function? 
# def function_name(parameters):
#     """docstring"""
#     function body 
#     return value 

# function call 
# function call is the process of executing a function.
# syntax : 
# function_name(arguments)  
# return value 
# return value is the value that is returned by the function.   
# return value can be anything like int, float, string, list, tuple, dict, etc.    

# example of function with no parameters
# Example 1: Function with NO parameters
def greet():
    """greet the user"""
    print("hello user")

# Example 2: Function WITH parameter
def greet_person(name):
    """greet a specific person"""
    print("hello", name)

# Example 3: Function WITH return value
def add(a, b):
    """add two numbers"""
    return a + b

# Example 4: Function with default parameter value
def greet_with_default(name="User"):
    """greet with a default name if none provided"""
    print(f"hello {name}")

# Calling functions
print("--- Calling greet() ---")
greet()  # No argument needed

print("\n--- Calling greet_person() ---")
greet_person("Aman")  # Argument required

print("\n--- Calling add() ---")
result = add(2, 3)
print("Sum:", result)  # Output: 5

print("\n--- Calling greet_with_default() ---")
greet_with_default()  # Uses default "User"
greet_with_default("Priya")  # Uses provided name



# functions are two types 
# 1. built-in functions 
# 2. user-defined functions 

# example of built-in functions 
print(len("hello"))
print(type(123))
print(id(123))
print(str(123))
print(int("123"))
print(float("123"))
print(bool("hello"))
print(list("hello"))
print(tuple("hello"))
print(dict("hello"))
print(set("hello"))
print(range(10))
print(sum([1,2,3,4,5]))
print(max([1,2,3,4,5]))
print(min([1,2,3,4,5]))
print(sorted([1,2,3,4,5]))
print(reversed([1,2,3,4,5]))
print(len("hello"))    
print(type(123))        

# how to user define a function?

def greet():
    """greet the user"""
    print("hello user")

greet()  # No argument needed

def greet_person(name):
    """greet a specific person"""
    print("hello", name)

greet_person("Aman")  # Argument required

def add(a, b):
    """add two numbers"""
    return a + b

result = add(2, 3)
print("Sum:", result)  # Output: 5

def greet_with_default(name="User"):
    """greet with a default name if none provided"""
    print(f"hello {name}")

greet_with_default()  # Uses default "User"
greet_with_default("Priya")  # Uses provided name