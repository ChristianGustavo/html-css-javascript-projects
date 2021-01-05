const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const ACTIVE_CLASS = 'active';
const SIZE_UNIT = '%';

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
  }

  update();
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
  }

  update();
});

function update() {
  toggleButtonBasedOnIndex(prev, 1);
  toggleButtonBasedOnIndex(next, circles.length);
  updateCircles();
  updateProgress();
}

function toggleButtonBasedOnIndex(button, index) {
  if (currentActive === index) {
    button.disabled = true;
  } else {
    button.disabled = false;
  } 
}

function updateCircles() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add(ACTIVE_CLASS);
    } else {
      circle.classList.remove(ACTIVE_CLASS);
    }
  });
}

function updateProgress() {
  progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + SIZE_UNIT;
}