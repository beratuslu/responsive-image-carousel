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
e2e tests requires localhost:3000 running.

##Notes: 

I used create react app because it provides good foundation for testing and transpiling trough webpack etc.. I used flex box for laying out elements.. It is modern way of doing that. Carousel I developed not only for this images it can be used for other contents. In app, 3 sample use cases shown. I focused to show technologies I am using rather than perfect carousel. I could provide also other conventions and best practices for this task for example redux and redux saga for async actions but it is not fitting in this assingment. It has very easy usage by just importing carousel and card component to another module and give data and additional props.


