

import quotesData from './quotes.json';

document.addEventListener('DOMContentLoaded', () => {


  function oidezet() {
    const idezetlista = document.getElementById('idezetl');
    const lista = Array.from(quotesData.quotes);
    lista.sort((a, b) => a.author.localeCompare(b.author));
    const ul = document.createElement('ul');
    lista.forEach(quote => {
      const li = document.createElement('li');
      li.innerHTML = `${quote.author} :${quote.quote}`;
      ul.appendChild(li);
    });
    idezetlista.appendChild(ul);
  }
  
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', oidezet);


  function the() {
    
    const thelista = document.getElementById('thelista');
    const lista = Array.from(quotesData.quotes);
    const ul = document.createElement('ol');
  
    lista.forEach(quote => {
      if (quote.quote.toLowerCase().includes('the')) {
        const li = document.createElement('li');
        li.innerHTML = `${quote.author}: ${quote.quote.replace(/the/gi, '<strong>The</strong>')}`;
        ul.appendChild(li);
      }
    });
  
    thelista.appendChild(ul);
  }
  
  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', the);
  
  function hossz() {
   

    const hosszlista = document.getElementById('hosszlista');
    const lista = Array.from(quotesData.quotes);
    const lengths = lista.map(quote => quote.quote.length);
    const lengthsString = lengths.join(', ');
  
    hosszlista.textContent = lengthsString;
  }
  
  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', hossz);

  function db() {
    

    const input = document.getElementById('input');
    const szamol = document.getElementById('szamol');
    const lista = Array.from(quotesData.quotes);
    const szerzonev = input.value;
    const szerzosz = lista.filter(quote => quote.author === szerzonev);
  
    szamol.value = szerzosz.length;
  }
  
  const btn4 = document.getElementById('btn4');
  btn4.addEventListener('click', db);
  
});





