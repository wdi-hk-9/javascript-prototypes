//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
var soldierCounter = 0;
function Soldier() {
  this.number = soldierCounter++;
  this.type = 'footSoldier';
  this.cry = 'FREEDOM!'
}

Soldier.prototype.battleCry = function() {
  return this.cry;
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
}

FootSoldier.prototype = new Soldier();


module.exports = {
  Soldier:     Soldier,
  General:     General,
  FootSoldier: FootSoldier
}
