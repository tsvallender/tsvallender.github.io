class Combat {
    constructor() {
	this.roster = []
    }
    
    add(c) {
	roster.push(c);
    }
    
    begin() {
    }

    get roster() {
	return this.roster;
    }
}

class Combatant {
    constructor(name, maxhp, currenthp, initiative) {
	this.name = name;
	this.maxhp = maxhp;
	this.currenthp = currenthp;
	this.initiative = intiative;
    }

    damage(d) {
	this.currenthp -= d;
    }

    heal(h) {
	this.currenthp += h;
    }

    get name() {
	return this.name;
    }

    get maxhp() {
	return this.maxhp;
    }
    set maxhp(hp) {
	this.maxhp = hp;
    }

    get currenthp() {
	return this.currenthp;
    }
    set currenthp(hp) {
	this.currenthp = hp;
    }

    get initiative() {
	return this.initiative;
    }
}

function load() {
    alert("hellohello");
    alert(typeof Combat);
    c = new Combat();
    d = new Combatant("Acornia", 12,2,34);
    c.add(d);
    alert(d.currenthp);
    alert(c.roster.toString());
}

function addClick(name, maxhp, currenthp, initiative) {
    alert('hello');
    combatant = new Combatant(name, maxhp, currenthp, initiative);
    c.add(combatant);
    alert(c.roster.toString());
}
    
window.onload = load;
