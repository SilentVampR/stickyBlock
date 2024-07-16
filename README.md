# Sticky Block in Parent

## Main Feautures

Sticks any block in parent node (menu, filter, etc)

### How to

Simple HTML structure (You can use any class or ID)

```
<div class="some-block-with-grid-flex-layout">
  <div class="parent">
    <div class="sticky">Any content</div>
  </div>
  <div class="right-block">Any content</div>
</div>
```

Use script to init stickyBlock

```
const sticky = new StickyToParent({
  element: ".sticky", /* Use element class, id or tag (if it unic) */
  offset:0 /* Optional. Default is Zero. Adds offset to top and bottom while block not reachs top or bottom */
});
sticky.stickTheBlock(); /* first init check positioning and move block if needed */
document.addEventListener("scroll", () => {
  sticky.stickTheBlock(); /* add listener to document scroll */
});
```

### Note

Make sure the parent has position: relative attribute

Script using current height of the parent and the sticky block, so if some enother script will changes the height - it's ok, script will handle it (this is the main reason why i made it, other scripts what i found can't do that)

### Demo

https://silentvampr.github.io/stickyBlock/

### Codepen

https://codepen.io/SilentVampR/pen/rNEOJZY