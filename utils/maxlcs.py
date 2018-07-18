#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 求最大回文子序列 maxlcs。 如 abcda -> aba/aca/ada; google -> goog
import sys

def maxlcs(strs):
    if strs==None or len(strs)==0:
        return 0
    lens = len(strs)
    dp =[0] *lens
    dp[0] = 1 if strs[0] == strs[lens-1] else 0
    for i in range(lens):
        pre = dp[0]
        dp[0] = max(dp[0],1 if strs[i] == strs[lens-1] else 0)
        print(dp)
        for j in range(1,lens):
            cur = dp[j]
            dp[j] = max(dp[j],dp[j-1])
            if strs[i] == strs[lens-1-j]:
                dp[j] = max(dp[j],pre+1)
            pre = cur
    return dp[lens-1]


if __name__ == '__main__':
    while True:
        line = sys.stdin.readline().strip()
        if not line:
            break
        result = maxlcs(line)
        print(result)
