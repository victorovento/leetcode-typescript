function romanToInt(s: string): number {
  var str: string[] = s.split('');
  var result: number = 0;
  var romanToNumber = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  for (var i = 0; i < str.length; i++) {
    var first = romanToNumber.get(str[i]);
    var second = romanToNumber.get(str[i + 1]);
    if (second === undefined)
      second = 0;
    if (first >= second) {
      result += first;
    } else {
      result += (second - first);
      i++;
    }
  }
  return result;
};
