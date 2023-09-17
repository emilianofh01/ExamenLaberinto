export class AssetManager {
  constructor({ assets, spriteSheet, canvas, context, onAssetsLoad }) {
    this.assets = assets;
    this.spriteSheet = spriteSheet;
    this.canvas = canvas;
    this.context = context;
    this.onAssetsLoad = onAssetsLoad;

    this.assetsCount = 0;
    this.assetsloaded = 0;
  }

  loadAssets = () => {
    let { characters, objects, audios } = this.assets;
    this.assetsCount = characters.length + objects.length + audios.length;

    this.loadObjects();
  };

  loadObjects = () => {
    let o = {};
    this.assets.objects.forEach((value) => {
      o[value.name] = this.cropAsset(value.info);
    });

    this.assets.objects = o;
  };

  cropAsset = ({ x, y, x2, y2, escala, nuevoAncho, nuevoAlto }) => {
    const canvasVirtual = document.createElement("canvas");
    const ctxVirtual = canvasVirtual.getContext("2d");
    const ancho = x2 - x,
      alto = y2 - y;

    canvasVirtual.setAttribute("width", nuevoAncho ?? escala * ancho);
    canvasVirtual.setAttribute("height", nuevoAlto ?? escala * alto);
    ctxVirtual.imageSmoothingQuality = "high";
    ctxVirtual.imageSmoothingEnabled = false;

    ctxVirtual.drawImage(
      this.spriteSheet,
      x,
      y,
      ancho,
      alto,
      0,
      0,
      canvasVirtual.width,
      canvasVirtual.height
    );

    const img = new Image();
    img.src = canvasVirtual.toDataURL("image/png");
    img.onload = this.checkLoadedAssets;

    return img;
  };

  checkLoadedAssets = () => {
    this.assetsloaded++;
    console.log(`Recursos: ${this.assetsCount} - Cargados: ${this.assetsloaded}`);
    if (this.assetsloaded >= this.assetsCount) {
      this.onAssetsLoad();
    }
  };
}
