

window.onscroll = function (){ 'use strict';
  // GoUp Button
  let btnGoUp = document.getElementById("goup");
  if(window.pageYOffset >= 800){
    btnGoUp.style.display = "block";
  }else if(window.pageYOffset < 400){
    btnGoUp.style.display = "none";
  }
  btnGoUp.onclick = () => {
    scroll({
      top: 0
    })
  }



  // Our Skills Animate Width On Scrolling 
  let OurSkills = document.getElementById("Our_Skills");
  let ProgressSpans  = document.querySelectorAll(".the-progress span");
  if(window.scrollY >= OurSkills.offsetTop+30){
    ProgressSpans.forEach((span) => {
                              // dataset remember
      span.style.width = span.dataset.width;
    });
  }
  
}  









