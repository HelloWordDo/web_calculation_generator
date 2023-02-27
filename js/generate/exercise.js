function generate (count) {
  var pages = document.getElementById("pages").value;

  if (isNaN(pages) || pages < 1 || pages > MAX_PAGES) {
    alert("无效的份数设置，必须是1-20之间的数字!" + pages);
    return;
  }

  old_total_pages = total_pages;
  total_pages = pages;

  if (current_mode == 0)
    generate_mode1(count);
  else
    generate_mode2(count);

}

//按列模式
function generate_mode1 (count) {
  var cols = ["col1type", "col2type", "col3type", "col4type", "col5type"];
  var mode, issues, i, j;

  for (var p = 0; p < total_pages; p++) {
    for (i = 0; i < 5; i++) {
      mode = document.getElementById(cols[i]).value;

      if (count == 25) {

        issues = generate_issues(mode, 5);
        CELLS_PER_PAGE = 25;
        // cells = new Array(MAX_PAGES * CELLS_PER_PAGE);
        for (j = 0; j < 5; j++) {
          cells[p * CELLS_PER_PAGE + i * 5 + j] = issues[j];
        }
      } else if (count == 50) {

        issues = generate_issues(mode, 10);
        CELLS_PER_PAGE = 50;
        // cells = new Array(MAX_PAGES * CELLS_PER_PAGE);
        for (j = 0; j < 10; j++) {
          cells[p * CELLS_PER_PAGE + i * 10 + j] = issues[j];
        }
      } else if (count == 100) {

        issues = generate_issues(mode, 20);
        CELLS_PER_PAGE = 100;
        // cells = new Array(MAX_PAGES * CELLS_PER_PAGE);
        for (j = 0; j < 20; j++) {
          cells[p * CELLS_PER_PAGE + i * 20 + j] = issues[j];
        }
      }

    }
  }
  show_issues(count);
}

function generate_mode2 (count) {
  var i, j, k, p;
  var mode;
  var input;
  var issues;

  var n = new Array(modes.length);
  var total = 0;

  for (i = 0; i < modes.length; i++) {
    input = document.getElementById(modes[i][0]);
    if (input && input.value != '')
      n[i] = parseInt(input.value);
    else
      n[i] = 0;
    total += n[i];
  }

  if (total != 25 && total != 50 && total != 100) {
    alert("总题数应该是25、50或100，现在是" + total);
    return;
  }

  CELLS_PER_PAGE = total;

  var current_cells = new Array(CELLS_PER_PAGE);

  for (p = 0; p < total_pages; p++) {
    k = 0;
    for (i = 0; i < modes.length; i++) {
      if (n[i] > 0) {
        issues = generate_issues(modes[i][0], n[i]);
        for (j = 0; j < n[i]; j++) {
          current_cells[k] = issues[j];
          k++;
        }
      }
    }
    // random sort
    current_cells = current_cells.sort(function (a, b) {
      return Math.random() > .5 ? -1 : 1;
    });
    // store in global array 
    for (i = 0; i < CELLS_PER_PAGE; i++)
      cells[p * CELLS_PER_PAGE + i] = current_cells[i];
  }

  show_issues(CELLS_PER_PAGE);
}


/* genrate n issues of given type */
function generate_issues (type, n) {
  var issues = new Array(n);

  for (var i = 0; i < n; i++)
    issues[i] = generate_issue(type);

  return issues;
}


function show_issues (count) {
  var p, r, c;
  var tab, tr, td;

  var show_answer = document.getElementById("show_answer_cb").checked;

  for (p = 0; p < total_pages; p++) {

    var d = document.getElementById("tabdiv");

    removeElement(p)

    if (CELLS_PER_PAGE == 25) {

      tab = document.getElementById("mytab_25_" + p);

      if (!tab) {
        tab = create_table(p);
      }

      for (r = 0; r < 5; r++) {
        tr = tab.rows[r + 1];
        for (c = 0; c < 5; c++) {
          td = tr.cells[c];
          td.innerHTML = print_issue(cells[p * CELLS_PER_PAGE + c * 5 + r], show_answer);
        }
      }

    } else if (CELLS_PER_PAGE == 50) {

      tab = document.getElementById("mytab_50_" + p);

      if (!tab) {
        tab = create_table(p);
      }

      for (r = 0; r < 10; r++) {
        tr = tab.rows[r + 1];
        for (c = 0; c < 5; c++) {
          td = tr.cells[c];
          td.innerHTML = print_issue(cells[p * CELLS_PER_PAGE + c * 10 + r], show_answer);
        }
      }

    } else if (CELLS_PER_PAGE == 100) {

      tab = document.getElementById("mytab_100_" + p);
      if (!tab) {
        tab = create_table(p);
      }

      for (r = 0; r < 20; r++) {
        tr = tab.rows[r + 1];

        for (c = 0; c < 5; c++) {
          td = tr.cells[c];
          td.innerHTML = print_issue(cells[p * CELLS_PER_PAGE + c * 20 + r], show_answer);
        }
      }
    }
  }

  if (old_total_pages > total_pages) {

    for (p = old_total_pages - 1; p >= total_pages; p--) {

      removeElement(p)
    }
  }
  old_total_pages = total_pages;
}

function removeElement (p) {
  var d = document.getElementById("tabdiv");
  var num = [25, 50, 100]

  //删除原数据
  for (let j = 0; j < num.length; j++) {
    const element = num[j];

    tab = document.getElementById("mytab_" + element + "_" + p);
    if (tab) {
      d.removeChild(tab);
      delete tab;
    }
  }
}

function create_table (p) {
  var tab;

  if (CELLS_PER_PAGE == 25) {
    tab = document.createElement("table");
    tab.innerHTML = '<table class="table"></table>';
    tab.setAttribute("id", "mytab_25_" + p);
    row = 6
  } else if (CELLS_PER_PAGE == 50) {
    tab = document.createElement("table");
    tab.innerHTML = '<table class="table"></table>';
    tab.setAttribute("id", "mytab_50_" + p);
    row = 11
  } else if (CELLS_PER_PAGE == 100) {
    tab = document.createElement("table");
    tab.innerHTML = '<table class="table"></table>';
    tab.setAttribute("id", "mytab_100_" + p);
    row = 21
  }
  for (var r = 0; r < row; r++) {
    tr = tab.insertRow(r);
    if (r == 0) {
      tr.innerHTML = '<tr> <td></td> \
                       <td colspan="1" align="center">班级：</td> \
                       <td colspan="1" align="center">姓名：</td> \
                       <td colspan="1" align="center">学号：</td> \
                       <td></td> </tr>';
    } else {
      for (var c = 0; c < 5; c++) {
        tr.insertCell(c);
      }
    }
  }

  var d = document.getElementById("tabdiv");
  d.appendChild(tab);

  return tab;
}

function print_issue (issue, show_answer) {
  var s = '<td class="td50" id="td50"> ';
  if (CELLS_PER_PAGE === 25) {
    s += '<p25>'
  } else if (CELLS_PER_PAGE === 50) {
    s += '<p50>'
  } else {
    s += '<p100>'
  }

  s += issue.opr[0];
  s += issue.op[0];
  s += issue.opr[1];
  if (issue.op_n == 2) {
    s += issue.op[1];
    s += issue.opr[2];
  }
  s += '=';
  if (show_answer)
    s += issue.result;

  if (CELLS_PER_PAGE === 25) {
    s += '</p25>'
  } else if (CELLS_PER_PAGE === 50) {
    s += '</p50>'
  } else {
    s += '</p100>'
  }
  s += '</td>'
  return s;
}