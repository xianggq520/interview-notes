# 匹配文本中的日期，格式2020年10月01日
import re
from datetime import datetime

# 示例文本
text = "这是一个包含日期的文本：2021年6月1日，2020年12月31日。还有一个日期：2022年1月1日。2022年月1日。2022年1日。"

# 使用正则表达式匹配日期
date_pattern = re.compile(r'(\d{,4})[年\-/.](\d{,2})[月\-/.](\d{,2})日?')
dates = date_pattern.findall(text)

# 将日期字符串转换为datetime对象
# date_objects = [datetime.strptime(date, '%Y-%m-%d') for date in dates]
date_strs = [date for date in dates]

# 打印匹配到的日期
for date in date_strs:
   print(date)

print("@@@")

match_Object = re.search(date_pattern, text)
print(match_Object.group(1))
print('abc'[1])

s = 'abc'
for i in range(len(s)):
    print(s[i])


s1 = s.ljust(5, "0")
print(s1)

s2 = s1.rjust(9, "0")
print(s2)