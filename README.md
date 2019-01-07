# style-equal-height

Most projects like this work by applying an inline style to all elements that match the provided selector.

This works great, unless you have something else changing those elements that will override or simply forget the style attribute.

This plugin will append a style tag to the bottom of your page with the necessary style rules to make the heights equal.


## Usage

- Download the plugin [here](https://github.com/pedroserra/style-equal-height/blob/master/dist/style-equal-height.js) and add it to your page

    `<script source="../style-equal-height.js"></script>`

  or

    `npm install -S style-equal-height`


- if you used npm, import the module in your project

    `import * as styleEqualHeight from 'same-equal-height'; `

    (skip this if you added it directly to your page :) )


- `styleEqualHeight.add( ".selector" )` will make all elements matching the selector have the same height

- `window.addEventListener('resize', styleEqualHeight.trigger)` will update if anytime the window is resized


See a demo [here](http://htmlpreview.github.io/?github.com/pedroserra/style-equal-height/blob/master/demo/index.html)
