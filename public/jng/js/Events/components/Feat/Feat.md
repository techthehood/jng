# Feat notes
>QUESTION - why didn't i create a Feat.hbs file?

GOTCHA: using template literals in hbs breaks the quoted values

Feat.hbs
```
  <div class=`date-saver`>

  html output

  <div class="`date-saver`">
```
> IMPORTANT notice the back ticks inside the quotes "``"