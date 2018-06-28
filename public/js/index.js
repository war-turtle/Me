document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var collapsible = document.querySelectorAll('.collapsible');

  M.Sidenav.init(sidenav);
  M.Collapsible.init(collapsible);

  TweenMax.set('.bkg', { backgroundColor: '#ffffff' });
  TweenMax.set('.one-bkg', { backgroundColor: '#800080' });
  TweenMax.set('.two-bkg', { backgroundColor: '#008080' });
  TweenMax.set('.one-text', { color: '#800080' });
  TweenMax.set('.two-text', { color: '#008080' });
  TweenMax.set('.text-color', { color: '#ffffff' });
});

window.addEventListener('load', function() {
  var time = new TimelineMax({
    repeat: -1
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

  //typing animation code
  var elements = document.querySelector('.typer');

  new TxtRotate(elements, ['Hey Chaps!', 'How Are You'], 2000);
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
