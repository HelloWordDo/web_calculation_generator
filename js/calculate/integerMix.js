//20以内加减法
function mix_20(issue) {
  var i, j
  var op = rand(0, 1)
  switch (op) {
    case 0:
      i = rand(1, 19)
      j = rand(1, 20 - i)
      while (i + j < 10) {
        i = rand(1, 19)
        j = rand(1, 20 - i)
      }
      issue.opr[0] = i
      issue.op[0] = '+'
      issue.opr[1] = j
      issue.result = issue.opr[0] + issue.opr[1]
      break
    case 1:
      i = rand(10, 19)
      j = rand(1, i - 1)
      issue.opr[0] = i
      issue.op[0] = '-'
      issue.opr[1] = j
      issue.result = issue.opr[0] - issue.opr[1]
      break
  }
  return issue
}

//20以内不退位加减法
function mix_non_abdicate_20(issue) {
  var i, j
  var op = rand(0, 1)
  switch (op) {
    case 0:
      i = rand(1, 19)
      j = rand(1, 20 - i)
      while (i + j < 10) {
        i = rand(1, 19)
        j = rand(1, 20 - i)
      }
      issue.opr[0] = i
      issue.op[0] = '+'
      issue.opr[1] = j
      issue.result = issue.opr[0] + issue.opr[1]
      break
    case 1:
      i = rand(11, 19)
      j = rand(1, i % 10)
      issue.opr[0] = i
      issue.op[0] = '-'
      issue.opr[1] = j
      issue.result = issue.opr[0] - issue.opr[1]
      break
  }
  return issue
}

//先加后减<100
function add_sub_cont_100(issue) {
  issue.op_n = 2
  i = rand(1, 7)
  j = rand(1, 9)
  issue.opr[0] = i * 10 + j
  issue.op[0] = '+'

  issue.opr[1] = rand(1, 8 - i) * 10 + rand(10 - j, 9)
  issue.op[1] = '-'

  issue.opr[2] = rand(1, issue.opr[0] + issue.opr[1])
  issue.result = issue.opr[0] + issue.opr[1] - issue.opr[2]

  return issue
}

//先减后加<100
function sub_add_cont_100(issue) {
  issue.op_n = 2

  i = rand(2, 9)
  j = rand(0, 9)
  issue.opr[0] = i * 10 + j
  issue.op[0] = '-'

  issue.opr[1] = rand(1, i - 1) * 10 + rand(0, 9)
  issue.op[1] = '+'

  if (issue.opr[0] + issue.opr[1] > 106) {
    issue.opr[2] = rand(5, issue.opr[0] + issue.opr[1] - 100)
  } else {
    issue.opr[2] = rand(5, 111 - (issue.opr[0] + issue.opr[1]))
  }
  issue.result = issue.opr[0] - issue.opr[1] + issue.opr[2]

  return issue
}

//两位数加一位数乘
function addmul_2_1_1(issue) {
  i = rand(1, 99)
  j = rand(1, 9)
  k = rand(1, 9)
  issue.op_n = 2
  issue.opr[0] = i
  issue.op[0] = '+'
  issue.opr[1] = j
  issue.op[1] = '×'
  issue.opr[2] = k
  issue.result = issue.opr[0] + issue.opr[1] * issue.opr[2]

  return issue
}

//两位数减一位数乘
function submul_2_1_1(issue) {
  j = rand(1, 9)
  k = rand(1, 9)
  i = rand(j * k, 100)
  issue.op_n = 2
  issue.opr[0] = i
  issue.op[0] = '-'
  issue.opr[1] = j
  issue.op[1] = '×'
  issue.opr[2] = k
  issue.result = issue.opr[0] - issue.opr[1] * issue.opr[2]

  return issue
}

//一位数乘加两位数
function muladd_1_1_2(issue) {
  i = rand(1, 9)
  j = rand(1, 9)
  k = rand(1, 99)
  issue.op_n = 2
  issue.opr[0] = i
  issue.op[0] = '×'
  issue.opr[1] = j
  issue.op[1] = '+'
  issue.opr[2] = k
  issue.result = issue.opr[0] * issue.opr[1] + issue.opr[2]

  return issue
}

//一位数乘减两位数
function mulsub_1_1_2(issue) {
  i = rand(4, 9)
  j = rand(4, 9)
  k = rand(1, i * j)
  issue.op_n = 2
  issue.opr[0] = i
  issue.op[0] = '×'
  issue.opr[1] = j
  issue.op[1] = '-'
  issue.opr[2] = k
  issue.result = issue.opr[0] * issue.opr[1] - issue.opr[2]

  return issue
}

function mix_2_1(issue) {
  i = rand(0, 4) * 2
  j = (i + 10) / 2
  issue.opr[0] = j * 10 + i
  issue.op[0] = '+'
  issue.opr[1] = rand(1, 9 - j) * 10 + j
  issue.result = issue.opr[0] + issue.opr[1]

  return issue
}

//除法混合
function div_mix(issue) {
  issue.op_n = 2
  type = rand(0, 4)
  switch (type) {
    case 0:
      r = rand(0, 1)
      if (r == 0) {
        // A÷B×C
        issue.op[0] = '÷'
        issue.op[1] = '×'

        do {
          c = rand(11, 99)
          i = rand(11, 99)
          b = rand(2, 9)
        } while (c * i > 999)

        issue.opr[0] = i * b
        issue.opr[1] = b
        issue.opr[2] = c
      } else {
        // A×(B÷C)
        issue.op[0] = '×'
        issue.op[1] = '÷'

        do {
          c = rand(11, 99)
          i = rand(11, 99)
          b = rand(2, 9)
        } while (c * i > 999)
        issue.opr[0] = c
        issue.opr[1] = '(' + i * b
        issue.opr[2] = b + ')'
      }
      issue.result = c * i
      break

    case 1:
      // A×B÷C
      issue.op[0] = '×'
      issue.op[1] = '÷'
      do {
        a = rand(11, 99)
        b = rand(11, 99)
        c = rand(2, 9)
      } while ((a * b) / c > 999)

      issue.opr[0] = a
      issue.opr[1] = b
      issue.opr[2] = c
      issue.result = parseInt((a * b) / c)
      break

    case 2:
      // A÷(B×C)
      do {
        issue.op[0] = '÷'
        issue.op[1] = '×'

        a = rand(2, 9)
        b = rand(2, 9)

        i = rand(11, 99)
        issue.opr[0] = i * (a * b)
        issue.opr[1] = '(' + a
        issue.opr[2] = b + ')'
        issue.result = i
      } while (issue.opr[0] > 999)
      break

    case 3:
      //A-B÷C
      i = rand(100, 999)
      c = rand(2, 9)

      issue.op[0] = '-'
      issue.op[1] = '÷'
      var temp = parseInt(i / c)
      issue.opr[1] = temp * c
      issue.opr[2] = c

      a = rand(temp + 1, 999)
      issue.opr[0] = a
      issue.result = a - temp

      break

    case 4:
      //A+B÷C
      i = rand(100, 999)
      c = rand(2, 9)

      issue.op[0] = '+'
      issue.op[1] = '÷'
      var temp = parseInt(i / c)
      issue.opr[1] = temp * c
      issue.opr[2] = c

      do {
        a = rand(10, 999)
      } while (a + temp > 999)

      issue.opr[0] = a
      issue.result = a + temp

      break
    default:
      return
  }
  return issue
}

//除法混合
function mul_mix(issue) {
  issue.op_n = 2
  type = rand(1, 1)
  switch (type) {
    case 0:
      //A-B*C
      do {
        b = rand(10, 99)
        c = rand(10, 99)
      } while (b * c > 999)

      a = rand(b * c, 999)

      issue.op[0] = '-'
      issue.op[1] = '×'

      issue.opr[0] = a
      issue.opr[1] = b
      issue.opr[2] = c
      issue.result = a - b * c

      break

    case 1:
      //A+B*C
      do {
        b = rand(10, 99)
        c = rand(10, 99)
      } while (b * c > 999)

      a = rand(b * c + 1, 999)

      console.log(a, b, c)
      issue.op[0] = '+'
      issue.op[1] = '×'

      issue.opr[0] = a - b * c
      issue.opr[1] = b
      issue.opr[2] = c
      issue.result = issue.opr[0] + b * c

      break
    default:
      break
  }
  return issue
}
