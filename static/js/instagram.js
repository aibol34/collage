<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.insta-grid');

  fetch('/instagram/polytechalmaty')
    .then(r => r.json())
    .then(posts => {
      if (!posts || !posts.length) {
        container.innerHTML = '<p>Жаңалықтар табылмады.</p>';
        return;
      }
      posts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'insta-card';
        const img = document.createElement('img');
        img.src = p.image || '';
        img.alt = (p.caption || '').slice(0, 50);
        card.appendChild(img);
        const cap = document.createElement('div');
        cap.className = 'caption';
        cap.textContent = p.caption || '';
        card.appendChild(cap);
        const link = document.createElement('a');
        link.className = 'post-link';
        link.href = p.post_url;
        link.target = '_blank';
        link.textContent = 'Көру Instagram';
        card.appendChild(link);
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = '<p>Қате орын алды. Кейінірек қайта проба жасаңыз.</p>';
    });
});
</script>
