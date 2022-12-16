const memory = {};

class Memory {
    constructor(){
        this.instaces = [];
    }
}

class Instance {
    constructor(name){
        this.name = name;
        this.entities = [];
        this.actions = [];
    }
    addEntity (ent){
        this.entities.push(ent);
    }
}

class Entity {
    constructor(name, origin, hitbox, graphics){
        this.name = name;
        this.origin = origin;
        this.parameters = {};
        this.hitbox = hitbox;
        this.graphics = graphics;
    }
    getAbsoluteHitbox(){
        let absoluteHitbox = this.hitbox.clone();
        absoluteHitbox.x = this.origin.x + this.hitbox.x;
        absoluteHitbox.y = this.origin.y + this.hitbox.y;
        return absoluteHitbox;
    }
}

class Graphic {
    //type - drawn or image
    //coord - coord where graphic is placed
    //code - code to be parsed
    //scale
    //steps - made of steps
    constructor(type, code, origin, scale, steps){
        this.type = type;
        this.code = code;
        this.origin = origin;
        this.scale = scale;
        this.steps = steps;
    }
}