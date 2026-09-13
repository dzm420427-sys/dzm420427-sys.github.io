(() => {
  const dialog = document.querySelector('.viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const links = [...document.querySelectorAll('[data-gallery]')];
  const img = document.querySelector('#viewer-image');
  const title = document.querySelector('#viewer-title');
  const counter = document.querySelector('#viewer-count');
  const previous = document.querySelector('#viewer-prev');
  const next = document.querySelector('#viewer-next');
  let group = [], index = 0;
  function render() {
    const link = group[index];
    img.src = link.href;
    img.alt = link.dataset.caption;
    title.textContent = link.dataset.caption;
    counter.textContent = `${index + 1} / ${group.length}`;
    previous.disabled = index === 0;
    next.disabled = index === group.length - 1;
  }
  function move(delta) {
    const target = index + delta;
    if (target < 0 || target >= group.length) return;
    index = target;
    render();
  }
  links.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    group = links.filter(item => item.dataset.gallery === link.dataset.gallery);
    index = group.indexOf(link);
    render();
    dialog.showModal();
    document.body.classList.add('viewer-open');
  }));
  document.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('viewer-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
})();
