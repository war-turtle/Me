document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var collapsible = document.querySelectorAll('.collapsible');

  M.Sidenav.init(sidenav);
  M.Collapsible.init(collapsible);
});
