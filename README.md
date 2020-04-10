# Fathom Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

## Quick Start & Documentation

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)

## Why Monorepo ?
Working with multiple applications and libraries is difficult. From Google to Facebook, Uber, Twitter and more, a good amount of large software companies handle this challenge by taking a monorepo approach. And they have been doing so for years. These are some of the advantages this approach provides:

- Everything at that current commit works together. Changes can be - verified across all affected parts of the organization.
- Easy to split code into composable modules
- Easier dependency management
- One toolchain setup
- Code editors and IDEs are "workspace" aware
- Consistent developer experience

[Click here to read more.](https://nx.dev/angular/fundamentals/monorepos-automation)

## Dependencies
- Install latest version of nodejs
- Run this command in cmd: npm install -g @angular/cli
- Run this command in cmd: npm install -g @nrwl/schematics

## IDE plugins
For correct code formatting and same code convention, following vs code plugins should be installed:
 - https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig - plugin for EditorConfig support in vs code.
 - https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin - plugin for TSLint hints in vs code.
 - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode - configurable plugin for code formatting in vs code.

## Used Third Party Libraries
- [Kendo UI for Angular
](https://www.telerik.com/kendo-angular-ui), which we will migrate from it slowly to other open source frameworks.

- [eCharts](echarts.apache.org/examples/en/), as a charting library.

- [ngx-bootstrap](ngx-bootstrap), as a UI components library.

- Many more are also used, which you can view by studying the `package.json` file. So, please make sure you use the already existing libraies and do not introduce anything new unless it's needed and there's nothing that does what it do and let your team leader know about it.

## Theme

There's a theme library in the project which is located in libs/theme, it's based on [bootstrap4](https://getbootstrap.com/) and [coreUI](https://coreui.io/angular/demo)

You might want to visit [coreUI](https://coreui.io/angular/demo) demob website to know what styles you could use on which controllers.

## Importing the theme style
In your app's styles.scss file, you can improt it as follows:

 `@import '~@fathom/theme/src/styles/all';`

If you wanted to customize the look and feel of the whole app, then you have to override the SCSS variables BEFORE importing the styles as the scss engine will take the first defined variables and ignore anything after that you import.

For the full list of styles variables, please go to:
`libs\theme\src\styles\core\_variables.scss`

Be careful, don't change the variables in the lib as that will affect all the apps, instead overwrite them in your app as mentioned above.

## Existing Fathom libraries

The libraries we created inside `libs` folder are there so that they can be re-used by any other team member. Please study the existing libraries and make use of them.

For example:

In `libs/common` we have many helper functions that could be useful to you.


## Using Shared Assets across apps

There is a shared assets lib folder in libs, to make any folder in the assets lib folder available for your angular app, you need to modify your app's object configuration in angular.json file and include that folder path to your assets property.

Example, to include 'assets/BaseControlsIcons', we do it this way:

`
...

assets: [
    ...,
    ..., 
    { "glob": "**/*", "input": "libs/assets/BaseControlsIcons/", "output": "./assets/BaseControlsIcons/" }
]
...
`

This way, BaseControlsIcons folder will be available to your app when built and you can reference it in your app as "assets/BaseControlsIcons/FSFilter.png" for example.

Fore more information, please visit:
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/asset-configuration.md#project-assets

## Development server

Run `ng serve xx` where xx is your app name, for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To develop againest the cloud, use this:
`ng serve --app=myapp --configuration=devCloud` where devCloud is environment variables file in environments folder of the project.

Mostly now all apps are configured to be developed against the cloud so you don't need to run any web api in your local machine.

There's an easier way to run your application which is using make.

You can run `make xx-serve` where xx is your app name, examples:
- `make wells-serve`
- `make pipelines-serve`

## Generate your first application

Run `ng generate app myapp` to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace. Read more [here](http://nrwl.io/nx).

Let's say you want to generate a new app called 'productivity-web' and you want it to be in the path apps/productivity/web, then you run the following command:

`ng generate app web --directory=productivity --style=scss`

The result will be apps/productivity/web

For more options, type: `ng generate app --help`

## Creating a Lib
Adding new libs to an Nx Workspace is done by using the Angular CLI generate command, just like adding a new app.
`ng generate lib mylib`

Run `ng generate lib --help --style=scss` to see the list of available options:

To generate a component for your lib, run the following:
`ng generate component header --project=mylib`

As you can see we have provided --project parameter to let the cli know where we want the component to be.

Now, the component will be generated in this directory:
`libs\mylib\src\lib\header`

We want it to be in this directory instead:
`libs\mylib\src\lib\components\header`

So, we just move it and fix the references in mylib.module.ts file.

If we want better referencing link, we create this file:
`libs\mylib\src\lib\index.ts`

and inside it we put:

`export * from './components/header/header.component';`

then in mylib.module.ts file, we can import header commponent as follows:
import { HeaderComponent } from '.';


## Code scaffolding

Run `ng generate component component-name --app=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- First, you need to update the properties in enviroment.prod.ts file of the project you want to build.

- Run `ng build --app=myapp` or `ng build myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

If your project is deployed in server, let's say on this path /ScadaWeb, then pass the following arguments during the build:
`ng build scada-web-viewer --prod --deploy-url /ScadaWeb/ --base-href /ScadaWeb`

Build productivity:
`ng build productivity-web --prod --deploy-url /Productivity/ --base-href /Productivity`

Build vams:
`ng build vams --prod --deploy-url /vams/ --base-href /vams`

Build pipelines:
`ng build pipeline-web --prod --deploy-url /pipelines/ --base-href /pipelines`

There's easier way tp build and deploy which is using `make` file commands which you can read about.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
