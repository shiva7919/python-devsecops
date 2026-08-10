# set methods .....
# add()
# update()
# remove()
# discard()
# pop()
# clear()
# union()
# intersection()
# difference()
# symmetric_difference()
# issubset()
# issuperset()
# isdisjoint()

# set add example
my_set = {1,2,3}
my_set.add(4)
print(my_set)

# set doesnt allow duplicate elements
my_set = {1,2,3}
my_set.add(1)
print(my_set)



# set update example
my_set = {1,2,3}
my_set.update([4,5,6])
print(my_set)
# updates the set with the elements from another iterable   

# set remove example
my_set = {1,2,3}
my_set.remove(4)
print(my_set)
# removes the element if it is present in the set

# set discard example
my_set = {1,2,3}
my_set.discard(4)
print(my_set)
# removes the element if it is present in the set

# set pop example
my_set = {1,2,3}
my_set.pop()
print(my_set)
# removes random element from the set

# set clear example
my_set = {1,2,3}
my_set.clear()
print(my_set)
# remove all elements from the set

# set union example
my_set = {1,2,3}
my_set.union({4,5,6})
print(my_set)  
# combines two sets or more sets


# set intersection example 
my_set = {1,2,3}
my_set.intersection({4,5,6})
print(my_set)
# combines common elements of two sets

# set difference example
my_set = {1,2,3}
my_set.difference({4,5,6})
print(my_set)
# combines unique elements of two sets


# set symmetric_difference example
my_set = {1,2,3}
my_set.symmetric_difference({4,5,6})
print(my_set)
# combines unique elements of two sets


# set issubset example
my_set = {1,2,3}
my_set.issubset({4,5,6})
print(my_set)
# checks if the set is subset of another set


# set issuperset example
my_set = {1,2,3}
my_set.issuperset({4,5,6})
print(my_set)
# checks if the set is superset of another set


# set isdisjoint example
my_set = {1,2,3}
my_set.isdisjoint({4,5,6})
print(my_set)
# checks if the set is disjoint of another set

# frozenset
frozen_set = frozenset({1,2,3})
print(frozen_set)
print(type(frozen_set))
# 