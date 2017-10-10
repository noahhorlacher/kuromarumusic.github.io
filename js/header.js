if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById('backtotop').className = "notontop";
} else {
          document.getElementById('backtotop').className = "";
}

window.onscroll = function() {
          headertop()
};

function headertop() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.getElementById('backtotop').className = "notontop";
          } else {
                    document.getElementById('backtotop').className = "";
          }
}

document.getElementById('backtotop').onclick = function() {
          window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
          });
}
