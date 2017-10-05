window.onscroll = function() {
          headertop()
};

function headertop() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.getElementById('navigation').className = "notontop";
          } else {
                    document.getElementById('navigation').className = "";
          }
}
