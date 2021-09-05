const inp = document.querySelector('input'); 
 
    



    document.querySelector('button').addEventListener('click', () => {
        let check = inp.value.toLowerCase(); 
        if (check === 'варшава' || check === 'в варшаве' || check === "варшаве" || check === "в польше" || check === "польша") {
            window.open("./index.html","_self")
        } ъ
   })




