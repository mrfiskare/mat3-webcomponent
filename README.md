# Material 3 Webcomponent

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
