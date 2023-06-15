// Get the filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Get the skills lists
const mainSkills = document.querySelector('.main-skills');
const otherSkills = document.querySelector('.other-skills');
const toolSkills = document.querySelector('.tool-skills');

// Add click event listeners to the filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add the active class to the clicked button
    button.classList.add('active');

    // Show or hide the skills lists based on the clicked button
    if (button.dataset.filter === 'main') {
      mainSkills.style.display = 'block';
      otherSkills.style.display = 'none';
      toolSkills.style.display = 'none';
    } else if (button.dataset.filter === 'other') {
      mainSkills.style.display = 'none';
      otherSkills.style.display = 'block';
      toolSkills.style.display = 'none';
    } else if (button.dataset.filter === 'tools') {
      mainSkills.style.display = 'none';
      otherSkills.style.display = 'none';
      toolSkills.style.display = 'block';
    }
  });
});