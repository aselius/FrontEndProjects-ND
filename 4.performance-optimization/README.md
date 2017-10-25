# Website Performance Optimization portfolio project

This project was to optimize a portfolio template created by Udacity so that there are no janks and the page achieves 60fps for the animations it has. The pagespeed for both pc and mobile was also improved so that it achieves a score above 90.

## Running the application
1. Download or fork the files above.
2. Open index.html from the root folder.
3. Measure the pageload.
4. Open views/pizza.html or click Cam's Pizzeria on the index.html in the root folder.
5. Open ChromeDev Tools to measure the animations.

## Changed/New files from original template

### Original template
The vanilla template created by Udacity before all the optimization improvements can be found [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

### Grunt files
1. Gruntfile.js
2. Gruntconfig.yml
3. package.json

Gruntfile was used to minify html,css,js and images / perform pagespeed / to check for js errors. Ngrok was not integrated due to subscription issues.

### Pagespeed improvements
Critical rendering path was blocked by css and synchronous js. This was fixed by separating css into media queries and running non-critical js asynchronously.
* affected files
	1. index.html
	2. css/style.css

### 60fps improvements
Former template triggered layout every frame, thereby preventing a smooth 60fps. This was improved by restructuring the existing javascript file so that layout is triggered once outside of the loop.
* affected files
	1. views/js/main.js
	2. views/css/style.css

* Some of the changes made:
	* For elements being transformed (mover elements), will-change: transform was applied in CSS.
	* Forced Synchronous Layout taken out of iterations
	* Meaningless iterative processes taken out into an empty array
	* Decreased the number of elements being rendered on the page
	* Used more efficient element access calls (querySelect vs getElementByID)
	* Decreased the number of variable calls
	* Optimized function speed

## Instructions to perform minification / pagespeed etc. with Grunt
1. Local host server `python -m SimpleHTTPServer xxxx`
2. `ngrok.exe http xxxx`
3. copy over the address served on ngrok on line 17 of Gruntfile.js
4. 'grunt' or 'grunt.xxxx'
