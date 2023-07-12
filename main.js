let celsiusInput = document.querySelector('.celsius')
let Submit = document.querySelector('#calc-submit')

Submit.addEventListener('click', (e)=> {
   e.preventDefault(); //Prevents the page from refreshing
   console.log('in fahrenheit it is ')
   console.log( celsiusInput.value * 1.8 + 32);
})

