---
layout: examples
category: examples
menu: Samples
title: Tilemap Pixel Art
permalink: examples/tilemap-pixelart/
sample: tilemap-pixelart
---

A minimap sample showing how to construct a tilemap (with `tilemap` plugin) and displaying it with a pixel art filter.

<div class="codename">Create and display a tilemap from code</div>

```haxe
// Create our very simple one-tile tileset
var tileset = new Tileset();
// 0 = no tile
// 1 = our single tile
tileset.firstGid = 1;
tileset.tileSize(8, 8);
tileset.texture = assets.texture(Images.SINGLE_TILE);
tileset.columns = 1;

// Create our tile layer
var layerData = new TilemapLayerData();
layerData.name = 'main';
layerData.size(10, 10);
layerData.tiles = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 1, 1, 0, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

// Create the tilemap data holding our tile layer
var tilemapData = new TilemapData();
tilemapData.tileSize(8, 8);
tilemapData.size(layerData.width, layerData.height);
tilemapData.tilesets = [tileset];
tilemapData.layers = [layerData];

// Then create the actual tilemap visual and assign it tilemap data
var tilemap = new Tilemap();
tilemap.tilemapData = tilemapData;
tilemap.pos(8, 8);

add(tilemap);
```

You can assign a filter to the scene system that will be applied to any root scene. `PixelArt` is a built-in filter that will render your low resolution/pixel art graphics in a clean way which is less destructive than simply using nearest neighbor texture filtering (see [this article](https://colececil.io/blog/2017/scaling-pixel-art-without-destroying-it/) for reference on the technique used).

<div class="codename">Use a Pixel Art filter</div>

```haxe
// Render as low resolution / pixel art
pixelArt = new PixelArt();
pixelArt.size(width, height);
app.scenes.filter = pixelArt;
```
