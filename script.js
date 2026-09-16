const buttons = document.querySelectorAll('[data-filter]');
const dishes = document.querySelectorAll('.dish');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  dishes.forEach(dish => dish.classList.toggle('hidden', button.dataset.filter !== 'all' && dish.dataset.kind !== button.dataset.filter));
}));

const form = document.querySelector('#booking-form');
const message = document.querySelector('.form-message');
form.addEventListener('submit', event => {
  event.preventDefault();
  message.textContent = '已收到您的预约，我们将在 30 分钟内与您确认。';
  form.reset();
});
