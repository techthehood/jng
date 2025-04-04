# jng notes

### Articles
[How to include bootstrap css and js in reactjs app?](https://stackoverflow.com/questions/40037657/how-to-include-bootstrap-css-and-js-in-reactjs-app)   
[git add recursively | Google search](https://www.google.com/search?q=git+add+recursive&sca_esv=23fc8e95f4db8408&ei=UzzwZ6mvC6iq5NoPyLat0Q4&oq=git+add+re&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmdpdCBhZGQgcmUqAggAMgoQABiABBhDGIoFMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOksUIAUWNIdcAR4AZABAJgBV6AB8ASqAQIxMLgBAcgBAPgBAZgCDqACqAbCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQABiABBixAxhDGIMBGIoFwgILEC4YgAQY0QMYxwHCAg4QLhiABBixAxiDARiKBcICCxAAGIAEGJECGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBixAxiDAcICDRAAGIAEGLEDGEMYigWYAwCIBgGQBgqSBwIxNKAHikayBwIxMLgHrQU&sclient=gws-wiz-serp)   

### Steps to convert to a Production build

1. change the production variable to true   
2. run the webpack production build
3. copy the script and link elements from dist/index.html and paste them into the appropriate production views

#### 1. change the production variable to true   

routers/jng.js
```
  const production = true;// IMPORTANT determines which views will be used
```

#### 2. run the webpack production build

```
  $ cd-jng
  $ nrb
```

#### 3. copy the script and link elements from dist/index.html and paste them into the appropriate production views

**views/bundle_css_prod.hbs**

```
  <link href="jng/js/dist/vendor.bundle.7e06b04a3a18c029f9d8.css" rel="stylesheet">
  <link href="jng/js/dist/main.bundle.13ee8f5a37b1a1485a5c.css" rel="stylesheet">
```

**views/bundle_js_prod.hbs**
```
  <script src="jng/js/dist/bundle.c5986bf105101a05d6e4.js"></script>
  <script src="jng/js/dist/vendor.chunk.ccbc437d97f6aecdb37b.js"></script>
  <script src="jng/js/dist/main.chunk.5b1e8d6e4cafac93a29a.js"></script>
```

GOTCHA ISSUE IMPORTANT NOTE: every time the bundle controlled code changes webpack produces a new hash number for the 
bundle.js and bundle.css files.  so the code above that you paste into the views instantly becomes obsolete and unuseable 
every time you run another production build bundle

use production mode to upload to the server right away with minimal to no adjustments
> you may need to test it and if so, you may need to re-paste the link and script elements into the view bundles

// FAIL: i need to require the full version of handlebars 
// FAIL: needs an html-loader

[handlebars-loader | GitHub](https://github.com/pcardune/handlebars-loader/blob/144127f8cd246742273611680623749d8a0fb94a/examples/basic/app.js)   
[handlebars-loader | npm](https://www.npmjs.com/package/handlebars-loader)   

_webpack.config.js_   

```
  {
    ...
    module: {
      rules: [
        ...
        { test: /\.handlebars$/, loader: "handlebars-loader" }
      ]
    }
  }
```
_component.js_   

```
  var template = require("./file.handlebars");
```


GOTCHA: there is a local image issue in style.css
**js/NovEvt/components/EventCamp/lib/css/style.css**
url("../../../EventCamp/images/Photo-of-Washington-Monument-During-Evening.png") no-repeat center center fixed

locally i had to add an extra section to the path url("../../../../EventCamp/

#### node version 16
```
  nvm use 16
```

#### add files and subdirectories recursively   

Uploading jng-landing to Github is larger than githubs 100MB limit. There are too many unnecessary images and files due to the inclusion of the EventCamp and MegaOne template libraries.  So instead of git add . (all) i need to cd into directories and use git add <filename> to add files or directories recursively

```
  git add .
  git add -A
  git add --all
```
> all are useful in adding all files recursively starting with all the files and directories
> you have currently cd(ed) into   

targeting a directory

```
  git add <directory_name>
```
> you can also cd into the directory and use git add --all (see above)
