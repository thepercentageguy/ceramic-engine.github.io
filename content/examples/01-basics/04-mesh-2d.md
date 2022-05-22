---
layout: examples
category: examples
menu: Basics
title: 2D Mesh
permalink: examples/basics/mesh-2d/
sample: mesh-2d
---

A `Mesh` object created with raw vertices, indices and colors.

```haxe
// Create a new Mesh object
mesh = new Mesh();

// Mesh position
mesh.pos(
    screen.width * 0.5 - 100,
    screen.height * 0.5 - 100
);

// Mesh vertices
mesh.vertices = [
    0, 0,
    200, 0,
    200, 200,
    0, 200
];

// Mesh triangles
mesh.indices = [
    0, 1, 2,
    0, 2, 3
];

// Mesh (random) colors
mesh.colorMapping = VERTICES;
mesh.colors = [
    new AlphaColor(Color.random()),
    new AlphaColor(Color.random()),
    new AlphaColor(Color.random()),
    new AlphaColor(Color.random())
];
```