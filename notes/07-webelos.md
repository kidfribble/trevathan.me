---
layout: notes.njk
title: Webelos
date: 2024-02-12
tags: ['post', 'dev']
postnumber: 7
svgart: false
art: webelos-diagram
draft: false
---

What you see on this site is pretty simple today. Mostly html pages with a ton of images and columns for text. What???s going on is much more interesting.

On the presentation and html file generation side, I???m building the site using [11ty](https://www.11ty.dev/) and deploying on [Vercel](https://vercel.com/) (which is watching my ???main??? branch on the Github repo). This is essentially a turn key setup.

Being a designer, perhaps I should more interested in the presentation layer (well, and the writing), but I am busy building a self-hosted markdown authoring system that allows me to send many file formats (.jpg, .heic, .md, .mp4, and so on) via an [Expo](https://expo.dev/)/React Native mobile app interface that I developed to collect and pass data to a [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) server running locally on a [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/). The Pi4 is also running [ImageMagick](https://imagemagick.org/index.php) and [FFmpeg](https://ffmpeg.org/) to process media into appropriate formats, then publishes these with the appropriate text files to a branch that is auto deployed for review on Vercel.

This isn???t a completed work, but it???s also not overwhelmingly difficult to do and creates a frictionless way for me to contribute to my site from any device, and anywhere by using my [WireGuard](https://www.wireguard.com/) VPN setup for home network access. Outside of the DNS and hosting costs I'd have to cover anyway, this doesn't cost me anything but a little electricity and elbow grease to do.

While it isn???t something that???d make sense for a very broad audience,  I think some dev-minded designers like myself may also prefer to roll their own and get an infinitely configurable publishing interface. It???s fun, it teaches you things, and you won't even have to bash your brain against a system that contorts the web medium into a form suiting a wider audience. You get to apply what you know.

The code for this will go up on GitHub as "Webelos", along with an example site, code backing it, and methods for doing this yourself, [right here](https://github.com/kidfribble/webelos).
