const  entered = document.getElementById("entered");
const remaining = document.getElementById("remaining");
const textarea = document.getElementById("textarea");
 
textarea.addEventListener("keyup" , () => { keyCounter()
    
})
keyCounter();

function keyCounter(){
    entered.innerText = textarea.value.length;
    remaining.innerText = textarea.getAttribute("maxlength")- textarea.value.length;

}

// const textareaEl = document.getElementById("textarea");
// const totalCounterEl = document.getElementById("total-counter");
// const remainingCounterEl = document.getElementById("remaining-counter");

// textareaEl.addEventListener("keyup", () => {
//   updateCounter();
// });

// updateCounter()

// function updateCounter() {
//   totalCounterEl.innerText = textareaEl.value.length;
//   remainingCounterEl.innerText =
//     textareaEl.getAttribute("maxLength") - textareaEl.value.length;
// }
