const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRefs = document.querySelector('button[data-action="start"]');
const stopRefs = document.querySelector('button[data-action="stop"]');
const bodyRefs = document.querySelector('body');
let intervalId = null;

function randomColors() {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  return currentColor;
}

startRefs.addEventListener('click', () => {
  intervalId = setInterval(() => {
    bodyRefs.style.backgroundColor = randomColors();
  }, 1000);
  startRefs.disabled = true;
});

stopRefs.addEventListener('click', () => {
  clearInterval(intervalId);
  startRefs.disabled = false;
  bodyRefs.style.backgroundColor = '#fff';
});
