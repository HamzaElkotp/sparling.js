# Making Sparling.js Fundamentals 
## Main Logic:
1- Sparling.js deals with a JSON file created by the developer, this JSON file contains an array inside of it there are Objects. 
2- Sparling.js reads these objects and converts them to HTML elements that appear on the main HTML page
3- every object represents a page, with all its content
> example: if you have 5 pages, you'll make an object to every page and add it to the JSON file

4- every object contains main keys:

- `SPAname` => name of the page, will see how to use it later.

- `SPAurl` => URL of the page, to change window URL to it.

- `SPAtitle` => title of the page, to change window title to it.

- `Body` => contains all page contents like p, h1, div.

6- as a SPA application, you have links, buttons, or any elements like that, and when clicking on it, the page generates.

> example: there is a link named "contact us" its job is to move you to the "contact us page" after clicking it, but in SPA it won't move you to other page and will load that page content in the current page, and **this is what will Sparling.js do, but it needs to know what are the elements that when user click them it starts loading pages content** and this is why `SPAname` is here.

7- Any html element you want it to call a page when user click it, give it a meta tag called `SPAname` and give it a value, it works like `id` .
8- Sparling.js select any element that has `SPAname` and give it `addEventListner` and it'll do the following:
9- Sparling.js will read the gifted value to `SPAname` meta tag in clicked element and search in JSON file about the object that have same value in `SPAname` key.

> example: if we have an HTML element has this meta tag and this value: `SPAname="contact us"` and we've 2 objects, first conatins: `"SPAname": "contact us"` and the second `SPAname="customers"` so Sparling.js will select first object because it has the same `SPAname`.

10- After finding the true object, `addEventListner` will change window title to `SPAtitle` value and the window URL to `SPAurl` value.
11- After that it will access to `Body` and loop through it to extract every line in it to HTML element and inner them in a HTML element that has `id` called `SPAoutContent`.









