const educationButton = document.querySelector('.education-button');
const skillButton = document.querySelector('.skill-button');
const achievementButton = document.querySelector('.achievement-button');
const educationSub = document.querySelector('.education-sub');
const skillSub = document.querySelector('.skill-sub');
const achievementSub = document.querySelector('.achievement-sub');
const subContent = document.querySelector('.sub-content');

educationButton.addEventListener('click', () => {
  toggleSubContent(educationSub);
});

skillButton.addEventListener('click', () => {
  toggleSubContent(skillSub);
});

achievementButton.addEventListener('click', () => {
  toggleSubContent(achievementSub);
});

function toggleSubContent(subElement) {
  subContent.style.display = 'block';
  educationSub.style.display = 'none';
  skillSub.style.display = 'none';
  achievementSub.style.display = 'none';
  subElement.style.display = 'block';
}
