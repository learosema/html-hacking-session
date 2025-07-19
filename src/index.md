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

There are even more shortcuts to generate markup.
To generate an unordered list of 3 elements, type `ul>li*3` and <kbd>tab</kbd>.
To generate a whole table with 3 columns and 4 rows, type `table>tr*2>td*3`.

You get the idea.

```html
<!-- Type: ul>li*3 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>

<!-- Type: table>tr*4>td*3 -->
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

For more shortcuts and information about supported editors, visit <https://emmet.io/>.

## Charset

As soon as you add characters other than `a-z`, `A-Z`, `0-9`, and some standard
characters like `!"§$%&/()=?`, you will need to specify a character set.

For example, this applies to German Umlauts, but also emojis.

Mostly, this will be UTF-8.

## Document language

The `lang`-attribute on the html element specifies the language used in the html
document. It affects how screenreaders read the page, a wrong language setting
will make it hard to understand.

You can also add the lang attribute on any other element, making it possible to have 
snippets of other languages inside the html.

The `lang` attribute also affects a couple other things, such as spellchecking in 
input elements

## Additional Metadata

```html
<!-- who wrote this content ? -->
<meta name="author" content="Lea Rosema">

<!-- add a short description which will be shown under search results -->
<meta name="description" content="A minisite about HTML and accessibility fundamentals.">
```

## Alternative Text

It's important to add alternative text to everything which is not
text (aka "non-text media").

On images, you can do so via the `alt` attribute:

```html
<img src="cat.png" alt="A beautiful cat">
```

For purely decorative images, it is okay to add an empty string as an alt text.
It is an accessibility issue to completely leave out the `alt` attribute.

Generate dummy text:

```html
<!-- Type: lorem -->
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
```

### Elements other than `<img>`

On media elements other than `<img>`, the `alt` attribute doesn't work.
In this case, you can use `aria-label` and `aria-labelledby`.

For example, this applies to inline `<svg>`, `<video>`, `<audio>` elements, but
also buttons that don't contain text but just an icon.

## ARIA

<abbr>ARIA</abbr> is an extension for the HTML standard. It stands for
"Accessible Rich Internet Applications".

They are a set of attributes useful to convey user interface elements
to assistive technologies such as screenreaders.

### ARIA Labels

The attributes `aria-label` and `aria-labelledby` add an accessible name to
a HTML element.

Caution: it overides the content of the element. Also, only use it on interactive
elements or images. For inline SVGs, you also need to add a `role="img"` to it.

Via `aria-label`, you directly add an accessible name to your element.
Caveat: Some translation engines may have issues translating it.

Via `aria-labelledby`, you can reference an ID of another element which is then used
for the accessible name.

Examples:

```html
<!-- inline SVG -->
<svg role="img" aria-label="A beautiful vector art"></svg>

<!-- inline SVG with title -->
<svg role="img" aria-labelledby="svgTitle" viewBox="0 0 100 100">
  <title id="svgTitle">My SVG Title</title>
</svg>

<!-- icon button -->
<button aria-label="close">
  <svg><!-- ...close icon --></svg>
</button>
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

## Inputs

Inputs need a label. Otherwise people using assistive tech don't know what the
input is for. You can do this via a `for` attribute.

```html
<label for="nameInput">Name:</label>
<input id="nameInput">
```

An alternative approach is to nest it inside the label.

```html
<label>
  Name:
  <input>
</label>
```

An underrated detail: labels are also kind-of interactive elements. Clicking a label
will get the associated element focused.

## Hide content

There are mutliple ways to hide content.

```html
<p style="display: none;">hidden</p>
<p hidden>also hidden</p>
<p style="visibility: hidden">Also hidden, but taking the space.</p>

<p class="visually-hidden">
  Hidden, except 
  for screenreader users
  (hacky common technique, see styles below)
</p>
<p aria-hidden="true">Visible, but hidden for screenreader users</p>

<style>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0; 
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
```

## Skip-Link

If you have a lot of navigation elements, it can make sense to have an anchor
link that sends you to the main content:

```html

<nav>
  <a class="skip-link" href="#main-content">jump to main content</a>
  <!-- the rest of the navigation  -->
  <!-- ... -->
</nav>

<main id="main-content" tabindex="-1">


</main>
```

A common pattern is to visually hide the skip link unless it is focused.
I'm sure this can be done smarter, but this is what I use on my website.

So, a demo of this is on <https://lea.codes/>.

```css
.skip-link {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  font-family: system-ui, sans-serif;
  padding: .5em;
  border-radius: .5rem;
  border: 2px solid var(--button-fg);
  color: var(--button-fg);
  background: var(--button-bg);

  &:hover {
    color: var(--button-hover-fg);
    background: var(--button-hover-bg);
  }
}

.skip-link:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
}
```

## The `tabindex` attribute

- `tabindex="0"` makes a non-interactive element focusable
- `tabindex="-1"` removes an element from the natural focus order.
  It makes it programmatically focusable, for example via an anchor link

## Emojis inside sentences and accessibility

When the emoji is inside the sentence, it's a good idea to hide it via
`aria-hidden` attribute and insert a more fitting label for it next to it.

For example, see the footer of this page:

```html
<footer class="footer">
    Braindumped with <span aria-hidden="true">💖</span> love by <a rel="me" href="https://lea.lgbt/@lea">Lea</a>
</footer>
```

## ESM Imports

You can use `import` statements inside JavaScript.

Just use `type="module"` to embed your JavaScript.

```html
<script type="module" src="main.js">
```

```js
import confetti from 'https://esm.sh/confetti'
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

## Further Resources

- The HTML living standard: <https://html.spec.whatwg.org/>
- Caninclude: <https://caninclude.onrender.com>
- Also look into modern css
  - <https://moderncss.dev> by Stephanie Eckles
  - <https://smolcss.dev> by Stephanie Eckles
  - [100 days of more or less modern CSS](https://www.matuzo.at/blog/2022/100-days-of-more-or-less-modern-css)
    by [Manuel Matuzovic](https://matuzo.at)
- [Inclusive Components](https://inclusive-components.design) by [Heydon Pickering](https://heydonworks.com/)
- [Every Layout](https://every-layout.dev)
