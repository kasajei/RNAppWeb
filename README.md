#  RNAppWeb

**You need to edit just one file for Web and App!**

[![https://gyazo.com/3eea495f4429b01660221ab3ee676db1](https://i.gyazo.com/3eea495f4429b01660221ab3ee676db1.gif)](https://gyazo.com/3eea495f4429b01660221ab3ee676db1)

**However, Router is different**

You need to create Platform codes. However, [react-navigation](https://github.com/react-navigation/react-navigation) is on progress to work in web.

[![https://gyazo.com/1936da1eb17fa6769f6eaaf463614f5d](https://i.gyazo.com/1936da1eb17fa6769f6eaaf463614f5d.gif)](https://gyazo.com/1936da1eb17fa6769f6eaaf463614f5d)

And it seems to be different from `react-native` and `react-native-web` design. So, you should create components manually.

**You should create shared Components by [react-primitives](https://github.com/lelandrichardson/react-primitives)**

`react-primitives` is a library for creating shared components on `react-native`, `react-native-web`, `react-sketchapp`.


## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`
  * for Web
    * Next.js : run `npm run next:dev`
    * Webpack : run `npm run webpack:dev`