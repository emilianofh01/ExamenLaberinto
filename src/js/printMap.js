// Claramente esto esta mal pero en su momento no me daba cabeza para hacerlo mejor (:
// Sin embargo, ya con energias me di cuenta muy tarde... pero lo voy a mejorar
// Es algo que realmente no me gusta nada


export function printMap(ctx, assetManager, walls, ObjectBase) {
    let { objects } = assetManager.assets;
    
    
    printWalls({times: 8, x: 36, y: 70, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 68, y: 25, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]});
    printWalls({times: 55, x: 84, y: 25, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 56, x: 953, y: 25, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 58, x: 30, y: 33, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 55, x: 30, y: 955, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 953, y: 25, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});  
    printWalls({times: 1, x: 212, y: 25, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]});
    printWalls({times: 5, x: 212, y: 46, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 212, y: 119, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 11, x: 212, y: 139, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 212, y: 166, spaceBetweenY: 16, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 5, x: 119, y: 139, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 5, x: 132, y: 165, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 119, y: 165, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 1, x: 119, y: 120, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});
    printWalls({times: 1, x: 119, y: 205, spaceBetweenX: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 2, x: 87, y: 120, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 71, y: 120, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 1, x: 71, y: 141, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 71, y: 157, spaceBetweenY: 10, image: objects["paredFinAbajo"]});
    printWalls({times: 1, x: 164, y: 70, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});
    printWalls({times: 2, x: 164, y: 89, spaceBetweenY: 10, image: objects["paredVertical"]});
    printWalls({times: 2, x: 164, y: 115, spaceBetweenY: 10, image: objects["paredFinAbajo"]});
    printWalls({times: 2, x: 164, y: 115, spaceBetweenY: 10, image: objects["paredFinAbajo"]});
    printWalls({times: 3, x: 36, y: 212, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 72, y: 212, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});
    printWalls({times: 2, x: 72, y: 231, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 72, y: 256, spaceBetweenY: 16, image: objects["paredEnL"]});
    printWalls({times: 5, x: 88, y: 257, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 2, x: 168, y: 230, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 168, y: 257, spaceBetweenX: 10, image: objects["paredEnLInvertida"]});
    printWalls({times: 2, x: 182, y: 305, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 168, y: 209, spaceBetweenX: 10, image: objects["paredArribaRedondo"]});
    printWalls({times: 1, x: 212, y: 303, spaceBetweenX: 10, image: objects["paredIzqrArribaDer"]});
    // printWalls({times: 3, x: 228, y: 305, spaceBetweenX: 10, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 260, y: 305, spaceBetweenX: 10, image: objects["paredVertical"]});
    printWalls({times: 2, x: 260, y: 279, spaceBetweenY: 10, image: objects["paredVertical"]});
    printWalls({times: 1, x: 260, y: 260, spaceBetweenY: 10, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 1, x: 73, y: 305, spaceBetweenY: 10, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 5, x: 89, y: 305, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 166, y: 305, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]});
    printWalls({times: 5, x: 276, y: 260, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 353, y: 258, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 8, x: 369, y: 260, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 490, y: 260, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 3, x: 353, y: 179, spaceBetweenY: 10, image: objects["paredVertical"]});
    printWalls({times: 3, x: 305, y: 210, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 353, y: 215, spaceBetweenY: 10, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 2, x: 353, y: 235, spaceBetweenY: 10, image: objects["paredVertical"]});
    printWalls({times: 1, x: 353, y: 165, spaceBetweenY: 10, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 3, x: 369, y: 165, spaceBetweenX: 10, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 398, y: 165, spaceBetweenX: 16, image: objects["paredEnLInvertida"]});
    printWalls({times: 5, x: 398, y: 85, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 14, x: 263, y: 75, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 398, y: 75, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]});
    printWalls({times: 1, x: 487, y: 75, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});
    printWalls({times: 1, x: 487, y: 94, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 487, y: 110, spaceBetweenY: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 8, x: 228, y: 115, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 350, y: 115, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]});
    printWalls({times: 1, x: 305, y: 115, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]});
    printWalls({times: 2, x: 305, y: 136, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 305, y: 163, spaceBetweenY: 16, image: objects["paredEnLInvertida"]});
    printWalls({times: 2, x: 275, y: 163, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 260, y: 163, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 2, x: 260, y: 184, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 260, y: 204, spaceBetweenX: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 1, x: 400, y: 210, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]});
    printWalls({times: 2, x: 416, y: 210, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 5, x: 446, y: 130, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 446, y: 210, spaceBetweenX: 16, image: objects["paredEnLInvertida"]});
    printWalls({times: 1, x: 446, y: 125, spaceBetweenX: 16, image: objects["paredArribaRedondo"]});
    printWalls({times: 1, x: 446, y: 166, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 17, x: 461, y: 166, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 2, x: 630, y: 135, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 6, x: 537, y: 80, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 537, y: 164, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 537, y: 79, spaceBetweenX: 16, image: objects["paredArribaRedondo"]});
    printWalls({times: 5, x: 584, y: 40, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 584, y: 25, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Ojo aqui
    printWalls({times: 1, x: 584, y: 120, spaceBetweenY: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 11, x: 601, y: 257, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 584, y: 75, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 5, x: 600, y: 75, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 670, y: 75, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]});
    printWalls({times: 2, x: 646, y: 117, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 1, x: 630, y: 117, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 1, x: 670, y: 117, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]});
    printWalls({times: 2, x: 676, y: 185, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 676, y: 166, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]});
    printWalls({times: 1, x: 676, y: 206, spaceBetweenY: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 3, x: 630, y: 220, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 630, y: 210, spaceBetweenY: 16, image: objects["paredArribaRedondo"]});
    printWalls({times: 1, x: 630, y: 255, spaceBetweenY: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 490, y: 213, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 2, x: 746, y: 210, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 5, x: 505, y: 213, spaceBetweenX: 16, image: objects["paredHorizontal"]});
    printWalls({times: 8, x: 770, y: 176, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 585, y: 213, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]});
    printWalls({times: 2, x: 585, y: 232, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 2, x: 490, y: 232, spaceBetweenY: 16, image: objects["paredVertical"]});
    printWalls({times: 1, x: 585, y: 256, spaceBetweenY: 16, image: objects["paredEnL"]});
    printWalls({times: 6, x: 723, y: 85, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 723, y: 166, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x: 723, y: 80, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 723, y: 120, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 5, x: 739, y: 120, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 16, x: 910, y: 101, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 815, y: 120, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 14, x: 815, y: 139, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 815, y: 259, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 5, x: 830, y: 259, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 910, y: 259, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 1, x: 910, y: 80, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 910, y: 348, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 3, x: 770, y: 36, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 2, x: 878, y: 348, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 863, y: 347, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 1, x: 863, y: 310, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 863, y: 331, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 9, x: 863, y: 81, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 6, x: 780, y: 73, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 863, y: 73, spaceBetweenY: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 1, x: 770, y: 72, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 1, x: 770, y: 300, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x: 770, y: 170, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 730, y: 210, spaceBetweenY: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x: 770, y: 210, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 1, x: 537, y: 265, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 537, y: 286, spaceBetweenX: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 537, y: 302, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 11, x: 553, y: 303, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 723, y: 303, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 5, x: 723, y: 322, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 723, y: 354, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 1, x: 723, y: 394, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 11, x: 739, y: 395, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 909, y: 395, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 1, x: 769, y: 395, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 2, x: 769, y: 416, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 769, y: 440, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 2, x: 909, y: 414, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 909, y: 439, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 3, x: 925, y: 440, spaceBetweenX: 10, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 8, x: 738, y: 349, spaceBetweenX: 10, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 584, y: 303, spaceBetweenX: 10, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 7, x: 584, y: 324, spaceBetweenY: 10, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 584, y: 394, spaceBetweenY: 10, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x: 538, y: 394, spaceBetweenY: 10, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x: 554, y: 394, spaceBetweenX: 14, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 2, x: 538, y: 415, spaceBetweenY: 14, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 815, y: 349, spaceBetweenY: 14, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x: 538, y: 440, spaceBetweenY: 14, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 5, x: 490, y: 280, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 6, x: 450, y: 347, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 5, x: 326, y: 438, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 490, y: 345, spaceBetweenY: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 6, x: 408, y: 397, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 11, x: 398, y: 317, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 11, x: 260, y: 317, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 12, x: 213, y: 357, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 8, x: 166, y: 326, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 2, x: 73, y: 326, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 3, x: 119, y: 358, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca ///////
    printWalls({times: 1, x: 398, y: 397, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 9, x: 312, y: 302, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 398, y: 302, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 1, x: 308, y: 302, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x: 445, y: 302, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x: 305, y: 348, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x: 321, y: 348, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 2, x: 305, y: 369, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 305, y: 395, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x: 260, y: 400, spaceBetweenY: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 2, x: 275, y: 395, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 351, y: 405, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x: 351, y: 426, spaceBetweenX: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 310, y: 438, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x: 351, y: 436, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca3
    printWalls({times: 2, x: 506, y: 440, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x: 490, y: 439, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 2, x: 490, y: 409, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x: 490, y: 397, spaceBetweenY: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 2, x:645, y: 354, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:675, y: 354, spaceBetweenY: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 1, x:629, y: 354, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x: 262, y: 75, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 5, x:629, y: 375, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 12, x:405, y: 535, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 5, x:675, y: 373, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 6, x:445, y: 455, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:445, y: 450, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:445, y: 533, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 1, x:398, y: 493, spaceBetweenX: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:400, y: 535, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x:590, y: 535, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:260, y: 493, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 5, x:276, y: 493, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:350, y: 493, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 5, x:350, y: 512, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 11, x:460, y: 490, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:630, y: 490, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 3, x:585, y: 445, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:585, y: 445, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:600, y: 445, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:629, y: 445, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:675, y: 445, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 2, x:691, y: 446, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:723, y: 446, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 2, x:723, y: 465, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:723, y: 488, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 5, x:739, y: 489, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:818, y: 489, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 2, x:818, y: 459, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:818, y: 445, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:834, y: 445, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:862, y: 445, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 5, x:862, y: 464, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:862, y: 490, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:900, y: 490, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:862, y: 490, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 1, x:862, y: 535, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 11, x:687, y: 535, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 10, x:676, y: 520, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:676, y: 675, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 11, x:692, y: 676, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:863, y: 632, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:863, y: 653, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 2, x:879, y: 632, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:900, y: 632, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:863, y: 676, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:676, y: 535, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 1, x:676, y: 499, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:910, y: 682, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 7, x:910, y: 703, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:910, y: 813, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 14, x:687, y: 813, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:768, y: 813, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 5, x:768, y: 834, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:768, y: 904, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:815, y: 904, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 2, x:815, y: 875, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:815, y: 866, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 8, x:831, y: 866, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:862, y: 912, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:878, y: 912, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:905, y: 912, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 2, x:862, y: 933, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 2, x:744, y: 867, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:768, y: 867, spaceBetweenY: 16, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 1, x:728, y: 867, spaceBetweenY: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 6, x:728, y: 630, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:723, y: 630, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 1, x:815, y: 630, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 3, x:723, y: 590, spaceBetweenY: 12, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:723, y: 587, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:739, y: 587, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:765, y: 587, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 3, x:815, y: 587, spaceBetweenY: 14, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:815, y: 586, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 8, x:831, y: 586, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:910, y: 584, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 3, x:910, y: 544, spaceBetweenY: 13, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:910, y: 543, spaceBetweenY: 13, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 9, x:777, y: 723, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:910, y: 723, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 1, x:776, y: 723, spaceBetweenX: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 9, x:728, y: 770, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:722, y: 770, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 5, x:722, y: 695, spaceBetweenY: 15, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:722, y: 676, spaceBetweenY: 15, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 1, x:722, y: 726, spaceBetweenY: 15, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 6, x:632, y: 726, spaceBetweenX: 15, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 6, x:632, y: 726, spaceBetweenX: 15, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:632, y: 726, spaceBetweenX: 15, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 8, x:632, y: 747, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:632, y: 862, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 6, x:540, y: 862, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 9, x:537, y: 725, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:537, y: 862, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 9, x:584, y: 688, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:536, y: 678, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 9, x:632, y: 544, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 5, x:552, y: 678, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:632, y: 678, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 3, x:536, y: 638, spaceBetweenY: 12, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:585, y: 594, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 21, x:308, y: 585, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:307, y: 584, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:307, y: 605, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:307, y: 628, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 6, x:215, y: 628, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 6, x:212, y: 592, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:212, y: 675, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 5, x:228, y: 675, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:304, y: 675, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 5, x:304, y: 694, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:304, y: 770, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 3, x:260, y: 770, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:259, y: 770, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 5, x:259, y: 791, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 9, x:165, y: 863, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:164, y: 863, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:164, y: 884, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 6, x:125, y: 907, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:164, y: 905, spaceBetweenY: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 1, x:125, y: 906, spaceBetweenY: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x:205, y: 906, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 3, x:260, y: 914, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:260, y: 913, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 8, x:276, y: 913, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:390, y: 913, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:352, y: 911, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 3, x:352, y: 870, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:352, y: 869, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 3, x:305, y: 818, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:305, y: 863, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:305, y: 817, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 5, x:321, y: 817, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:398, y: 817, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 2, x:398, y: 836, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:398, y: 860, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 2, x:413, y: 860, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:443, y: 860, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 3, x:443, y: 879, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:443, y: 912, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 9, x:490, y: 820, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:445, y: 820, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:490, y: 819, spaceBetweenY: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 1, x:445, y: 820, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 7, x:398, y: 772, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 3, x:445, y: 772, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:445, y: 772, spaceBetweenX: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 6, x:398, y: 680, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:398, y: 770, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 3, x:353, y: 680, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:398, y: 679, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 1, x:353, y: 679, spaceBetweenX: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 3, x:353, y: 633, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 5, x:369, y: 633, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:353, y: 632, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x:443, y: 632, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 5, x:443, y: 651, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:443, y: 720, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 8, x:490, y: 604, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:490, y: 585, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 3, x:490, y: 725, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:537, y: 724, spaceBetweenX: 16, image: objects["esquinaDerRedonda"]}); // Aca
    printWalls({times: 6, x:37, y: 395, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:120, y: 395, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:73, y: 350, spaceBetweenX: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 6, x:73, y: 445, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:72, y: 445, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:72, y: 466, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:72, y: 485, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 6, x:37, y: 535, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 3, x:117, y: 490, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:117, y: 489, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 5, x:133, y: 489, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:213, y: 489, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]}); // Aca
    printWalls({times: 9, x:165, y: 535, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 3, x:120, y: 633, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca // Aca
    printWalls({times: 12, x:165, y: 535, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 12, x:74, y: 720, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:165, y: 718, spaceBetweenY: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 9, x:74, y: 585, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:74, y: 585, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca // Aca
    printWalls({times: 1, x:114, y: 585, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca // Aca
    printWalls({times: 1, x:74, y: 585, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]});
    printWalls({times: 1, x:74, y: 720, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 1, x:120, y: 633, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca // Aca
    printWalls({times: 4, x:120, y: 633, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca // Aca
    printWalls({times: 1, x:675, y: 772, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); // Aca // Aca
    printWalls({times: 8, x:675, y: 793, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca // Aca
    printWalls({times: 3, x:630, y: 905, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca // Aca
    printWalls({times: 3, x:630, y: 914, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca // Aca
    printWalls({times: 1, x:630, y: 905, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca // Aca
    printWalls({times: 1, x:675, y: 905, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca // Aca
    printWalls({times: 1, x:165, y: 535, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x:490, y: 725, spaceBetweenY: 16, image: objects["paredEnL"]}); // Aca
    printWalls({times: 1, x:352, y: 911, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 1, x:212, y: 628, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 1, x:350, y: 583, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 1, x:585, y: 588, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 1, x:584, y: 678, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 1, x:584, y: 817, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:299, y: 535, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:632, y: 535, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:585, y: 635, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:536, y: 635, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:498, y: 772, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:255, y: 720, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:120, y: 633, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x:120, y: 683, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:212, y: 590, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 4, x:258, y: 535, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:258, y: 535, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 1, x:258, y: 585, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 6, x:352, y: 730, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:352, y: 730, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:352, y: 815, spaceBetweenY: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 1, x:212, y: 720, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 5, x:212, y: 741, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:37, y: 815, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]}); // Aca
    printWalls({times: 4, x:75, y: 770, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 6, x:75, y: 770, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:75, y: 817, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:75, y: 770, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x:160, y: 770, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 6, x:120, y: 815, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 3, x:120, y: 815, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 3, x:73, y: 862, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:120, y: 862, spaceBetweenX: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 2, x:73, y: 883, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:73, y: 905, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:120, y: 815, spaceBetweenY: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 1, x:212, y: 815, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x:73, y: 862, spaceBetweenX: 16, image: objects["esquinaIzqRedonda"]}); // Aca
    printWalls({times: 2, x:506, y: 907, spaceBetweenX: 16, image: objects["paredHorizontal"]}); // Aca
    printWalls({times: 1, x:490, y: 907, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]}); // Aca
    printWalls({times: 1, x:530, y: 907, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 2, x:583, y: 881, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:583, y: 910, spaceBetweenY: 16, image: objects["paredFinAbajo"]}); // Aca
    printWalls({times: 1, x:583, y: 862, spaceBetweenY: 16, image: objects["paredIzqDerAbajo"]}); // Aca
    printWalls({times: 3, x:722, y: 914, spaceBetweenY: 16, image: objects["paredVertical"]}); // Aca
    printWalls({times: 1, x:722, y: 914, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:350, y: 348, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:535, y: 347, spaceBetweenY: 16, image: objects["esquinaDerRedondaFin"]}); // Aca
    printWalls({times: 1, x:448, y: 347, spaceBetweenY: 16, image: objects["esquinaIzqRedondaFin"]}); // Aca
    printWalls({times: 1, x:119, y: 355, spaceBetweenY: 16, image: objects["paredArribaRedondo"]}); // Aca
    printWalls({times: 1, x:166, y: 445, spaceBetweenY: 16, image: objects["paredEnLInvertida"]}); // Aca
    printWalls({times: 1, x: 953, y: 440, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 1, x: 953, y: 586, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 1, x: 953, y: 866, spaceBetweenX: 16, image: objects["paredIzqrArribaAbajo"]});
    printWalls({times: 1, x: 953, y: 905, spaceBetweenX: 16, image: objects["paredFinAbajo"]});
    printWalls({times: 1, x: 905, y: 955, spaceBetweenX: 16, image: objects["esquinaDerRedondaFin"]});
    printWalls({times: 1, x: 862, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 722, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 630, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 630, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 490, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 260, y: 952, spaceBetweenX: 16, image: objects["paredIzqrArribaDer"]});
    printWalls({times: 1, x: 30, y: 954, spaceBetweenX: 16, image: objects["paredEnL"]});
    printWalls({times: 1, x: 30, y: 816, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 1, x: 30, y: 535, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 1, x: 30, y: 395, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 1, x: 30, y: 211, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});
    printWalls({times: 1, x: 30, y: 70, spaceBetweenX: 16, image: objects["paredDerArribaAbajo"]});    
    printWalls({times: 1, x: 30, y: 32, spaceBetweenX: 16, image: objects["paredArribaRedondo"]}); 
    
    printWalls({times: 1, x: 950, y: 945, spaceBetweenX: 16, image: objects["arbusto"]}); 
    printWalls({times: 1, x: 960, y: 900, spaceBetweenX: 16, image: objects["arbol"]}); 
    printWalls({times: 1, x: 975, y: 905, spaceBetweenX: 16, image: objects["arbol"]}); 
    printWalls({times: 1, x: 970, y: 930, spaceBetweenX: 16, image: objects["arbusto"]}); 
    printWalls({times: 1, x: 915, y: 950, spaceBetweenX: 16, image: objects["arbol"]}); 
    printWalls({times: 1, x: 935, y: 960, spaceBetweenX: 16, image: objects["arbol"]}); 

    printWalls({times: 1, x: 980, y: 940, spaceBetweenX: 16, image: objects["arbusto"]}); 

    printWalls({times: 1, x: 45, y: 31, spaceBetweenX: 16, image: objects["roca"]}); 

    

    function printWalls({times = 1, x, y,spaceBetweenX = 0,spaceBetweenY = 0,image}) {
        for (let i = 0; i < times; i++) {
            walls.push(new ObjectBase({
                x: x + spaceBetweenX * i, y: y + spaceBetweenY * i, 
                width: image.width,height: image.height,
                ctx, image
            })
            );
        }
    }  
}