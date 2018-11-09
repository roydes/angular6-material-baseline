# Angular 6 Material Baseline

Baseline of code for a starting project. Include  basic custum forms controls and navegation components.
## Starting and setup
1-Generate new project:ng new angular6-material-base --routing --style=scss
2-Install the angular material package alone with angular cdk: >npm i --save @angular/material @angular/cdk
3-Certain components of angular-material relay on animations so install the animation library:
npm i --save @angular/animations
4-Include also gesture support with HammerJS: npm i --save hammerjs
5-import hammerjs into the main.ts file: import 'hammerjs';
6- Imports browser animation in your app module: import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
7-Here we separate GUI components from bussines application components. So generate a GUI Module
8-Import angular-material. Use a separated file. material.ts file contains Material module.
9-Import material module into the GUI module
10- Install Reactive Extensions for JavaScript. This is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code: npm i rxjs
11- Include a theme. You can either import a pre-built theme or make a custom one in your style.scss: @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
