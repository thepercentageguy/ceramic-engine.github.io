---
layout: examples
category: examples
menu: Basics
title: Hello World
permalink: examples/hello-world/
sample: hello-world
---

A minimal **Hello World** sample which shows you how to display text on screen.

```haxe
var text = new Text();
text.color = Color.WHITE;
text.content = 'Hello World';
text.pointSize = 48;
text.anchor(0.5, 0.5);
text.pos(screen.width * 0.5, screen.height * 0.5);
```
