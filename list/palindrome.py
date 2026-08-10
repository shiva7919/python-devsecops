# wap to check if a given list is palindrome or not

list = [1,2,3,2,1]
list2 = [1,"abc","abc",2,1]

copy_list = list2.copy()
copy_list.reverse()

if copy_list == list:
    print("The list is a palindrome")
else:
    print("The list is not a palindrome")
   