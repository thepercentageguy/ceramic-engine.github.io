---
layout: guides
category: guides
menu: Getting Started
title: Your first Ceramic project
permalink: guides/getting-started/your-first-project/
---
# Your first Ceramic project

Now that ceramic is installed, we can use it to create a new project. Open a terminal and type:

```bash
ceramic init --name myproject
```

This should generate and setup your project. Wait a bit, that should not be long!

![Ceramic init](/static/img/ceramic-init.gif)

## Run your project

Your project is generated, you can now try to run it to ensure it works.

Set current directory to **myproject**:

```bash
cd myproject
```

Then call ceramic to run your generated app:

```bash
ceramic clay run web
```

You should see a window open and show the default ceramic app:

![Ceramic window](/static/img/ceramic-window-1.png)

Congratulations! You’ve just finished building and running your first project!

### Explaining: “ceramic clay run web”

This command is asking ceramic to run your app using **clay** backend and targeting the **web** platform.

Ceramic has multiple backends as mentioned in [this introduction article](https://jeremyfa.com/what-is-ceramic-engine/), that is why we need to specify which backend and which target to use when building and running an app.

In practice, you won’t need to call this command by hand many times, because we will use [Visual Studio Code](https://code.visualstudio.com/) and its [Ceramic extension](https://marketplace.visualstudio.com/items?itemName=jeremyfa.ceramic) to continue.

_If you plan to continue using CLI instead of Visual Studio Code later, the full command to run needs additional arguments:_

```bash
ceramic clay run web --setup --assets
```

_`--assets` argument will ensure your exported project’s assets are kept in sync with your original assets folder in case they changed since last run (but you don’t need to worry about this if you use Visual Studio Code as showcased right below)._

_`--setup` argument will ensure your project is properly setup for the given target. This is particularly useful when you build a target for the first time, but it doesn’t hurt keeping the argument for every run._