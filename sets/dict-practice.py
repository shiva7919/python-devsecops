# store the following word meaning in the python dictionary 
# table : "a piece of furniture ", "list of facts and figures"
# cat : "a small animal"

dictionary = {
    "table" : ["a piece of furniture", "list of facts and figures"],
    "cat" : ["a small animal"]
}
print(dictionary)

# You are given a set of subjects for students. 
# One classroom is required for 1 subject.
# How many classrooms are required for the following list of subjects?
subjects = {"python", "java", "c++", "java", "python", "python", "javascript", 
            "c++", "java", "java", "java", "java", "java", "java", "python", 
            "java", "python", "javascript"}

# Since sets only store unique values, the number of classrooms needed is the length of the set
number_of_classrooms = len(subjects)
print(f"Number of classrooms required: {number_of_classrooms}")

# If you want to see which subjects need classrooms:
print(f"Unique subjects: {subjects}")

# Optional: Create a dictionary with subject names and assigned classroom numbers
classroom_assignment = {
    "python" : 1,
    "java" : 2,
    "c++" : 3,
    "javascript" : 4
}
print(classroom_assignment.keys())  # Note: .keys() method, not .key()


