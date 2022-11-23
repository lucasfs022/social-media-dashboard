const toggleBtn = document.querySelector(".toggle-btn");
const numbers = document.querySelectorAll(".data");
console.log(numbers);
// const thousand = document.querySelector('.thousand');

// console.log(toggleBtn);
// console.log(numbers);

// dark mode
const darkTheme = () => {
  document.documentElement.classList.toggle("dark-theme");
};

toggleBtn.onclick = darkTheme;

// end of dark mode

// increase number

numbers.forEach((num) => {
  const number = parseInt(num.dataset.value);
  // console.log(number);
  const increaseNum = Math.ceil(number / 100);
  let inicialNum = 0;

  const increaseCount = setInterval(() => {
    inicialNum += increaseNum;

    if (inicialNum > number) {
      num.textContent = number;
      clearInterval(increaseCount);
      return;
    }

    num.textContent = inicialNum;
  }, 1);
});

// end of increase number