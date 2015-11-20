![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# JavaScript Prototypes LAB

### Introduction

You are going to take over the Javascript world with a new army of Soldier objects.

- Create a new `soldier` constructor function that allows you to create soldiers
- A `soldier` should be able to have a `name` and `number`
- The default type of a solder should be `footsoldier`
- The `soldier`'s `number` should sequentially increase
- Each `soldier` in the army should have the same `battleCry`, an alert of **"FREEDOM!"**
- Your `army` should have a general, and who's type is `general`
- Your `general`'s `number` should be incremented inline with your `footsolders`


### Setup

```bash
$ npm install
$ mocha

  SOLDIERS
    ✓ should have Object as its prototype
    1) should have a number
    2) should have different numbers for different soldiers
    3) should have footSoldier as its default type
    4) should return FREEDOM! when battleCry is called

  GENERAL
    5) should be derived from Soldier
    6) should have a name
    7) should have a number
    8) should have general as its type
    9) should return FREEDOM! when battleCry is called

  FOOTSOLDIERS
    10) should be derived from Soldier
    11) should have a name
    12) should have a number
    13) should have footSoldier as its type
    14) should return FREEDOM! when battleCry is called


  1 passing (43ms)
  14 failing
```

Happy Coding!!


