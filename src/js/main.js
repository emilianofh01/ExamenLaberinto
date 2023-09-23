// Importación de módulos
import { AssetManager } from "./AssetsManager.js";
import { Player } from "./Player.js";
import { ObjectBase } from "./objectBase.js";
import { printMap } from "./printMap.js";

// Obtener el elemento canvas y configurar su tamaño
const canvas = document.getElementById("mycanvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);

// Obtener el contexto 2D del canvas
const ctx = canvas.getContext("2d");

// Crear un ainstancia de la imagen de recursos
const asset = new Image();
asset.src = "./src/img/Ws.png";

// Variable globales
let pause = false;
let canvasView;
let walls = [];
let chestKey = [];
let collectedChestKey = 0;
let chest;
let player;
let time = 0;
let initTime;
let win = false;
const keys = { x: { a: -0.65, d: 0.65 }, y: { w: -0.65, s: 0.65 } };
let lastKey = "";

// Definición de los objetos de recursos
const objetoDeAssets = {
  spriteSheet: null,
  characters: [
    {
      name: "jugador",
      info: { x: 31, y: 441, x2: 48, y2: 463, escala: 1 },
    },
  ],
  objects: [
    {
      name: "paredHorizontal",
      info: { x: 48, y: 189, x2: 64, y2: 208, escala: 1 },
    },
    {
      name: "paredVertical",
      info: { x: 128, y: 160, x2: 144, y2: 176, escala: 1 },
    },
    {
      name: "paredFinAbajo",
      info: { x: 128, y: 192, x2: 144, y2: 208, escala: 1 },
    },
    {
      name: "paredEnL",
      info: { x: 32, y: 188, x2: 48, y2: 209, escala: 1 },
    },
    {
      name: "paredEnLInvertida",
      info: { x: 64, y: 189, x2: 80, y2: 208, escala: 1 },
    },
    // Paredes con esquinas redondas
    {
      name: "paredArribaRedondo",
      info: { x: 128, y: 123, x2: 144, y2: 144, escala: 1 },
    },
    {
      name: "esquinaDerRedonda",
      info: { x: 32, y: 156, x2: 48, y2: 175, escala: 1 },
    },
    {
      name: "esquinaIzqRedonda",
      info: { x: 64, y: 156, x2: 80, y2: 177, escala: 1 },
    },
    {
      name: "esquinaIzqRedondaFin",
      info: { x: 16, y: 156, x2: 32, y2: 175, escala: 1 },
    },
    {
      name: "esquinaDerRedondaFin",
      info: { x: 80, y: 156, x2: 96, y2: 175, escala: 1 },
    },
    // Paredes con varios caminos
    {
      name: "paredIzqDerAbajo",
      info: { x: 64, y: 44, x2: 80, y2: 65, escala: 1 },
    },
    {
      name: "paredDerArribaAbajo",
      info: { x: 32, y: 108, x2: 48, y2: 128, escala: 1 },
    },
    {
      name: "paredIzqrArribaAbajo",
      info: { x: 64, y: 108, x2: 80, y2: 128, escala: 1 },
    },
    {
      name: "paredIzqrArribaDer",
      info: { x: 32, y: 44, x2: 48, y2: 65, escala: 1 },
    },
    {
      name: "llave",
      info: { x: 146, y: 319, x2: 158, y2: 334, escala: 1 },
    },
    {
      name: "arbol",
      info: { x: 12, y: 223, x2: 37, y2: 256, escala: 1 },
    },
    {
      name: "arbusto",
      info: { x: 146, y: 236, x2: 176, y2: 256, escala: 1 },
    },
    {
      name: "cofre",
      info: { x: 248, y: 325, x2: 265, y2: 336, escala: 1 },
    },
    {
      name: "roca",
      info: { x: 237, y: 275, x2: 256, y2: 288, escala: 1 },
    },
  ],
  audios: [
    {
      name: "musicaFondo",
      source: "./src/audio/mansion.mp3",
      options: {
        autoplay: true,
      },
    },
    {
      name: "monedaSonido",
      source: "./src/audio/getKey.mp3",
      options: {
        autoplay: false,
      },
    },
  ],
};

// Configuración del contexto del canvas
ctx.imageSmoothingEnabled = false;
ctx.scale(6, 6);

// Crear una instancia del administrador de recursos
let assetManager = new AssetManager({
  assets: objetoDeAssets,
  spriteSheet: asset,
  canvas: canvas,
  context: ctx,
  onAssetsLoad: init,
});

// 1. Cuando la hoja de assets este cargada, se procede a recortar los objetos e items
asset.onload = () => {
  assetManager.loadAssets();
};

// 2. Cuando los items hayan sido recortados de la hoja y hayan cargado,
//    se crea los muros, el personaje, se ajusta la "camara" y se manda llamar el metodo update
function init() {
  let playerImg = assetManager.assets.characters["jugador"];
  let chestImg = assetManager.assets.objects["cofre"];
  let keyImg = assetManager.assets.objects["llave"];

  // Se crean los muros
  printMap(ctx, assetManager, walls, ObjectBase); // Este metodo agrega los muros

  // Se crea personaje
  player = new Player({
    x: 50,
    y: 50,
    ctx,
    width: playerImg.width * 0.6,
    height: playerImg.height * 0.6,
    image: playerImg,
  });

  // Crear el cofre y las llaves
  chest = new ObjectBase({
    x: 935,
    y: 930,
    width: chestImg.width * 0.8,
    height: chestImg.height * 0.8,
    ctx: ctx,
    image: chestImg,
  });

  chestKey = [
    new ObjectBase({
      x: 755,
      y: 610,
      width: keyImg.width * 0.8,
      height: keyImg.height * 0.8,
      ctx,
      image: keyImg,
    }),
    new ObjectBase({
      x: 390,
      y: 936,
      width: keyImg.width * 0.8,
      height: keyImg.height * 0.8,
      ctx,
      image: keyImg,
    }),
    new ObjectBase({
      x: 515,
      y: 410,
      width: keyImg.width * 0.8,
      height: keyImg.height * 0.8,
      ctx,
      image: keyImg,
    }),
    new ObjectBase({
      x: 745,
      y: 846,
      width: keyImg.width * 0.8,
      height: keyImg.height * 0.8,
      ctx,
      image: keyImg,
    }),
  ];

  canvasView = [player.x - canvas.width / 16, player.y - canvas.height / 16];
  ctx.translate(-canvasView[0], -canvasView[1]);

  // Agregar un evento de teclado para mover el personaje y pausar el juego
  canvas.addEventListener("keydown", (e) => {
    lastKey = e.key.toLowerCase();
    if (lastKey == "p") {
      if (pause) window.requestAnimationFrame(update);
      pause = !pause;
    }
    assetManager.assets.audios["musicaFondo"].play();
  });

  window.requestAnimationFrame(update);
}

// Variable para controla inversion del personaje
let playerInvert = false;

// Funcion principal de actualización del juego
function update() {
  let imgKey = assetManager.assets.objects["llave"]
  checkTime();

  // Tamaño de la zona visible
  const viewportSize = [canvas.width / 6, canvas.height / 6];
  canvasView = [player.x - canvas.width / 16, player.y - canvas.height / 16];
  ctx.clearRect(canvasView[0], canvasView[1], canvas.width, canvas.height);

  // Fondo del juego
  ctx.fillStyle = "#111";
  ctx.fillRect(canvasView[0], canvasView[1], viewportSize[0], viewportSize[1]);

  // Se pinta los muros
  walls.forEach((object) => object.paint());

  // Se pinta jugador
  player.paint({
    invert: keys.x[lastKey] ? keys.x[lastKey] < 0 : playerInvert,
  });

   // Pintar el cofre y comprobar la colisión con las llaves
  chest.paint();

  chestKey.forEach((key, index) => {
    if (key.seTocan(player)) {
      collectedChestKey = clamp(collectedChestKey + 1, 0, 2);
      chestKey.splice(index, 1);
      assetManager.assets.audios["monedaSonido"].play();

    }
  });

  // Se pintan las llaves
  chestKey.forEach((key) => key.paint());

  // Gradiente circular
  const gradient = ctx.createRadialGradient(
    canvasView[0] + canvas.width / 6 / 2,
    canvasView[1] + canvas.height / 6 / 2,
    (canvas.width / 6) * 0.2,
    canvasView[0] + canvas.width / 6 / 2,
    canvasView[1] + canvas.height / 6 / 2,
    (canvas.width / 6) * 0.2 * 2
  );
  gradient.addColorStop(0, "transparent");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  ctx.fillRect(canvasView[0], canvasView[1], viewportSize[0], viewportSize[1]);

  // Texto del tiempo
  ctx.font = "6px 'Press Start 2P'";
  ctx.fillStyle = "white";
  ctx.fillText(
    `${time}s`,
    canvasView[0] + canvas.width / 6 - 40,
    canvasView[1] + canvas.height / 6 - 10
  );

  // Icono de llave y cantidad recolectada
  ctx.drawImage(
    imgKey,
    canvasView[0] + canvas.width/6 - 40,
    canvasView[1] + 5,
    imgKey.width * 0.5,
    imgKey.height * 0.5
  );
  ctx.font = "5px 'Press Start 2P'";
  ctx.fillText(`${collectedChestKey}/2`, canvasView[0] + canvas.width/6 - 32, canvasView[1] + 12)
  ctx.font = "4px 'Press Start 2P'";

  ctx.fillText(`P->pausa  (a,w,s,d)->mover`, canvasView[0] + 10, canvasView[1] + canvas.height/6-10)

  // Metodo que sirve para que el usuario se mueva, al igual que la camara
  playerMove();

  if(chest.seTocan(player) && collectedChestKey >= 2) win = true;

  // Si gana, mostrar la pantalla de victoria
  if(win) {
    ctx.fillStyle = "#111";
    ctx.fillRect(canvasView[0], canvasView[1], viewportSize[0], viewportSize[1]);
    ctx.fillStyle = "white";
    ctx.fillText(`¡Has ganado! Tiempo: ${time}`, canvasView[0] + canvas.width/6/2-40, canvasView[1] + canvas.height/6/2)
    return;
  }

  if (!pause) {
    window.requestAnimationFrame(update);
    return;
  }

  ctx.fillStyle = "#111";
  ctx.fillRect(canvasView[0], canvasView[1], viewportSize[0], viewportSize[1]);
  ctx.fillStyle = "white";
  ctx.fillText("Pausa", canvasView[0] + canvas.width/6/2 - 10, canvasView[1] + canvas.height/6/2)
}

// Metodo que sirve para que el usuario se mueva, al igual que la camara
function playerMove() {
  let touchedWall = false;
  walls.forEach((wall) => {
    if (wall.seTocan(player) || chest.seTocan(player)) {
      touchedWall = true;
    }
  });
  player.x += (touchedWall ? -1 : 1) * (keys.x[lastKey] ?? 0);
  player.y += (touchedWall ? -1 : 1) * (keys.y[lastKey] ?? 0);
  if (lastKey != "") {
    ctx.translate(
      (touchedWall ? -1 : 1) * (keys.x[lastKey] ? -keys.x[lastKey] : 0),
      (touchedWall ? -1 : 1) * (keys.y[lastKey] ? -keys.y[lastKey] : 0)
    );
  }
  lastKey = touchedWall ? "" : lastKey;
}

// Función para verificar el tiempo transcurrido
function checkTime() {
  if (!initTime) {
    initTime = performance.now();
    return;
  }
  time = ((performance.now() - initTime) / 1000).toFixed(2);
}

// Función para verificar el tiempo transcurrido
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
