console.log('Funguju')

const nadpis = document.querySelector('h1')
const kameny = document.querySelectorAll('.kamen')


const tonNaKameni = (kamen)=>{
 const ton = kamen.textContent
 nadpis.textContent = ton

 const zvuk = new Audio(`tony/${ton}.mp3`);
 zvuk.play();
}


const stiskTlacitka = (e) =>{
 tonNaKameni(e.target)
}

kameny.forEach((kamen) => {
  kamen.addEventListener('click', stiskTlacitka)
});




