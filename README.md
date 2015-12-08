#Shadowrun API

###WARNING: THIS API IS IN VERY EARLY ALPHA

## Endpoints

All routes begin with /api/alpha

#### GET Characters

* /characters => all characters

#### GET Items

* /items => all items

  ##### GET 'Ware

  * /items/ware => all cyberware and bioware

    ##### GET Cyberware

    * /items/cyberware => all cyberware
    * /items/cyberware/name/:name => named cyberware
    * /items/cyberware/type/:type => all cyberware of the given type

    ##### GET Cyberware

    * /items/bioware => all bioware
    * /items/bioware/name/:name => named cyberware
    * /items/bioware/type/:type => all bioware of the given type

    ##### GET Bioware

  ##### GET Weapons

  * /items/weapons => all weapons
  * /items/weapons/name/:name => named weapon
  * /items/ware/type/:type => all weapons of the given type

#### GET Skills

* /skills => all skills
* /skills/name/:name => named skill
* /skills/type/:type => all skills of the given type
