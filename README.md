# Star's Grid #
My small take at a responsive css grid on less

## Usage #
### All of the following stuff is added as a class #
### Also, I recommend the first element to have the 'row' class #
+ row -- a flex row;
+ col -- always 100% width
  + col-(1-15) -- percentage wide columns;
  + col-md-(1-15) -- percentage wide columns for medium sized devices (767px max);
  + col-sm-(1-15) -- percentage wide columns for small sized devices (639px max);
+ main(-md/-sm)-(start/end/center/between/around) -- flex content aligning on the main axis (horizontal for rows and vertical for columns);
+ cross(-md/sm)-(start/end/center) -- flex content aligning on the secondary axis (vertical for rows and horizontal for columns);

## License #