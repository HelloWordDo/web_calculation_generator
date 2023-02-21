//20以内加减法
function mix_20(issue) {
  var i, j;
  var op = rand(0, 1);
  switch (op) {
    case 0:
      i = rand(1, 19);
      j = rand(1, 20 - i);
      while (i + j < 10) {
        i = rand(1, 19);
        j = rand(1, 20 - i);
      }
      issue.opr[0] = i;
      issue.op[0] = '+';
      issue.opr[1] = j;
      issue.result = issue.opr[0] + issue.opr[1];
      break;
    case 1:
      i = rand(10, 19);
      j = rand(1, i - 1);
      issue.opr[0] = i;
      issue.op[0] = '-';
      issue.opr[1] = j;
      issue.result = issue.opr[0] - issue.opr[1];
      break;
  }
  return issue;
}

//先加后减<100
function add_sub_cont_100(issue) {

  issue.op_n = 2;
  i = rand(1, 7);
  j = rand(1, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '+';

  issue.opr[1] = rand(1, 8 - i) * 10 + rand(10 - j, 9);
  issue.op[1] = '-';

  issue.opr[2] = rand(1, issue.opr[0] + issue.opr[1])
  issue.result = issue.opr[0] + issue.opr[1] - issue.opr[2];

  return issue;
}

//先减后加<100
function sub_add_cont_100(issue) {

  issue.op_n = 2;

  i = rand(2, 9);
  j = rand(0, 9);
  issue.opr[0] = i * 10 + j;
  issue.op[0] = '-';

  issue.opr[1] = rand(1, i - 1) * 10 + rand(0, 9);
  issue.op[1] = '+';

  if (issue.opr[0] + issue.opr[1] > 106) {
    issue.opr[2] = rand(5, issue.opr[0] + issue.opr[1] - 100)

  } else {
    issue.opr[2] = rand(5, 111 - (issue.opr[0] + issue.opr[1]))
  }
  issue.result = issue.opr[0] - issue.opr[1] + issue.opr[2];

  return issue;
}

//两位数加一位数乘
function addmul_2_1_1(issue) {

  i = rand(1, 99);
  j = rand(1, 9);
  k = rand(1, 9);
  issue.op_n = 2;
  issue.opr[0] = i;
  issue.op[0] = '+';
  issue.opr[1] = j;
  issue.op[1] = '×';
  issue.opr[2] = k;
  issue.result = issue.opr[0] + issue.opr[1] * issue.opr[2];

  return issue;
}

//两位数减一位数乘
function submul_2_1_1(issue) {

  j = rand(1, 9);
  k = rand(1, 9);
  i = rand(j * k, 100);
  issue.op_n = 2;
  issue.opr[0] = i;
  issue.op[0] = '-';
  issue.opr[1] = j;
  issue.op[1] = '×';
  issue.opr[2] = k;
  issue.result = issue.opr[0] - issue.opr[1] * issue.opr[2];

  return issue;
}

//一位数乘加两位数
function muladd_1_1_2(issue) {

  i = rand(1, 9);
  j = rand(1, 9);
  k = rand(1, 99);
  issue.op_n = 2;
  issue.opr[0] = i;
  issue.op[0] = '×';
  issue.opr[1] = j;
  issue.op[1] = '+';
  issue.opr[2] = k;
  issue.result = issue.opr[0] * issue.opr[1] + issue.opr[2];

  return issue;
}

//一位数乘减两位数
function mulsub_1_1_2(issue) {

  i = rand(4, 9);
  j = rand(4, 9);
  k = rand(1, i * j);
  issue.op_n = 2;
  issue.opr[0] = i;
  issue.op[0] = '×';
  issue.opr[1] = j;
  issue.op[1] = '-';
  issue.opr[2] = k;
  issue.result = issue.opr[0] * issue.opr[1] - issue.opr[2];

  return issue;
}

function mix_2_1(issue) {

  i = rand(0, 4) * 2;
  j = (i + 10) / 2;
  issue.opr[0] = j * 10 + i;
  issue.op[0] = '+';
  issue.opr[1] = rand(1, (9 - j)) * 10 + j;
  issue.result = issue.opr[0] + issue.opr[1];

  return issue;
}