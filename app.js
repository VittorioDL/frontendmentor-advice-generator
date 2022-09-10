const adviceText = document.querySelector('#advice-text');
const adviceId = document.querySelector('#advice-id');
const resBtn = document.querySelector('#getData');

resBtn.addEventListener('click', () => {
  getAdvice();
});
 
window.onload = () => {
  getAdvice();
};
 
 
function getAdvice() {
 
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    adviceText.innerHTML = Adviceobj.advice;
    adviceId.innerHTML = Adviceobj.id;
  }).catch(error => {
    console.log(error);
  });
 
}
 
 
 