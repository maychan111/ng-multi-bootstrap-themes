function findStyle(theme) {
  var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length; i++) {
    if ((links[i].rel.indexOf('stylesheet') != -1) && links[i].title === theme) {
      return true
    }
  }
  return false;
}

function switchStyle(theme) {
  if (theme && findStyle(theme)) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.rel.indexOf('stylesheet') != -1 && link.title) {
        if (link.title === theme) {
          link.disabled = false;
        } else {
          link.disabled = true;
        }
      }
    }
  }
}