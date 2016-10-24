// All credit to http://codepen.io/Tbgse/pen/dYaJyJ
// Slightly modified to end instead of loop, disappear on click.

// function([string1, string2],target id,[color1,color2])
consoleText(['A #Confused Letter to my Newsfeed During Election Season','By Katherine Alpert Hirsch'], 'text',['#202020','#202020']);

function consoleText(words, id, colors) {
  var myInterval;
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var firstrun = true;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  $('#landing-page').click(function() {
    clearInterval(myInterval);
    $('#landing-page').fadeOut(1000);
    return;
  });
  myInterval = window.setInterval(function() {
    if (words.length === 0) {
      $('#landing-page').fadeOut(1000);
      clearInterval(myInterval);
      return;
    } else if (letterCount === 0 && waiting === false) {
      firstrun = false;
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        // colors.push(usedColor);
        var usedWord = words.shift();
        // words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      firstrun = false;
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      firstrun = false;
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
