## Features:
- Responsive: Mobile and Desktop view; Under 600px viewport layout and button locations change, also additional break poinst can be defined.
- Swipeable: User can go to next slide by swiping on mobile devices.
- autoplay: carousel can be set to play automatic play(when reaches to end it reverses direction).
- speed: slide duration can be set by prop.
- Changeable cards.
- Ropa Sans typeface used.
- Scss used for styling(styled-components could be used for sake of best practise but I wanted to show you this is also in my skillset).
- Disabling buttons when they are reached to end.
- unit tested.
- end to end tested(even though end to end tests working just fine since API rate limit sometimes just stucking).
- Eslint for code standardization.

## Instructions:

```sh
git clone https://github.com/beratuslu/responsive-image-carousel.git
cd responsive-image-carousel
yarn
yarn start
yarn test
```
Note: e2e tests requires localhost:3000 running.
