let minusBtn = document.getElementsByClassName('minus')
let addBtn = Array.from(document.getElementsByClassName('plus'))
let quantité = Array.from(document.getElementsByClassName('quantité'))
let trash = Array.from(document.getElementsByClassName('trash'))
let like = document.getElementsByClassName('fas')

// add button
for (let i of addBtn) {  
i.addEventListener('click', function (){
  i.nextElementSibling.innerHTML=Number(i.nextElementSibling.innerHTML)+1;
  somme()
})
}

// minus button
  for (let i of minusBtn) {  
    i.addEventListener('click', function (){
      i.previousElementSibling.innerHTML=Number(i.previousElementSibling.innerHTML)-1;
      somme()
    })
    }

// trash button
trash.map((el) =>
  el.addEventListener("click", function () {
    el.parentNode.parentNode.remove();
    somme()
  })
);

// heart button
for (let heart of like) {
  heart.addEventListener("click", function () {
    if(heart.style.color==="red"){
        heart.style.color="gray"
    }
    else {heart.style.color="red"}
   
  });
}

// total cart and count cart
function somme() {
  let price = document.getElementsByClassName("price");
  let quantité = document.getElementsByClassName("quantité");
  let sum = 0;
  let qté=0; 
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * quantité[i].innerHTML;
    qté=qté+Number(quantité[i].innerHTML)
  }
  document.getElementById('count-cart').innerHTML = qté
  document.getElementById("total-cart").innerHTML =  sum;
}
