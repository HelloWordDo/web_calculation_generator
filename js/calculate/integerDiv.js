//9*9内除法
function div_9_9 (issue) {
  i = rand(1, 9);
  j = rand(1, 9);

  issue.opr[0] = i * j;
  issue.op[0] = '÷';
  issue.opr[1] = j;
  issue.result = i;

  return issue
}

//88以内带余数除法
function remainder_max_88 (issue) {
  i = rand(2, 9);
  j = rand(2, 9);
  m = rand(1, Math.min(i, j) - 1);

  issue.opr[0] = i * j + m;
  issue.op[0] = '÷';
  issue.opr[1] = j;

  issue.result = i + '······' + m;


  return issue
}