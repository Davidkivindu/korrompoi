// Toggle menu on mobile
// Toggle menu on mobile
const toggleBtn = document.getElementById('menuToggle');
const menubar = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  if(menubar.style.display === 'none' || menubar.style.display === ''){
    menubar.style.display = 'block';
  }else {
    menubar.style.display = 'none';

  }
});

function goToReceipt(){
  sessionStorage.setItem('name', 'Rachel Korompoi');
  sessionStorage.setItem('phone', '0721 283 021');
  sessionStorage.setItem('amount', 'Enter Amount');
  window.location.href = 'payment.html';
}