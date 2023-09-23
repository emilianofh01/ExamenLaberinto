import { ObjectBase } from "./objectBase.js";

export class Player extends ObjectBase {
  constructor({ x, y, width, height, ctx, image }) {
    super({ x, y, width, height, ctx, image });
  }

  paint({invert = false}) {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    // Establece el ancho y alto del canvas temporal
    tempCanvas.setAttribute('width', this.image.width);
    tempCanvas.setAttribute('height', this.image.height);
    tempCtx.imageSmoothingEnabled = false;

    // Limpia el canvas temporal
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    // Dibuja la imagen en el canvas temporal, invertida si es necesario
    if (invert) {
      tempCtx.scale(-1, 1);
      tempCtx.drawImage(this.image, -this.image.width, 0);
    } else {
      tempCtx.drawImage(this.image, 0, 0);
    }
    
    this.ctx.drawImage(
      tempCanvas,
      this.x,
      this.y,
      this.width ?? this.image.width,
      this.height ?? this.image.height
    );
  }
}
