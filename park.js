const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];
}

Park.prototype.numberOfDinosaurs = function(){
  return this.collection.length;
}

Park.prototype.addDinosaur = function(dino){
  this.collection.push(dino)
}

Park.prototype.removeDinosaur = function(dino){
  let position = this.collection.indexOf(dino)
  this.collection.splice(position,1)
}

Park.prototype.mostVisited = function(){
  let highest = 0;
  for(dino of this.collection){
    if(dino.attracted > highest){
      highest = dino.attracted;
    };
  };
  return highest
}

Park.prototype.filterBySpecies = function(species){
  let filteredArray = []
  for(dino of this.collection){
    if(dino.species === species){
      filteredArray.push(dino)
    }
  }
  return filteredArray
}

Park.prototype.visitorsPerDay = function(){
  let total = 0
  for(dino of this.collection){
    total += dino.attracted
  }
  return total
}

Park.prototype.visitorsPerYear = function(){
  return this.visitorsPerDay() * 365
}

Park.prototype.annualSales = function(){
  return this.visitorsPerYear() * this.ticketPrice
}

Park.prototype.removeAllSpecies = function(species){
  let toDelete = [] // record indices to delete
  for(let i = 0; i <= this.collection; i++){
    if(this.collection[i].species === species){
      toDelete.unshift(i)
    }
  }
  console.log(toDelete.length);

// reverse delete starting from the back of the array
  for(let i = toDelete.length; i >= 0; i--){
    this.collection.splice(toDelete[i],1)
  }

}

// Park.prototype.categorise = function(){
//   this.collection
// }

module.exports = Park;
