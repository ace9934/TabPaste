document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openButton').addEventListener('click', function() {
    var pasteLinks = document.getElementById('pasteLinks').value;
    var lines = pasteLinks.split(/\r?\n/);
    var lineSkip = 1;
    var expanded = document.getElementById('expanded').checked;
    if (expanded) {
      lineSkip = lineSkip + 1;
    }
    for (i = 1; i < lines.length; i = i + lineSkip + 1) {
      chrome.tabs.create({ url: lines[i] });
    }
  })
});
