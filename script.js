
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    console.log(`Downloading ${card.textContent.trim()}`);
  });
});
