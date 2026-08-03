document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('resultModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.close');

  function hideModal() {
    modal.classList.add('hide');
    setTimeout(() => {
      if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
    }, 280);
  }

  closeBtn && closeBtn.addEventListener('click', hideModal);

  // close when clicking outside the box
  modal.addEventListener('click', function (e) {
    if (e.target === modal) hideModal();
  });

  // auto-hide after 4 seconds
  setTimeout(hideModal, 4000);
});
