# MegaOne notes

#### GOTCHA: css-loader not working
> i had to make sure i included the style.chunk.css bundle in the *bundle_css_dev.hbs* file 

its impossible to turn the html templates into component style parts.  All i have accomplished is to create 2
separate (redundant) folders. on is in the root of the public site folder, the other is nested away as a component.

> the font css file had to be included in the site .hbs view

> somehow the template's vendor bundle.min.js file (not the site's bundle.js file) defines the jquery global variable so i had to define it in the view .hbs file (partial) the rest of the js files i kept in the DeferMe.js file

#### don't bundle a bundle

> maybe it doesn't define jquery - i tried to put it back into the component to see if it will work there.
> ISSUE: adding bundle.min.js to a bundle forces the bundle I'm trying to create try to find the files the first bundle orginally imported which are no longer available. 

> the same goes for bundle.min.css - i put it into a .hbs partial and added it to the view and now all the font-awesome icons work again.

```
  <ul class="navbar-nav ml-auto">
    {{#each upper_icons}}
      {{#is_first @index}}
      <li class="nav-item active">
        <a class="nav-link wow fadeInUp scroll" href="{{href}}">{{label}}</a>
      </li>
      {{else}}
        {{#is_even @index}}
          <li class="nav-item">
            <a class="nav-link wow fadeInDown scroll1" href="{{href}}">{{label}}</a>
          </li>
        {{else}}
          <li class="nav-item">
            <a class="nav-link wow fadeInUp scroll" href="{{href}}">{{label}}</a>
          </li>
        {{/is_even}}
      {{/is_first}}
    {{/each}}
  </ul>
```