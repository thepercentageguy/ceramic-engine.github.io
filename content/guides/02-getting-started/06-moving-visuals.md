---
layout: guides
category: guides
menu: Getting Started
title: Moving visuals
permalink: guides/moving-visuals/
---
# Moving visuals

This guide will show you how to move a **visual** with two different methods:

1. By updating the visual over time
2. By using visual transitions

<p class="extra-info">In Ceramic, a <strong>visual</strong> is any instance of a class that inherits from <code>Visual</code> (<code>ceramic.Visual</code>), and it's something expected to be displayed on screen. In this guide, like in the previous guides, we use an instance of <code>Quad</code> class, but the following samples to move a <strong>visual</strong> should work with any <code>Visual</code> subclass like <code>Quad</code>, but also <code>Text</code>, <code>Mesh</code>, etc...</p>

## 1. Updating the visual over time

It’s pretty common in some games or graphical apps to have an update loop, where you execute code at every _**frame**_ of the app. On a regular screen with a refresh rate of 60 FPS, that means your code is executed 60 times per second.

To execute code at every frame, you can bind a handler to the `update` event of the app. Let's add some code inside our `create()` method we got from our [previous guide that displays a haxe logo](/guides/display-an-image):

<div class="codename">GettingStarted.hx</span></div>

```haxe
    override function create() {

        var logo = new Quad();
        logo.texture = assets.texture(Images.HAXE_LOGO);
        logo.pos(width * 0.5, height * 0.5);
        logo.anchor(0.5, 0.5);
        add(logo);

        // Bind to app's 'update' event
        app.onUpdate(this, delta -> {
            // This code is executed at every frame
            logo.rotation += delta * 50;
        });

    }
```

This time, we are listening to app’s `update` event. This event is fired at every frame, calling our callback each time.

Our handler has a delta argument which represent the amount of elapsed time since last frame (in seconds). This allows us to know how much time has passed and apply some change accordingly.

In our example, we are simply rotating the haxe logo over time by updating the `rotation` property of the quad.

<iframe src="/static/apps/rotate-logo" width="640" height="480" loading="lazy" frameborder="0"></iframe>
<div class="caption">Rotating the image</div>

In the same way we attached a handler to `pointerDown` event before (see [Display a square](/guides/display-a-square)), we attached a handler to the app’s `update` event this time.

We can tidy that code a bit: as our `GettingStarted` class is a subclass of `ceramic.Scene`, it can directly implement an `update()` method, without having to bind to app’s `update` event explicitly:

<div class="codename">GettingStarted.hx</div>

```haxe
import ceramic.Color;
import ceramic.Quad;
import ceramic.Scene;

class GettingStarted extends Scene {

    var logo:Quad;

    override function preload() {

        // Load haxe logo image
        assets.add(Images.HAXE_LOGO);

    }

    override function create() {

        logo = new Quad();
        logo.texture = assets.texture(Images.HAXE_LOGO);
        logo.pos(width * 0.5, height * 0.5);
        logo.anchor(0.5, 0.5);
        add(logo);

    }

    override function update(delta:Float) {

        // Executed at every frame
        logo.rotation += delta * 50;

    }

}
```

This code does the same thing as before, but using `ceramic.Scene`‘s predefined `update()` method instead of binding to `app.update` event explicitly.

## 2. Using visual transitions

The following code is another example of what you could do. We are adding some interactivity to the Haxe logo we loaded: every time you click on the logo, it moves to a different position, scale and rotation using a _**visual transition**_:

<div class="codename">GettingStarted.hx</div>

```haxe
import ceramic.TouchInfo;
import ceramic.Quad;
import ceramic.Scene;

using ceramic.VisualTransition;

class GettingStarted extends Scene {

    var logo:Quad;

    override function preload() {

        // Load haxe logo image
        assets.add(Images.HAXE_LOGO);

    }

    override function create() {

        logo = new Quad();
        logo.texture = assets.texture(Images.HAXE_LOGO);
        logo.pos(width * 0.5, height * 0.5);
        logo.anchor(0.5, 0.5);
        logo.scale(0.5);
        add(logo);

        logo.onPointerDown(this, handleLogoClick);

    }

    function handleLogoClick(info:TouchInfo) {

        // Use transition API to move the logo
        // at a random position/scale/rotation
        logo.transition(QUAD_EASE_IN_OUT, 0.4, logo -> {

            logo.x = width * (0.1 + Math.random() * 0.8);
            logo.y = height * (0.1 + Math.random() * 0.8);
            logo.scaleX = 0.5 * (0.25 + 0.75 * Math.random());
            logo.scaleY = logo.scaleX;
            logo.rotation = 360 * Math.random();

        });

    }

}
```

In that last example we used one of the various utilities available in Ceramic: `ceramic.VisualTransition`, which lets you interpolate visual properties with just a few lines of code. Here’s the result:

<iframe src="/static/apps/click-move-logo" width="640" height="480" loading="lazy" frameborder="0"></iframe>
<div class="caption">Click on the logo and see it change position</div>

### That’s all for now

These examples didn’t let you do much, but I hope it gave you a good starting point to create more things with Ceramic!

At the moment, **Ceramic** is pretty new to the public and although it's already very capable, its documentation is quite sparse. In order to fix that, this website will be updated regularly with more content in the coming months.

You can join the `#ceramic` channel on [Haxe Discord server](https://discordapp.com/invite/0uEuWH3spjck73Lo) if you have any question, need help or simply want to share what you did with Ceramic.