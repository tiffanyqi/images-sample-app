if ($('h1').text() == 'WANNA SEE SOME CORGIS???') {
  mixpanel.reset();
} else if ($('h1').text() == 'YOU GET A CORGI!') {
  var distinctId = document.getElementById("distinct-id").value;
  mixpanel.identify(distinctId);
}

setTimeout(function() {
  mixpanel.track('Page Viewed', {
    'Page Name': $('h1').text()
  });
}, 1000);