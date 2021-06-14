<template lang="pug">
router-view
</template>
<style lang="scss">
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.win98popup {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  max-height: calc(100% - 30px);
  width: fit-content;
  white-space: nowrap;
  align-items: center;
  font-family: "Microsoft Sans Serif", sans-serif;
  background: #c2c6ca;
  font-size: 12px;
  -webkit-font-smoothing: none;
  box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px #c2c6ca, inset -1px -1px #85898d, inset 2px 2px white;
  .button {
  background: #c2c6ca;
  border: none;
  padding: 0;
  border-radius: 0;
  outline: none;
}
  .shadow {
  box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px white, inset -1px -1px #85898d;
}
  .bar {
  display: flex;
  flex-flow: row nowrap;
  font-weight: bold;
  justify-content: space-between;
  width: calc(100% - 11px);
  height: 13px;
  color: white;
  background: #00a;
  padding: 2px 3px 3px;
  margin: 3px 2px 1px 3px;
}
  .bar p {
  margin: 0;
}
  .bar .button {
  width: 15px;
  height: 13px;
}
  .bar .button:active {
  box-shadow: 0.5px 0.5px 0 0.5px white, inset 1px 1px black, inset -1px -1px #c2c6ca, inset 2px 2px #85898d;
}
  .bar .button:active svg {
  transform: translateX(1px) translateY(1px);
}
  .bar .button svg {
  margin: 3px 3px 3px 4px;
}
  .buttons {
  display: flex;
  flex-flow: row nowrap;
  margin: 1px 15px 14px 14px;
  a:not(:last-child) {
  margin-right: 7px;
}
  a {
  text-decoration: none;
  color: inherit;
 }
  .button {
  width: 74px;
  height: 22px;
  display: grid;
  p {
  font-size: 12px;
  margin: auto;
}
  img {
  margin: 4px 3px 3px 4px;
  display: none;
}
  p, img {
  grid-column: 1;
  grid-row: 1;
}
  &:focus {
  box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px black, inset -1px -1px black, inset 2px 2px white, inset -2px -2px #85898d;
}
  &:active {
  box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px black, inset -1px -1px #85898d, inset 2px 2px #85898d;
}
  &:active p, &:active img {
  transform: translateX(1px) translateY(1px);
}
}
  a:focus img {
  display: block;
}

  a:focus, .win98popup a:active{
  outline: none;
}

  }
}
 html, body {
  height: 100%;
}
 body {
  margin: 0;
  background: #5aa;
}

section {
  margin: 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > *:last-child{
    margin-bottom: 0;
  }
}

main.scroll {
  overflow-y: scroll;
}

h2, h3, h4 {
  margin-top: 0;
}
p {
  margin: 0 0 15px;
  text-align: center;
}
ul {
  padding-left: 16px;
  margin: 0 0 15px;
}
ul#projects > li{
  margin-bottom: 6px;
}
::-webkit-scrollbar {
    width: 16px;
}
::-webkit-scrollbar-button{
  box-shadow: inset -1px -1px black, inset 1px 1px #C2C6CA, inset 2px 2px white, inset -2px -2px #85898d;
  background: #C2C6CA;
  image-rendering: pixelated;
  background-repeat: no-repeat;
  background-position: center center;
  width: 16px;
  height: 16px;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset -1px -1px black, inset 1px 1px #C2C6CA, inset 2px 2px white, inset -2px -2px #85898d;
  background: #C2C6CA;
}
::-webkit-scrollbar-track {
  background-image: url('/img/scrollbartrack.svg');
  image-rendering: pixelated;
  background-size: 2px 2px;
}
/* Up */
::-webkit-scrollbar-button:vertical:decrement {
    background-image: url('/img/uparrow.svg');
    background-size: 7px 4px;
}

/* Down */
::-webkit-scrollbar-button:vertical:increment {
  background-image: url('/img/downarrow.svg');
  background-size: 7px 4px;
}

/* Left */
::-webkit-scrollbar-button:horizontal:decrement {
  background-image: url('/img/leftarrow.svg');
  background-size: 4px 7px;
}

/* Right */
::-webkit-scrollbar-button:horizontal:increment {
  background-image: url('/img/rightarrow.svg');
  background-size: 4px 7px;
}
</style>
