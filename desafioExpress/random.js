 const products = [
     {id: 1, modelo: 'Xiaomi 9', memoria: '6gb'},
     {id: 2, modelo: 'Xiaomi 10', memoria: '6gb'},
     {id: 3, modelo: 'Xiaomi 11', memoria: '8gb'}

 ]
 
 const idProducts = products.map((product) =>{
    return (product.modelo)    
})

const stringProduct = JSON.stringify(idProducts)
console.log(stringProduct)
 function randomNumber (min,max) {

     return Math.floor(Math.random() * (max -min) + min)
 }

 console.log(randomNumber(1,1000))