import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(e.target.delay.value);
  const state = e.target.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms` });
    })
    .catch(delay => {
      iziToast.error({ message: `❌ Rejected promise in ${delay}ms` });
    });
});
