const panels = document.querySelectorAll('.panel');
const ACTIVE_CLASS = 'active';
const EVENT = 'click';

panels.forEach(panel => {
  panel.addEventListener(EVENT, () => {
    removeActiveClass();
    panel.classList.add(ACTIVE_CLASS);
  });
});

function removeActiveClass() {
  panels.forEach(panel => panel.classList.remove(ACTIVE_CLASS));
}