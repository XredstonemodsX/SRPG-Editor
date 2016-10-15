/**
 * Represents the data for a dynamic skill
 *
 * @param {string} name - the name of the skill
 *
 * @constructor
 */
function Skill(name)
{
	this.components = [];

	// Included to simplify code when adding components
	this.html = document.getElementById('builderContent');
	
	this.dataKey = 'attributes';
	this.componentKey = 'components';
	
	// Skill data
    var iconList = materialList.slice(0);
    iconList.splice(materialList.indexOf('Arrow'), 1);
	// Class data
	this.data = [
            
                // GENERAL SETTINGS
                
		new StringValue('Name', 'name', name).setTooltip('The name of the class. This should not contain color codes'),
		new StringValue('Title', 'title', 'NONE').setTooltip('The prefix given to players who profess as the class which can contain color codes'),
		new StringValue('Template', 'template', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
                new ListValue('Texture Type', 'textureType', [ 'WEB', 'RESOURCE' ], 'RESOURCE').setTooltip('Set the texture link type.'),
		new StringValue('Texture Link', 'textureUri', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new StringValue('Cape Texture Link', 'capeTexture', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new StringValue('Overlay Texture Link', 'overlayTexture', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new ListValue('Faction', 'faction', factionList, 'Faction').setTooltip('The item that represents the class in GUIs'),
		new ListValue('Rotation Behavior', 'rotationBehavior', ['HeadRotation', 'NoRotation', 'RotateBody', 'Stalking' ], 'NoRotation').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Rotation Angle', 'rotation', 0).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
		new ListValue('Visible', 'visible', ['YES', 'NO', 'PARTIAL' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Model', 'modelType', modelList, 'NONE').setTooltip('The model that this NPC uses. This can be one of many used in-game.'),
                new ListValue('Gender', 'gender', [ 'MALE', 'FEMALE' ], 'MALE'),
                new IntValue('Size', 'size', 5).setTooltip('The size of this NPC. The default (that of a player) is 5. A child or smaller creature would be 3-4 and a larger NPC like a bear would be 7-8.'),
		new ListValue('Show Boss Bar', 'showBossBar', ['YES', 'NO', 'WHENATTACKING' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Show Nameplate', 'showName', ['YES', 'NO', 'WHENATTACKING' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                
                // GENERAL BEHAVIORS
                
                new ListValue('Avoids Water', 'avoidsWater', ['YES', 'NO' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Door Interaction', 'doorInteraction', ['NONE', 'BREAK', 'OPEN' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Burns in Sun', 'burnsInSun', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Avoids Sun (if Possible)', 'avoidsSun', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Can Drown', 'canDrown', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Can Sprint', 'canSprint', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Can Swim', 'canSwim', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Has Living Animation', 'livingAnimation', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ignore cobwebs when moving', 'ignoreCobwebs', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Interacts with other NPCs (Conversation)', 'interactWithOtherNPCs', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Shelters From', 'sheltersFrom', ['DARKNESS', 'SUNLIGHT', 'NONE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Moving Animation', 'movingAnimation', ['NORMAL', 'DANCING', 'SITTING', 'CRAWLING', 'CRYING','HUGGING','SITTING','WAVING','SNEAKING' ], 'NORMAL').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // COMBAT BEHAVIORS
                
                new ListValue('Can see Invisible Enemies', 'attackInvisible', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Defend Faction Members', 'defendFactionMembers', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Attack Hostile Factions', 'attackHostileFactions', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Must See Target When Attacking', 'mustSeeTarget', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Response to being attacked', 'attackedResponse', ['IGNORE', 'PANIC', 'RETREAT', 'RETALIATE' ], 'RETALIATE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Tactical Distance', 'tacticalDistance', 15).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                new ListValue('Tactical Behavior', 'tacticalBehavior', [ 'SURROUND', 'AMBUSH', 'HITNRUN', 'DODGE', 'STALK', 'NONE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Aggro Distance', 'aggroDistance', 48).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                new ListValue('Ranged Weapon Usage', 'rangedBehavior', [ 'ALWAYS', 'UNTILCLOSE', 'WHENMOVING' ], 'ALWAYS').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Aim when shooting with ranged weapon', 'aimWhileShooting', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Fire Wildly', 'fireIndirectly', [ 'FAR', 'SUPRISE', 'NONE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Leap at enemies', 'canLeap', [ 'YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // GENERAL STATS
                new IntValue('Maximum Health', 'maxHealth', 100).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                
                // DEFENSIVE STATS
                
                new ListValue('Health Regen (Passive)', 'passiveHealthRegen', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST'], 'LOW').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Health Regen (Combat)', 'combatHealthRegen', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Projectile Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Explosion Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Knockback Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Immune to Potions', 'immuneToPotions', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Immune to Fire', 'immuneToFire', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // MELEE OFFENSIVE STATS
		new ListValue('Melee Range', 'meleeRange', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Damage', 'meleeDamage', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Knockback', 'meleeKnockback', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                
               // RANGED OFFENSIVE STATS
		new ListValue('Ranged Range', 'rangedRange', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ranged Damage', 'rangedDamage', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ranged Knockback', 'rangedKnockback', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // RANGED PROJECTILE SETTINGS
                new ListValue('Ranged Projectile Behavior', 'rangedWeaponBehavior', ['NONE', 'PISTOL', 'MACHINEGUN', 'SHOTGUN', 'BOW', 'SNIPER', 'PLASMASTAFF', 'PLASMAPISTOL'], 'PISTOL').setTooltip('Ranged Projectile behavior defines the approximate fire rate and projectile speed of a NPCs ranged weapon. It doesnt control sound, appearance, range or damage of the projectile or weapon.'),
		new ListValue('Ranged Projectile Appearance', 'projectileAppearance', ['ARROW', 'BULLET', 'BLUEPLASMA', 'REDPLASMA', 'WHITEPLASMA' , 'GOLDPLASMA'], 'ARROW').setTooltip('What does the projectile this NPC has appear to look like?'),
		new ListValue('Ranged Projectile Size', 'projectileSize', ['TINY' , 'SMALL', 'MEDIUM', 'LARGE', 'HUGE' ], 'TINY').setTooltip('What is the size of the NPCs projectile? A Bullet is TINY, an arrow would be MEDIUM and a staff blast is up to you!'),
                new ListValue('Projectile Explosive Type', 'projectileExplosionType', ['NONE', 'SMALL', 'MEDIUM', 'LARGE' ], 'NONE').setTooltip('Whether or not the NPCs projectile is explosive. This currently bypasses grief prevention and should not be enabled for NPCs with possible access to protected areas.'),
                new ListValue('Projectile Trail Type', 'projectileTrail', ['Crit', 'Smoke', 'LargeSmoke', 'Enchant', 'Lightning', 'Portal', 'Magic', 'Redstone', 'None' ], 'None').setTooltip('Trail effect for the projectile.'),
                new StringValue('Projectile Sound', 'projectileSound', 'NONE').setTooltip('Sound effect for the projectile.'),

                // LOADOUT SETTINGS
		new ListValue('Respawns', 'respawnSetting', ['ALWAYS', 'DAY', 'NIGHT', 'NEVER' ], 'ALWAYS').setTooltip('Sets when this NPC will respawn, if it does.'),
		new ListValue('Respawn Delay', 'respawnDelay', ['INSTANT', '1MIN', '5MIN', '10MIN', '15MIN', '30MIN', '45MIN', '1HR', '2HR', '3HR', '4HR', '8HR', 'SERVERRESTART' ], '15MIN').setTooltip('Sets how long until this NPC respawns.'),
                new ListValue('Respawns at original spawn location', 'respawnsAtSpawn', ['YES', 'NO' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Dead body is hidden', 'hideDeadBody', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Naturally Despawns', 'naturallyDespawns', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Faction Importance', 'factionImportance', [ 'NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST' ], 'NONE').setTooltip('Faction Importance controls the amount of reputation granted or lost from the faction this NPC belongs to when it is killed. It also affects the reputation with this factions enemies.'),
                new ListValue('XP Dropped on Death', 'xpReward', experienceList, '0').setTooltip('Faction Importance controls the amount of reputation granted or lost from the faction this NPC belongs to when it is killed. It also affects the reputation with this factions enemies.'),
                new ListValue('Movement Speed', 'movementSpeed', [ 'SLOWEST', 'SLOW', 'NORMAL', 'FAST', 'FASTEST' ], 'NORMAL').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Movement Type', 'movementType', [ 'NONE', 'WANDERING' ], 'Select a movement type').setTooltip('Defines whether or not this NPC can move, and if so, how it behaves.'),
		new ListValue('Wandering Distance', 'wanderingDistance', wanderingList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
                new ListValue('Stop on Interact', 'stopOnInteract', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Pause when following path', 'pauseWhenFollowingPath', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Returns to Start', 'returnsToStart', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Say Lines in Random Order', 'randomLines', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new StringListValue('World Lines', 'worldLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say randomly when a player is nearby. Substitute @dp or {player} for the player name.'),
		new StringListValue('Repeatable Unavailable Lines', 'repeatableUnavailableLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say when a player attempts to talk to them when they arent eligible for a repeatable quest. Substitute @dp or {player} for the player name.'),
		new StringListValue('Attack Lines', 'attackLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say randomly when it attacks something'),
		new StringListValue('Interact Lines', 'interactLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say randomly when it is interacted with by a player.'),
		new StringListValue('Kill Lines', 'killLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say when it kills a player or NPC.'),
		new StringListValue('Killed Lines', 'killedLines', []).setTooltip('Define up to 8 lines (one per line) for the NPC to say when it is killed by a player or NPC.')


//              new ListValue('Parent', 'parent', ['None'], 'None').setTooltip('The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter'),
//		new ListValue('Permission', 'needs-permission', ['True', 'False'], 'False').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
//                new ByteListValue('Exp Sources', 'exp-source', [ 'Mob', 'Block Break', 'Block Place', 'Craft', 'Command', 'Special', 'Exp Bottle', 'Smelt', 'Quest' ], 273).setTooltip('The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml.'),
//		new AttributeValue('Health', 'health', 20, 0).setTooltip('The amount of health the class has'),
//		new DoubleValue('Mana Regen', 'mana-regen', 1, 0).setTooltip('The amount of mana the class regens each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval.'),
//		new ListValue('Skill Tree', 'tree', [ 'Basic Horizontal', 'Basic Vertical', 'Level Horizontal', 'Level Vertical', 'Flood', 'Requirement' ], 'Requirement'),
//		new StringListValue('Skills (one per line)', 'skills', []).setTooltip('The skills the class is able to use'),
//		new ListValue('Icon', 'icon', materialList, 'Jack O Lantern').setTooltip('The item that represents the class in GUIs'),
//		new IntValue('Icon Data', 'icon-data', 0).setTooltip('The data/durability value of the item that represents the class in GUIs'),
//		new StringListValue('Icon Lore', 'icon-lore', [
//			'&d' + name
//		]).setTooltip('The text shown on the item for the class in GUIs')
	];
}

/**
 * Applies the skill data to the HTML page, overwriting any previous data
 */ 
Skill.prototype.apply = function() 
{
	var builder = document.getElementById('builderContent');
	builder.innerHTML = '';
	
	// Set up the builder content
	for (var i = 0; i < this.components.length; i++)
	{
		this.components[i].createBuilderHTML(builder);
	}
}

/**
 * Creates the form HTML for editing the skill and applies it to
 * the appropriate area on the page
 */
Skill.prototype.createFormHTML = function()
{
	var form = document.createElement('form');
	
	var header = document.createElement('h4');
	header.innerHTML = 'NPC Details';
	form.appendChild(header);
	
	var target = document.getElementById('skillForm');
	target.innerHTML = '';
	target.appendChild(form);
	var h = document.createElement('hr');
	form.appendChild(h);
	
//	this.data[3].list.splice(1, this.data[3].list.length - 1);
//	for (var i = 0; i < skills.length; i++)
//	{
//		if (skills[i] != this) 
//		{
//			this.data[3].list.push(skills[i].data[0].value);
//		}
//	}
	for (var i = 0; i < this.data.length; i++)
	{
            if (this.data[i].name == 'Name') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Settings';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Avoids Water') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Behavior';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Can see Invisible Enemies') {
                var header = document.createElement('h4');
                header.innerHTML = 'Combat Behavior';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Maximum Health') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Health Regen (Passive)') {
                var header = document.createElement('h4');
                header.innerHTML = 'Defensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Melee Range') {
                var header = document.createElement('h4');
                header.innerHTML = 'Melee Offensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Ranged Range') {
                var header = document.createElement('h4');
                header.innerHTML = 'Ranged Offensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Ranged Projectile Behavior') {
                var header = document.createElement('h4');
                header.innerHTML = 'Ranged Projectile Settings';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Respawns') {
                var header = document.createElement('h4');
                header.innerHTML = 'Death and Respawn Handling';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Faction Importance') {
                var header = document.createElement('h4');
                header.innerHTML = 'Death Rewards and Consequences';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Movement Speed') {
                var header = document.createElement('h4');
                header.innerHTML = 'Movement Settings';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Say Lines in Random Order') {
                var header = document.createElement('h4');
                header.innerHTML = 'Interaction Settings';
                form.appendChild(header);
            }
		this.data[i].createHTML(form);
	}
	
	var hr = document.createElement('hr');
	form.appendChild(hr);

	
	var done = document.createElement('h5');
	done.className = 'doneButton';
	done.innerHTML = 'Menu',
	done.skill = this;
	done.form = form;
	done.addEventListener('click', function(e) {
		this.skill.update();
		var list = document.getElementById('skillList');
		list[list.selectedIndex].text = this.skill.data[0].value;
		this.form.parentNode.removeChild(this.form);
		showSkillPage('builder');
	});
	form.appendChild(done);
}

/**
 * Updates the skill data from the details form if it exists
 */
Skill.prototype.update = function()
{
	var index;
	var list = document.getElementById('skillList');
	for (var i = 0; i < skills.length; i++)
	{
		if (skills[i] == this)
		{
			index = i;
			break;
		}
	}
	var prevName = this.data[0].value;
	for (var j = 0; j < this.data.length; j++)
	{
		this.data[j].update();
	}
	var newName = this.data[0].value;
	this.data[0].value = prevName;
	if (isSkillNameTaken(newName)) return;
	this.data[0].value = newName;
	list[index].text = this.data[0].value;
}

/**
 * Checks whether or not the skill is using a given trigger
 *
 * @param {string} trigger - name of the trigger to check
 *
 * @returns {boolean} true if using it, false otherwise
 */ 
Skill.prototype.usingTrigger = function(trigger)
{
	for (var i = 0; i < this.components.length; i++)
	{
		if (this.components[i].name == trigger) return true;
	}
	return false;
}

/**
 * Creates and returns a save string for the skill
 */ 
Skill.prototype.getSaveString = function()
{
	var saveString = '';
	
	saveString += "npc:\n";
	for (var i = 0; i < this.data.length; i++)
	{
		if (this.data[i] instanceof AttributeValue) continue;
		saveString += this.data[i].getSaveString('  ');
	}
//	saveString += '  attributes:\n';
//	for (var i = 0; i < this.data.length; i++)
//	{
//		if (this.data[i] instanceof AttributeValue)
//		{
//			saveString += this.data[i].getSaveString('    ');
//		}
//	}
	if (this.components.length > 0)
	{
		saveString += '  components:\n';
		saveIndex = 0;
		for (var i = 0; i < this.components.length; i++)
		{
			saveString += this.components[i].getSaveString('    ');
		}
	}
	return saveString;
}

/**
 * Loads skill data from the config lines stating at the given index
 *
 * @param {YAMLObject} data - the data to load
 *
 * @returns {Number} the index of the last line of data for this skill
 */
Skill.prototype.load = function(data)
{
	if (data.active || data.embed || data.passive)
	{
		// Load old skill config for conversion
	}
	else 
	{
		this.loadBase(data);
	}
}

Skill.prototype.loadBase = loadSection;

/**
 * Creates a new skill and switches the view to it
 *
 * @returns {Skill} the new skill
 */ 
function newSkill()
{
	var id = 1;
	while (isSkillNameTaken('NPC ' + id)) id++;
	
	activeSkill = addSkill('NPC ' + id);
	
	var list = document.getElementById('skillList');
	list.selectedIndex = list.length - 2;
	
	activeSkill.apply();
	activeSkill.createFormHTML();
	showSkillPage('skillForm');
	
	return activeSkill;
}

/**
 * Adds a skill to the editor without switching the view to it
 *
 * @param {string} name - the name of the skill to add
 *
 * @returns {Skill} the added skill
 */ 
function addSkill(name) 
{
	var skill = new Skill(name);
	skills.push(skill);
	
	var option = document.createElement('option');
	option.text = name;
	var list = document.getElementById('skillList');
	list.add(option, list.length - 1);
	
	return skill;
}

/**
 * Checks whether or not a skill name is currently taken
 *
 * @param {string} name - name to check for
 *
 * @returns {boolean} true if the name is taken, false otherwise
 */ 
function isSkillNameTaken(name)
{
	return getSkill(name) != null;
}

/**
 * Retrieves a skill by name
 *
 * @param {string} name - name of the skill to retrieve
 *
 * @returns {Skill} the skill with the given name or null if not found
 */
function getSkill(name)
{
	name = name.toLowerCase();
	for (var i = 0; i < skills.length; i++)
	{
		if (skills[i].data[0].value.toLowerCase() == name) return skills[i];
	}
	return null;
}


var activeSkill = new Skill('NPC 1');
var activeComponent = undefined;
var skills = [activeSkill];
activeSkill.createFormHTML();
showSkillPage('skillForm');
