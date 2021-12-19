---
layout: guides
category: guides
menu: Introduction
title: Discover Ceramic
permalink: guides/introduction/discover-ceramic/
---
# Discover Ceramic, a cross-platform and open-source 2D framework

_The following introduction was originally published by Jérémy Faivre on his own [blog](https://jeremyfa.com/what-is-ceramic-engine/). This new version is now part of Ceramic website's guides section._

<p class="extra-info">Just want to start using <strong>Ceramic</strong>?<br />
Follow the <strong>Getting Started</strong> guide ➔ <a href="/guides/getting-started/install-ceramic">Install Ceramic</a></p>

## What is ceramic?

Ceramic is a cross-platform framework created by [Jérémy Faivre](https://twitter.com/jeremyfaivre) that lets you create 2D apps and games written in the Haxe programming language.

It can export natively to desktop (`windows`, `mac`, `linux`), mobile (`ios`, `android`), `web` (js + webgl) and `unity` projects.

![Ceramic window](/static/img/ceramic-window-1.png)

Ceramic was under quiet development for several years. It started as some kind of personal project and then grew into something used daily to create various kind of apps and ship real games in production.

<p class="extra-info">Note: this article is a bit technical and a background in game or software development may be required to understand all of its contents.</p>

## So, why ceramic?

It may seem odd not to use mainstream software like Unity to create video games or other graphics intensive apps. Why setting up an entire new tool?

### Wished an open-source tool between Phaser and Unity for 2D apps/games

Unity is nice, you can build a lot of things with it. But what if you come from a background where you enjoyed a lot lighter, more code-centric and 2D oriented tools on the web like [Pixi](https://www.pixijs.com/) or [Phaser](https://phaser.io/)?

What is great with Phaser or Pixi is how simple they are to get started. You simply write a few javascript files, load them in your browser and yay, you got something working already! Unfortunately, all this joy and fun is focused to the web. It works great in web browsers, can work on mobile but to do so you need to embed a pixi or phaser app as a webview inside an iOS or Android app, and performances won’t be as good as if you created a native app.

On the other hand, you could use Unity to create games and apps that can be exported to native platforms, but the steps required become more complicated and you start to depend on a huge closed source software to write ANY app or game. Everything you create has to display a Unity splash-screen unless you pay a license fee.

It is totally OK to pay license fees to use Unity in the context of a professional game studio. But I personally create plenty of tiny games, apps, creative coding projects as an individual and wanted to find an alternative that doesn’t depend on something as heavy as Unity.

Then, how to have a tool that can target the Web, but also natively target platforms like iOS, Android, PC, while still keeping most of the benefits of Phaser or Pixi: being open-source, easy to use and not huge like Unity?

### Meet Haxe

<p>
<img src="/static/img/haxe-logo-150.png" class="float-left" alt="Haxe logo" />
The <a href="https://haxe.org">Haxe programming language</a> lets you write code that can be <em>transpiled</em> into other languages such as <code>C++</code>, <code>Javascript</code> or <code>C#</code>. Yes, that means you write a single codebase that can then be converted to <code>C++</code> or <code>JS</code> and run natively or in the browser!
</p>

As a comparison, Unity needs to perform quite complicated transformations to make your game run in the browser: it needs to transpile your `C#` code into `C++` via IL2CPP, then transform the resulting `C++` code into WebAssembly via emscripten. The whole process is pretty slow and means you cannot iterate quickly when testing a web export of your app/game. With Haxe, transpiling your code into javascript and running it in the browser is a matter of a few seconds!

Haxe is an excellent open-source programming language and it's really a joy to use it daily. It has some good features making it very powerful and scalable (macros, strictly typed, enums and pattern matching) yet is fairly easy to pick up if you already know more common languages like `C#`, `JS`, `Java`, `AS3` or `TypeScript`.

Tools to create cross-platform native games already exist within the Haxe community:

- OpenFL ([Rymdkapsel](https://rymdkapsel.com/), [Papers Please](https://papersplea.se/))
- HaxeFlixel ([Defender Quest](http://www.defendersquest.com/), [Friday Night Funkin’](https://www.kickstarter.com/projects/funkin/friday-night-funkin-the-full-ass-game))
- Heaps ([Dead Cells](https://store.steampowered.com/app/588650/Dead_Cells/), [Northgard](https://store.steampowered.com/app/466560/Northgard/), [Evoland](https://store.steampowered.com/app/1020470/Evoland_Legendary_Edition/))
- Kha ([CrossCode](http://www.cross-code.com/), [Armory3D](https://armory3d.org/))
- Luxe ([The Wesport Independent](https://www.coffeestainstudios.com/games/the-westport-independent/))

I tried these one by one before starting to work on ceramic, even did some projects with some, here’s some feedback:

<table>
    <tr>
        <td><a href="https://www.openfl.org/">OpenFL</a></td>
        <td>OpenFL is the most popular way to export native apps with Haxe. It’s great if you want to migrate a Flash project to Haxe because it provides the same API. That’s also the main reason it had issues for me. I don’t need to carry the whole Flash API and all the dependencies it needs (cairo, freetype…), which make it more complicated to grasp if I want to fix something inside (talking from actual experience with the tool here). It’s still a very important tool in the haxe community and a lot of developers are using it.</td>
    </tr>
    <tr>
        <td><a href="https://haxeflixel.com/">HaxeFlixel</a></td>
        <td>Same spirit as Phaser, which is nice. HaxeFlixel has pretty good documentation which is a plus. It is however built on top of OpenFL and that became an issue for me: I shipped a game at a time HaxeFlixel was stuck in some older version of OpenFL (legacy). Needed to export Android Studio projects, but that was only available in some newer OpenFL that didn’t work with HaxeFlixel. This was a very bad experience for me at the time. I managed to workaround the issue by setting up an entire alternative build system for Android and iOS. These are not good memories.</td>
    </tr>
    <tr>
        <td><a href="https://heaps.io/">Heaps</a></td>
        <td>Nice high level API and great games made with it. The tech seems solid and also provides a 3D pipeline. However, making it work on mobile was somewhat difficult and not 100% supported. It was not really an option for me as iOS and Android were the primary platforms I wanted to target at the time.</td>
    </tr>
    <tr>
        <td><a href="https://kha.tech/">Kha</a></td>
        <td>Kha	Kha is impressive. That said I didn’t dare to invest much in it, because I was not comfortable with using a tech I don’t understand much and that I can’t fix myself in case I face a problem with it. Also, if I used Kha, I would have needed to create some high level API anyway because Kha is a bit too much lower level for my daily usage. Some developers are doing awesome things with Kha though.</td>
    </tr>
    <tr>
        <td><a href="https://luxeengine.com/alpha/">Luxe</a></td>
        <td>A game framework with very few dependencies yet quite versatile. I liked it a lot and used it for a while for my projects. It was providing most of the features needed, and the internals were pretty clear and approachable, which was handy in case I needed to improve/fix something inside. Unfortunately its Haxe version got discontinued (but you can check out <a href="https://luxeengine.com/">the new luxe</a> if you want, which is now written in <code>C++</code> and using <a href="https://wren.io/">wren</a> scripting).</td>
    </tr>
</table>

<p class="extra-info">Note: although I had some issues with these tools, they are great and make a lot of developers happy. I am only talking about my personal experience, which is subjective and tied to my preferences and project needs. You should definitely check these out yourself! I don’t consider ceramic as being a better tool than those. It’s just a different option with its pros and cons and ways of solving problems ✨.</p>

### Say hello to ceramic

<iframe src="/static/apps/ceramic-demo" width="640" height="640" loading="lazy" frameborder="0"></iframe>
<div class="caption">A few things displayed with Ceramic</div>

I started working on [Ceramic](https://github.com/ceramic-engine/ceramic) once Luxe (its haxe version) somehow got discontinued. Ceramic started as a wrapper around Luxe. Like, a high level API that runs on top of Luxe. I maintained a fork of Luxe for a while to ensure it worked well with ceramic and newer versions of Haxe. Then ceramic slowly evolved into something else. I created a backend system to separate the public API from its internals and to prepare for better cross-platform support.

Backends are simply modules that let you port the engine to new platforms without having to rewrite the entire engine. It only contains the low level code strictly necessary to load assets, display graphics on screen, play audio, handle input…

Ceramic’s first backend was using Luxe internally. It was very convenient at the time because it allowed to put very quickly the engine on foot, target mobile, desktop and webgl just fine. Performances were fairly good but not optimal because luxe was not really intended to be used this way, but it was a good transitional state and allowed to design ceramic’s high level API as I go.

This transitional state lasted for a few years, until I did set up a more tailored backend called [Clay](https://github.com/ceramic-engine/clay). Basically, clay does the same as luxe internals, but specifically adapted to be used with ceramic, with only the features needed that don’t overlap with ceramic features.

That’s how ceramic still works today.

### Ceramic achitecture

There are currently 3 backends: `Clay`, `Headless` and `Unity`. Clay is the default backend, Headless allows to run ceramic as a server or a CLI script and Unity backend exports your whole Ceramic project into a Unity project (this specific part about Unity will be explained in a separate guide).

<p>
<img src="/static/img/diagram-ceramic-discover.png" alt="Ceramic architecture" />
<div class="caption">A chart showing how ceramic is architected and what platforms you can export to.</div>
</p>

With this separation of concerns between high level API and backends, ceramic is designed from the grounds up to be portable. New backends could be added in the future to handle new platforms, without having to change the high level API. The latest addition is the Unity backend, which is pretty new for now but already successfully runs ceramic apps like [my latest jam game](https://twitter.com/jeremyfaivre/status/1332806848060256260).

Ceramic doesn’t provide any 3D pipeline like Heaps or Kha, it is focused on 2D and tries to do that very well. These are some of the things ceramic provides out of the box on every backend (no audio/graphics context on headless/node.js):

- **Display tree**: Create hierarchies of nested visual objects like you would do in Flash or Pixi.

- **Multi-texture batching**: Fast rendering of 2D objects, even if they use different textures. This can drastically reduce the number of draw calls in your app and make it run better.

- **“Free” additive blending**: Switching between standard and additive blending can cost you additional draw calls and destroy performances in some engines. This is not the case with ceramic, which premultiplies alpha of your images automatically and allows to draw both blendings in a single draw call (see [this article](http://amindforeverprogramming.blogspot.com/2013/07/why-alpha-premultiplied-colour-blending.html) for reference).

- **Text rendering**: No dependency with font rasterization libraries. Render bitmap fonts, with support of [MSDF](https://github.com/Chlumsky/msdfgen) (multichannel signed distance field) to draw them at any resolution.

- **2D Quad and Mesh rendering**: Draw anything composed of squares or triangles, textured or not. They can be batched together.

- **Audio playback API**: Play sounds and background music.

- **Event system**: Handle input and other events of your ceramic app with its built-in macro-based event system. Create your own events with very little boilerplate code.

- **Data model, observable and serialization API**: Create haxe classes that store data and that can be incrementally serialized to disk. Bind autorunnable callbacks to observable properties like you would do with [mobx autorun](https://mobx.js.org/reactions.html#autorun) and do reactive programming. Ceramic does that by tightly integrating with another library I wrote called [tracker](https://github.com/jeremyfa/tracker).

- **UI toolkit**: Construct advanced layouts with Haxe (see [an example of what can be done with it here](https://apps.jeremyfa.com/ceramic)).

- **Spritesheet, Tilemap & 2D Camera**: Load tilemaps created with [Tiled Map Editor](https://www.mapeditor.org/) or from code, display animated spritesheets and use a Camera API to follow your player on the map. This will be improved in the future to support Aseprite format and some other map editors (I’m looking at you [LDtk](https://ldtk.io/) 👀).

- **2D Physics**: Support [Arcade Physics](https://github.com/jeremyfa/arcade) (ported from phaser arcade physics) and [Nape Physics](https://joecreates.github.io/napephys/).

- **Spine animations**: If you use [Spine](http://esotericsoftware.com/) to create animations, ceramic can read and display these out of the box.

- **Entity-Component architecture**: Create entities and attach components to them for better modularity of your code.

- **State Machine**: A macro-based state machine implementation to manage states with minimum boilerplate code (a bit similar to [StateKit](https://github.com/prime31/StateKit)).

- **Visual Studio Code integration**: Work on your ceramic projects using the dedicated [VSCode extension](https://marketplace.visualstudio.com/items?itemName=jeremyfa.ceramic).

- **Command line tools**: Ceramic comes with CLI tools to build & run your project as well as exporting it for the different platforms it supports. It can for instance be used to export an Xcode project for iOS or an Android Studio project for Android.

- **Plugin system**: Ceramic is fully extensible with plugins. You can add CLI commands, a new backend or just more high level features with a plugin.

### How is Ceramic used?

Creating Ceramic was a way for me to experiment new things. Not only for creating games, but also create some generative art / creative coding projects (see [this installation](https://jeremyfa.com/protocole-du-vivant/) or [most of my animations posted on instagram](https://instagram.com/jeremyfa), which are all made with ceramic).

<video autoplay loop muted playsinline src="/static/img/breaking-the-line2.mp4"></video>
<div class="caption">An animation made with Ceramic.</div>

Ceramic has been used by [La Gamerie](https://lagamerie.studio/) to release a few games with it on iOS and Android (see [Make More Views](https://apps.apple.com/fr/app/make-more-views/id1438348967), which contains advanced UI, a lot of animations using [Spine](http://esotericsoftware.com/), fully customizable studio and avatar etc… all made with Ceramic).

### What now?

I hope this article gave you a little more information about what Ceramic is and that made you want to try it! If that's the case, go to the **Getting Started** section to **Install Ceramic** from the link below 👇👇👇 .
