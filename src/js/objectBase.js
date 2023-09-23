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
        this.ctx.drawImage(this.image, this.x, this.y, this.width ?? this.image.width, this.height ?? this.image.height);
    }

    seTocan(target) {
        let { x, y } = this;
        let { x: targetX, y: targetY } = target;
    
        return (
          x <= targetX + target.width &&
          x + this.width >= targetX &&
          y <= targetY + target.height &&
          y + this.height >= targetY
        );
      }
}