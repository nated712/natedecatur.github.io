document.querySelectorAll('.image-hover-zoom img').forEach(img => {
  img.addEventListener('mousemove', function(e) {
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to 10 px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    img.style.transform = `scale(1.07) translate(${x}px, ${y}px)`;
  });
  img.addEventListener('mouseleave', function() {
    img.style.transform = 'scale(1) translate(0,0)';
  });
  img.addEventListener('mouseenter', function() {
    img.style.transition = 'transform 0.3s cubic-bezier(.25,.46,.45,.94)';
  });
});