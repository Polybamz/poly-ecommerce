const addToCart = document.querySelector('.btn')
const increamentValue = document.querySelector('.count')
const cartContainer = document.querySelector('.cart')

console.log(cartContainer)



const f1 = document.querySelector('#f2').style.display

const toFirst=()=>{
  document.querySelector('#f1').style.display= 'initial'
  document.querySelector('#f2').style.display = 'none'
  document.querySelector('#f3').style.display = 'none'
document.querySelector('#f4').style.display = 'none'
}
const toSecond=()=>{
  document.querySelector('#f1').style.display = 'none'
  document.querySelector('#f2').style.display = 'initial'
  document.querySelector('#f3').style.display = 'none'
document.querySelector('#f4').style.display = 'none'
}
const toThird=()=>{
  document.querySelector('#f1').style.display = 'none'
  document.querySelector('#f2').style.display = 'none'
  document.querySelector('#f3').style.display = 'initial'
document.querySelector('#f4').style.display = 'none'
}
const toFouth=()=>{
  document.querySelector('#f1').style.display = 'none'
  document.querySelector('#f2').style.display = 'none'
  document.querySelector('#f3').style.display = 'none'
document.querySelector('#f4').style.display = 'initial'
}
    const add = document.querySelector('#b')
    const sub = document.querySelector('#a')

    add.addEventListener('click',function(){
    increamentValue.innerHTML++
    document.querySelector('.h').innerHTML++
    
})
sub.addEventListener('click',function(){
     increamentValue.innerHTML--

     document.querySelector('.h').innerHTML--
  })
    
  
  const cartb = document.querySelector("#cp")
  cartb.addEventListener('click', function(){
    document.querySelector('.cart').style.display = "initial"
  })


  const delet = document.querySelector(".delete")
  delet.addEventListener('click', function(){
    document.querySelector('.cart').style.display = "none"
  })
  // addToCart.addEventListener('click', function(){
  //   document.querySelector(".h").innerHTML = '10'
  // })
  function addTo(){
  
  }


const menu = document.querySelector('.menu')
const anco = document.querySelector('.anco')
  menu.addEventListener('click',function(){
    anco.style.visibility = 'initial'
    anco.style.left = '0'
    document.querySelector('.x').style.display = 'initial'
  })
  document.querySelector('.x').addEventListener('click',function(){
    anco.style.left = '-120'
    anco.style.visibility = 'hidden'
  })



  let newCount = 125*  document.querySelector('.count').innerHTML
 console.log(newCount)
  addToCart.addEventListener('click',function(){
    
    let newBody = document.createElement('div')
    let img = document.createElement('img')
    
    let newDiv = document.createElement('div')
    let paragraph1 = document.createElement('p')
    let paragraph2 = document.createElement('p')
    let button = document.createElement('p')
    // let delet = document.createElement('delete')
  
  
    cartContainer.appendChild(newBody)
    newBody.appendChild(img)
    newBody.appendChild(newDiv)
    newDiv.appendChild(paragraph1)
    newDiv.appendChild(paragraph2)
    // newDiv.appendChild(delet)
    cartContainer.appendChild(button)
    console.log(cartContainer)


    newBody.classList.add('newBody')
    newDiv.classList.add('newDiv')
    paragraph1.classList.add('pa1')
    paragraph2.classList.add('pa2')
    img.classList.add('newImg')
   button.classList.add('btnStyle')




    if(document.querySelector('.h').innerHTML <= 0){
      alert('Do a selection')
    } else {
      document.querySelector('.emt').style.display = 'none'
      paragraph1.innerHTML = 'Fall Edition Sneakers'
      paragraph2.innerHTML =  newCount
      button.innerHTML = 'Checkout'
      // delet.innerHTML = <i class="fa fa-trash-o" aria-hidden="true"></i>

      img.setAttribute('src','./images/image-product-1.jpg')
    }
    
  })