
card1 = document.getElementById('card1');
card1p = document.getElementById('card1p');

card2 = document.getElementById('card2');
card2p = document.getElementById('card2p');

card3 = document.getElementById('card3');
card3p = document.getElementById('card3p');

card4 = document.getElementById('card4');
card4p = document.getElementById('card4p');

card1.addEventListener('mouseover', ()=>{
   card1p.style.color = 'white'; 
   card1p.style.fontSize = '3vw'; 
   card1p.style.margin = '50% auto';
   card1p.innerText = '|BOGOTÁ|';
});

card1.addEventListener('mouseout', ()=>{
    card1p.style.color = '#F1B95B'; 
    card1p.style.fontSize = '6vw'; 
    card1p.style.margin = '50% 0';
    card1p.style.marginLeft = '20%';
    card1p.innerHTML = '|BO <br> GO <br> TÁ|';
 });


 
card2.addEventListener('mouseover', ()=>{
    card2p.style.color = 'white'; 
    card2p.style.fontSize = '3vw'; 
    card2p.style.margin = '50% auto';
    card2p.innerText = '|CALI|';
 });
 
 card2.addEventListener('mouseout', ()=>{
     card2p.style.color = '#F1B95B'; 
     card2p.style.fontSize = '6vw'; 
     card2p.style.margin = '50% 0';
     card2p.style.marginLeft = '20%';
     card2p.innerHTML = '|CA <br> LI|';
  });


  
card3.addEventListener('mouseover', ()=>{
    card3p.style.color = 'white'; 
    card3p.style.fontSize = '3vw'; 
    card3p.style.margin = '50% auto';
    card3p.innerText = '|CARTAGENA|';
 });
 
 card3.addEventListener('mouseout', ()=>{
     card3p.style.color = '#F1B95B'; 
     card3p.style.fontSize = '6vw'; 
     card3p.style.margin = '50% 0';
     card3p.style.marginLeft = '20%';
     card3p.innerHTML = '|CAR <br> TA <br> GE <br> NA|';
  });

  card4.addEventListener('mouseover', ()=>{
    card4p.style.color = 'white'; 
    card4p.style.fontSize = '3vw'; 
    card4p.style.margin = '50% auto';
    card4p.innerText = '|MEDELLIN|';
 });
 
 card4.addEventListener('mouseout', ()=>{
     card4p.style.color = '#F1B95B'; 
     card4p.style.fontSize = '6vw'; 
     card4p.style.margin = '50% 0';
     card4p.style.marginLeft = '20%';
     card4p.innerHTML = '|ME <br> DE <br> LLIN|';
  });