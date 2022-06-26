---
layout: examples
category: examples
menu: Samples
title: Auto-Tiling
permalink: examples/auto-tiling/
sample: auto-tiling
---

<p class="extra-info">Click on the demo to modify the map and test how auto-tiling works.</p>

<p class="extra-info">Check the <a href="/examples/tilemap-pixelart">previous tilemap sample</a> if you don't know how to create a tilemap from code.</p>

Another tilemap sample (using `tilemap` plugin again). This time, showcasing how to use auto-tiling and how to create a very simple in-game map editor.

The `ceramic.AutoTiler` component is plugged to a tilemap layer. That auto-tiler will choose the right tile at each location depending its sibling tiles.

![Auto Tile](/static/img/autotile-grass-hd.png)
<div class="caption">A capture of the autotile image used for this demo (<a href="https://ceramic-engine.com/ceramic-samples/auto-tiling/assets/autotile-grass.png">download the original here</a>)</div>

<br />

<div class="codename">Enable auto-tiling</div>

```haxe
// Enable auto-tiling
layerData.component(new AutoTiler([
    EDGE_CORNER_32_EXPANDED // The kind of auto-tiling to use
], [
    1 // The corresponding "first gid" to apply auto-tiling on
]));
```

Using `ceramic.TilemapEditor` component, you can enable a very basic tilemap editor directly in game.

<div class="codename">Make the tilemap editable</div>

```haxe
// Make this tilemap editable
tilemap.component(new TilemapEditor('main', 1, 0));
```
