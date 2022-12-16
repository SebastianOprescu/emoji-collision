function loadBubbles() {
    memory.instances = [];
    memory.instances.push(new Instance("Bubbles"));

    for (let i = 0; i < 20; i++) {
        let radius = 10 + Math.random() * 30;
        let graphic = new Graphic("image", "emoji", new Point2D(0, 0), radius, "n/a");
        let newEntity = new Entity("circle", new Point2D(Math.random() * 800, Math.random() * 600), new Circle2D(0, 0, radius), [graphic]);
        let newDir = new Vector2D(0.5 - Math.random(), 0.5 - Math.random());
        newDir.normalize();

        newEntity.parameters.dir = newDir;
        newEntity.parameters.speed = 5 + Math.random() * 5;
        memory.instances[0].addEntity(newEntity);
    }
    memory.instances[0].actions.push(function () {
        //move
        for (let i = 0; i < memory.instances[0].entities.length; i++) {
            memory.instances[0].entities[i].origin.x += memory.instances[0].entities[i].parameters.dir.x * memory.instances[0].entities[i].parameters.speed;
            memory.instances[0].entities[i].origin.y += memory.instances[0].entities[i].parameters.dir.y * memory.instances[0].entities[i].parameters.speed;
        }
    });
    memory.instances[0].actions.push(function () {
        //check collision with border
        for (let i = 0; i < memory.instances[0].entities.length; i++) {
            let entity = memory.instances[0].entities[i];
            let hitbox = entity.getAbsoluteHitbox();
            let direction = entity.parameters.dir;
            if (hitbox.x - hitbox.r < 0 && direction.x < 0) {
                direction.x *= (-1);
            } else if (hitbox.y - hitbox.r < 0 && direction.y < 0) {
                direction.y *= (-1);
            } else if (hitbox.x + hitbox.r > 800 && direction.x > 0) {
                direction.x *= (-1);
            } else if (hitbox.y + hitbox.r > 600 && direction.y > 0) {
                direction.y *= (-1);
            }
        }

        //check collision between entities
        for (let i = 0; i < memory.instances[0].entities.length - 1; i++) {
            let entity1 = memory.instances[0].entities[i];
            for (let j = i + 1; j < memory.instances[0].entities.length; j++) {
                let entity2 = memory.instances[0].entities[j];
                let hitbox1 = entity1.getAbsoluteHitbox();
                let hitbox2 = entity2.getAbsoluteHitbox();
                if (areCirclesColliding(hitbox1, hitbox2)) {
                    let vectorImpact1 = vectorBasedOnPoints(hitbox2,hitbox1);
                    let vectorImpact2 = vectorBasedOnPoints(hitbox1,hitbox2);
                    entity1.parameters.dir = vectorImpact1;
                    entity2.parameters.dir = vectorImpact2;
                }
            }
        }
    });
}