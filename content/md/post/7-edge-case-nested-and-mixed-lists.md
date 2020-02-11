---
title: "Edge Case: Nested And Mixed Lists"
layout: post
excerpt: ""
date: 2009-05-15 21:48:32
modified: 2009-05-15 21:48:32
permalink: 2009/05/15/edge-case-nested-and-mixed-lists/index.html
tags: ["Content", "Css", "Edge Case", "Lists", "Markup", "Classic", "Edge Case"]
featured_img: 
wpid: 1000
---

# Edge Case: Nested And Mixed Lists

Nested and mixed lists are an interesting beast. It’s a corner case to make sure that

- Lists within lists do not break the ordered list numbering order
- Your list styles go deep enough.

### Ordered – Unordered – Ordered

1. ordered item
2. ordered item 
  - **unordered**
  - **unordered**
      1. ordered item
      2. ordered item
3. ordered item
4. ordered item

### Ordered – Unordered – Unordered

1. ordered item
2. ordered item 
  - **unordered**
  - **unordered**
      - unordered item
      - unordered item
3. ordered item
4. ordered item

### Unordered – Ordered – Unordered

- unordered item
- unordered item 
  1. ordered
  2. ordered 
      - unordered item
      - unordered item
- unordered item
- unordered item

### Unordered – Unordered – Ordered

- unordered item
- unordered item 
  - unordered
  - unordered 
      1. **ordered item**
      2. **ordered item**
- unordered item
- unordered item