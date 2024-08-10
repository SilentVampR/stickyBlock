# Sticky Block in Parent

## Main Feautures

Sticks any block in parent node (menu, filter, etc)

### How to

Simple HTML structure

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
  classSelector: ".sticky", /* Use unic element class */
  offset:0 /* Optional. Default is Zero. Adds offset to top and bottom while block not reachs top or bottom */
  additionalClass: true /* Optional. If you want to add some class when block is sticky to make some changes etc. Additional class looks like classSelector_active */
});

sticky.stickTheBlock(); /* Optional. First init - check positioning and move block if page scrolled already */

document.addEventListener("scroll", () => {
  sticky.stickTheBlock();
});
```

### Note

Make sure the parent has *position: relative* style

Script using current height of the parent and the sticky block, so if some enother script or action will change parent's height - it's ok, script will handle it (this is the main reason why i made it, other scripts what i found can't do that)

### Demo

https://silentvampr.github.io/stickyBlock/

### Codepen

https://codepen.io/SilentVampR/pen/rNEOJZY
