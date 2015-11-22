var numberCount = 0;
var number = 0;
var battleCry = Soldier.prototype.battleCry = function(){
  return "FREEDOM!";
}
//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
function Soldier() {
  this.number = numberCount++;
  this.type = "footSoldier";
  battleCry();
}
//------------------------------------------------------
// GENERAL
//------------------------------------------------------
General.prototype = new Soldier();

function General() {
  this.name = name;
  this.number = number;
  this.type = 'general';
}
//------------------------------------------------------
// FOOTSOLDIERS
//------------------------------------------------------
FootSoldier.prototype = new Soldier();

function FootSoldier() {
  this.name = name;
}

module.exports = {
  Soldier:     Soldier,
  General:     General,
  FootSoldier: FootSoldier
}
