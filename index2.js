$('document').ready(function(){
         $('.calculateFileSize').on('click', function(e){
        let width1 = parseInt($('#width').first().val());
        let height1 = parseInt($('#height').first().val());
        let numberOfColors1 = parseInt($('#numberOfColors').first().val());
        let fileSize = parseInt((width1 * height1 * numberOfColors1) / 8 / 1024);
        // console.log(fileSize);
        $(".container").animate({
                opacity:1,
        })
        if(fileSize < 2000){
                $('.text').text(`File is ${fileSize}KB which is OK`);   
                $('.text').css("color","green");
        }
        else{
                $('.text').text(`File is ${fileSize}KB which is not OK`); 
                $('.text').css("color","red"); 
        }
        // $('.text').text(fileSize)

       
        }); 
           $(".buttonC").on('click', function() {
                setCookie("username-check", "user", 7);
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
      
    


