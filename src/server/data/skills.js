/*
  FIXME: NOT THE FULL EXTENT OF KNOWLEDGE SKILLS
  FIXME: several skills have 'by type', 'by spirit', 'by sprite', ect
*/
module.exports = [
  {
    name: 'Archery',
    attribute: 'Agility',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Bow', 'Crossbow','Non-Standard Ammunition', 'Slingshot']
  },
  {
    name: 'Automatics',
    attribute: 'Agility',
    type: 'Active',
    group: 'Firearms',
    default: true,
    specializations: ['Assault Rifles', 'Cyber-Implant', 'Machine Pistols', 'Submachine Guns']
  },
  {
    name: 'Blades',
    attribute: 'Agility',
    type: 'Active',
    group: 'Close Combat',
    default: true,
    specializations: ['Axes', 'Knives', 'Swords', 'Parrying']
  },
  {
    name: 'Clubs',
    attribute: 'Agility',
    type: 'Active',
    group: 'Close Combat',
    default: true,
    specializations: ['Batons', 'Hammers', 'Saps','Staves', 'Parrying']
  },
  {
    name: 'Exotic Ranged Weapon',
    attribute: 'Agility',
    type: 'Active',
    group: 'None',
    default: false,
    specializations: []
  },
  {
    name: 'Heavy Weapons',
    attribute: 'Agility',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Assault Cannons', 'Grenade Launchers', 'Guided Missiles',
      'Machine Guns', 'Rocket Launchers']
  },
  {
    name: 'Longarms',
    attribute: 'Agility',
    type: 'Active',
    group: 'Firearms',
    default: true,
    specializations: ['Extended-Range Shots', 'Long-Range Shots', 'Shotguns', 'Sniper Rifles']
  },
  {
    name: 'Pistols',
    attribute: 'Agility',
    type: 'Active',
    group: 'Firearms',
    default: true,
    specializations: ['Holdouts', 'Revolvers', 'Semi-Automatics', 'Tasers']
  },
  {
    name: 'Throwing Weapons',
    attribute: 'Agility',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Aerodynaic', 'Blades', 'Non-Aerodynamic']
  },
  {
    name: 'Unarmed Combat',
    attribute: 'Agility',
    type: 'Active',
    group: 'Close Combat',
    default: true,
    specializations: ['Blocking', 'Cyber Implants', 'Subduing Combat', 'Karate', 'Krav Maga', 'Kung Fu']
  },
  {
    name: 'Disguise',
    attribute: 'Intuition',
    type: 'Active',
    group: 'Stealth',
    default: true,
    specializations: ['Camouflage', 'Cosmetic', 'Theatrical', 'Trideo & Video']
  },
  {
    name: 'Diving',
    attribute: 'Body',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Liquid Breathin Apparatus', 'Mixed Gas', 'Oxygen Extraction',
      'SCUBA', 'Arctic', 'Cave', 'Commercial', 'Military', 'Controlled Hyperventilation']
  },
  {
    name: 'Escape Artist',
    attribute: 'Agility',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Cuffs', 'Ropes', 'Zip Ties', 'Contortionism']
  },
  {
    name: 'Free-Fall',
    attribute: 'Body',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['BASE Jumping', 'Break-Fall', 'Bungee', 'HALO',
      'Low Altitude', 'Parachute', 'Static Line', 'Wingsuit', 'Zipline']
  },
  {
    name: 'Gymnastics',
    attribute: 'Agility',
    type: 'Active',
    group: 'Athletics',
    default: true,
    specializations: ['Balance', 'Climbing', 'Dance', 'Leaping', 'Parkour', 'Rolling']
  },
  {
    name: 'Palming',
    attribute: 'Agility',
    type: 'Active',
    group: 'Stealth',
    default: true,
    specializations: ['Legerdemain', 'Pickpocket', 'Pilfering']
  },
  {
    name: 'Perception',
    attribute: 'Intuition',
    type: 'Active',
    group: 'None',
    default: true,
    specializations: ['Hearing', 'Scent', 'Searching', 'Taste', 'Touch', 'Visual']
  },
  {
    name: 'Running',
    attribute: 'Strength',
    type: 'Active',
    group: 'Athletics',
    default: true,
    specializations: ['Distance', 'Sprinting', 'Desert', 'Urban', 'Wilderness']
  },
  {
    name: 'Sneaking',
    attribute: 'Agility',
    type: 'Active',
    group: 'Stealth',
    default: true,
    specializations: ['Jungle', 'Urban', 'Desert']
  },
  {
    name: 'Survival',
    attribute: 'Willpower',
    type: 'Active',
    group: 'Outdoors',
    default: true,
    specializations: ['Desert', 'Forest', 'Jungle', 'Mountain', 'Polar', 'Urban']
  },
  {
    name: 'Swimming',
    attribute: 'Strength',
    type: 'Active',
    group: 'Athletics',
    default: true,
    specializations: ['Dash', 'Long Distance']
  },
  {
    name: 'Tracking',
    attribute: 'Intuition',
    type: 'Active',
    group: 'Outdoors',
    default: true,
    specializations: ['Desert', 'Forest', 'Jungle', 'Mountain', 'Polar', 'Urban']
  },
  {
    name: 'Con',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Acting',
    default: true,
    specializations: ['Fast Talking', 'Seduction']
  },
  {
    name: 'Etiquette',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Influence',
    default: true,
    specializations: ['Corporate', 'High Society', 'Media', 'Mercenary', 'Street', 'Yakuza']
  },
  {
    name: 'Impersonation',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Acting',
    default: true,
    specializations: ['Dwarf', 'Elf', 'Human', 'Ork', 'Troll']
  },
  {
    name: 'Instruction',
    attribute: 'Charisma',
    type: 'Social',
    group: 'None',
    default: true,
    specializations: ['By Active Skill' ,'By Knowledge category']
  },
  {
    name: 'Intimidation',
    attribute: 'Charisma',
    type: 'Social',
    group: 'None',
    default: true,
    specializations: ['Interrogation', 'Mental', 'Physical', 'Torture']
  },
  {
    name: 'Leadership',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Influence',
    default: true,
    specializations: ['Command', 'Direct', 'Inspire', 'Rally']
  },
  {
    name: 'Negotiation',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Influence',
    default: true,
    specializations: ['Bargainning', 'Contracts', 'Diplomacy']
  },
  {
    name: 'Performance',
    attribute: 'Charisma',
    type: 'Social',
    group: 'Acting',
    default: true,
    specializations: ['Presentation', 'Acting', 'Comedy', 'Instrumental']
  },{
    name: 'Alchemy',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Enchanting',
    default: false,
    specializations: ['Command', 'Contact', 'Time', 'by Spell Type']
  },
  {
    name: 'Arcana',
    attribute: 'Logic',
    type: 'Magic',
    group: 'None',
    default: false,
    specializations: ['Spell Design', 'Focus Design', 'Spirit Formula']
  },
  {
    name: 'Artificing',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Enchanting',
    default: false,
    specializations: ['Focus Analysis', 'Crafting']
  },
  {
    name: 'Assensing',
    attribute: 'Intuition',
    type: 'Magic',
    group: 'None',
    default: false,
    specializations: ['Aura Reading', 'Astral Signatures']
  },
  {
    name: 'Astral Combat',
    attribute: 'Will',
    type: 'Magic',
    group: 'None',
    default: false,
    specializations: ['Magician', 'Spirits', 'Mana Barriers']
  },
  {
    name: 'Banishing',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Conjuring',
    default: false,
    specializations: ['By spirit type']
  },
  {
    name: 'Binding',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Conjuring',
    default: false,
    specializations: ['By spirit type']
  },
  {
    name: 'Counterspelling',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Sorcery',
    default: false,
    specializations: ['By spell type']
  },
  {
    name: 'Disenchanting',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Enchanting',
    default: false,
    specializations: ['Alchemy Preparations', 'Power Foci']
  },
  {
    name: 'Ritual Spellcasting',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Sorcery',
    default: false,
    specializations: ['By Keyword']
  },
  {
    name: 'Spellcasting',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Sorcery',
    default: false,
    specializations: ['By spell type']
  },
  {
    name: 'Summoning',
    attribute: 'Magic',
    type: 'Magic',
    group: 'Conjuring',
    default: false,
    specializations: ['By spirit type']
  },
  {
    name: 'Compiling',
    attribute: 'Resonance',
    type: 'Resonance',
    group: 'Tasking',
    default: false,
    specializations: ['By sprite type']
  },
  {
    name: 'Decompiling',
    attribute: 'Resonance',
    type: 'Resonance',
    group: 'Tasking',
    default: false,
    specializations: ['By sprite type']
  },
  {
    name: 'Registering',
    attribute: 'Resonance',
    type: 'Resonance',
    group: 'Tasking',
    default: false,
    specializations: ['By sprite type']
  },
  {
    name: 'Aeronautics Mechanic',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Engineering',
    default: false,
    specializations: ['Aerospace', 'Fixed Wing', 'LTA(blimp)', 'Rotary Wing', 'Tilt Wing', 'Vector Thrust']
  },
  {
    name: 'Animal Handling',
    attribute: 'Charisma',
    type: 'Technical',
    group: 'None',
    default: true,
    specializations: ['By animal', 'Herding', 'Riding', 'Training']
  },
  {
    name: 'Armorer',
    attribute: 'Logic',
    type: 'Technical',
    group: 'None',
    default: true,
    specializations: ['Armor', 'Artillery', 'Explosives', 'Firearms',
      'Melee Weapons', 'Heavy Weapons', 'Weapon Accessories']
  },
  {
    name: 'Artisan',
    attribute: 'Intuition',
    type: 'Technical',
    group: 'None',
    default: false,
    specializations: ['By discipline']
  },
  {
    name: 'Automotive Mechanic',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Engineering',
    default: false,
    specializations: ['Walker', 'Hover', 'Tracked', 'Wheeled']
  },
  {
    name: 'Biotechnology',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Biotech',
    default: false,
    specializations: ['Bioinformatics', 'Bioware', 'Cloning', 'Gene Therapy', 'Vat Maintenance']
  },
  {
    name: 'Chemistry',
    attribute: 'Logic',
    type: 'Technical',
    group: 'None',
    default: false,
    specializations: ['Analytical', 'Biochemistry', 'Inorganic', 'Organic', 'Physical']
  },
  {
    name: 'Computer',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Electronics',
    default: true,
    specializations: ['Edit File', 'Matrix Perception', 'Matrix Search']
  },
  {
    name: 'Cybercombat',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Cracking',
    default: true,
    specializations: ['Devices', 'Grids', 'IC', 'Personas', 'Sprites']
  },
  {
    name: 'Cybertechnology',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Biotech',
    default: false,
    specializations: ['Bodyware', 'Cyberlimbs', 'Headware', 'Repair']
  },
  {
    name: 'Demolitions',
    attribute: 'Logic',
    type: 'Technical',
    group: 'None',
    default: true,
    specializations: ['Commercial Explosives', 'Defusing',
      'Improvised Explosives', 'Plastic Explosives']
  },
  {
    name: 'Electronic Warfare',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Cracking',
    default: false,
    specializations: ['Communications', 'Encryptions', 'Jamming', 'Sensor Operations']
  },
  {
    name: 'First Aid',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Biotech',
    default: true,
    specializations: ['Gunshot Wounds', 'Resuscitation', 'Broken Bones', 'Burns']
  },
  {
    name: 'Forgery',
    attribute: 'Logic',
    type: 'Technical',
    group: 'None',
    default: true,
    specializations: ['Counterfeiting',' Credsticks', 'False ID', 'Image Doctoring', 'Paper Forgery']
  },
  {
    name: 'Hacking',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Cracking',
    default: true,
    specializations: ['Devices', 'Files', 'Hosts', 'Personas']
  },
  {
    name: 'Hardware',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Electronics',
    default: false,
    specializations: ['Commlinks', 'Cyberdecks', 'Smartguns']
  },
  {
    name: 'Industrial Mechanic',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Engineering',
    default: false,
    specializations: ['Electrical Power Systems', 'Hydraulics', 'HVAC',
      'Idustrial Robotics', 'Structural', 'Welding']
  },
  {
    name: 'Locksmith',
    attribute: 'Agility',
    type: 'Technical',
    group: 'None',
    default: false,
    specializations: ['Combination', 'Keypad', 'Maglock', 'Tumbler', 'Voice Recognition']
  },
  {
    name: 'Medicine',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Biotech',
    default: false,
    specializations: ['Cosmetic Surgery', 'Extended Care', 'Implant Surgery',
      'Magical Health', 'Organ Culture', 'Trauma Surgery']
  },
  {
    name: 'Nautical Mechanic',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Engineering',
    default: false,
    specializations: ['Motorboat', 'Sailboat', 'Ship', 'Submarine']
  },
  {
    name: 'Navigation',
    attribute: 'Intuition',
    type: 'Technical',
    group: 'Outdoors',
    default: true,
    specializations: ['Augmented Reality Markers', 'Celestial', 'Compass', 'Maps', 'GPS']
  },
  {
    name: 'Software',
    attribute: 'Logic',
    type: 'Technical',
    group: 'Electronics',
    default: false,
    specializations: ['Data Bombs', 'By Complex Form']
  },
  {
    name: 'Gunnery',
    attribute: 'Agility',
    type: 'Vehicle',
    group: 'None',
    default: true,
    specializations: ['Artillery', 'Ballistic', 'Energy', 'Guided Missile', 'Rocket']
  },
  {
    name: 'Pilot Aerospace',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: false,
    specializations: ['Deep Space', 'Launch Craft', 'Remote Operation',
      'Semiballistic', 'Suborbital']
  },
  {
    name: 'Pilot Aircraft',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: false,
    specializations: ['Fixed-Wing', 'Lighter-Than-Air', 'Remote Operation',
      'Rotary Wing', 'Tilt Wing', 'Vectored Thrust']
  },
  {
    name: 'Pilot Walker',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: false,
    specializations: ['Biped', 'Multiped', 'Quadruped', 'Remote']
  },
  {
    name: 'Pilot Exotic Vehicle',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: false,
    specializations: []
  },
  {
    name: 'Pilot Ground Craft',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: true,
    specializations: ['Bike', 'Hovercraft', 'Remote Operation', 'Tracked', 'Wheeled']
  },
  {
    name: 'Pilot Watercraft',
    attribute: 'Reaction',
    type: 'Vehicle',
    group: 'None',
    default: true,
    specializations: ['Hydrofoil', 'Motorboat', 'Remote Operation', 'Sail', 'Ship', 'Submarine']
  },
  {
    name: 'Seattle Street Gang',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['Halloweeners', 'Ancients', 'Brain Eaters', '405 Hellhounds']
  },
  {
    name: 'UCAS Politics',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['Congressional', 'Presidential', 'by state', 'by lobby group' ,'by political party']
  },
  {
    name: 'History',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['by region', 'by era']
  },
  {
    name: 'Literature',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['Japanese', 'Early Twentieth Century', 'By Genre']
  },
  {
    name: 'Architecture',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['Commercial', 'Residential', 'by style']
  },
  {
    name: 'Business',
    attribute: '',
    type: 'Knowledge',
    group: 'None',
    default: false,
    specializations: ['Finance', 'Distribution', 'Manufacturing', 'Megacorp',
      'Digital Accounting', 'Small Business']
  },
  {
    name: 'Language',
    attribute: 'Intuition',
    type: 'Knowledge',
    group: 'None',
    default: true,
    specializations: ['Reading', 'Writing', 'Speaking']
  }
];
