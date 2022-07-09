---
layout: guides
category: guides
menu: Getting Started
title: Sound
permalink: guides/sound/
---
# Sound

This guide will show you how to play sounds and manage them:

1. By playing a sound
2. By creating a <code>SoundPlayer</code> instance

## 1. Playing a sound

Sounds can be played anywhere at any time. However first you need to load your asset in your preload function.

<div class="codename">GettingStarted.hx</span></div>

```haxe
    override function preload() {

        assets.add(Sounds.ASSET_NAME);

    }
```

In this example we are going to play the sound in the create method.
When playing a sound you need to pass in from where you want the sound to play (position) and whether you want the sound to loop.

You can play a sound like this (using variables for explenation purposes):

<div class="codename">GettingStarted.hx</div>

```haxe
override function create() {

    var position = 0;
    var looping = true;

    assets.sound(Sounds.ASSET_NAME).play(position, looping);

}
```

This code will play a sound and loop it without ever stopping.

## 2. Creating a <code>SoundPlayer</code> instance

The following code is another example of what you could do. This code will create a <code>SoundPlayer</code> instance that you can use to manipulate the sound while it is running.

What we are going to do is stop the sound after 10 seconds.

<div class="codename">GettingStarted.hx</div>

```haxe
import ceramic.SoundPlayer;
import ceramic.Scene;

class GettingStarted extends Scene {

    var sound:SoundPlayer;

    override function preload() {

        // Load the sound
        assets.add(Sounds.SOUND_NAME);

    }

    override function create() {

        // doing this will give you full control over the sound.
        sound = assets.sound(Sounds.SOUND_NAME).play(0, true);

    }

    override function update(dt:Float)
    {
        super.update(dt);

        // stop the sound if it's been going for more than 10 seconds.
        if (sound.position > 10)
        {
            sound.stop();
        }
    }

}
```

### That’s all for now

These examples didn’t let you do much, but I hope it gave you a good starting point to create more things with Ceramic!

At the moment, **Ceramic** is pretty new to the public and although it's already very capable, its documentation is quite sparse. In order to fix that, this website will be updated regularly with more content in the coming months.

You can join the `#ceramic` channel on [Haxe Discord server](https://discordapp.com/invite/0uEuWH3spjck73Lo) if you have any question, need help or simply want to share what you did with Ceramic.