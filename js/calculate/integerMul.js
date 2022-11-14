//一位数乘一位数
function mul_1_1(issue) {
  i = rand(2, 9);
  j = rand(2, 9);
  issue.opr[0] = i;
  issue.op[0] = '×';
  issue.opr[1] = j;
  issue.result = issue.opr[0] * issue.opr[1];

  return issue
}