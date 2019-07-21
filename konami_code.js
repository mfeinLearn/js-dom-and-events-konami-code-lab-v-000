const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // function onKonamiCodeKeysDownHandler(e) {

    const body = document.querySelector('body');
    let index = 0;
    body.addEventListener('keydown', function(e) {//beginning of event listener
    const key = parseInt(e.detail || e.which);
    console.log(key);

    if (key === code[index]) {
      index++;

      console.log(code[index]);

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
        //return e.preventDefault();
      }
    } else {
      index = 0;
      console.log('some key!');
    }

  });// end of event listener

  // }
}
