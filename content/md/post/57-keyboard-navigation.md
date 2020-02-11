---
title: "Keyboard navigation"
layout: post
excerpt: ""
date: 2018-10-21 03:03:48
modified: 2018-10-21 03:03:48
permalink: 2018/10/20/keyboard-navigation/index.html
tags: ["Codex", "Uncategorized"]
featured_img: 
wpid: 1724
---

# Keyboard navigation

There are many different ways to use the web besides a mouse and a pair of eyes. Users navigate for example with a keyboard only or with their voice.

All the functionality, including menus, links and forms should work using a **keyboard only**. This is essential for all assistive technology to work properly. The only way to test this, at the moment, is manually. The best time to test this is during development.

### How to keyboard test:

Tab through your pages, links and forms to do the following tests:

- Confirm that all links can be reached and activated via keyboard, including any in dropdown submenus.
- Confirm that all links get a visible focus indicator (e.g., a border highlight).
- Confirm that all [visually hidden links](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/) (e.g. [skip links](https://make.wordpress.org/accessibility/handbook/best-practices/markup/skip-links/)) become visible when in focus.
- Confirm that all form input fields and buttons can be accessed and used via keyboard.
- Confirm that all interactions, buttons, and other controls can be triggered via keyboard — any action you can complete with a mouse must also be performable via keyboard.
- Confirm that focus doesn’t move in unexpected ways around the page.
- Confirm that using shift+tab to move backwards works as well.

### Resources

- [The Make WordPress Accessibility Handbook ](https://make.wordpress.org/accessibility/handbook/)
  - [Test for web accessibility](https://make.wordpress.org/accessibility/handbook/test-for-web-accessibility/)
- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/) by WebAIM
- [Workshop keyboard accessibility](http://rianrietveld.com/2016/05/10/keyboard/)
- [Theme review accessibility-ready requirements: Keyboard Navigation](https://make.wordpress.org/themes/handbook/review/accessibility/required/)