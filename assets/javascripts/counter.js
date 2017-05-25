(function(){

  window.onload = function(){

    let minus_button = document.querySelector("#decrement");
    let plus_button = document.querySelector("#increment");
    let counter = document.querySelector("#counter");

    plus_button.addEventListener("click", function(){
      console.log("+ button clicked!");

      var newCounterValue = parseInt(counter.innerHTML) + 1;

      if (newCounterValue >=10) {
        counter.style.color = "red";
      }

      counter.innerHTML = newCounterValue;
    })

    minus_button.addEventListener("click", function(){
      console.log("- button clicked!");

      var newCounterValue = parseInt(counter.innerHTML) - 1;

      if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
      }

      if (newCounterValue < 10) {
        counter.style.color = "black";
      }


    })

  }

})();
