## Stories
#### Character Creation
* Priority table
  * click on each priority to select
    * should update behind the scenes limits
    * highlights on click
    * unhighlight all others on the row and column
      * perhaps by having the highlighted square add a class?
      * then remove that class from the other squares with class rowX and columnY
    * Magic priority needs to be able to select each psuedoclass
      * should remove the highlight from each other as will rows/columns
      * depending on the class should reveal magic skills/complex forms etc.
* Personal Data
  * forms for entering each field that is text
  * +/- buttons for increasing/decreasing numeric values
  * updates notoriety other calculated stats based on streetCred and publicAwareness
* Metatype
  * dropdown of available metatypes
  * move it in the Personal Data field
  * when selecting a metatype, should set new min/max limits
* Attributes
  * limited from priority table
  * +/- buttons for increasing/decreasing numeric values
  * only 1 attribute allowed to be maxed
  * 2 allowed to be 1 below max
  * any number 2 below max
  * accumulates total points spent and compares to limit
  * seperate counter for magic/resonance attributes
* Qualities
  * simple
    * dropdown of available qualities
      * positive
      * negative
  * preferred
    * full list of qualities divided by negative and positive
    * each will have a search bar
      * dynamically changes the list to reflect the search
    * hovering over a quality should reveal it's description
  * should impact character stats accordingly
  * karma tracker
* Items
  * text field for items name
  * number field for cost
  * number field for quantity
  * accumulates total spent and compares against resource limit
* Skills
  * +/- button for increasing skill rank
  * text field for adding skill
  * checkbox for skill group or not
  * accumulates and compares against single/group skill limit
  * Subfields
    * Active Skills
    * Magic Skills
    * Spells
    * Resonance Skills
    * Complex Forms
    * Adept Skills
    * Knowledge Skills

#### Character Display
* Dropdown of all characters available from the database
* allows viewing of a RO character sheet
* should be formatted similarly to [Shadowrun 5th Edition Character Sheet](http://cdn.shadowruntabletop.com/wp-content/uploads/Downloads/CAT27000_Shadowrun%205_CharacterSheet.pdf?b979cc)

#### GM assistance tool
* perhaps in the far future add video chat to enable long distance games (for me!)
* save/load campaign
* Allows selection of characters to take part in the campaign
* Select from predefined NPC characters or custom built characters to be in a combat
  * round tracker
    * rolls initiative at beginning of each round
    * easy interface to add / subtract health (+/- button)
    * when an NPC character is put to 0 health removes it from the tracker?
    * keeps track of modifiers for combat
      * blinded
      * behind cover
      * need to research modifiers
    * can have lots of automation but allows for just inputing values if people want to roll physical die

#### Users
* login / logout
* guests can view all characters in RO display
* users can view all characters in RO display
* users can create/edit any of their characters
* campaigns
  * users can create a campaign
    * campaign creator gets special GM status
    * GM can add NPCs to the campaign
    * GM can add characters to their campaign
      * this allows the user associated with that character to view and participate in the campaign
* MORE TBD

#### Admin
* can add new
  * skills
  * qualities
  * etc.
* can delete any character
* can update any character
* can remove users

## Backend

#### Database
* should convert from MongoDB over to a SQL database
* use postgres and sequelize
* tables  
  * users
  * characters
    * connects all the other databases into a single character
    * skills
    * personal data
    * qualities
    * items
    * attributes
  * personal data
    * alias (string, required)
    * metatype (string)
    * age (number)
    * height (number)
    * weight (number)
    * sex (string)
    * ethnicity (string)
    * street cred (number)
    * public awareness (number)
    * notoriety (number)
    * memory (number)
    * composure (number)
    * judge intentions (number)
    * walk speed (number)
    * run speed (number)
  * attributes
    * strength (number, required)
    * agility (number, required)
    * reaction (number, required)
    * body (number, required)
    * intuition (number, required)
    * charisma (number, required)
    * logic (number, required)
    * will (number, required)
    * magic (number)
    * resonance (number)
    * edge (number, required)
    * initiative (number, required)
    * astral initiative (number, required)
  * items
    * item id (required)
    * quantity (number, required)
  * skills
    * skill id (required)
    * rank

* RO tables
  * all of the available skills/qualities ect for character creation
  * skills
    * type (string, notnull, required)
    * name (string, notnull, required)
    * group (string, required) {what skill group do i belong to?}
  * skill groups {might be completely redundant}
    * fills the need to be able to find skills by group
    * type (string, notnull, required)
    * members (array?, required)
  * qualities
    * name (required, notnull)
    * description (required, notnull)
  * items
    * cost (number, required)
    * name (string, required)
    * availability (string, required)
    * type (string, required)
