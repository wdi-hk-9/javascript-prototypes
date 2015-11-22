//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
var soldierNumber = 0;
function Soldier(name) {
  this.number = soldierNumber++;
  this.type = 'footSoldier';
}

 Soldier.prototype.battleCry = function() {
  return "FREEDOM!";
}

//------------------------------------------------------
// GENERAL
//------------------------------------------------------
function General(name) {
  this.name = name;
  this.type = 'general';
}

General.prototype = new Soldier();


//------------------------------------------------------
// FOOTSOLDIERS
//------------------------------------------------------
function FootSoldier(name) {
  this.name = name;
  this.type = 'footSoldier';
}

FootSoldier.prototype = new Soldier();

module.exports = {
  Soldier:     Soldier,
  General:     General,
  FootSoldier: FootSoldier
}
