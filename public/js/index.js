document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var collapsible = document.querySelectorAll('.collapsible');

  M.Sidenav.init(sidenav);
  M.Collapsible.init(collapsible);
});

window.addEventListener('load', function() {
  // rgb(120, 176, 160);
  // $night-two: rgb(255, 209, 82);

  // rgb(128, 0, 128);
  // $day-two: rgb(0, 128, 128);

  var bkg = CSSRulePlugin.getRule('.bkg');
  var oneText = CSSRulePlugin.getRule('.one-text');
  var twoText = CSSRulePlugin.getRule('.two-text');

  var time = new TimelineMax();

  time
    .fromTo(
      bkg,
      10,
      { backgroundColor: 'rgb(255, 255, 255)' },
      { backgroundColor: 'rgb(26, 25, 26)' }
    )
    .fromTo(
      oneText,
      10,
      { color: 'rgb(120, 176, 160)' },
      { color: 'rgb(128, 0, 128)' },
      0
    )
    .fromTo(
      twoText,
      10,
      { color: 'rgb(255, 209, 82)' },
      { color: 'rgb(0, 128, 128)' },
      0
    );
});
