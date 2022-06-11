---
layout: examples
category: examples
menu: Samples
title: Spine animations
permalink: examples/spine-raptor/
sample: spine-raptor
---

Display spines animations.

```haxe
// Create spine object to display animation
spine = new Spine();
spine.spineData = assets.spine(Spines.RAPTOR_PRO);
spine.pos(screen.width * 0.5, screen.height * 0.85);
spine.animation = Spines.RAPTOR_PRO.WALK;
spine.loop = true;
add(spine);
```
