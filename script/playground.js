// amount = 100
// quantity = 5
// console.log('amount:', amount)
// console.log('quantity:', quantity)

// console.log(Math.floor(Math.random * 3))
// let weather = prompt('how is the waether?')
// if (weather == 'rain'){
//   console.log("wear ur raincoat")
// }
// else{
//   console.log('grab ur sunglasses')
// }
// function whatIsMyName(name){
//   console.log(name)
// }
// whatIsMyName("Mud")
// let Mub = "Ade"
// function greeting(name){
//   let greet = `hi  ${name}, nice to meet you!`
//   console.log(greet)
// }
// greeting('Ola')

// let sum = (a,b) => a+b
// let summit = sum(10, 6)
// console.log(summit)

// const person ={name: "qazi", shirt: "black"}
// console.log(person.name)
// console.log(person["shirt"])

// const introduce= (nameValue, shirtValue ) =>{
//   const person = {name: nameValue, shirt:shirtValue, 
//     credit:10000, debit:3000, balance:function() {return this.credit-this.debit }}
//   let init = `my name is ${person.name}, and I love ${person.shirt}
//    shirt and I have $${person.balance()} balance`
//   return init
// }

// console.log(introduce("Mubarak", "white"))
// const double = (numbers)=>{
//   let result = []
//   for(number of numbers){
//     result.push(number*2)
//   }  
//   return result
// }

// console.log(double([2,4,5,6,7,3]))


// const countLetters = (phrase)=>{
// //  let result= 0
// //   for (const letter in phrase){
// //     console.log(Number(letter) + 1)

// //     result = Number(letter) + 1
// //   }
//   return {result: phrase.length}
// }
// // of is used to get the actual letter and in is
// // used to get the index of each letter
// const phras = "Can I take you on a ride?"
// console.log(countLetters(phras))

// const sumArray = (numbers) =>{
//   let result = 0;
//   for (number of numbers){
//     result+= number
//   }
//   return{result: result}
// }
// let numbers = [1,2,3,4,5]
// console.log(sumArray(numbers))

// let numbers = [1,2,3,4,5]

// const max = (nums) =>{
//   let max = nums[0]
//   // for (let num = 0; num < nums.length; num++){
//     for(const num of nums){
//     if (nums[num] > max){ max = nums[num]}
//   }
//   return{maximum: max}
// }
// console.log(max(numbers))

// const frequencyCounter = (phrase)=>{
//   let frequency = {}
//   for (word of phrase){
//     if (word in frequency){
//       frequency[word]++
//     }
//     else{
//       frequency[word] = 1
//     }
//   }
//   return frequency
// }
// console.log(frequencyCounter("elephant"))


// const wordFrequencyCounter = (phrase)=>{
//   let frequency = {}
//   words = phrase.split(' ')
//   for (word of words){
//     if (word in frequency){
//       frequency[word]++
//     }
//     else{
//       frequency[word] = 1
//     }
//   }
//   return frequency
// }
// console.log(wordFrequencyCounter("A boy will always be a boy"))

// map loops and return an array  
// const double = [1,2,3].map(num=> num * 2)

// console.log(double)

// const doubles = (nums)=>{
//   let result =nums.map(num=>num * 2)
//   return result
// }
// let numbers = [3,4,5]
// console.log(doubles(numbers))

// let numbers = [1,2,3,4,5,6,]
// const filterNumber= (nums)=>{
//   let result = nums.filter(num=> num > 3)
//   return result
// }
// console.log(filterNumber(numbers))

// const actors = [
//   {name: "Bill", worth: 100}, {name: "Ball", worth: 200},
//    {name: "Boll", worth: 300}, {name: "Bell", worth: 400},
// ]

// let result = actors.filter(actor=>actor.worth>100)
// //console.log(result)
// let names = result.map(nam=> nam.name).join(', ')

// playground.innerHTML = `<h1>${names}</h1>` 
//reduce takes in a function as an accumulator, reduce loops & gives back d accumulator
// const nums = [1,2,3,4]
// let result = nums.reduce((a,b) =>a + b, 0)
// console.log(result)
 
// const sum = actors.reduce((a,b)=>a+b.worth, 0)

// console.log(sum)




// let titleDiv = document.getElementById("tit")
// let message = "hello, my man"
// console.log(titleDiv.innerText)
// titleDiv.innerText = message
// console.log(titleDiv.innerText)
// titleDiv.innerHTML = `<p>${message}</p>`
// // titleDiv.innerHTML = message
// titleDiv.style.color = green
// let redDiv = document.getElementById("red")
// let yellowDiv = document.getElementById("yellow")
// let greenDiv = document.getElementById("green")
// redDiv.onclick = () => console.log("red")
// yellowDiv.onclick = () => console.log("yellow")
// greenDiv.onclick = () => console.log("green")

// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)
// let timeClicked = {'red': 0, 'yellow': 0, 'green': 0}
// squares.forEach(square => {
//  square.onclick = () =>{ 
//   timeClicked[square.value]+=1
//   square.innerText= timeClicked[square.value]
//   // console.log(square.value)
// }
// })

// function clearGameScore (){
//   timeClicked.red = 0
//   timeClicked.yellow= 0
//   timeClicked.green = 0
//   squares.forEach(square => {
//     square.innerText=''})
// }
// const clearGameDiv = document.getElementById('clear-game')
// clearGameDiv.onclick=()=> clearGameScore()

// const randomFruits = (fruits)=>{
//   const randomNumber = Math.floor(Math.random()) * fruits.length

//   console.log(randomNumber)
//   return fruits[randomNumber]
// }

// fruits = ["apple", "pineaple", "orange", "pawpaw", "banana" ]

// console.log(randomFruits(fruits))

document.addEventListener("keydown", function(e){
  if(e.key == "q"){
    console.log("you pressed Q")
  }
  else{
    console.log("not Q")
  }
})