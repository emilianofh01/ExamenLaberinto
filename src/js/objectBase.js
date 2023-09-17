export class ObjectBase {
    constructor({x, y, width, height, ctx, image}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.image = image;
    }

    paint() {
        this.ctx.drawImage(this.image, this.x, this.y);
    }

    seTocan(target) {
        let { x, y } = this.coord;
        let { x: targetX, y: targetY } = target.coord;
    
        return (
          x <= targetX + target.width &&
          x + this.width >= targetX &&
          y <= targetY + target.height &&
          y + this.height >= targetY
        );
      }
}