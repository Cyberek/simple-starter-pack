#Custom startup package

##Fresh installation:

In root directory run: 

```
	npm install
	grunt build:app
```

Uses compressed Javascripts and CSS on production with use of r.js. 
In order to build assets (js and css) run:

```
	grunt build:assets
```
or simply:
```
	grunt
```

##Development
In order to use not compressed css and require version of js replace coresponding lines:
```
	<link rel="stylesheet" href="assets/css/app.css" type="text/css" />
	<script src="assets/js/app.min.js"></script>
```
with:
```
	<link rel="stylesheet" href="assets/css/app.min.css" type="text/css" />
	<script data-main="assets/js/main.js" src="assets/js/bower_components/requirejs/require.js"></script>
```
and run grunt sass watch:
```
	grunt sass:watch
```
