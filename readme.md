#Simple Countdown Clock
This is just a simple countdown clock that currently handles countdowns up to 59 min and 59 sec.


##Installation
Just add it to composer
```
composer install {repo}
```
Or download the repo from this page and include counter.min.js
```html
<script type="text/javascript" src="path/to/counter.min.js"></script>
```

##Usage
Create a `div` in your html that can contain the canvas and init the counter:
```javascript
new GT.Views.Countdown().start();
```
This initializes the counter with all default values and starts the countdown.

`GT.Views.Countdown()` takes one optional argument: `options`. All options have defaults and are overrideable.
###Options

option | type | default | description
--- | --- | --- | ---
goal | Date | `new Date(new Date().getTime() + 600000)` | A valid Javascript Date objet that is after now and before an hour from now
id | String | 'gt-counter-canvas' | ID attribute for the canvas generated
container | String | 'gt-counter-container' | ID for div container to append canvas to 
minuteColor | String | '#ACD762' | Valid color string for the minute ring
secondColor | String | '#CCEF91' | Valid color string for the seond ring
milliColor | String | '#E1F6BC' | Valid color string for the millisecond ring
width | float | 300 | Width of the canvas
height | float | 300 | Height of the canvas
minText | String | 'min' | Text under the minute counter 
secText | String | 'sec | Text under the second counter

##LICENCE
The MIT License (MIT)

Copyright (c) 2015 Greenticket Development ApS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.