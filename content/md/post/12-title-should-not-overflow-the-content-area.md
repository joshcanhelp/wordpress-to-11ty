---
title: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
layout: post
excerpt: ""
date: 2009-10-05 19:00:59
modified: 2009-10-05 19:00:59
permalink: 2009/10/05/title-should-not-overflow-the-content-area/index.html
tags: ["Content", "Css", "Edge Case", "Html", "Layout", "Title", "Classic", "Edge Case"]
featured_img: 
wpid: 1175
---

# Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu

Title should not overflow the content area
------------------------------------------

A few things to check for:

- Non-breaking text in the title, content, and comments should have no adverse effects on layout or functionality.
- Check the browser window / tab title.
- If you are a plugin or widget developer, check that this text does not break anything.

The following CSS properties will help you support non-breaking text.

```
-ms-word-wrap: break-word;
word-wrap: break-word;
```