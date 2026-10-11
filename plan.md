Follow the Figma design : https://www.figma.com/design/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=0-1&p=f

Stretch Goals :
add a new game button DONE
highlight leader
more counters
change the design


Pseudocode :

## MVP
- create homePoints and guestPoints variables set them to 0 DONE
- grab the div with the score points for both sides DONE
- create functions add1Home ... and add1Guest... DONE
- inside the functions add corosponding points and change the dom to display it DONE

## new game button
- add the button in html DONE
- create a function new game DONE
- set homepoints and guestpoints to zero DONE

## highlight leader
- create function leads
- if home points === guest points nothing happens
- if homepoints > guestpoints change style color to green for homedisplay
- if guestpoints > homepoints change style color to green for guestdisplay
- call function at startup