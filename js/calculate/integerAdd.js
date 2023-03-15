// 一位数加一位数
function add_1_1(issue) {
  var i, j;

  i = rand(1, 9);
  j = rand(1, 9);
  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = j;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}


//两位数进位加法
function addc_2_2(issue) {

  var i, j;
  i = rand(1, 7);
  j = rand(1, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';
  issue.opr[1] = rand(1, 8 - i) * 10 + rand(10 - j, 9);
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//两位数不进位加
function add_2_2(issue) {

  var i, j;
  i = rand(1, 8);
  j = rand(0, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';
  issue.opr[1] = rand(1, 9 - i) * 10 + rand(0, 9 - j);
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//一位数加两位数
function add_1_2(issue) {

  var i, j;
  i = rand(1, 9);
  j = rand(1, 9);
  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = (j == 9) ? j * 10 + rand(0, 9 - i) : j * 10 + rand(0, 9);
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//两位数加一位数
function add_2_1(issue) {

  var i, j;
  i = rand(1, 8);
  j = rand(0, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';
  issue.opr[1] = (i < 9) ? rand(4, 9) : rand(2, 9 - j);
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//两位数加法=100
function addc_2_2_100(issue) {

  var i, j;
  i = rand(1, 7);
  j = rand(1, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';
  issue.opr[1] = 100 - issue.opr[0];
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//两位数加一位数=100
function add_2_1_100(issue) {

  var i, j;
  i = rand(1, 9);
  j = rand(0, 9);
  issue.opr[1] = rand(1, 9);
  issue.op[0] = '+';
  issue.opr[0] = 100 - issue.opr[1];
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//加法连续<100
function add_cont_100(issue) {

  issue.result = 101
  issue.op_n = 2;
  while (issue.result > 100) {
    i = rand(1, 5);
    j = rand(1, 9);
    issue.opr[0] = i * 10 + j;
    issue.op[0] = '+';

    m = rand(1, 6 - i);
    n = rand(10 - j, 9);
    issue.opr[1] = m * 10 + n
    issue.op[1] = '+';

    p = rand(1, 8 - i - m);
    q = rand(10 - j - n, 9);
    issue.opr[2] = p * 10 + q;

    issue.result = issue.opr[0] + issue.opr[1] + issue.opr[2];
  }
  return issue;
}

//加数个位=012
function add012(issue) {

  i = rand(1, 8);
  j = rand(1, 9 - i);
  k = rand(0, 2);
  issue.opr[0] = i * 10 + rand(0, 9 - k);
  issue.op[0] = '+';
  issue.opr[1] = j * 10 + k;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

//特殊非进位加
function addn_2_2(issue) {
  /* add with no carry but at least a[2] + b[1] >= 10 
               or a[1] + b[2] >= 10 to test whether it will confuse her*/
  do {
    i = rand(1, 8);
    j = rand(0, 9);
    k = rand(0, 9 - j);
    l = rand(1, 9 - i);
  } while (i + k < 10 && j + l < 10);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';
  issue.opr[1] = l * 10 + k;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

// 三位数加一位数
function add_3_1(issue) {

  j = rand(2, 9);
  i = rand(100, 999 - j);

  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = j;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

// 三位数加两位数
function add_3_2(issue) {

  j = rand(10, 99);
  i = rand(100, 999 - j);

  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = j;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}

// 三位数加三位数
function add_3_3(issue) {

  i = rand(100, 899);
  j = rand(100, 999 - i);

  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = j;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}