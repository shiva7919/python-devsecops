# Question 3: Hard — 3Sum Target Occurrences (Arrays & Combinatorics)

# Given an array of integers `nums` and an integer `target`, return the number of index
# triplets (i, j, k) such that i < j < k and nums[i] + nums[j] + nums[k] == target.
# Since the answer can be large, return the total count modulo 10**9 + 7.

def three_sum_count(nums, target):
 
    MOD = 10**9 + 7
    count = 0
    valid_triplets = []
 
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            for k in range(j + 1, len(nums)):
 
                if nums[i] + nums[j] + nums[k] == target:
 
                    count += 1
 
                    # Store the indexes and values
                    valid_triplets.append(
                        ((i, j, k), (nums[i], nums[j], nums[k]))
                    )
 
    return count % MOD, valid_triplets
 
 
nums = list(map(int, input("Enter the numbers: ").split()))
target = int(input("Enter the target: "))
 
count, valid_triplets = three_sum_count(nums, target)
 
print("\nValid triplets:")
 
for indexes, values in valid_triplets:
    print(
        "Indexes:", indexes,
        "Values:", values
    )
 
print("\nNumber of valid triplets:", count)
 