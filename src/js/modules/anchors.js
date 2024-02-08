export default function InitAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const hashval = anchor.getAttribute('href');
      const target = document.querySelector(hashval);

      target?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, null, hashval);
      event.preventDefault();
    });
  });
}