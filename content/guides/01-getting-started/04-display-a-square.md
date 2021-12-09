---
layout: guides
category: guides
menu: Getting Started
title: Display a square
permalink: guides/display-a-square/
---
# Display a square

I know we are not making a hit game yet, but let’s start from the beginning: displaying a plain old yellow square 🟨

Edit `GettingStarted`‘s `create()` method to do that:

<div class="codename">GettingStarted.hx</div>

```haxe
import ceramic.Quad;
import ceramic.Color;
import ceramic.Scene;

class GettingStarted extends Scene {

    override function create() {

        // Display a yellow square
        var quad = new Quad();
        quad.size(100, 100);
        quad.color = Color.YELLOW;
        quad.pos(width * 0.5, height * 0.5);
        quad.anchor(0.5, 0.5);
        add(quad);

    }

}
```

Build and run the project. This is what you should see:

![Yellow square window](/static/img/yellow-square-window.png)

### Let’s go over this code

That’s great! We are displaying a yellow square!
(everybody has to start somewhere 😌)

Let’s examinate what we did.

<br />

**1. Import 2 new types: `ceramic.Quad` and `ceramic.Color`:**

```haxe
import ceramic.Quad;
import ceramic.Color;
```

`Quad` class is used to display quads, that is, a polygon composed of two triangles that will form a square or a rectangle. It’s a very common and versatile type of ceramic API.

Color is an utility to work with RGB colors.

<br />

**2. Instanciate a new `Quad` object:**

```haxe
        var quad = new Quad();
```

<br />

**3. Set the `width` and `height` of the quad using its `size()` method:**

```haxe
        quad.size(100, 100);
```

This is the equivalent of writing:

```haxe
        quad.width = 100;
        quad.height = 100;
```

<br />

<p><strong>4. Set the color of the quad as <span style="color:#ffdd00">yellow</span></strong></p>

```haxe
        quad.color = Color.YELLOW;
```

<br />

**5. Position the quad at the center of the scene**

```haxe
        quad.pos(width * 0.5, height * 0.5);
        quad.anchor(0.5, 0.5);
```

Note that we also set the anchor of the quad (`0.5`, `0.5`) to its own center, because by default, a quad anchor is at its top left. If we did set its anchor to (`1`, `1`), it would have been centered to its bottom right etc…

Also, we could have done the same thing with the following code. That is strictly equivalent:

```haxe
        quad.x = width * 0.5;
        quad.y = height * 0.5;
        quad.anchorX = 0.5;
        quad.anchorY = 0.5;
```

<br />

**6. Finally, add the quad as a child of the scene**

```haxe
        add(quad);
```

<br />

Ok that’s nice, we displayed a yellow square at the middle of the screen. What now?

Let’s add some interactivity, so that it will be… an _interactive yellow square_ 🟨 🥁

## Adding interactivity with pointer events

Coming soon.
