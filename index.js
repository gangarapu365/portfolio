/*-----------------Forms--------------*/
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
/*-----------------form--------------*/

/*-----------------Typed--------------*/

var typed = new Typed('.auto-Type', {
  strings: ['Aws and Devops Engineer', 'Cloud engineer', 'infrastructure engineer',],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

/*-----------------Typed--------------*/