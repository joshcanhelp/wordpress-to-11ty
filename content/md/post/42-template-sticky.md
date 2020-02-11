---
title: "Template: Sticky"
layout: post
excerpt: ""
date: 2012-01-07 14:07:21
modified: 2012-01-07 14:07:21
permalink: 2012/01/07/template-sticky/index.html
tags: ["Sticky", "Template", "Classic", "Uncategorized"]
featured_img: 
wpid: 1241
---

# Template: Sticky

This is a sticky post.

There are a few things to verify:

- The sticky post should be distinctly recognizable in some way in comparison to normal posts. You can style the `.sticky` class if you are using the [post\_class()](https://developer.wordpress.org/reference/functions/post_class/ "WordPress post_class() Function") function to generate your post classes, which is a best practice.
- They should show at the very top of the blog index page, even though they could be several posts back chronologically.
- They should still show up again in their chronologically correct postion in time, but without the sticky indicator.
- If you have a plugin or widget that lists popular posts or comments, make sure that this sticky post is not always at the top of those lists unless it really is popular.