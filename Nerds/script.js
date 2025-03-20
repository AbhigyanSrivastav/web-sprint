
document.querySelectorAll('.cta-buttons a').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'scroll'
      });
    });
  });
  document.querySelectorAll('nav ul li a, .buttons a').forEach(button => {
    button.addEventListener('click', (e) => {
      if (button.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      }
    });
  });



