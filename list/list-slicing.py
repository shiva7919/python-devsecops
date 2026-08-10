# list slicing 
from _typeshed import _type_checker_internals
marks = [23, 45, 67, 89, 53, 85, 98, 53, 63, 85]

print(marks.index(85))  
print (marks[2:8])
print(marks[0:4])
print(marks[-1])  

# list method 
a = [1,2,3,4,5,6,7,8,9,10]
# list append method 
a.append(11)
print(a)

# List append
list =[2,3,4,5,6]
list.append(7)
print(list)

#list sort
b = [1,2,3,4,5,6,7,8,9,10]
b.sort()
print(b)

#list reverse
c = [1,2,3,4,5,6,7,8,9,10]
c.reverse()
print(c)

#list remove
d = [1,2,3,4,5,6,7,8,9,10]
d.remove(1)
print(d)

# list pop
f = [1,2,3,4,5,6,7,8,9,10]
f.pop()
print(f)

# list delete
g = [1,2,3,4,5,6,7,8,9,10]
del g[1]
print(g)

# list count
h = [1,2,3,4,5,6,7,8,9,10]
print(h.count(1))

# list copy
i = [1,2,3,4,5,6,7,8,9,10]
j = i.copy()
print(j)

