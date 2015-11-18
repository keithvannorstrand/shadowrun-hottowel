(function() {
  'use strict';

  angular.module('app.core.services.priority')
    .factory('priorityservice', priorityFactory);

  function priorityFactory(){
    var limits = {
      attributes: {
        min: {},
        max: {}
      }
    };

    var factory = {
      setPriorities: setPriorities,
      setSkills: setSkills,
      setAttributeLimits: setAttributeLimits,
      setAttributes: setAttributes,
      setMagic: setMagic,
      setResources: setResources,
      setMetatypes: setMetatypes,

      getPriorities: getPriorities,
      getSkills: getSkills,
      getAttributes: getAttributes,
      getMagic: getMagic,
      getResources: getResources,
      getMetatypes: getMetatypes
    };

    return factory;

    // exported functions
    function setPriorities(priorities){
      setSkills(priorities.skill);
      setAttributes(priorities.attribute);
      setResources(priorities.resource);
      setMagic(priorities.magic);
      setMetatypes(priorities.metatype);
    }

    function setSkills(priority){
      switch(priority.toUpperCase()){
        case 'A': limits.skills = {single: 46, group: 10};
                  break;
        case 'B': limits.skills = {single: 36, group: 5};
                  break;
        case 'C': limits.skills = {single: 28, group: 2};
                  break;
        case 'D': limits.skills = {single: 22, group: 0};
                  break;
        case 'E': limits.skills = {single: 10, group: 0};
                  break;
      }
      console.log('skills limits', limits.skills);
    }

    function setAttributeLimits(metatype){
      defaultAttributeLimits();
      limits.attributes.special = metatype.limit;
      switch (metatype.metatype.toUpperCase()){
        case 'HUMAN':
          limits.attributes.min.edge = 2;
          limits.attributes.min.edge = 7;
          break;
        case 'ELF':
          limits.attributes.min.agility = 2;
          limits.attributes.min.charisma = 3;
          limits.attributes.max.agility = 7;
          limits.attributes.max.charisma = 8;
          break;
        case 'DWARF':
          limits.attributes.min.body = 3;
          limits.attributes.min.strength = 3;
          limits.attributes.min.will = 2;
          limits.attributes.max.body = 8;
          limits.attributes.max.strength = 8;
          limits.attributes.max.reaction = 5;
          limits.attributes.max.will = 7;
          break;
        case 'ORK':
          limits.attributes.min.body = 4;
          limits.attributes.min.strength = 3;
          limits.attributes.max.body = 9;
          limits.attributes.max.strength = 8;
          limits.attributes.max.charisma = 5;
          limits.attributes.max.logic = 7;
          break;
        case 'TROLL':
          limits.attributes.min.body = 5;
          limits.attributes.min.strength = 5;
          limits.attributes.max.body = 10;
          limits.attributes.max.strength = 10;
          limits.attributes.max.agility = 5;
          limits.attributes.max.charisma = 4;
          limits.attributes.max.wisdom = 5;
          limits.attributes.max.logic = 5;
          break;
      };
    }

    function setAttributes(priority){
      switch (priority.toUpperCase()){
        case 'A': limits.attributes.total = 24;
                  break;
        case 'B': limits.attributes.total = 20;
                  break;
        case 'C': limits.attributes.total = 16;
                  break;
        case 'D': limits.attributes.total = 14;
                  break;
        case 'E': limits.attributes.total = 12;
                  break;
      }
    }

    function setMagic(priority, cl){
      switch(priority.toUpperCase()){
        case 'A': if(cl === 'Technomancer'){
                    setMinMagicAndResonance(0,6);
                  } else {
                    setMinMagicAndResonance(6,0);
                  }
                  break;
        case 'B': if(cl === 'Adept'){
                    setMinMagicAndResonance(6,0);
                  } else if(cl === 'Aspected Magician'){
                    setMinMagicAndResonance(5,0);
                  } else if(cl === 'Technomancer'){
                    setMinMagicAndResonance(0,4);
                  } else {
                    setMinMagicAndResonance(4,0);
                  }
                  break;
        case 'C': if(cl === 'Adept'){
                    setMinMagicAndResonance(4,0);
                  } else if(cl === 'Technomancer'){
                    setMinMagicAndResonance(0,3);
                  } else {
                    setMinMagicAndResonance(3,0);
                  }
                  break;
        case 'D': setMinMagicAndResonance(2,0);
                  break;
        case 'E': setMinMagicAndResonance(0,0);
                  break;
      }
      console.log('magic limits', limits.attributes.min);
    }

    function setResources(priority){
      switch(priority.toUpperCase()){
        case 'A': limits.resource = 450000;
                  break;
        case 'B': limits.resource = 275000;
                  break;
        case 'C': limits.resource = 140000;
                  break;
        case 'D': limits.resource = 50000;
                  break;
        case 'E': limits.resource = 6000;
                  break;
      }
      console.log('resource limits', limits.resource);
    }

    function setMetatypes(priority){
      switch (priority.toUpperCase()){
        case 'A': limits.metatypes = [
                 {metatype: 'Human', limit: 9},
                 {metatype: 'Elf', limit: 8},
                 {metatype: 'Dwarf', limit: 7},
                 {metatype: 'Ork', limit: 7},
                 {metatype: 'Troll', limit: 5}];
                   break;
        case 'B':  limits.metatypes = [
                 {metatype: 'Human', limit: 7},
                 {metatype: 'Elf', limit: 6},
                 {metatype: 'Dwarf', limit: 4},
                 {metatype: 'Ork', limit: 4},
                 {metatype: 'Troll', limit: 0}];
                   break;
        case 'C': limits.metatypes = [
                 {metatype: 'Human', limit: 5},
                 {metatype: 'Elf', limit: 3},
                 {metatype: 'Dwarf', limit: 1},
                 {metatype: 'Ork', limit: 0}];
                  break;
        case 'D': limits.metatypes = [
                 {metatype: 'Human', limit:3},
                 {metatype: 'Elf', limit: 0}];
                  break;
        case 'E': limits.metatypes = [
                 {metatype: 'Human', limit:0}];
                  break;
      }
      console.log('metatype limits', limits.metatypes);
    }

    function getPriorities(){
      return priorities;
    }

    function getSkills(){
      return limits.skills;
    }

    function getAttributes(){
      return limits.attributes;
    }

    function getMagic(){
      return limits.magic;
    }

    function getResources(){
      return limits.resource;
    }

    function getMetatypes(){
      return limits.metatypes;
    }

    // helper functions
    function setMinMagicAndResonance(magic, resonance){
      limits.attributes.min.magic = magic;
      limits.attributes.min.resonance = resonance;
    }

    // FIXME: might be removing magic and resonance limits
    function defaultAttributeLimits(){
      limits.attributes.min= {
        body: '1',
        strength: '1',
        agility: '1',
        reaction: '1',
        intuition: '1',
        charisma: '1',
        wisdom: '1',
        logic: '1',
        will: '1',
        edge: '1'
      };
      limits.attributes.max= {
        body: '6',
        strength: '6',
        agility: '6',
        reaction: '6',
        intuition: '6',
        charisma: '6',
        wisdom: '6',
        logic: '6',
        will: '6',
        edge: '6'
      };
    }

  } // ends priority factory

})();
