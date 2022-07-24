---
layout: guides
category: guides
menu: Appendices
title: Ceramic via Git
permalink: guides/ceramic-via-git/
---
# Install development version from Git

If you want to modify Ceramic or access the latest development version, you can install it via Git.

<p class="extra-info">Please note that you should only install Ceramic via Git if you know what you are doing and are familiar with Git in general. If you are new to Ceramic, you are strongly advised to follow standard <a href="/guides/install-ceramic/">installation instructions</a> instead.<p>

## Install node.js

[Download and install node v14.19.1](https://nodejs.org/dist/v14.19.1/)

<p class="extra-info">Be sure to use this exact version of <code>node</code> (<code>v14.19.1</code>) to install Ceramic. Ceramic may not work as expected otherwise. This is only required during installation. After the installation is done, you can uninstall this version of node as it won't be needed anymore.<p>

## Install Git if needed

If not already available on your machine, [install Git from git-scm.com](https://git-scm.com/downloads)

## Do the actual installation via Git

Now that `git` and `node` are available, open a **Terminal** (or **Powershell** on Windows), move to the directory where you want to install Ceramic, and run this script:

<div class="codename">Installation script</div>

```bash
git clone https://github.com/ceramic-engine/ceramic.git
cd ceramic
git submodule update --init --recursive
cd node
npm ci
cd ../tools
./npm ci
./node post-install.js
./ceramic link
cd ../runner
../tools/npm ci
cd ..
ceramic
```

<p class="extra-info">If <code>./ceramic link</code> command fails on Mac/Linux, you might want to try to run it with administrator rights instead: <code>sudo ./ceramic link</code>.<p>

You should now be able to run `ceramic` command from anywhere:

```bash
ceramic
```

## Update your existing Ceramic via Git

When you install Ceramic via Git, you need to update it via Git as well. To do so, open a **Terminal** again, set your current directory to your Ceramic installation and run the following script:

<div class="codename">Update script</div>

```bash
git pull
git submodule update --init --recursive
cd tools
./npm ci
./node post-install.js
cd ../runner
../tools/npm ci
cd ..
ceramic
```

<p class="extra-info">If you forgot where you have installed Ceramic, you can find it using <code>ceramic&nbsp;path</code> command, which will give you a path like <code>/your/path/to/ceramic/tools</code>. Your Git installation directory will be that path, without the <code>/tools</code> suffix.<p>

<p class="extra-info">When updating an existing Ceramic installation, you don't need to have a specific <code>node</code> version installed on your machine, because the script is using the <code>node</code> binary provided with the existing installation.<p>