$('document').ready(function(){
    $('.tellStory').on('click', function(e){
        e.preventDefault();
        let name = $('#pname').val();
        let character = $('#char').val();
        let adverb = $('#adv').val();
        let adject = $('#adj').val();
        // $("#result").css("display", "block");
        $(".name").text(name);
        $(".character").text(character);
        $("#adjective").text(adject);
        $("#adverb").text(adverb);
        $(".container span").css("color", "green");
        $(".container").animate({
            opacity:1,
    })
    });
    $(".buttonC").on('click', function() {
        setCookie("username", "user", 7);
      });
});


function getValue() {
    const mode = localStorage.getItem("mode");
    const id1 = document.getElementById("mainContainer");
    id1.className = mode;
  }

  function toggleBetween() {
    if (localStorage.getItem("mode") == "light") {
      setDarkTheme();
    } else {
      setWhiteTheme();
    }
  }

  function setWhiteTheme() {
    localStorage.setItem("mode", "light");
    const id1 = document.getElementById("mainContainer");
    id1.className = "light";
  }
  function setDarkTheme() {
    localStorage.setItem("mode", "dark");
    const id1 = document.getElementById("mainContainer");
    id1.className = "dark";
  }
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  



