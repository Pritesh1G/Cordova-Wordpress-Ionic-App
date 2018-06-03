angular.module('WordApp.filters', [])

.filter('html_filters', function($sce) {

 return function(text) {

  var htmlObject = document.createElement('div');
  htmlObject.innerHTML = text;

  var links = htmlObject.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {

   var link = links[i].getAttribute('href');

   links[i].removeAttribute('href');
   links[i].setAttribute('onclick', 'window.open("' + link + '", "_blank", "location=no,enableViewportScale=yes")');
  }

  var imglinks = htmlObject.getElementsByTagName('img');

  for (var s = 0; s < imglinks.length; s++) {

   var imglink = imglinks[s].getAttribute('src');

   imglinks[s].setAttribute('onclick', 'window.open("' + imglink + '", "_blank", "location=no,enableViewportScale=yes")');
  }

  var textsize = htmlObject.getElementsByTagName('p');

  for (var p = 0; p < textsize.length; p++) {

   var size = textsize[p].getAttribute('class');

   textsize[p].setAttribute('class', 'textsize');
  }

  return $sce.trustAsHtml(htmlObject.outerHTML);

 }

})