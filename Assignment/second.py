#Question 2: Average — Longest Substring Without Repeating Characters (Sliding Window)
#Given a string s, find the length of the longest substring that contains no repeating characters.


def longest_substring_without_repeating_characters(s: str) -> int:
    # Keep characters of the current window in a set
    seen = set()
    left = 0          # start of window
    best = 0

    for right, ch in enumerate(s):          # expand window to the right
        while ch in seen:                   # duplicate found → shrink from left
            seen.remove(s[left])
            left += 1
        seen.add(ch)                        # add new unique character
        best = max(best, right - left + 1)   # update longest length

    return best


# Simple test cases
print(longest_substring_without_repeating_characters("abcabcbb"))  # 3
print(longest_substring_without_repeating_characters("bbbbb"))     # 1
print(longest_substring_without_repeating_characters("pwwkew"))    # 3
print(longest_substring_without_repeating_characters(""))          # 0
print(longest_substring_without_repeating_characters("a"))         # 1
