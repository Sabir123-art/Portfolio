"use strict";

var educationButton = document.querySelector('.education-button');
var skillButton = document.querySelector('.skill-button');
var achievementButton = document.querySelector('.achievement-button');
var educationSub = document.querySelector('.education-sub');
var skillSub = document.querySelector('.skill-sub');
var achievementSub = document.querySelector('.achievement-sub');
var subContent = document.querySelector('.sub-content');
educationButton.addEventListener('click', function () {
  toggleSubContent(educationSub);
});
skillButton.addEventListener('click', function () {
  toggleSubContent(skillSub);
});
achievementButton.addEventListener('click', function () {
  toggleSubContent(achievementSub);
});

function toggleSubContent(subElement) {
  subContent.style.display = 'block';
  educationSub.style.display = 'none';
  skillSub.style.display = 'none';
  achievementSub.style.display = 'none';
  subElement.style.display = 'block';
}