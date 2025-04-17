// Changes text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const introText = document.getElementById('intro-text');
    introText.textContent = "The text has been changed!";
    introText.style.color = 'yellow';
    introText.style.fontWeight = 'bold';
  });
  
  // Add/remove an element
  document.getElementById('toggle-box-btn').addEventListener('click', () => {
    const container = document.getElementById('box-container');
    const existingBox = document.getElementById('dynamic-box');
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement('div');
      box.id = 'dynamic-box';
      box.textContent = 'I am a dynamically added box!';
      box.style.padding = '10px';
      box.style.marginTop = '10px';
      box.style.backgroundColor = '#ffc107';
      box.style.border = '2px solid #333';
      container.appendChild(box);
    }
  });
  