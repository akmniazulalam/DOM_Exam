let numberDisplay = document.getElementById("numberDisplay")
let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")

let count = 0

increment.addEventListener("click", function() {
    function increment() {
        count++
        setInterval(() => {
           numberDisplay.innerHTML = count
        }, 300)
    }
    increment()
})
decrement.addEventListener("click", () => {
    if(count < 1) {
        clearInterval(decrement)
        //   close()
    }
    let decrement = function () {
        count--
        setInterval(() => {
            numberDisplay.innerHTML = count
        },300)
    }
    decrement()
})

// function counterJs() {
//     let increment = item.dataset.number/10
//     count += increment;
//     item.innerHTML = `${count}+`;

//     if (count == item.dataset.number) {
//       clearInterval(stop);
//     }
//   }

//   let stop = setInterval(() => {
//     counterJs();
//   }, 120);