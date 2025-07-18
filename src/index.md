---
title: HTML Hacking Session
description: A small session about HTML, life hacks, every day tips, myths
layout: base
---
## Is HTML a programming language?

- Yes!
- It has a formal grammar and syntax
- You instruct the browser to do something
- a programming language that does one thing well: structure content
- It doesn't need to be turing complete to be considered a programming language
- In fact, the latter is the best feature of it, not a flaw

## Minimal HTML Example

```html
<!DOCTYPE html>
Hello World!
```

This is already a valid HTML document. You don't even need
to define a head or a body. You can even omit the
top-most `<html>` tag.

## Adding more Structure

To be fair, you will want to have a little more structure to your document,
like a page title and more metadata.

## Adding a title

```html
<!DOCTYPE html>
<title>Hello World</title>
Hello World!
```

## Adding emojis

As soon as you want to add emojis to your page, it is
important to specify a charset. In most cases, this
will be UTF-8.

```html
<!DOCTYPE html>
<meta charset="UTF-8">
💖
```

## Emmet

If you have a modern text editor (VS Code, Webstorm, etc), 
you can use a super-power called emmet. 

This can save you a lot of typing.

To get started, type `!`, then hit <kbd>tab</kbd>.

This will give you this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## Charset

As soon as you add characters other than `a-z, A-Z, 0-9, !"§$%&/()=?`, you will
need to specify a character set. Mostly, this will be UTF-8.

## Document language

The `lang`-attribute on the html element specifies the language used in the html
document. It affects how screenreaders read the page, a wrong language setting
will make it hard to understand.

You can also add the lang attribute on any other element, making it possible to have 
snippets of other languages inside the html.

The `lang` attribute also affects a couple other things, such as spellchecking in 
input elements

## alt Text

It's important to add alt text to your images. You can do so via the `alt` attribute:

```html
<img src="cat.png" alt="A beautiful cat">
```

For purely decorative images, it is okay to add an empty string as an alt text.
It is an accessibility issue to completely leave out the `alt` attribute.

## More emmet tricks

Generate markup:

```html
<!-- Type: ul>li*3 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Generate dummy text:

```html
<!-- Type: lorem -->
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
```

## Headlines and paragraphs

Inside the body tag, you can start adding content to your HTML document.
It's a good idea to start with a headline. Then, add a couple paragraphs.

When you just work on the layout and don't have content ready yet,
emmet comes in handy. Type "lorem" and it spits out a random paragraph
of lorem ipsum.

```html
<h1>This is my website</h1>

<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ea, 
  a maiores corrupti, dolores repudiandae sequi ducimus molestiae molestias 
  nemo quibusdam natus harum autem atque exercitationem tempore repellendus 
  voluptatum perferendis.
</p>
```

## Multiple or no headlines

It's not required to have a only one h1 (although it is a good idea)
It's also not required to have a h1 at all.

## Sub-Headlines

You can subdivide your wall of text with a couple sub-headlines.
You can use h1, h2, h3 up to h6 tags. As soon as you are tempted to use h5,
maybe refactor your document structure.

You shouldn't skip heading levels (no h4 followed by a h2).

- You can also nest content into [sections](https://html.spec.whatwg.org/multipage/sections.html)
- See also: [There is no outline algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html)

## Anchors

Anchor links can help you reference a sub-chapter of a page

```html
<h2 id="about-me">About me <a href="#about-me">#</a></h2>
```

## Quick Accessibility Testing tips

- Check the accessibility tree inside your browser developer tools
- Check if the website is completely operable via keyboard
- Check if all inputs have a label associated
- Check if all buttons have text
- Check if all images have alt text
- Check if the document language is set correctly.
- Check your color contrasts are okay. You can use automated tool like
  Lighthouse for this, which is integrated into Chrome Dev Tools.
- See also the [WebAIM Million Report](https://webaim.org/projects/million/) mentioning
  the most common accessibility issues. Only focusing on these would already
  catch a lot of issues.
