// - A `soldier` should be able to have a `name` and `number`
// - The `soldier`'s `number` should sequentially increase
// - Your `general`'s `number` should be incremented inline with your `footsolders`

// https://github.com/shouldjs/should.js
var should = require('chai').should();
// https://www.npmjs.com/package/faker
var faker  = require('faker');


// LIBRARY WE WANT TO TEST
var Military = require('../lib/military.js');

//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
describe('SOLDIERS', function() {
  before(function(){
    Soldier = Military.Soldier;
    soldier = new Soldier();
  });

  it('should have Object as its prototype', function () {
    Object.getPrototypeOf(soldier).should.be.an('Object');
  });

  it('should have a number', function () {
    soldier.number.should.be.a('Number')
  });

  it('should have different numbers for different soldiers', function () {
    var soldier2 = new Soldier();
    soldier.number.should.not.equal(soldier2.number)
  });

  it('should have footSoldier as its default type', function () {
    soldier.type.should.equal('footSoldier')
  });

  it('should return FREEDOM! when battleCry is called', function () {
    soldier.battleCry().should.be.a('string');
    soldier.battleCry().should.equal('FREEDOM!');
  });
});

//------------------------------------------------------
// GENERAL
//------------------------------------------------------
describe('GENERAL', function() {
  before(function(){
    General = Military.General;
    name = faker.name.findName();
    general = new General(name);
  });

  it('should be derived from Soldier', function () {
    (general instanceof Soldier).should.equal(true);
  });

  it('should have a name', function () {
    general.name.should.be.a('String');
    general.name.should.equal(name);
  });

  it('should have a number', function () {
    general.number.should.be.a('Number')
  });

  it('should have general as its type', function () {
    general.type.should.equal('general')
  });

  it('should return FREEDOM! when battleCry is called', function () {
    general.battleCry().should.be.a('string');
    general.battleCry().should.equal('FREEDOM!');
  });
});

//------------------------------------------------------
// FOOTSOLDIERS
//------------------------------------------------------
describe('FOOTSOLDIERS', function() {
  before(function(){
    FootSoldier = Military.FootSoldier;
    name = faker.name.findName();
    footSoldier = new FootSoldier(name);
  });

  it('should be derived from Soldier', function () {
    (footSoldier instanceof Soldier).should.equal(true);
  });

  it('should have a name', function () {
    footSoldier.name.should.be.a('String');
    footSoldier.name.should.equal(name);
  });

  it('should have a number', function () {
    footSoldier.number.should.be.a('Number')
  });

  it('should have footSoldier as its type', function () {
    footSoldier.type.should.equal('footSoldier')
  });

  it('should return FREEDOM! when battleCry is called', function () {
    footSoldier.battleCry().should.be.a('string');
    footSoldier.battleCry().should.equal('FREEDOM!');
  });
});
