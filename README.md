# Material 3 Webcomponent 🌐

## Description

This app was created the test the brand new _(and currently experimental)_ Angular
Material 3 with the new Material You design language. Additionally, the project can
be compiled into a single JavaScript file _(Angular Element / Webcomponent)_.


## Requirements:

| Name        | Version |
| ----------- |---------|
| Angular CLI | 17.3.0  |
| Node        | 20.11.1 |
| npm         | 10.2.4  |
| TypeScript  | 5.4.2   |

## Generating the app

For generating this application the following command was used:
```shell
ng new mat3-webcomponent --skip-git --skip-tests --routing=true --prefix app --style scss --inline-template false --inline-style false --skip-install true
```
Click [here](https://angular.io/cli/new) for more info about these flags.

## Building the app

This application is configured as a web component. To build it simply use the following command:
```shell
npm run build
```

This will result in the build files withing the `dist/app-mat3-webcomponent` folder.

## Using the app as a web component

After building this application, you can import it into any application using the
`<app-mat3-webcomponent></app-mat3-webcomponent>` HTML tag.

## Using Prettier on the project


### What is Prettier?

Prettier is an opinionated code formatter tool. It's pretty handy when it comes to
collaboration between developers.

### How to use Prettier with WebStorm on Mac

* Install Prettier with npm
* Webstorm Settings → Languages & Frameworks → JavaScript →
  1. Enable Prettier
  2. Enable _On 'Reformat Code' action_
  3. Enable _On save_

### Debugging Prettier with WebStorm on Mac

If, for some reason, Prettier doesn't work automatically on save, open the project in the Terminal and
try debugging Prettier with `prettier . --write`.

In my case, enabling the On save feature didn't work at all,
so I had to do this additional step:

Webstorm Settings → Tools → Actions on save → Tick _Reformat Code_

This should fix the problem of Prettier not running on save.
