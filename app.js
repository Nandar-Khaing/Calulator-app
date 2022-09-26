let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.button');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.equal-button');
  let reset = document.querySelector('.reset-button');
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.item;
      screen.value += value;
    })
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please Enter numbers";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    reset.addEventListener('click', function(e){
        screen.value = '';
    })
  });



  let toggleSwitch = document.getElementsByClassName('redButton')[0]

  function theme1() {
      toggleSwitch.classList.add('horizTranslate1');
      toggleSwitch.classList.remove('horizTranslate2');
      toggleSwitch.classList.remove('horizTranslate3');
      document.getElementByClassName("container").style.backgroundColor = "#4A5B7E"
     

     
  }

  function theme2() {
      toggleSwitch.classList.add('horizTranslate2');
      toggleSwitch.classList.remove('horizTranslate3');
      toggleSwitch.classList.remove('horizTranslate1');
      document.getElementsByClassName("container").style.backgroundColor = "#E5E5E5";
      document.getElementsByClassName("container").style.color = "black";
      document.querySelector(".del-button").style.backgroundColor = "black"
      document.querySelector(".reset-button").style.backgroundColor = "black"
      document.querySelector(".equal-button").style.backgroundColor = "black"
      document.querySelector(".cal-grid").style.backgroundColor = "#ffffff"
      document.querySelector(".screen").style.backgroundColor = "#ffffff"
      document.querySelector("#title").style.color = "black";

  }
  function theme3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#000000"
    document.getElementById("buttonContainer").style.backgroundColor = "#444444"
    document.getElementById("legendTextContainer").style.color = "#E2D241"
    
}

//your code here...
