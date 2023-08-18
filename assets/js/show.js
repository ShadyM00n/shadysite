function tvSelect(tvShow) {
  var url = "/assets/tv/" + tvShow;
  var win = window.open();
  win.document.write('<head> <title>Loading...</title> ');
  win.document.write('<link rel="shortcut icon" type="image/png" href="/assets/img/classes.png">');
  win.document.write('</head>');
  win.document.write('<body style="margin: 0;">');
  win.document.write('<iframe class="game-iframe" style="padding: 0; width: 100%; height: 100%; border: none;" src="' + url + '"></iframe>');
  win.document.write('</body>');
  win.document.close();
}
