# 問1
str1 = "stressed"
ans1 = str1[::-1]
print(ans1)

# 問2
str2 = "パタトクカシーー"
ans2 = str2[::2]
print(ans2)

# 問3
str3 = "パトカー"
str4 = "タクシー"
ans3 = "".join([i + j for i, j in zip(str3, str4)])
print(ans3)