![alt text](http://www.milanmilosev.com/projects/smooths/logo.png)


# SMOOTHS

A VERY LIGHTWEIGHT (~1KB) SCRIPT THAT ASSISTS SMOOTH SCROLLING

[View the demo](http://milanmilosev.com/projects/smooths/)
[View the demo on Codepen](https://codepen.io/MilanMilosev/pen/NYoOoW)


<hr>


## Getting Started

Compiled code for production can be found in the `dist` directory.
The `src` directory contains development code.

### 1. Include Smooths

```html
<script src="dist/js/smooths-min.js"></script>
```

### 2. Add the markup to your HTML.

No special markup needed, just standard anchor links. 
Give the anchor location an ID just like you normally would.

```html
<a href="#section-one" class="link">Section 1</a>
...
<div id="section-one" class="scroll-section"></div> 
```

### 3. Initialize Smooths

In the footer of your page, after the content, initialize Smooths by passing in a selector for the anchor links that should be animated.

```html
<script>
var smooths = new smooths({  //  Initialize Smooths
	section: 'scroll-section',
	anchor: 'link'
});
</script>
```

## Options and Settings

#### Speed
You can set the speed of animation. 

```javascript
var smooths = new smooths({
	speed: 200
);
```
*The default speed value is 200 (2s) specifies the number of milliseconds it takes to scroll to the specified area*


#### Easing Options

For now only `linear` easing is supported.

**Linear**
*Moves at the same speed from start to finish.*

* `Linear`



# About
Smooths is a very lightweight (~ 1KB) script that assists smooth scrolling to anchor links, written with vanilla JavaScript.

### How it's work?
By clicking on the link will animate scrolling to a specific section on the page.


