---
layout: guides
category: guides
menu: Appendices
title: 'Reference: ceramic.yml'
permalink: guides/ceramic-yml-reference/
---
# Reference: `ceramic.yml`

This guid explains how Ceramic project files work and which options are available.

Project files in Ceramic are written in [YAML markup language](http://yaml.org/). Here is an example of a minimal Ceramic app project file:

<div class="codename">ceramic.yml</div>

```yaml
app:
    package: mycompany.myproject
    name: myproject
    displayName: My project
    author: My Company
    version: '1.0'
```

It is typically located in your Ceramic project root directory.

## Haxe libraries

You can add haxe library dependencies with the `libs:` options.

```yaml
app:

    # ...

    libs:
        - lib1
        - lib2: 1.0.0 # An explicit version can be provided

        # A git repository URL can be provided as well
        - lib3: git:https://github.com/somelibauthor/lib3.git

        # And also, a lib can point to a local path
        - lib4: path:some/folder/to/lib4
```

Specified libs can be installed by `ceramic` by running in your project directory:

```bash
ceramic libs
```

## Adding plugins

Your ceramic project can be extended with plugins. Use `plugins` to add plugins.

```yaml
app:

    # ...

    plugins:

        # Enable arcade physics
        - arcade

        # Enable spine animations
        # (a Spine license is required)
        - spine
```

You can [take a look at the list of built-in Ceramic plugins](https://github.com/ceramic-engine/ceramic/tree/master/plugins).

You can also create your own plugins. These just have to be put inside a local `plugins/` folder at the root of your Ceramic project.

<p class="extra-info">A Ceramic plugin is different from a regular Haxe library. Plugins can extend Ceramic in ways that are not possible with standard Haxe libraries, it can be used to patch your Ceramic project's config, provide new command line tools or even a new backend to support additional platforms.</p>

## Defines

You can add defines that may affect how you project is built. These defines will be applied to generated haxe build file as well (HXML)

```yaml
app:

    # ...

    defines:

        # This is equivalent to -D some_define in HXML
        - some_define

        # A define with an explicit value
        - some_other_define: 'my value'
```

## Custom HXML

You can add custom raw HXML using `hxml:` property.

```yaml
app:

    # ...

    hxml: |
        --macro some.Macro.init()
```

## Paths

The default project source path is `src/`, but you can add more:

```yaml
app:

    # ...

    paths:
        - some/directory
```

## Conditional compilation

We can create settngs that will only be applied on some conditions. The example below adds some HXML and defines only when building for iOS.

```yaml
app:

    # ...

    if ios:
        +hxml: |
            --macro some.Macro.runForIos()
        +defines:
            - some_flag_only_on_ios

    if web:
        +defines:
            - js-source-map
```

<p class="extra-info">Note: the <code>+</code> character before <code>hxml</code> and <code>defines</code> specifies that we _append_ content to the existing settings. This means <code>some_flag_only_on_ios</code> will be added to the current list of defines, and that <code>--macro some.Macro.runForIos()</code> will be concatenated to the existing hxml string. If you don't use the <code>+</code> character, it will simply replace the previous values entirely.</p>

<p class="extra-info">You can also use <code>-</code> to do the opposite: remove content from the previous values.</p>

## Hooks

Execute custom script using build hooks.

```yaml
app:

    # ...

    +hooks:
        - when: end build
          command: some/custom/command
          args: []
```

Available hooks:

* begin clean, end clean
* begin build, end build
* begin run, end run