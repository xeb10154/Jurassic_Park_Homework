const assert = require("assert")
const Park = require("../park.js")
const Dinosaur = require("../dinosaur.js")

describe('park', function(){

  let park;
  let dino1;
  let dino2;

  beforeEach(function(){
    park = new Park('Jurassic Park', 10)
    dino1 = new Dinosaur("Tyrannosaurus", "carnivore", 25)
    dino2 = new Dinosaur("Triceratops", "herbivorous", 10)
    dino3 = new Dinosaur("Triceratops", "herbivorous", 5)
    dino4 = new Dinosaur("Triceratops", "herbivorous", 2)
  });

  it('should start with 0 dinosaurs', function(){
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 0);
  });

  it('should add a dinosaur to its collection', function(){
    park.addDinosaur(dino1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1);
  });

  it('should remove a dinosaur from its collection', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.removeDinosaur(dino1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)
  });

  it('should find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    const actual = park.mostVisited()
    assert.strictEqual(actual, 25)
  });

  it('should find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    const actual = park.filterBySpecies("Triceratops").length
    assert.strictEqual(actual, 3)
  });

  it('should calculate number of visitors per day', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual, 42)
  });

  it('should calculate number of visitors per year', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    const actual = park.visitorsPerYear()
    assert.strictEqual(actual, 15330)
  });

  it('should calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    const actual = park.annualSales()
    assert.strictEqual(actual, 153300)
  });

// Extensions
  it('should remove all dinosaurs in the collections array', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    park.removeAllSpecies('Triceratops')
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)
  });

  xit('should provide an object containing two types of species', function(){

  });

});
