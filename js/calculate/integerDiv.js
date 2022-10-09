//9*9内除法
function div_9_9(issue) {
    i = rand(1, 9);
    j = rand(1, 9);

    issue.opr[0] = i*j;
    issue.op[0] = '÷';
    issue.opr[1] = j;
    issue.result = i;

    return issue
}