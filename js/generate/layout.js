function changetab() {
  var tabs = document.getElementById("tab").getElementsByTagName("span");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].onclick = tab;
  }
}

function tab() {
  var tabs = document.getElementById("tab").getElementsByTagName("span");
  var cts = document.getElementById("ct").getElementsByTagName("div");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = "";
    cts[i].className = "";

    if (tabs[i] == this) {

      var word = tabs[i].innerHTML;
      if (word === '按列选模式生成') {

        document.getElementById("btn25").style.display = "inline";
        document.getElementById("btn50").style.display = "inline";
        document.getElementById("btn100").style.display = "inline";
        document.getElementById("btnmix").style.display = "none";
      } else if (word === '按模式数量混合生成') {

        document.getElementById("btn25").style.display = "none";
        document.getElementById("btn50").style.display = "none";
        document.getElementById("btn100").style.display = "none";
        document.getElementById("btnmix").style.display = "inline";
      }
      tabs[i].className = "tab";
      cts[i].className = "ct";
      current_mode = i;
    }
  }
}

/* fill in the mode lists */
function create_options() {
  var i, j;
  var select, select_html;

  var list, li;

  for (i = 1; i < 6; i++) {
    select = document.getElementById("col" + i + "type");
    for (j = 0; j < modes.length; j++)
      select.options.add(new Option(modes[j][1], modes[j][0]));
  }

  list = document.getElementById("mode_option_list");
  for (i = 0; i < modes.length; i++) {
    li = document.createElement("li");
    li.innerHTML = '<li class="mixmode">' + modes[i][1] + '<input id="' +
      modes[i][0] + '" type="text" value="0" size="3"/> </li>';
    list.appendChild(li);
  }
}