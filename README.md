#  RNAppWeb

**You need to edit just one file for Web and App!**

[![https://gyazo.com/3eea495f4429b01660221ab3ee676db1](https://i.gyazo.com/3eea495f4429b01660221ab3ee676db1.gif)](https://gyazo.com/3eea495f4429b01660221ab3ee676db1)

**However, Router is different**

You need to create Platform codes. However, [react-navigation](https://github.com/react-navigation/react-navigation) is on progress to work in web.

[![https://gyazo.com/1936da1eb17fa6769f6eaaf463614f5d](https://i.gyazo.com/1936da1eb17fa6769f6eaaf463614f5d.gif)](https://gyazo.com/1936da1eb17fa6769f6eaaf463614f5d)

And it seems to be different between `react-native` and `react-native-web` design. So, you should create components manually.

**You should create shared Components by [react-primitives](https://github.com/lelandrichardson/react-primitives)**

`react-primitives` is a library for creating shared components on `react-native`, `react-native-web`, `react-sketchapp`.

**Redux work**

[![https://gyazo.com/9b1b3dcb9d5204d742755be2ec2c5cd6](https://i.gyazo.com/9b1b3dcb9d5204d742755be2ec2c5cd6.gif)](https://gyazo.com/9b1b3dcb9d5204d742755be2ec2c5cd6)

These also are different design between App and Web because of `react-native` and `react-native-web` components differances.

**Storybook work**

[![https://gyazo.com/baa1dcdbf3314756e5c2aae2dd95f287](https://i.gyazo.com/baa1dcdbf3314756e5c2aae2dd95f287.png)](https://gyazo.com/baa1dcdbf3314756e5c2aae2dd95f287)

My settings is for `@storybook/react`, so this component is `react-native-web` or `react-primitives`.

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
    * Webpack : run `npm run webpack:dev`


## Test

* Test All: `npm run test:watch TodoReduxTest`
* Test Single file `npm run test:watch TodoReduxTest`

## Storybook

**We use stroybook for sharing UI Components**

We want to share UI Components between RN and RNW. And also between Engineer and Designer.
So, I recommend to use Storybook.

If you want to share to Sketch, you write sharing components with [react-primitives](https://github.com/lelandrichardson/react-primitives).

My settings is for `@storybook/react`. So, Storybook of this settings didn't use for RN components.
If you want to show, you should set for `@storybok/react-native`.

This setting is searching `App/Componets` folder. 
If you want to configure settings, you should see `.storybook` and `storybook` folders.

* `npm run storybook`
* http://localhost:6006