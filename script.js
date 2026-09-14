// 像素风个人主页交互脚本

// 导航高亮当前区块
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'var(--pink-dark)' : 'var(--text-sub)';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => navObserver.observe(s));
