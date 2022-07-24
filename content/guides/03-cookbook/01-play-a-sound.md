---
layout: guides
category: guides
menu: Cookbook
title: Play a sound
permalink: guides/play-a-sound/
---
# Play a sound

_This guide is a contribution from [@thepercentageguy](https://github.com/thepercentageguy) and was edited by [@jeremyfa](https://github.com/jeremyfa)_.

## Loading a sound asset

Sounds can be played anywhere at any time. However first you need to load your asset (in your scene's `preload()` method).

Let's say we want to play the sound from an audio file named `mySound.ogg`. You'd have to load `Sounds.MY_SOUND` asset:

<div class="codename">Load the asset</div>

```haxe
override function preload() {

    assets.add(Sounds.MY_SOUND);

}
```

<p class="extra-info">Ceramic supports several audio formats (<code>WAV</code>, <code>OGG</code>, <code>MP3</code> and <code>FLAC</code>) but not all formats are supported on all targets. If you want your audio files to work on every browser and target, you should add several versions of your files in your assets. <code>OGG</code> + <code>MP3</code> will cover all cases, so in the example above, you could have <code>mySound.ogg</code> and <code>mySound.mp3</code> and Ceramic will pick the right file at runtime.</p>

<table>
    <tr>
        <td><code>clay native</code></td>
        <td><code>WAV</code>, <code>OGG</code>, <code>MP3</code>, <code>FLAC</code> (only <code>WAV</code> and <code>OGG</code> on linux)</td>
    </tr>
    <tr>
        <td><code>clay web</code></td>
        <td><code>WAV</code>, <code>OGG</code>, <code>MP3</code>, <code>FLAC</code> (depending on the browser)</td>
    </tr>
    <tr>
        <td><code>unity</code></td>
        <td><code>WAV</code>, <code>OGG</code>, <code>MP3</code></td>
    </tr>
</table>
<div class="caption" style="padding-top:6px">Audio format support table</div>

Once your audio asset is loaded, you can play it:

<div class="codename">Play the sound</div>

```haxe
override function create() {

    var position = 0;
    var looping = true;

    assets.sound(Sounds.MY_SOUND).play(position, looping);

}
```

When playing a sound you can pass in from where you want the sound to play (position) and whether you want the sound to loop. In that example, the sound will be played and loop without ever stopping.

## Using the `SoundPlayer` instance

Everytime you play a sound, it returns a `SoundPlayer` instance that you can use to keep track of the sound state or manipulate the sound while it is playing.

Here, we simply stop the sound after 10 seconds.

<div class="codename">Play a sound and stop it after 10s</div>

```haxe
import ceramic.SoundPlayer;
import ceramic.Scene;

class PlayASound extends Scene {

    var sound:SoundPlayer;

    override function preload() {

        // Load the sound
        assets.add(Sounds.SOUND_NAME);

    }

    override function create() {

        // Play the sound and keep the SoundPlayer instance around
        sound = assets.sound(Sounds.SOUND_NAME).play(0, true);

    }

    override function update(delta:Float)
    {
        // Stop the sound if it's been going for more than 10 seconds.
        if (sound.position > 10)
        {
            sound.stop();
        }
    }

}
```

## Background music

If you play a looping background music, you might want to stream the audio instead of loading it entirely in memory as this can save a lot of memory. Ceramic supports that by adding the `stream` option to your asset:

<div class="codename">Load the asset (streaming)</div>

```haxe
override function preload() {

    assets.add(Sounds.MY_MUSIC, { stream: true });

}
```

<p class="extra-info">Beware that when you use the <code>stream</code> on your background music, you won't be able to change the <code>pitch</code> or the <code>position</code>, because it is only supported on non streaming sounds. Also, you should use the <code>stream</code> option only on audio like background music etc... not on short sounds that you'll play many times.</p>

### That's all for now

There's actually more about sounds than what is covered here, but these samples should be enough to cover most common use cases of playing audio!
