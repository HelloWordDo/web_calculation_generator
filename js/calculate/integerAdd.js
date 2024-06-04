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

//1位+2位或2位+1位 不进位
function add_1_2_uncarry(issue) {
    
  var i, j, tempResult;
  i = rand(1, 9); // 生成一个介于1到9之间的随机数（包括1和9）
  j = rand(1, 9); // 生成一个介于1到9之间的随机数（包括1和9）
  
  if (rand(0, 1) === 0) { // 随机选择1位数加2位数或2位数加1位数
    // 1位数加2位数
    do {
      issue.opr[0] = i; // 将i赋值给issue的opr数组的第一个元素
      issue.op[0] = '+'; // 将'+'赋值给issue的op数组的第一个元素
      issue.opr[1] = j * 10 + rand(0, 9 - i); // 生成一个两位数，使得没有进位
      tempResult = issue.opr[0] + issue.opr[1];
    } while (tempResult >= 100);
  } else {
    // 两位数加1位数
    do {
      issue.opr[0] = j * 10 + rand(0, 9); // 生成一个两位数
      issue.op[0] = '+'; // 将'+'赋值给issue的op数组的第一个元素
      issue.opr[1] = i; // 将i赋值给issue的opr数组的第二个元素
      tempResult = issue.opr[0] + issue.opr[1];
    } while (tempResult >= 100 || issue.opr[0] % 10 + i >= 10); // 确保结果不需要进位
  }
  
  issue.result = tempResult; // 计算结果并赋值给issue的result属性
  
  return issue; // 返回修改后的issue对象
}

//1位+2位或2位+1位 进位
function add_1_2_carry(issue) {
  
  var i, j, tempResult;
  
  if (rand(0, 1) === 0) { // 随机选择1位数加2位数或2位数加1位数
    // 1位数加2位数
    do {
      i = rand(1, 9); // 生成一个介于1到9之间的随机数（包括1和9）
      j = rand(1, 9); // 生成一个介于1到9之间的随机数（包括1和9）
      issue.opr[0] = i; // 将i赋值给issue的opr数组的第一个元素
      issue.op[0] = '+'; // 将'+'赋值给issue的op数组的第一个元素
      issue.opr[1] = j * 10 + rand(10 - i, 9); // 生成一个两位数，使得有进位
      tempResult = issue.opr[0] + issue.opr[1];
    } while (tempResult >= 100);
  } else {
    // 两位数加1位数
    do {
      i = rand(1, 9); // 生成一个介于1到9之间的随机数（包括1和9）
      j = rand(1, 8); // 生成一个介于1到8之间的随机数（包括1和8）
      issue.opr[0] = j * 10 + rand(0, 9); // 生成一个两位数
      issue.op[0] = '+'; // 将'+'赋值给issue的op数组的第一个元素
      issue.opr[1] = i; // 将i赋值给issue的opr数组的第二个元素
      tempResult = issue.opr[0] + issue.opr[1];
    } while (tempResult >= 100 || (issue.opr[0] % 10 + i < 10)); // 确保结果需要进位
  }
  
  issue.result = tempResult; // 计算结果并赋值给issue的result属性
  
  return issue; // 返回修改后的issue对象
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