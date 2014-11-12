	 _____                _       _
	/  ___|              | |     | |
	\ `--.  ___ _ __ __ _| |_ ___| |__
	 `--. \/ __| '__/ _` | __/ __| '_ \
	/\__/ / (__| | | (_| | || (__| | | |
	\____/ \___|_|  \__,_|\__\___|_| |_|


Scratch Framework
=============
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/nikoloza/Scratch?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Scratch helps you to make high level front end architecture using `Less` and `HTML5`.

It has semantic code and file structure which helps you write beautiful code.

Scratch is not UI framework, it's for architecture only. If you wish, you just can reference other UI framework and continue working. See how to reference section below.

-------------

Getting Started
-------------

### Stylesheet file
You only need to import `scratch/style.css` in your html file.

**IMPORTANT:** please use `scratch/style.min.css` for production.

-------------

### Grunt for everything
Used **Grunt** to compile, watch and minify CSS.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

Then you need to install required packages:

	$ npm install

With our grunt config we have 5 states to use grunt:

Simply one time compile files:

	$ grunt

Watch and compile files:

	$ grunt run

Run express based simple http server, watch and compile files:

	$ grunt server

Make files ready for production:

	$ grunt production

Clean all grunt generated files:

	$ grunt clean

-------------

### Bower
We use **Bower** for additional packages. We have included 3 package at this state:

* [jQuery](https://github.com/jquery/jquery)
* [Modernizr](https://github.com/Modernizr/Modernizr)
* [html5shiv](https://github.com/aFarkas/html5shiv)
* [fastclick](https://github.com/ftlabs/fastclick)


-------------

### Configuring less
You can configure your project by opening `scratch/var.less` file. There you can change any preference for your project.

Also, you can control what feature you need to import by setting `scratch/scratch.less` file.

-------------

Class reference
=============================
On any element use following classes to make easy changes:


## Grid system
The best grid system to work with. You haven't seen grid system like this before. It's flexible and works for any type of layout.

Starting with parent element as it plays main role here. We have to know how many children we want to be in the container.

So we can set it by naming the class `.row` and number which sets children quantity. For example `.row5` is the container which has 5 elements, each divided **20%** wide. In `.row8`, we'll have children divs **12.5%** wider and so on.

It works for children `<div>`, `<li>`, `<td>` elements and `.cell` classes. Like this:

	.row5
		& > div
		& > div
		& > .cell
		& > .cell
		& > div

	ul.row3
		& > li
		& > li
		& > li

and, of course make them **nested**, like this:

	section.row4
		& > div
		& > div.row2
			& > div
			& > div
		& > .cell
		& > ul.cell.row3
			& > li
			& > li
			& > li

**To increase child elements width** you need to use `.cell` + number class on this element. For example `cell3`. So, it works like this:

	.row5
		& > div
		& > div.cell3					- this takes 3x more space then usual div
		& > div

	table
		& > tr.row4
			& > td
			& > td.cell2
			& > td

#### Spacing for the grid
To prevent spacing by left and right sides or inside cells use following classes:
	.row7
		&.no-padding		 			- sticks cells on eachother
		&.side-padding					- fits grid width by left and right side on the container
		&.twice-padding					- makes padding 2x wider than default

#### Other grid features
You may use other features as well

	row2.float.nofloat	  				- this feature (you'll meet this below) works here as well.

-------------

## Color scheming
Make your site more colorful by configuring `scratch/colors.less` file. Take a look in this reference:

By default we have following colors:
	.blue
	.yellow
	.red
	.lilac
	.green
	.pink
	.orange

	.black
	.blackgray
	.darkgrey
	.midgray
	.lightgray
	.whitegray
	.white

	.transparent
	.default 							- resets on default colors

It can be used as variables in less like `@blue`, `@orange`... Also it can be used in HTML as class. For text color like this `class="color-darkgray"`, for background color like this: `class="bg-lilac"`.


Root color defines container color, which makes easier to add color to children elements. Like this:

	<section class='root-orange'>
		<!-- rootcolor text sample: -->
		<span class="rootcolor">Orange text</span>

		<!-- usual text without color (no need color reseting): -->
		Lorem ipsum dolor sit amet, consectetur adipisicing, delectus magni.

		<!-- rootcolor as a background -->
		<div class="rootbg">
			This container has orange background
		</div>

		<!-- another color usage is simple as usual: -->
		<a href="" class="color-red">Red text</a>
	</section>


-------------

## Text options
LESS file: `scratch/core/classes.less`.

Text preferences for easy changing.

**Text Styles:**

	.slim								- makes text weight 200
	.light								- makes text weight 300
	.normal								- makes text weight 400
	.semibold							- makes text weight 600
	.bold								- makes text weight 700
	.extrabold							- makes text weight 800

	.italic								- makes text italic

**Sizes:**

	.h1									- makes text size like default h1 - 30px
	.h2									- makes text size like default h2 - 28px
	.h3									- makes text size like default h3 - 24px
	.h4									- makes text size like default h4 - 20px
	.h5									- makes text size like default h5 - 18px
	.h6									- makes text size like default h6 - 16px
	.h7									- makes text size additional size h7 - 14px
	.h8									- makes text size additional size h8 - 12px
	.h9									- makes text size additional size h8 - 11px
	.h10								- makes text size additional size h8 - 10px

**Aligns:**

	.align
		&.left							- aligns text on left
		&.center						- aligns text on center
		&.right							- aligns text on right

**Letter cases:**

	.uppercase							- makes text UPPERCASE
	.lowercase							- makes text lowercase
	.camelcase							- makes text CamelCase
	.nocase								- resets font case as is

Please note, that settings can be changed from the file: `scratch/var.less`.

-------------

## Inline childset
Makes children elements inline by `float: left` (use `.nofloat` class to make inline by display).
For `<div>`s and `<li>`s only. Use `.cell` class for another children element.

	.inline
		& > div
		& > li
		& > .cell						- all elements are inline

	.inline.nofloat
		& > div
		& > li
		& > .cell   					- all elements are inline again, but they don't float anymore

-------------

## Floating
LESS file: `scratch/core/classes.less`.

For elements to be floated.

	.float
		&.left							- makes left float
		&.right							- makes right float
		&.nofloat						- resets float to none

-------------

## Clearfixes
LESS file: `scratch/core/classes.less`.

They prevent floated elements to float.

	.clear								- element that prevents floating
	.clearfix							- class name that fixes floating after latest child in the element

-------------

## Hiding and transparency
LESS file: `scratch/core/classes.less`.

Classes to hide (vanish) or transparent elements.

	.hidden								- makes element hide, but leaves its spase
	.hide								- hides element without its spase and focus
	.none								- hides element by !important (that means it overwriting other properties)
	.opacity
		&.full							- makes element fully shown
		&.hight							- makes element 75% transparent
		&.half							- makes element 50% transparent
		&.low							- makes element 25% transparent
		&.zero							- makes fully transparent
	.transparent						- makes element transparent (same as .opacity.zero)

-------------

## Powerful reset
LESS file: `scratch/core/reset.less`.

Reset can be pain sometimes. Here we have reset that doesn't overwrite your classes but it does for almost all property in the browser. Even, you can control many things from `scratch/var.less` file.

-------------

## Units
`rem` and `em` of course! It's easy while root document size is `10px`, so sizing comes like `14px` equals `1.4rem`. Read this great article about why/how to use them: [Font Size Idea](http://css-tricks.com/rems-ems/).

-------------

## CSS as OOP
If you haven't heard about OOCSS principles, you can read it in this following article: [An Introduction To Object Oriented CSS (OOCSS)](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/).

Anyways, you can **skip** reading it and continue here. For the best practice, divide properties by classes and make them reusable.

-------------


Mixins while working in less
=============================
LESS file: `scratch/core/mixins.less`.

Here we have rich library which makes easy to work with LESS. Code is getting at least 20% less when using this mixins and of course, does not loses cross-browser compability. Take a look at this:

For the easy read, I'll just write directly easy reference here.

	Before:											After:

**Border radius:**

	-webkit-border-radius: property;				.radius(property), or .radius(topleft topright bottomright bottomleft)
	   -moz-border-radius: property;
			border-radius: property;

**Box shadow:**

	-webkit-box-shadow: property1, property2;		.shadow(property1, property2), or just .shadow(property)
	   -moz-box-shadow: property1, property2;
			box-shadow: property1, property2;

**Transition:**

	-webkit-transition: property;					.transition(property)
	   -moz-transition: property;
		 -o-transition: property;
			transition: property;

**Filter:**

	-webkit-filter: property;						.filter(property)
	   -moz-filter: property;
		-ms-filter: property;
		 -o-filter: property;
			filter: property;

**Transform:**

	-webkit-transform: property;					.transform(property)
	   -moz-transform: property;
		-ms-transform: property;
		 -o-transform: property;
			transform: property;

**Transform origin:**

	-webkit-transform-origin: property;				.transform-origin(property)
	   -moz-transform-origin: property;
		-ms-transform-origin: property;
		 -o-transform-origin: property;
			transform-origin: property;

**Box sizing:**

	-webkit-box-sizing: property;					.sizing(property), or just .sizing() which uses "border-box" by default
	   -moz-box-sizing: property;
		-ms-box-sizing: property;
			box-sizing: property;

**Text shadow:**

	-webkit-text-shadow: property;					.text-shadow(property)
			text-shadow: property;

**User select:**

	-webkit-user-select: property;					.selectable(property), or selectable() where "none" is default
	   -moz-user-select: property;
		-ms-user-select: property;

**Background clipping:**

	-webkit-background-clip: property;				.clip(property)
	   -moz-background-clip: property;
			background-clip: property;

**Rotate:**

	-webkit-transform: rotate(property);			.rotate(property)
		-ms-transform: rotate(property);
			transform: rotate(property);

**Appearance:**

	-webkit-appearance: property;					.appearance(property), or just .appearance() "none" is default
	   -moz-appearance: property;
			appearance: property;

**Background size:**

	-webkit-background-size: property;				.bgsize(property)
	   -moz-background-size: property;
		 -o-background-size: property;
			background-size: property;


**Placeholder color in forms:**

	::-webkit-input-placeholder {					.placeholder(property), for just .placeholder(), you can set default color in var.less
		color: property;
	}
	:-moz-placeholder {
		color: property;
	}
	:-ms-input-placeholder {
		color: property;
	}
	[data-operaplaceholder] {
		color: property;
	}


**Selection:**

	::selection {									.selection(property1, property2)
		background-color: property1;
		color: property2;
	}

-------------

How to reference
=============================
You can anytime reference other library for UI components. It's very simple.

You only need to paste library's less files into `lib/libraryname` directory. Then add main file to `scratch/lib.less` file. **Bootstrap**'s example is provided there. Then you can decide which component you need to disable from scratch (with `scratch/scratch.less` file) or from included framework provided by them. It's all for avoid conflicts.

-------------

More documentation will be soon.
