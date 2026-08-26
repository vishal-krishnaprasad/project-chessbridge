document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  }

  // Set copyright years in footers
  var y = new Date().getFullYear();
  var ids = ['year','year-about','year-projects','year-contact'];
  ids.forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = y;
  });
});
