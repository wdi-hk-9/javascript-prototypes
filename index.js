// https://www.npmjs.com/package/faker
var faker  = require('faker');

var Military = require('./lib/military.js');

var WDI_Army = {
  general:  new Military.General('The General'),
  soldiers: []
}

// Create 10 soldiers for our Army
for(var i=1; i<=10; i++) {
  WDI_Army.soldiers.push(new Military.FootSoldier(faker.name.findName()));
}

console.log(WDI_Army);
