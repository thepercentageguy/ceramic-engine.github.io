---
layout: examples
category: examples
menu: Basics
title: Drawing lines
permalink: examples/lines/
sample: lines
---

Creating lines with `ceramic.Line`.

```haxe
var line = new Line();
line.color = Color.WHITE;
line.thickness = 4;
line.points = [
    300, 50,
    600, 200
];
```