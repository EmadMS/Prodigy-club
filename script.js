console.log('Hello!');

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle (for smaller screens)
  const mobileMenuToggle = document.createElement('div');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.appendChild(mobileMenuToggle);

  const sidebar = document.querySelector('.sidebar');

  mobileMenuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });

  // Grid item animation on load
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';

    setTimeout(() => {
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 150 * index);
  });
});
