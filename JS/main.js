//(function () {


//items.forEach( function (item) {
// console.log(item.price);

//var prices = items.map ( function (item) {
  //return item.price;

//});
//console.log(prices);

//var sum = prices.reduce( function (prev, next) {
  //return prev + next

//});
//console.log(sum);

//var avg = sum / items.length;
//console.log(avg);

// Convert it to 2 decimal places
//var converted = avg.toFixed(2);
//console.log(converted);

// Make it a String
//var str = 'The average price is $' + converted;
//console.log(str);

// Make it show up on the page
//var answer1 = document.querySelector('#answer1');
//var textNode = document.createTextNode(str);

//answer1.appendChild(textNode);


 //}());


// Question #2


(function () {

var itemTitle = [];

var merchandise = items.filter( function (beers) {
  if (beers.price > 14 && beers.price < 18){
    itemTitle.push(beers.title);
   }
  });  
  
  console.log(itemTitle);

var answer2 = document.querySelector('#answer2');


 };







// Question #3

(function () {

var itemPrice = [];

var merchItem = items.filter( function (schlitz) {
  if (schlitz.title = '/xA3') {
    itemPrice.push(schlitz.title);

  };
};

