function drawCoord(p){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillText("x:"+p.x+", y:" + p.y, 10, 50);
    ctx.restore();
}

function parseGraphic(origin, graphic, step){
    if(graphic.type == "image"){
        switch(graphic.code) {
            case "emoji":
                let img = document.createElement("img");
                img.setAttribute("src", "images/emoji.webp");
                ctx.drawImage(img, 0, 0, 720, 720, origin.x-1*graphic.scale, origin.y-1*graphic.scale, 2*graphic.scale, 2*graphic.scale);
                break;
            default:
                //no default
        }
    } else if (graphic.type == "drawn"){
        switch(graphic.code) {
            case "circle":
                ctx.moveTo(origin.x + graphic.origin.x + 1*graphic.scale, origin.y + graphic.origin.x);
                ctx.arc(origin.x + graphic.origin.x, origin.y + graphic.origin.y, 1*graphic.scale, 0, 2*Math.PI);
                ctx.stroke();
                break;
            default:
              //no default
        }
    }
}