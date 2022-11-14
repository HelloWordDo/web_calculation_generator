//20以内退位减法
function abdicate_20(issue) {

  var i, j;
  i = rand(10, 18);
  j = rand(i % 10 + 1, 9);
  issue.opr[0] = i;
  issue.op[0] = '-';
  issue.opr[1] = j;
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//两位数退位减法
function subc_2_2(issue) {

  var i, j;
  i = rand(2, 9);
  j = rand(0, 8);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '-';
  issue.opr[1] = rand(1, i - 1) * 10 + rand(j + 1, 9);
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//两位数不退位减
function sub_2_2(issue) {

  var i, j;
  i = rand(2, 9);
  j = rand(1, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '-';
  do {
    sub = rand(1, i) * 10 + rand(0, j)
  } while (issue.opr[0] == sub || issue.opr[0] - sub < 4)

  issue.opr[1] = sub;
  issue.result = issue.opr[0] - issue.opr[1];
  return issue;
}

//两位数减一位数
function sub_2_1(issue) {

  var i, j;
  i = rand(1, 9);
  j = rand(0, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '-';
  issue.opr[1] = rand(4, 9);
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//100减一位数
function sub_100_1(issue) {

  issue.opr[0] = 100;
  issue.op[0] = '-';
  issue.opr[1] = rand(4, 9);
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//100减两位数
function sub_100_2(issue) {

  var i, j;
  i = rand(1, 9);
  j = rand(0, 9);
  issue.opr[0] = 100;
  issue.op[0] = '-';
  issue.opr[1] = i * 10 + j;
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//减法连续<100
function sub_cont_100(issue) {
  issue.result = 0
  issue.op_n = 2;
  while (issue.result < 1) {

    i = rand(4, 9);
    j = rand(0, 9);
    issue.opr[0] = i * 10 + j;
    issue.op[0] = '-';

    m = rand(1, i - 1)
    n = rand(0, 9)
    issue.opr[1] = m * 10 + n;
    issue.op[1] = '-';

    p = rand(1, i - m - 1);
    q = rand(0, 9);
    if (i - m - 1 <= 0) {
      q = rand(6, 9);
    }
    issue.opr[2] = p * 10 + q;

    issue.result = issue.opr[0] - issue.opr[1] - issue.opr[2];
  }

  return issue;
}

//两位数减法减数个位=9
function sub9(issue) {

  j = rand(1, 8);
  i = rand(j + 1, 9);
  issue.opr[0] = i * 10 + rand(0, 9);
  issue.op[0] = '-';
  issue.opr[1] = j * 10 + 9;
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}

//减数个位=012
function sub012(issue) {

  i = rand(2, 9);
  j = rand(0, 2);
  issue.opr[0] = i * 10 + rand(5, 9);
  issue.op[0] = '-';
  issue.opr[1] = rand(0, i - 1) * 10 + j;
  issue.result = issue.opr[0] - issue.opr[1];

  return issue;
}