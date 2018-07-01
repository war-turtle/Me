document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');

  M.Sidenav.init(sidenav);

  TweenMax.set('.bkg', { backgroundColor: '#ffffff' });
  TweenMax.set('.one-bkg', { backgroundColor: '#800080' });
  TweenMax.set('.two-bkg', { backgroundColor: '#008080' });
  TweenMax.set('.one-text', { color: '#800080' });
  TweenMax.set('.two-text', { color: '#008080' });
  TweenMax.set('.text-color', { color: '#ffffff' });
});

window.addEventListener('load', function() {
  var time = new TimelineMax({
    repeat: -1,
    ease: Power0.easeNone
  });

  time
    .to('.bkg', 10, {
      backgroundColor: '#574c4f',
      delay: 2
    })
    .to('.one-bkg', 10, { backgroundColor: '#78b0a0' }, '-=10')
    .to('.two-bkg', 10, { backgroundColor: '#ffd152' }, '-=10')
    .to('.one-text', 10, { color: '#78b0a0' }, '-=10')
    .to('.two-text', 10, { color: '#ffd152' }, '-=10')
    .to('.text-color', 10, { color: '#574c4f' }, '-=10')

    .to('.bkg', 10, { backgroundColor: '#ffffff', delay: 2 })
    .to('.one-bkg', 10, { backgroundColor: '#800080' }, '-=10')
    .to('.two-bkg', 10, { backgroundColor: '#008080' }, '-=10')
    .to('.one-text', 10, { color: '#800080' }, '-=10')
    .to('.two-text', 10, { color: '#008080' }, '-=10')
    .to('.text-color', 10, { color: '#ffffff' }, '-=10');

  //grass animation
  var grassTime = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
  });

  grassTime.to(
    ['#rightMedium', '#rightLarge', '#leftLarge', '#leftMedium'],
    5,
    {
      rotationZ: -5,
      transformOrigin: '50% 100%',
      ease: Elastic.easeIn.config(1.2, 0.5)
    }
  );

  //sunMoon animation
  var sunMoonTime = new TimelineMax({
    repeat: -1
  });

  sunMoonTime.to('.containSunMoon', 20, {
    rotation: 270,
    ease: Power0.easeNone
  });
});
