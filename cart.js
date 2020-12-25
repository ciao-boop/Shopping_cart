let minusBtn = document.getElementsByClassName('minus')
let addBtn = Array.from(document.getElementsByClassName('plus'))
let quantité = Array.from(document.getElementsByClassName('quantité'))
let trash = Array.from(document.getElementsByClassName('trash'))
let like = document.getElementsByClassName('fas')

for (let i of addBtn) {  
i.addEventListener('click', function (){
  i.nextElementSibling.innerHTML=Number(i.nextElementSibling.innerHTML)+1;
  somme()
})
}
// for (i=0; i< length.addBtn; i++ ) {
//   console.log(quantité)
    // addBtn[i].addEventListener("click", function () {
    //    quantité[i].innerHTML=Number(quantité[i].innerHTML)+1;
      
    // });
  // }
  for (let i of minusBtn) {  
    i.addEventListener('click', function (){
      i.previousElementSibling.innerHTML=Number(i.previousElementSibling.innerHTML)-1;
      somme()
    })
    }


trash.map((el) =>
  el.addEventListener("click", function () {
    el.parentNode.parentNode.remove();
    somme()
  })
);

for (let heart of like) {
  heart.addEventListener("click", function () {
    if(heart.style.color==="red"){
        heart.style.color="gray"
    }
    else {heart.style.color="red"}
   
  });
}

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
