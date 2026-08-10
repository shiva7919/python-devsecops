#Question 2: Average — Longest Substring Without Repeating Characters (Sliding Window)
#Given a string s, find the length of the longest substring that contains no repeating 
#characters


def longest_substring_without_repeating_characters(s: str) -> int:
    char_set = set()
    l = 0
    r = 0
    max_len = 0

    while r < len(s):
        if s[r] in char_set:
            char_set.remove(s[l])
            l += 1
        else:
            char_set.add(s[r])
            max_len = max(max_len, r - l + 1)
            r += 1

    return max_len

# Test cases
print(longest_substring_without_repeating_characters("abcabcbb"))    # Expected: 3
print(longest_substring_without_repeating_characters("bbbbb"))       # Expected: 1
print(longest_substring_without_repeating_characters("pwwkew"))      # Expected: 3
print(longest_substring_without_repeating_characters(""))            # Expected: 0
print(longest_substring_without_repeating_characters("a"))           # Expected: 1