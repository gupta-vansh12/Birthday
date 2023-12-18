document.addEventListener('DOMContentLoaded', function () {
    animateText('animated-text');
  });
  
  function animateText(elementId) {
    const textElement = document.getElementById(elementId);
    const textContent = textElement.textContent;
    textElement.textContent = '';
  
    for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement('span');
      span.textContent = textContent[i];
      span.classList.add('animated');
      span.style.animationDelay = `${i * 0.2}s`; // Adjust the delay as needed
      textElement.appendChild(span);
    }
  }
  