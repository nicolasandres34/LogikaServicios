  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('.services-grid .service-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
  });
  document.querySelectorAll('.clients-grid .client-chip').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.04) + 's';
  });

  function toggleGallery() {
    const extra = document.getElementById('galleryExtra');
    const label = document.getElementById('btnLabel');
    const icon  = document.getElementById('btnIcon');
    const open  = extra.style.display === 'none';
    if (open) {
      extra.style.display = 'block';
      label.textContent = 'Ver menos';
      icon.style.transform = 'rotate(180deg)';
      // animate reveal of new items
      extra.querySelectorAll('.gallery-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${i*0.06}s, transform 0.4s ease ${i*0.06}s`;
        setTimeout(() => { el.style.opacity='1'; el.style.transform='translateY(0)'; }, 10);
      });
    } else {
      extra.style.display = 'none';
      label.textContent = 'Ver más trabajos';
      icon.style.transform = 'rotate(0deg)';
    }
  }

