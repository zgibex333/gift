async function typeSentence(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function typeSentence2(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    setTimeout(async () => {
        while(i < letters.length) {
            await waitForMs(delay);
            $(eleRef).append(letters[i]);
            i++
          }
    }, 13000)
  }


typeSentence("Я услышал недавно, что романтика - это не про бабки, например купить машину - это не романтика, это благодарность. Поэтому я решил сделать эту страничку, она бесплатная и тут ты можешь выбрать себе подарок. Похоже на романтику.", "#sentence").then(typeSentence2("Выбери 1-у из 4-ех карточек:", "#choose"))


const arr = document.querySelectorAll('.card-item'); 



setTimeout(() => {
Array.from(arr).forEach(item => {
 item.classList.add('visible')
})
}, 15000); 

// Array.from(arr).forEach(item => {
//   item.addEventListener('click', () => {
//     let img = item.querySelector('.card-inner');
//     img.style.transform = 'rotateY(180deg)';
//   })
// })