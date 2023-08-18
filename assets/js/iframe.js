function openMovie(movieUrl) {
  var url = "/assets/movies/" + movieUrl;
  var win = window.open();
  win.document.write('<head> <title>Loading...</title> ');
  win.document.write('<link rel="shortcut icon" type="image/png" href="/assets/img/classes.png">');
  win.document.write('</head>');
  win.document.write('<body style="margin: 0;">');
  // win.document.write('<script async="async" data-cfasync="false" src="//pl18978847.highrevenuegate.com/2e327884ce7509492943b95cc2ad0716/invoke.js"></script>');
  // win.document.write('<div id="container-2e327884ce7509492943b95cc2ad0716"></div>');
  //win.document.write("<script type='text/javascript' src='//pl18978788.highrevenuegate.com/4c/27/60/4c2760e7ba7eee4c7f1b81f67b216dd2.js'></script>");
  win.document.write('<iframe class="game-iframe" style="padding: 0; width: 100%; height: 100%; border: none;" src="' + url + '"></iframe>');
  win.document.write('</body>');
  win.document.close();
}
