let enWords = ["fly", "cap", "book", "uchmoq", "kepka", "kitob"];
let classNames = ["fly", "cap", "book", "fly", "cap", "book"];
let errors = document.querySelector(".error");
let selectedWord = null;
let selectedWord1 = null;
let li = document.querySelectorAll(".letter");
let errorLi = document.querySelector(".error");

for (let i = 0; i < li.length; i++) {
  li[i].textContent = enWords[i];
  li[i].classList.add(classNames[i]);
}
let func = function () {
  li.forEach((liEl) => {
    liEl.classList.forEach((classNeme) => {
      if (classNeme == "orange") {
        liEl.classList.remove("orange");
      } else if (classNeme == "green") {
        liEl.classList.remove("green");
      } else {
        liEl.classList.remove("red");
      }
    });
    return true;
  });
};
li.forEach((event) => {
  let click = function () {
    if (selectedWord == null || func()) {
      selectedWord = event.className;
      selectedWord1 = event.textContent;
      event.classList.add("orange");
    } else {
      if (
        event.className == selectedWord &&
        event.textContent != selectedWord1
      ) {
        console.log(true);
        selectedWord = null;
        event.classList.add("green");
      } else {
        console.log(false);
        errors.textContent++;
        event.classList.add("red");
      }
    }
  };
  event.addEventListener("click", click);
});
