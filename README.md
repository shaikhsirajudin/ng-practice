# NgPractice
[Angular Installation](https://angular.dev/installation)
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Upgrading to newer version
* First of all, you need to uninstall the current angular from your system.
```


npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli
npm uninstall -g @angular/cli
2.Clean up the cache

> npm cache clean

> npm cache clean is renamed as 
> npm cache verify 
from npm 5 onwards

3.Install angular globally

npm install -g @angular/cli@latest
4.Local project setup if you have one

rm -rf node_modules
npm install --save-dev @angular/cli@latest
npm install

```
* Alternative approach using npm-upgrade:
```
npm i -g npm-upgrade
Go to your project folder

npm-upgrade check

```
# Learn Angular

This repository contains a list of resources to learn Angular. It includes tutorials, articles, videos, books, and other resources to help you learn Angular from scratch.


## Table of Contents

- [Introduction](#introduction)
  - [Features of Angular](#features-of-angular)
  - [Difference between AngularJS vs Angular](#difference-between-angularjs-vs-angular)
  - [Explain in details all angular version and their features](#Explain-in-details-all-angular-version-and-their-features)
  - [Angular vs React](#angular-vs-react)
- [Roadmap](#roadmap)
- [Configuration](#configuration)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Components](#components)
  - [Three main building blocks](#three-main-building-blocks)
  - [Component Creation](#component-creation)
    - [Using Angular CLI](#using-angular-cli)
    - [Manual Creation](#manual-creation)
    - [Example](#example)
  - [Scope](#scope)
  - [View Encapsulation](#view-encapsulation)
    - [Emulated View Encapsulation](#emulated-view-encapsulation)
    - [Shadow DOM View Encapsulation](#shadow-dom-view-encapsulation)
    - [None View Encapsulation](#none-view-encapsulation)
  - [Component Communication](#component-communication)
    - [Parent to Child](#parent-to-child)
    - [Child to Parent](#child-to-parent)
- [Data Binding](#data-binding)
  - [One Way Binding](#one-way-binding)
  - [Two Way Binding](#two-ways-binding)
- [Directives](#directives)
  - [Structural Directives](#structural-directives)
  - [Attribute Directives](#attribute-directives)
  - [Custom Directives](#custom-directives)
  - [Other Directives](#other-directives)
- [Pipes](#pipes)
  - [Date Pipe](#date-pipe)
  - [Uppercase Pipe](#uppercase-pipe)
  - [Lowercase Pipe](#lowercase-pipe)
  - [Currency Pipe](#currency-pipe)
  - [Percent Pipe](#percent-pipe)
  - [Slice Pipe](#slice-pipe)
  - [Decimal/number Pipe](#decimalnumber-pipe)
  - [JSON Pipe](#json-pipe)
  - [Async Pipe](#async-pipe)
- [Decorators](#decorators)
  - [Input](#input)
  - [Output](#output)
  - [HostListener](#hostlistener)
  - [ContentChild & ContentChildren](#contentchild--contentchildren)
  - [ViewChild & ViewChildren](#viewchild--viewchildren)
  - [HostListener](#hostlistener)
  - [ContentChild & ContentChildren](#contentchild--contentchildren)
  - [ViewChild & ViewChildren](#viewchild--viewchildren)
- [Life Cycle Hooks](#life-cycle-hooks)
  - [OnChanges](#onchanges)
  - [OnInit](#oninit)
  - [DoCheck](#docheck)
  - [AfterViewInit](#afterviewinit)
  - [AfterViewChecked](#afterviewchecked)
  - [AfterContentInit](#aftercontentinit)
  - [AfterContentChecked](#aftercontentchecked)
  - [OnDestroy](#ondestroy)
- [Forms](#forms)
  - [Template Driven Forms](#template-driven-forms)
  - [Reactive Forms](#reactive-forms)
- [Services](#services)
  - [Injectable Decorator](#injectable-decorator)
  - [Dependency Injection](#dependency-injection)
  - [Providers](#providers)
- [Routing](#routing)
  - [Router Outlet](#router-outlet)
  - [Router Link](#router-link)
  - [Router Link Active](#router-link-active)
  - [Router State](#router-state)
  - [Router Events](#router-events)
  - [Router Guards](#router-guards)
- [Lazy Loading](#lazy-loading)
- [HTTP Client](#http-client)
- [Destroy Ref](#destroy-ref)
- [Http](#http)
- [Module](#module)
- [Router](#router)
- [Route Parameter](#route-parameters)
- [Route Guards](#route-guards)
- [Observables](#observables-in-angular)
  - [Creating Observables](#creating-observables)
  - [Subscribing to Observables](#subscribing-to-observables)
  - [Difference between Observables and Promises in Angular](#difference-between-observables-and-promises-in-angular)
- [Unsubscribe](#unsubscribe-in-angular)
- [Renderer2](#renderer2)
- [JIT](#jit)
- [AOT](#aot)
- [Deferrable Views](#deferrable-views)
- [Meta Tags](#meta-tags)
  - [Title Service](#title-service)
    - [Dynamic Title](#dynamic-title)
  - [Meta Service](#meta-service)
- [Security](#security)
  - [Preventing cross-site scripting (XSS)](#preventing-cross-site-scripting-xss)
  - [Angular's cross-site scripting security model](#angulars-cross-site-scripting-security-model)
  - [Preventing cross-site scripting (XSS)](#preventing-cross-site-scripting-xss)
  - [Angular's cross-site scripting security model](#angulars-cross-site-scripting-security-model)
  - [Sanitization and security contexts](#sanitization-and-security-contexts)
  - [Sanitization example](#sanitization-example)
  - [Direct use of the DOM APIs and explicit sanitization calls](#direct-use-of-the-dom-apis-and-explicit-sanitization-calls)
  - [Trusting safe values](#trusting-safe-values)
  - [Content security policy](#content-security-policy)
  - [Enforcing Trusted Types](#enforcing-trusted-types)
  - [Use the AOT template compiler](#use-the-aot-template-compiler)
  - [Server-side XSS protection](#server-side-xss-protection)
  - [HTTP-level vulnerabilities](#http-level-vulnerabilities)
  - [Cross-site request forgery](#cross-site-request-forgery)
  - [HttpClient XSRF/CSRF security](#httpclient-xsrfcsrf-security)
  - [Configure custom cookie/header names](#configure-custom-cookieheader-names)
  - [Disabling XSRF protection](#disabling-xsrf-protection)
  - [Cross-site script inclusion (XSSI)](#cross-site-script-inclusion-xssi)
  - [Auditing Angular applications](#auditing-angular-applications)
- [Standalone Components](#standalone-components)
- [Angular Signals](#angular-signals)
- [Control Flow](#control-flow)
- [Angular Animations](#angular-animations)
  - [Installing Angular Animations](#installing-angular-animations)
- [Angular Universal](#angular-universal)
  - [Creating an Angular Universal application](#creating-an-angular-universal-application)
- [Bootstrap](#bootstrap)
  - [Installing Bootstrap](#installing-bootstrap)
  - [Importing Bootstrap](#importing-bootstrap)
- [Angular Material](#angular-material)
  - [Installing Angular Material](#installing-angular-material)
  - [Importing Angular Material](#importing-angular-material)
- [Tailwind CSS](#tailwind-css)
  - [Installing Tailwind CSS](#installing-tailwind-css)
  - [Importing Tailwind CSS](#importing-tailwind-css)
- [PrimeNG](#primeng)
  - [Installing PrimeNG](#installing-primeng)
  - [Importing PrimeNG](#importing-primeng)
- [SPA](#spa)
  - [Advantages of SPA](#advantages-of-spa)
- [PWA](#pwa)
  - [Installing PWA](#installing-pwa)
  - [Configuring PWA](#configuring-pwa)
  - [Building PWA](#building-pwa)
  - [Service Worker](#service-worker)
  - [Features of PWA](#features-of-pwa)
- [CLI Commands](#cli-commands)
- [Version compatibility](#version-compatibility)
- [Deploying an Angular Application](#deploying-an-angular-application)
- [Imports](#imports)
- [TypeScript](#typescript)
- [RxJS](#rxjs)
- [Learn From GitHub Repositories](#learn-more-from-github-repositories)
- [Learn From Websites](#learn-more-from-websites)
- [Learn From Books](#learn-more-from-books)
- [Learn From YouTube Channels](#learn-from-youtube-channels)
- [Learn More From Blogs Sites](#learn-more-from-blogs-sites)
- [List of Online Editors/Compiler for Angular](#list-of-online-editorscompiler-for-angular)
- [List of Twitter Users to Follow](#list-of-twitter-users-to-follow)
- [List of LinkedIn Users to Follow](#list-of-linkedin-users-to-follow)
- [List of Discord Servers to Join](#list-of-discord-servers-to-join)

## Introduction

**Angular** is a popular open-source framework by Google for building single-page and dynamic web applications. It offers tools and libraries for components, services, forms, routing, and HTTP client, all built with TypeScript. Angular is known for its performance, scalability, and developer productivity.

### Features of Angular

- **Component-Based Architecture**: Reusable, self-contained units of code that define the UI and behavior of a part of the application.
- **Two-Way Data Binding**: Automatic synchronization of data between the model and the view.
- **Dependency Injection**: Provides components with the services they need for better modularity and testability.
- **Routing**: Powerful system for navigation between different views, supporting deep linking, lazy loading, and route guards.
- **Forms**: Tools for template-driven and reactive forms, based on a model-driven approach.
- **HTTP Client**: Simple API for making HTTP requests and handling responses.
- **Observables**: Handles asynchronous operations and event handling.
- **TypeScript**: Superset of JavaScript with static typing, better tooling, error checking, and code completion.
- **Performance**: Optimized for performance with virtual DOM, lazy loading, tree shaking, and ahead-of-time compilation.
- **Mobile Support**: Tools for building responsive, touch-friendly mobile applications, including PWAs.
- **SEO Friendly**: Tools for server-side rendering, pre-rendering, and meta tags to improve search engine visibility.
- **Community Support**: Large, active community providing support and sharing knowledge.

### Difference between AngularJS vs Angular

| AngularJS | Angular |
|-----|-----|
|Based on MVC Architecture|Based on Components|
|Uses JavaScript to build the application| Uses TypeScript to build the application|
|No Mobile Support|Mobile supports|
|Run on only client-side|Runs on both client-side as well as server-side|
|CLI not present|CLI present|
|No SEO Friendly|Seo Friendly|
|Performance is slow|Performance is fast|

[Back to top⤴️](#table-of-contents)

### Explain in details all angular version and their features
Angular is a popular open-source web application framework maintained by Google and a community of developers. It is widely used for building dynamic, single-page applications (SPAs). Over the years, Angular has gone through several major versions, each introducing new features, improvements, and breaking changes. Below is a detailed explanation of the major versions of Angular and their key features:

---

### **AngularJS (Angular 1.x)**
- **Release Date**: 2010
- **Type**: JavaScript-based framework
- **Key Features**:
  - Two-way data binding: Automatically synchronizes data between the model and view.
  - Directives: Custom HTML attributes (e.g., `ng-model`, `ng-repeat`) to extend HTML functionality.
  - Dependency Injection: Simplifies testing and modularity.
  - Templates: HTML-based templates with Angular-specific attributes.
  - Controllers: Manages application logic and data.
  - Scope: Acts as a glue between the controller and the view.
- **Limitations**:
  - Performance issues with large applications.
  - Lack of component-based architecture.
  - Difficult to optimize for mobile devices.

---

### **Angular 2**
- **Release Date**: September 2016
- **Type**: Complete rewrite of AngularJS in TypeScript.
- **Key Features**:
  - Component-based architecture: Replaced controllers and scopes with components.
  - TypeScript: Improved tooling, type safety, and scalability.
  - Improved performance: Faster change detection and rendering.
  - Mobile support: Designed with mobile-first principles.
  - Modularity: Introduced NgModules for better organization of code.
  - Directives: Split into structural (`*ngIf`, `*ngFor`) and attribute directives.
  - Dependency Injection: Improved and more flexible.
  - CLI (Command Line Interface): Introduced Angular CLI for scaffolding and building projects.
### **Key Features:**
- **Component-Based Architecture:** Unlike AngularJS, which used controllers and scope, Angular 2 introduced components as the primary building blocks.
- **TypeScript Support:** Angular 2 was written in TypeScript, providing strong typing, object-oriented programming, and better tooling.
- **Directives:** Divided into Structural Directives (e.g., `*ngIf`, `*ngFor`) and Attribute Directives (e.g., `ngClass`, `ngStyle`).
- **Dependency Injection (DI):** Improved DI system for better modularity and testability.
- **Improved Performance:** Faster rendering and execution compared to AngularJS.
- **Angular CLI:** Introduced as a command-line interface for easier project management.
- **Template Syntax:** Improved binding syntax with property binding (`[ ]`) and event binding (`( )`).
- **Routing Module:** Introduced a modular approach to handling application navigation.
- **Breaking Changes**:
  - Not backward-compatible with AngularJS.

---

### **Angular 4**
- **Release Date**: March 2017
- **Key Features**:
  - Smaller and faster: Reduced bundle size and improved performance.
  - Animation package: Moved animations to a separate package (`@angular/animations`).
  - `ngIf` with `else`: Added support for `else` syntax in `*ngIf`.
  - TypeScript 2.1 and 2.2 support.
  - Introduced `titlecase` pipe for text transformations.
- **Why skip Angular 3?**:
  - Version mismatch between Angular Router (v3) and Angular Core (v2), so the team decided to align versions by skipping to Angular 4.
### **Key Features:**
- **Smaller and Faster Applications:** Reduced the size of compiled code by around 60%.
- **HTTPClient:** Introduced `HttpClient` module to replace the older `Http` module.
- **Animation Package:** Animations moved to a separate module (`@angular/animations`) for better modularization.
- **Improved TypeScript Support:** Added support for TypeScript 2.1 and 2.2.
- **Ahead-of-Time (AOT) Compilation Improvements:** Faster build times and better error checking.
- **Optional Parameters in Route Configuration:** Improved flexibility in defining routes.
---

### **Angular 5**
- **Release Date**: November 2017
- **Key Features**:
  - Build Optimizer: Reduced bundle size by removing unnecessary code.
  - Compiler improvements: Faster build times and better tree-shaking.
  - HttpClient: Replaced `Http` module with `HttpClient` for simpler and more powerful HTTP requests.
  - Internationalization (i18n): Improved support for multi-language applications.
  - Pipes for date, currency, and numbers: Added new pipes for better formatting.
  - Router lifecycle events: Added events like `GuardsCheckStart` and `GuardsCheckEnd`.
### **Key Features:**
- **Build Optimizer:** Automatically removes unnecessary code in production builds.
- **Improved AOT Compilation:** Faster and more reliable compilation process.
- **HttpClient Improvement:** The new `HttpClient` module became the recommended way to make HTTP requests.
- **PWA Support:** Progressive Web Application (PWA) support with Service Workers.
- **DOM Performance Improvements:** Better rendering and update performance.
---

### **Angular 6**
- **Release Date**: May 2018
- **Key Features**:
  - Angular CLI: Introduced `ng update` and `ng add` commands for easier updates and adding libraries.
  - Angular Elements: Enabled the use of Angular components in non-Angular environments.
  - Ivy Renderer: Announced as the future rendering engine (not enabled by default).
  - RxJS 6: Updated to RxJS 6 with backward-compatibility support.
  - Tree-shakable providers: Improved dependency injection for smaller bundles.
  - Service worker: Improved support for Progressive Web Apps (PWAs).
### **Key Features:**
- **Angular Elements:** Allowed Angular components to be used as Web Components.
- **Tree Shakable Providers:** Reduces the size of the final bundle by removing unused services.
- **CLI Workspaces:** Enabled multiple projects within a single workspace.
- **Material & CDK Updates:** Improved Angular Material with new UI components.
- **RxJS 6 Support:** Improved reactive programming with a more modular and efficient RxJS.
---

### **Angular 7**
- **Release Date**: October 2018
- **Key Features**:
  - CLI Prompts: Introduced prompts for commands like `ng new` and `ng add`.
  - Drag and Drop: Added CDK (Component Dev Kit) support for drag-and-drop interfaces.
  - Virtual Scrolling: Improved performance for large lists.
  - Angular Material: Updated with new components and improvements.
  - Budgets: Added bundle size budgets to warn developers about large bundles.
### **Key Features:**
- **Virtual Scrolling:** Efficiently renders large lists of data by loading only visible items.
- **Drag & Drop Module:** Introduced an easy-to-use drag-and-drop API.
- **CLI Prompts:** Angular CLI became more interactive, asking for configuration preferences.
- **Improved Performance:** Faster rendering and execution due to updates in the Ivy compiler.
- **Dependency Updates:** Supported RxJS 6.3 and TypeScript 3.1.
---

### **Angular 8**
- **Release Date**: May 2019
- **Key Features**:
  - Differential Loading: Generated separate bundles for modern and legacy browsers.
  - Ivy Renderer: Made available as an opt-in preview.
  - Lazy Loading: Supported dynamic imports for lazy-loaded routes.
  - Web Workers: Improved support for offloading work to web workers.
  - Builder API: Introduced a new API for extending the Angular CLI.
### **Key Features:**
- **Ivy Preview:** Introduced as an experimental feature to improve rendering speed.
- **Differential Loading:** Automatically generates optimized JavaScript bundles for modern browsers.
- **Lazy Loading with Dynamic Imports:** Improved syntax for lazy loading of modules.
- **Support for Web Workers:** Improved support for multi-threaded execution.
- **Bazel Support (Experimental):** Allowed faster builds and optimizations.
---

### **Angular 9**
- **Release Date**: February 2020
- **Key Features**:
  - Ivy by Default: Ivy became the default rendering engine, offering:
    - Smaller bundle sizes.
    - Faster compilation.
    - Improved debugging with better stack traces.
  - TypeScript 3.7 support.
  - Improved internationalization (i18n) support.
  - New `providedIn` syntax for services.
### **Key Features:**
- **Ivy Renderer (Default):** Faster compilation and improved debugging experience.
- **Smaller Bundle Size:** Optimized JavaScript bundle sizes for better performance.
- **Improved AOT Compilation:** Better error handling and faster compilation times.
- **Internationalization (i18n) Improvements:** Enhanced support for translating applications.
- **Component Harnesses:** Improved testing utilities for Angular Material components.
---

### **Angular 10**
- **Release Date**: June 2020
- **Key Features**:
  - New Date Range Picker: Added to Angular Material.
  - CommonJS Import Warnings: Warned about potential bundle size issues.
  - Optional Stricter Settings: Enabled stricter type-checking and bundle budgets.
  - TypeScript 3.9 support.
  - Updated URL routing for better consistency.
### **Key Features:**
- **New Date Range Picker:** Added to Angular Material.
- **Optional Stricter Settings:** Improved type safety with stricter TypeScript settings.
- **Improved Logging & Warnings:** Better debugging and error messages.
- **TypeScript 3.9 Support:** Updated for better compatibility.
- **Faster Builds:** Improved performance and reduced build times.
---

### **Angular 11**
- **Release Date**: November 2020
- **Key Features**:
  - Automatic Font Inlining: Improved performance by inlining fonts.
  - Component Test Harnesses: Simplified testing of Angular Material components.
  - Updated Hot Module Replacement (HMR) support.
  - TypeScript 4.0 support.
  - ESLint support: Introduced as an alternative to TSLint.
### **Key Features:**
- **Faster Builds:** Optimized AOT compilation and HMR (Hot Module Replacement).
- **Automatic Font Inlining:** Reduces render-blocking resources.
- **Improved CLI & Logging:** Better debugging experience with CLI improvements.
- **Updated Roadmap:** Clearer guidance on future Angular features.
---

### **Angular 12**
- **Release Date**: May 2021
- **Key Features**:
  - Nullish Coalescing: Added support for the `??` operator in templates.
  - Strict Mode: Enabled stricter type-checking by default.
  - Deprecated View Engine: Ivy became the only rendering engine.
  - Updated Angular Material with new components and styles.
  - Improved build speed and bundle size.
### **Key Features:**
- **Removal of View Engine:** Ivy became the only supported rendering engine.
- **Strict Mode by Default:** Improved performance and maintainability.
- **Webpack 5 Support:** Faster and more efficient builds.
- **ESLint Adoption:** Deprecated TSLint in favor of ESLint.
- **Better i18n Support:** Improved internationalization capabilities.
---

### **Angular 13**
- **Release Date**: November 2021
- **Key Features**:
  - Removal of View Engine: Fully transitioned to Ivy.
  - TypeScript 4.4 support.
  - Improved Angular CLI: Simplified build process and removed older formats.
  - Enhanced Angular Material components.
  - Support for inlining fonts and Adobe fonts.
### **Key Features:**
- **No More IE 11 Support:** Removed legacy support for better optimizations.
- **Improved AOT Compilation:** Faster and more efficient builds.
- **Improved Angular CLI:** Better debugging and error handling.
- **Dynamic Component Creation:** Simplified API for dynamically creating components.
---

### **Angular 14**
- **Release Date**: June 2022
- **Key Features**:
  - Standalone Components: Introduced a simplified way to create components without NgModules.
  - Typed Forms: Added type safety to reactive forms.
  - Streamlined Page Title Accessibility: Simplified setting page titles.
  - Enhanced Developer Tools: Improved debugging and error messages.
  - Angular CLI Autocompletion: Added command-line autocompletion.
### **Key Features:**
- **Typed Forms:** Introduced strongly typed reactive forms.
- **Standalone Components (Experimental):** Allowed components to work without NgModules.
- **Better CLI Autocompletion:** Improved developer productivity.
---

### **Angular 15**
- **Release Date**: November 2022
- **Key Features**:
  - Stable Standalone APIs: Made standalone components, directives, and pipes stable.
  - Directive Composition API: Enabled combining directives for reusable logic.
  - Improved Stack Traces: Better debugging for errors.
  - MDC-based Components: Updated Angular Material components to use Material Design Components for Web.
  - Image Directive (NgOptimizedImage): Improved image loading performance.
### **Key Features:**
- **Stable Standalone Components:** No need for NgModules.
- **Enhanced Performance:** Optimized lazy loading and rendering.
- **Signal API (Experimental):** Improved state management.

---

### **Angular 16**
- **Release Date**: May 2023
- **Key Features**:
  - Signals (Preview): Introduced a new reactivity model for fine-grained change detection.
  - Server-Side Rendering (SSR) Improvements: Enhanced support for Angular Universal.
  - Improved Tooling: Better support for Jest and ESLint.
  - Required Inputs: Added support for required component inputs.
  - Self-Closing Tags: Allowed self-closing tags for components.
### **Key Features:**
- **Signal API (Stable):** A new way to manage reactive state.
- **Hydration Support:** Improved Server-Side Rendering (SSR).
- **Performance Boost:** Better lazy loading, enhanced reactivity.

---

### **Angular 17**
- **Release Date**: November 2023 
- **Key Features**:
  - Full Signals Integration: Signals expected to become stable.
  - Further SSR Improvements: Enhanced performance and developer experience.
  - New DevTools: Improved debugging and profiling tools.
  - Enhanced Performance: Continued focus on smaller bundles and faster rendering.
### **Key Features:**
- **View Transitions API:** Enhanced animations and seamless navigation.
- **ESBuild Optimizations:** Faster and smaller builds.
- **Zoneless Angular (Experimental):** Improved performance without zones.

### **Angular 18**
- **Release Date**: May 2024 
- **Key Features**:
  - Zoneless Change Detection: Experimental support for zoneless change detection, improving composability with other libraries, faster rendering, smaller bundle sizes, and simpler debugging.

  - Material 3: Stabilized Material Design components with improvements and enhancements.

  - Deferrable Views: Allows developers to delay rendering certain parts of the UI until they are needed, optimizing performance and initial load times.

  - Server-Side Rendering (SSR) Improvements: Better i18n hydration support and improved debugging of SSR applications.

  - TypeScript 5.4 Support: Compatibility with the latest TypeScript features and improvements

### **Angular 19**
- **Release Date**: Nov 2024 
- **Key Features**:
#### 1. **Enhanced Reactivity with Signals**
   - Angular 18 is expected to stabilize the **Signals** API, which introduces a new reactivity model for fine-grained change detection.
   - Angular 19 may further optimize Signals, adding new features like:
     - Better integration with RxJS.
     - Improved performance for large-scale applications.
     - Enhanced developer tools for debugging reactive state.

#### 2. **Improved Server-Side Rendering (SSR)**
   - Angular 18 will likely focus on stabilizing and improving Angular Universal for SSR.
   - Angular 19 may introduce:
     - Faster SSR rendering times.
     - Better hydration techniques for smoother transitions between server and client.
     - Enhanced support for edge computing and serverless environments.

#### 3. **Standalone APIs and Component Improvements**
   - Angular 18 will likely finalize standalone APIs for components, directives, and pipes.
   - Angular 19 may expand on this by:
     - Adding more standalone APIs for advanced use cases.
     - Improving interoperability with NgModules for gradual migration.
     - Introducing new standalone Angular Material components.

#### 4. **Performance Optimizations**
   - Angular 19 will likely focus on further reducing bundle sizes and improving runtime performance.
   - Potential features include:
     - Better tree-shaking and dead code elimination.
     - Faster build times with incremental compilation.
     - Improved change detection mechanisms.

#### 5. **Enhanced Developer Experience**
   - Angular 19 may introduce new tools and features to improve developer productivity, such as:
     - Improved Angular CLI commands for scaffolding and debugging.
     - Better integration with popular IDEs and code editors.
     - Enhanced error messages and debugging tools.

#### 6. **New Angular Material Components**
   - Angular 19 may introduce new UI components in Angular Material, such as:
     - Advanced data tables with built-in filtering and sorting.
     - New form controls and input types.
     - Enhanced accessibility features for existing components.

#### 7. **TypeScript and ECMAScript Support**
   - Angular 19 will likely support newer versions of TypeScript and ECMAScript, enabling developers to use the latest language features.
   - Potential updates include:
     - Support for TypeScript 5.3 or later.
     - Adoption of new ECMAScript features like decorators and pipeline operators.

#### 8. **Improved Testing Tools**
   - Angular 19 may introduce new testing utilities and improvements, such as:
     - Better support for component testing with Signals.
     - Enhanced integration with testing frameworks like Jest and Cypress.
     - New APIs for mocking and spying in unit tests.

#### 9. **Community-Driven Features**
   - Angular 19 may include features requested by the community, such as:
     - Simplified state management solutions.
     - Better support for micro-frontend architectures.
     - Enhanced internationalization (i18n) and localization (l10n) tools.

### **Incremental Hydration**
- **Angular 19**: Introduces incremental hydration for enhanced server-side rendering (SSR), allowing parts of the application to be loaded and rendered incrementally.
- **Angular 18**: Improved SSR support but without incremental hydration.

### **Linked Signals**
- **Angular 19**: Enhanced Signals API with linked signals that respond to changes in a source signal and can reset themselves based on computed values.
- **Angular 18**: Introduced Signals for optimized reactivity but without linked signals.

### **Route-level Render Mode**
- **Angular 19**: Allows developers to configure rendering modes at the route level for more granular control over component rendering.
- **Angular 18**: No route-level render mode feature.

### **Event Replay**
- **Angular 19**: Event replay is enabled by default, improving debugging by allowing developers to replay user interactions.
- **Angular 18**: Standard debugging tools without event replay.

### **Modernizing Code with Language Service**
- **Angular 19**: Enhanced Angular Language Service for better code completion, navigation, and diagnostics.
- **Angular 18**: Standard Angular Language Service without these enhancements.

### **Hot Module Replacement**
- **Angular 19**: Supports Hot Module Replacement, allowing developers to update modules in real-time without reloading the entire application.
- **Angular 18**: No Hot Module Replacement feature.

### **Standalone Defaults**
- **Angular 19**: Standalone components and directives are now the default, simplifying development and reducing dependencies.
- **Angular 18**: Standalone components were available but not the default.

### **State of Zoneless**
- **Angular 19**: Experimental support for zoneless change detection, offering potential performance improvements.
- **Angular 18**: No zoneless change detection feature.

### **State of Testing Tooling**
- **Angular 19**: Expanded testing capabilities with improved tools and frameworks for more robust testing.
- **Angular 18**: Standard testing tools without these enhancements.

### **Security Enhancements**
- **Angular 19**: New components like the Google Resource Time Picker enhance security and usability.
- **Angular 18**: Standard security features without these specific enhancements.

### **Two-dimensional Drag and Drop**
- **Angular 19**: Supports two-dimensional drag and drop for more complex and interactive user interfaces.
- **Angular 18**: No two-dimensional drag and drop feature.

These features in Angular 19 aim to improve performance, developer productivity, and application security compared to Angular 18. Are you considering upgrading to Angular 19 for your project?

---

### **Summary of Angular 19 vs Angular 18**
| **Feature**                  | **Angular 18**                              | **Angular 19**                              |
|------------------------------|---------------------------------------------|---------------------------------------------|
| **Reactivity**               | Signals API stabilized                      | Signals API optimized and expanded          |
| **SSR**                      | Improved SSR and hydration                  | Faster SSR and edge computing support       |
| **Standalone APIs**          | Stable standalone components               | Advanced standalone features                |
| **Performance**              | Smaller bundles and faster builds          | Further optimizations for runtime speed     |
| **Developer Tools**          | Enhanced CLI and debugging tools           | New IDE integrations and error handling     |
| **Angular Material**         | New components and accessibility features  | Additional UI components and improvements   |
| **TypeScript/ECMAScript**    | Support for TypeScript 5.x                 | Support for TypeScript 5.3+ and ES features |
| **Testing**                  | Improved testing utilities                 | New APIs for mocking and component testing  |
| **Community Features**       | Focus on state management and i18n         | Micro-frontend support and more             |


[Back to top⤴️](#table-of-contents)

---
### What is mean by Material Design Components for Web in angular?

**Material Design Components for Web (MDC Web)** is a library developed by Google that provides a set of reusable, high-quality UI components based on **Material Design** principles. When integrated with Angular, it allows developers to build visually appealing, consistent, and responsive web applications with ease.

In the context of Angular, **Material Design Components for Web** is often used through the official Angular library called **Angular Material**, which is a wrapper around MDC Web. Angular Material provides Angular-specific implementations of Material Design components, making it easier to use them in Angular applications.

---

### Key Features of Material Design Components for Web in Angular

1. **Pre-built UI Components**:
   - Angular Material provides a wide range of pre-built, customizable UI components such as buttons, cards, dialogs, menus, sliders, tables, and more.
   - These components follow Material Design guidelines, ensuring a consistent and modern look and feel.

2. **Responsive Design**:
   - Components are designed to be responsive and work seamlessly across different screen sizes and devices.

3. **Theming and Customization**:
   - Angular Material supports theming, allowing you to customize the color palette, typography, and other design aspects to match your brand.
   - You can use pre-built themes or create your own.

4. **Accessibility (a11y)**:
   - All components are built with accessibility in mind, ensuring they work well with screen readers and follow WAI-ARIA standards.

5. **Integration with Angular**:
   - Angular Material components are designed specifically for Angular, so they integrate seamlessly with Angular's features like reactive forms, Angular CLI, and Angular CDK (Component Dev Kit).

6. **Angular CDK**:
   - The Angular CDK provides low-level utilities for building custom components, such as overlay management, accessibility, and drag-and-drop functionality.

---

### How to Use Angular Material in an Angular Project

1. **Install Angular Material**:
   Use Angular CLI to add Angular Material to your project:
   ```bash
   ng add @angular/material
   ```
   This command installs Angular Material, sets up the necessary dependencies, and configures your project to use Material Design components.

2. **Import Modules**:
   Import the required Angular Material modules in your `app.module.ts` or feature modules:
   ```typescript
   import { MatButtonModule } from '@angular/material/button';
   import { MatCardModule } from '@angular/material/card';

   @NgModule({
     imports: [
       MatButtonModule,
       MatCardModule,
       // other modules
     ],
   })
   export class AppModule {}
   ```

3. **Use Components in Templates**:
   Use Angular Material components in your templates:
   ```html
   <mat-card>
     <mat-card-header>
       <mat-card-title>Welcome to Angular Material</mat-card-title>
     </mat-card-header>
     <mat-card-content>
       <p>This is a card component from Angular Material.</p>
     </mat-card-content>
     <mat-card-actions>
       <button mat-button>Click Me</button>
     </mat-card-actions>
   </mat-card>
   ```

4. **Apply a Theme**:
   Add a theme to your `styles.css` or `styles.scss` file:
   ```scss
   @import "~@angular/material/prebuilt-themes/indigo-pink.css";
   ```
   You can also create a custom theme using Angular Material's theming capabilities.

5. **Add Material Icons and Fonts**:
   Include Material Icons and Roboto font in your `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
   ```

---

### Example: Using Angular Material Components

Here’s an example of using Angular Material components in an Angular application:

```html
<!-- app.component.html -->
<mat-toolbar color="primary">
  <span>My Angular App</span>
</mat-toolbar>

<mat-card>
  <mat-card-header>
    <mat-card-title>Card Title</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <p>This is a simple card component.</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>Like</button>
    <button mat-button>Share</button>
  </mat-card-actions>
</mat-card>
```

---

### Benefits of Using Angular Material

1. **Consistency**:
   - Ensures a consistent user experience across your application by following Material Design guidelines.

2. **Productivity**:
   - Reduces development time by providing pre-built, reusable components.

3. **Customizability**:
   - Allows you to customize components and themes to fit your brand.

4. **Cross-Platform**:
   - Works well on web, mobile, and desktop applications.

5. **Community Support**:
   - Backed by Google and widely used in the Angular community, ensuring regular updates and support.

---

### Conclusion

Material Design Components for Web, when used with Angular (via Angular Material), provide a powerful way to build modern, responsive, and accessible web applications. By leveraging pre-built components and Material Design principles, developers can focus on building functionality while maintaining a polished and consistent UI.

---

### What is Signal API  in angular?

The **Signal API** is a new feature introduced in **Angular 16** as part of Angular's efforts to improve reactivity and performance in applications. Signals are a reactive primitive that allows developers to manage state and reactivity in a more efficient and intuitive way. They are designed to simplify the process of tracking and updating state changes in Angular applications.

---

### What Are Signals?

Signals are **reactive values** that can be read and updated. They provide a way to declare reactive state in your application and automatically track dependencies. When a signal's value changes, any dependent computations or effects are automatically re-evaluated.

Signals are inspired by similar concepts in other frameworks, such as **Solid.js** and **Vue.js**, and are designed to work seamlessly with Angular's change detection and rendering system.

---

### Key Features of Signals

1. **Reactive State Management**:
   - Signals allow you to define reactive state variables that automatically notify dependents when their value changes.

2. **Automatic Dependency Tracking**:
   - Angular automatically tracks which parts of your application depend on a signal, ensuring that updates are propagated efficiently.

3. **Fine-Grained Reactivity**:
   - Signals enable fine-grained reactivity, meaning only the parts of the application that depend on a signal are updated when the signal changes.

4. **Integration with Angular**:
   - Signals are designed to work seamlessly with Angular's existing change detection and rendering mechanisms.

5. **Performance Optimization**:
   - By reducing unnecessary re-renders and computations, signals can improve the performance of Angular applications.

---

### How to Use Signals in Angular

#### 1. **Creating a Signal**
You can create a signal using the `signal` function from `@angular/core`:

```typescript
import { signal } from '@angular/core';

// Create a signal with an initial value
const count = signal(0);
```

#### 2. **Reading a Signal**
To read the value of a signal, simply call it as a function:

```typescript
console.log(count()); // Output: 0
```

#### 3. **Updating a Signal**
You can update the value of a signal using the `set`, `update`, or `mutate` methods:

- **`set`**: Replace the current value with a new value.
  ```typescript
  count.set(10);
  console.log(count()); // Output: 10
  ```

- **`update`**: Update the value based on the current value.
  ```typescript
  count.update((value) => value + 1);
  console.log(count()); // Output: 11
  ```

- **`mutate`**: Modify the value in place (useful for objects or arrays).
  ```typescript
  const user = signal({ name: 'John', age: 30 });
  user.mutate((user) => user.age++);
  console.log(user()); // Output: { name: 'John', age: 31 }
  ```

#### 4. **Computed Signals**
Computed signals derive their value from other signals. They are automatically updated when any of their dependencies change:

```typescript
import { computed } from '@angular/core';

const doubleCount = computed(() => count() * 2);
console.log(doubleCount()); // Output: 22 (if count is 11)
```

#### 5. **Effects**
Effects are used to perform side effects (e.g., logging, DOM updates) when a signal changes:

```typescript
import { effect } from '@angular/core';

effect(() => {
  console.log('Count changed:', count());
});
```

---

### Example: Using Signals in an Angular Component

Here’s an example of how to use signals in an Angular component:

```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <p>Double Count: {{ doubleCount() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class CounterComponent {
  // Create a signal
  count = signal(0);

  // Create a computed signal
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // Log changes to the count signal
    effect(() => {
      console.log('Count updated:', this.count());
    });
  }

  // Method to increment the count
  increment() {
    this.count.update((value) => value + 1);
  }
}
```

---

### Benefits of Using Signals

1. **Simplified State Management**:
   - Signals provide a simple and intuitive way to manage state in Angular applications.

2. **Improved Performance**:
   - By tracking dependencies and updating only what’s necessary, signals reduce unnecessary re-renders and computations.

3. **Better Reactivity**:
   - Signals enable fine-grained reactivity, making it easier to build responsive and dynamic user interfaces.

4. **Seamless Integration**:
   - Signals are designed to work well with Angular's existing features, such as change detection and templates.

5. **Future-Proof**:
   - Signals are part of Angular's long-term vision for reactivity, and they will likely play a key role in future Angular updates.

---

### Signals vs. RxJS

While both **Signals** and **RxJS** are used for managing reactivity, they serve different purposes:

| Feature                  | Signals                          | RxJS                              |
|--------------------------|----------------------------------|-----------------------------------|
| **Purpose**              | Fine-grained state management    | Complex asynchronous event streams |
| **Complexity**           | Simple and lightweight          | More complex and powerful         |
| **Use Case**             | Local component state            | Global state, event handling      |
| **Integration**          | Built into Angular              | External library                  |

Signals are ideal for managing local component state, while RxJS is better suited for handling complex asynchronous workflows and global state management.

---

### Conclusion

The **Signal API** is a powerful addition to Angular that simplifies state management and improves reactivity in applications. By providing a lightweight and intuitive way to manage state, signals make it easier to build performant and responsive Angular applications. As Angular continues to evolve, signals are expected to play a central role in the framework's reactivity model.

---

### What is Server-Side Rendering (SSR) in angular?

**Server-Side Rendering (SSR)** in Angular refers to the process of rendering Angular applications on the server and sending the fully rendered HTML to the client (browser). This is in contrast to **Client-Side Rendering (CSR)**, where the browser downloads a minimal HTML page and JavaScript bundle, and then renders the application on the client side.

SSR is a key feature of Angular's **Universal** project, which enables Angular applications to be rendered on the server. This approach improves performance, SEO (Search Engine Optimization), and user experience, especially for users on slow devices or networks.

---

### Why Use Server-Side Rendering (SSR)?

1. **Improved Performance**:
   - SSR sends a fully rendered HTML page to the browser, reducing the time required for the page to become interactive (Time to Interactive, TTI).
   - Users see content faster, even on slow devices or networks.

2. **Better SEO**:
   - Search engines can crawl and index server-rendered content more effectively than client-rendered content.
   - SSR ensures that dynamic content is available to search engine bots.

3. **Enhanced User Experience**:
   - Users see meaningful content immediately, even before JavaScript is fully loaded and executed.
   - This reduces the perceived load time and improves user satisfaction.

4. **Social Media Sharing**:
   - SSR ensures that social media crawlers (e.g., Facebook, Twitter) can correctly scrape metadata (e.g., Open Graph tags) for shared links.

5. **Progressive Enhancement**:
   - SSR works well with modern browsers and devices, but it also ensures that users with JavaScript disabled or unsupported browsers can still see the content.

---

### How SSR Works in Angular

Angular Universal is the technology that enables SSR in Angular applications. Here's how it works:

1. **Server-Side Rendering**:
   - When a user requests a page, the server runs the Angular application and generates the HTML for the requested route.
   - The server sends the fully rendered HTML to the browser.

2. **Client-Side Hydration**:
   - After the HTML is rendered and sent to the browser, the Angular application bootstraps on the client side.
   - The client-side Angular app takes over and binds event listeners, making the page interactive.

3. **Subsequent Navigation**:
   - Once the Angular app is bootstrapped on the client, subsequent navigation is handled by the client-side router, providing a smooth single-page application (SPA) experience.

---

### Setting Up SSR in Angular

To enable SSR in an Angular application, you can use Angular Universal. Here's how to set it up:

#### 1. **Add Angular Universal to Your Project**
Use the Angular CLI to add Angular Universal to your project:
```bash
ng add @nguniversal/express-engine
```
This command:
- Adds the necessary dependencies for SSR.
- Creates a server-side application module (`app.server.module.ts`).
- Configures the Express server for SSR.

#### 2. **Build and Serve the Application**
Build the application for SSR:
```bash
npm run build:ssr
```
Serve the application using the SSR server:
```bash
npm run serve:ssr
```

#### 3. **Verify SSR**
Open your browser and navigate to the application. View the page source to verify that the HTML is fully rendered on the server.

---

### Example: Angular Universal Setup

Here’s an example of how Angular Universal sets up SSR:

#### `app.server.module.ts`
```typescript
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```

#### `server.ts`
```typescript
import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';

const app = express();
const distFolder = join(process.cwd(), 'dist/your-app-name/browser');

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder));
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});
```

---

### Benefits of SSR in Angular

1. **Faster Initial Load**:
   - Users see content immediately, improving the perceived performance.

2. **SEO-Friendly**:
   - Search engines can index server-rendered content, improving search rankings.

3. **Improved Performance on Low-Power Devices**:
   - SSR reduces the amount of JavaScript that needs to be executed on the client, making the app faster on low-power devices.

4. **Better Social Media Sharing**:
   - Metadata is rendered on the server, ensuring proper sharing on social media platforms.

5. **Progressive Enhancement**:
   - Ensures that the app works even if JavaScript is disabled or not supported.

---

### Challenges of SSR

1. **Complexity**:
   - SSR adds complexity to the development and deployment process.

2. **Server Load**:
   - Rendering on the server increases the load on the server, which may require scaling.

3. **State Management**:
   - Managing state between the server and client can be challenging.

4. **Third-Party Libraries**:
   - Some third-party libraries may not work correctly with SSR.

---

### Conclusion

Server-Side Rendering (SSR) in Angular, enabled by Angular Universal, is a powerful technique for improving performance, SEO, and user experience. By rendering Angular applications on the server and sending fully rendered HTML to the client, SSR ensures that users see content faster and that search engines can index dynamic content effectively. While SSR adds some complexity, the benefits often outweigh the challenges, especially for content-heavy applications.

---
### Difference between Server-Side Rendering (SSR) vs Universal Angular?
The terms **Server-Side Rendering (SSR)** and **Universal Angular** are often used interchangeably, but they refer to related but distinct concepts in the context of Angular applications. Here's a detailed explanation of the differences:

---

### **Server-Side Rendering (SSR)**

**Server-Side Rendering (SSR)** is a technique where the HTML for a web page is generated on the server and sent to the client (browser). This is in contrast to **Client-Side Rendering (CSR)**, where the browser downloads a minimal HTML page and JavaScript bundle, and then renders the application on the client side.

#### Key Characteristics of SSR:
1. **Rendering on the Server**:
   - The server executes the Angular application and generates the HTML for the requested route.
   - The fully rendered HTML is sent to the browser.

2. **Improved Performance**:
   - Users see content faster because the browser receives a fully rendered page.
   - Reduces the time to first meaningful paint (FMP) and time to interactive (TTI).

3. **SEO Benefits**:
   - Search engines can crawl and index server-rendered content more effectively.

4. **Progressive Enhancement**:
   - Ensures that the application works even if JavaScript is disabled or not supported.

5. **Use Cases**:
   - Content-heavy applications (e.g., blogs, news websites).
   - Applications requiring better SEO and social media sharing.

---

### **Universal Angular**

**Universal Angular** (or Angular Universal) is a project and technology provided by the Angular team to enable **Server-Side Rendering (SSR)** in Angular applications. It is the implementation of SSR specifically for Angular.

#### Key Characteristics of Universal Angular:
1. **Framework Support**:
   - Universal Angular provides the tools and libraries needed to implement SSR in Angular applications.
   - It includes features like server-side rendering, pre-rendering, and client-side hydration.

2. **Server-Side Rendering**:
   - Universal Angular enables Angular applications to be rendered on the server using Node.js.

3. **Client-Side Hydration**:
   - After the server sends the rendered HTML to the browser, the Angular application bootstraps on the client side and takes over, making the page interactive.

4. **Pre-Rendering**:
   - Universal Angular supports pre-rendering, where static HTML pages are generated at build time for specific routes.

5. **Integration with Angular**:
   - Universal Angular is designed to work seamlessly with Angular's existing features, such as change detection, dependency injection, and routing.

6. **Use Cases**:
   - Enabling SSR in Angular applications.
   - Improving performance, SEO, and user experience.

---

### **Key Differences Between SSR and Universal Angular**

| Feature                  | Server-Side Rendering (SSR)          | Universal Angular                  |
|--------------------------|--------------------------------------|------------------------------------|
| **Definition**           | A technique for rendering HTML on the server. | A project/technology to implement SSR in Angular. |
| **Scope**                | A general concept applicable to any framework or technology. | Specific to Angular applications. |
| **Implementation**       | Can be implemented using various technologies (e.g., Node.js, PHP, Python). | Implemented using Angular Universal. |
| **Purpose**              | Improves performance, SEO, and user experience by rendering HTML on the server. | Provides tools and libraries to enable SSR in Angular. |
| **Use Cases**            | Applicable to any web application.   | Specifically for Angular applications. |

---

### **How Universal Angular Enables SSR**

Universal Angular provides the following features to enable SSR in Angular applications:

1. **Server-Side Rendering**:
   - The Angular application is rendered on the server using Node.js.
   - The server sends the fully rendered HTML to the browser.

2. **Client-Side Hydration**:
   - After the HTML is rendered and sent to the browser, the Angular application bootstraps on the client side.
   - The client-side Angular app takes over and binds event listeners, making the page interactive.

3. **Pre-Rendering**:
   - Static HTML pages can be generated at build time for specific routes.
   - This is useful for content that doesn't change frequently.

4. **Express Server**:
   - Universal Angular sets up an Express server to handle server-side rendering.

5. **Build and Deployment**:
   - Universal Angular provides commands to build and deploy SSR-enabled Angular applications.

---

### **Example: Universal Angular Setup**

Here’s an example of how Universal Angular sets up SSR:

#### `app.server.module.ts`
```typescript
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```

#### `server.ts`
```typescript
import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';

const app = express();
const distFolder = join(process.cwd(), 'dist/your-app-name/browser');

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder));
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});
```

---

### **Conclusion**

- **Server-Side Rendering (SSR)** is a general technique for rendering HTML on the server to improve performance, SEO, and user experience.
- **Universal Angular** is the specific implementation of SSR for Angular applications, providing the tools and libraries needed to enable SSR.

In summary, Universal Angular is the technology that makes SSR possible in Angular applications, while SSR is the broader concept that Universal Angular implements.
---
### Angular vs React

- **Angular**: A full-fledged framework by Google for building web applications. It includes features like two-way data binding, routing, forms, and HTTP client. Ideal for large, complex applications needing a complete solution.

- **React**: A JavaScript library by Facebook focused on building user interfaces. It provides a simple, declarative way to build UI components. Suitable for small to medium-sized applications requiring flexibility and customization.

**Comparison**: Angular offers a complete solution with built-in features, while React focuses on the view layer, allowing developers to choose additional tools and libraries.

**When to use Angular**: Best for large, complex applications needing integrated tools and scalability.

**When to use React**: Best for small to medium-sized applications needing flexibility and a focus on the UI.

[Back to top⤴️](#table-of-contents)

## Roadmap

[Angular Roadmap](https://roadmap.sh/angular)

## Configuration

### Prerequisites

- Node.js
- NPM
- Angular CLI

### Installation

Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

If you have already installed the Angular CLI, you can update it to the latest version using the following command:

```bash
npm install -g @angular/cli@latest
```

Check version

```bash
ng version
```

Create a new Angular project: (Replace `[PROJECT NAME]` with your project name)

```bash
# with standalone component
ng new [PROJECT NAME]

# without standalone component
ng new [PROJECT NAME] --standalone=false
```

**Note**: In version v17 and later, the standalone component is default enabled. In version v16 and earlier, the standalone component is disabled by default. You can enable or disable the standalone component using the `--standalone` flag. (In this repository, an example repository is created with the latest version of Angular.)

Navigate to the project directory:

```bash
cd [PROJECT NAME]
```

Run the application:

```bash
ng serve
```

Open the browser and navigate to `http://localhost:4200/`.

Project structure:

```bash
[PROJECT NAME]
├── node_modules
├── public
│   ├── favicon.ico
│   └── ...
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── ...
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── ...
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
└── ...
```

[Back to top⤴️](#table-of-contents)

## Components

Component is the main building block of an Angular Application. It is a TypeScript class that interacts with the HTML template and provides the data and logic to the view.

### Three main building blocks

There are three main building blocks of an Angular component:

- Template
- Class
- Metadata

**Template** - Defines the layout and content of the View.

**Class** - Class provides the data & logic to the View.

**MetaData** - Metadata Provides additional information about the component to the Angular.

### Component metadata properties

There are several properties that can be defined in the component metadata:

- Selector
- Providers
- Styles
- StyleUrls
- Template
- TemplateUrl

**Selector** - Defines the element name or CSS selector that identifies the component in the HTML template.

```typescript
selector: 'app-root'
```

**Providers** - Defines the providers of the component's dependencies.

```typescript
providers: [MyService]
```

**styles** - Defines the inline styles for the component.

```typescript
styles: ['h1 { color: red; }']
```

**styleUrls** - Defines an array of URLs of the stylesheets for the component.

```typescript
styleUrls: ['./app.component.css']
```

**template** - Defines the HTML template for the component.

```typescript
template: '<h1>My Component</h1>'
```

**templateUrl** - Defines the URL of the HTML template for the component.

```typescript
templateUrl: './app.component.html'
```

## Component Creation

### Using Angular CLI

```bash
ng generate component [component-name]

# or

ng g c [component-name]
```

### Manual Creation

**Step 1** - Create a new folder for the component inside the `src/app` folder.

```bash
src/app/[component-name]
```

**Step 2** - Create a new TypeScript file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.ts
```

**Step 3** - Create a new HTML file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.html
```

**Step 4** - Create a new CSS file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.css
```

**Step 5** - Import the Component class from the `@angular/core` module.

```typescript
import { Component } from '@angular/core';
```

**Step 6** - Decorate the class with the `@Component` decorator.

```typescript
@Component({
  selector: 'app-[component-name]',
  standalone: true,
  templateUrl: './[component-name].component.html',
  styleUrls: ['./[component-name].component.css']
})
```

If you want to create a non-standalone component, set the `standalone` property to `false`. The standalone component is enabled by default in Angular v17 and later.

**Step 7** - Define the selector, template, and styles for the component.

```text
selector - The selector for the component.
templateUrl - The URL of the HTML template for the component.
styleUrls - An array of URLs of the stylesheets for the component.
```

**Step 8** - Export the class.

```typescript
export class [ComponentName]Component {
  // Component logic here
}
```

**Step 9** - Import the component class in the `app.module.ts` file.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';
```

**Step 10** - Add the component to the `declarations` array in the `@NgModule` decorator.

```typescript
declarations: [
  AppComponent,
  [ComponentName]Component
]
```

If you created a standalone component, `app.module.ts` file is not required. You can import the component in the `app.component.ts` file.
as shown below.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[ComponentName]Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';
}
```

**Step 11** - Use the component selector in the HTML template.

```typescript
<app-[component-name]></app-[component-name]>
```

**Step 12** - Run the application using the `ng serve` command.

```bash
ng serve

# or

ng serve --open
```

### Example

**Creating the component files (Version 16 and earlier)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

```html
<!--component.component.html-->
<h1>Test Component</h1>
```

```css
/*component.component.css*/
h1 {
  color: red;
}
```

**Creating the component files (Version 17 and later)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

You can create a standalone component by setting the `standalone` property to `true`. The standalone component is enabled by default in Angular v17 and later. You can disable the standalone component by setting the `standalone` property to `false` in the `@Component` decorator of the component. If you disable the standalone component, you need to import the component in the `app.module.ts` file. If you created a non-standalone component, you will see no standalone property in the `@Component` decorator.

```html
<!--test-component.component.html-->
<h1>Test Component</h1>
```

```css
/*test-component.component.css*/
h1 {
  color: red;
}
```

**Importing the component in the app.module.ts file (Version 16 and earlier)** -

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { TestComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Importing the component in the app.module.ts file (Version 17 and later without standalone component)** -

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In version 17 and later, the standalone component is enabled by default. You can disable the standalone component by setting the `standalone` property to `false`. Inside app folder, `app.config.ts` file is created by default.

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```

You can import the component in the `app.component.ts` file and use the component selector in the HTML template.

```typescript
//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
```

```html
<!--app.component.html-->
<app-test-component></app-test-component>
```

**Creating the inline Template & StyleUrls** -

```typescript
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: '<h1> {{title}} works </h1>',
  styles: ['h1 { font-weight: bold; }']
})
export class AppComponent {
  title = 'app';
}
```

[Back to top⤴️](#table-of-contents)

## Scope

In Angular, the scope of a variable determines where it can be accessed:

- **Global Scope**: Accessible anywhere in the application.
- **Local Scope**: Accessible only within a specific function or block.
- **Component Scope**: Accessible within a component and its child components.

### Global Scope

Accessible from anywhere in the application; defined outside any function or block.

Example :

```typescript
// Global Scope
let globalVariable = 'Global Variable';

function testFunction() {
  console.log(globalVariable); // Output: Global Variable
}

testFunction();
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

// Global Scope
let globalVariable = 'Global Variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = globalVariable;
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

### Local Scope

Accessible only within the function or block where defined.

Example :

```typescript
function testFunction() {
  // Local Scope
  let localVariable = 'Local Variable';
  console.log(localVariable); // Output: Local Variable
}

testFunction();
console.log(localVariable); // Error: localVariable is not defined
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  testFunction() {
    // Local Scope
    let localVariable = 'Local Variable';
    console.log(localVariable); // Output: Local Variable
  }
}
```

```html
<!--app.component.html-->
<button (click)="testFunction()">Test Function</button>
```

### Component Scope

Accessible within the component and its children.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Component Scope
  title = 'app';
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

[Back to top⤴️](#table-of-contents)

## View Encapsulation

Controls how styles are applied to components. By default, Angular uses Emulated View Encapsulation, scoping styles to the component.

View Encapsulation in Angular is a mechanism to control how styles are applied to components and their descendants. There are three main modes of View Encapsulation in Angular: `Emulated`, `ShadowDom`, and `None`. Let's explore each in detail:

### **1. Emulated (Default Mode)**
**How it works**:
- **Emulated** encapsulation emulates the behavior of Shadow DOM by adding unique attribute selectors to styles and elements.
- This mode ensures that styles defined in a component's styles are scoped to that component alone and do not affect other components.

**Implementation**:
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {}
```

**Example**:
- **CSS**:
  ```css
  .example {
    background-color: blue;
  }
  ```
- **HTML**:
  ```html
  <div class="example">This is an example component.</div>
  ```
- **Generated HTML**:
  ```html
  <div class="example _ngcontent-c0">This is an example component.</div>
  ```

### **2. ShadowDom**
**How it works**:
- **ShadowDom** encapsulation uses the native Shadow DOM to encapsulate styles within the component.
- This mode ensures complete style isolation, meaning styles defined in a component do not leak out to other components and vice versa.

**Implementation**:
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent {}
```

**Example**:
- **CSS**:
  ```css
  .example {
    background-color: blue;
  }
  ```
- **HTML**:
  ```html
  <div class="example">This is an example component.</div>
  ```
- **Generated HTML**:
  ```html
  <div class="example" shadow-root="open">This is an example component.</div>
  ```

### **3. None**
**How it works**:
- **None** encapsulation does not provide any style encapsulation.
- Styles defined in the component are global and can affect other components, while styles from other components can also affect this component.

**Implementation**:
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {}
```

**Example**:
- **CSS**:
  ```css
  .example {
    background-color: blue;
  }
  ```
- **HTML**:
  ```html
  <div class="example">This is an example component.</div>
  ```
- **Generated HTML**:
  ```html
  <div class="example">This is an example component.</div>
  ```

### **Comparison**
| Mode      | Style Scope       | CSS Isolation | Browser Support |
|-----------|-------------------|---------------|-----------------|
| Emulated  | Component-only    | Partial       | All browsers    |
| ShadowDom | Component-only    | Full          | Modern browsers |
| None      | Global            | None          | All browsers    |

Each mode has its use case:
- **Emulated** is great for most scenarios, providing a balance between style isolation and browser compatibility.
- **ShadowDom** is perfect for advanced scenarios where complete style encapsulation is required.
- **None** can be useful for legacy projects or specific cases where global styles are preferred.


### Emulated View Encapsulation

Default mode in Angular, emulating shadow DOM to scope styles to the component.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-xfz4uk?file=src%2Fmain.ts)

### Shadow DOM View Encapsulation

Uses native shadow DOM to encapsulate styles within the component, preventing them from affecting other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-cc1rfn?file=src%2Fmain.ts)

### None View Encapsulation

Disables encapsulation; styles can affect other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-gzsxag?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Component Communication

Passing data between Angular components using Input/Output decorators, EventEmitter, and services.

### Parent to Child

**Input Decorator** - The `@Input` decorator is used to pass data from a parent component to a child component. It allows the parent component to bind a property to the child component.

Example :

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input() message: string;
}
```

```html
<!--child.component.html-->
<p>{{ message }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message = 'Hello from parent component';
}
```

```html
<!--parent.component.html-->
<app-child [message]="message"></app-child>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-qqjcgn?file=src%2Fmain.ts)

### Child to Parent

**Output Decorator** - The `@Output` decorator is used to pass data from a child component to a parent component. It allows the child component to emit events that the parent component can listen to.

Example :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child component');
  }
}
```

```html
<!--child.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
```

```html
<!--parent.component.html-->
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>{{ message }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-4qgrhm?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Siblings to Siblings Communication

**Using Services** - Services are a way to share data and functionality between components in Angular. You can create a service that holds the data and methods that need to be shared between components.

Example 1 :

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message: string;

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  receiveMessage() {
    this.message = this.dataService.getMessage();
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
<button (click)="receiveMessage()">Receive Message</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-uvqypy?file=src%2Fmain.ts)

Example 2 :

**Using RxJS Subjects** - RxJS Subjects are a way to share data and events between components in Angular. You can create a Subject that emits events and subscribe to those events in the components.

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message = new Subject<string>();

  setMessage(message: string) {
    this.message.next(message);
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.message.subscribe(message => {
      this.message = message;
    });
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```

Example 3 :

**Using ViewChild and ViewChildren** - ViewChild and ViewChildren are a way to access child components in Angular. You can use ViewChild to access a single child component and ViewChildren to access multiple child components.

```typescript
import { Component, ViewChild } from '@angular/core';
import { Sibling2Component } from './sibling2.component';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  @ViewChild(Sibling2Component) sibling2: Sibling2Component;

  sendMessage() {
    this.sibling2.message = 'Hello from sibling1 component';
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
<app-sibling2></app-sibling2>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-nezkvf?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Data binding

Data binding is a core feature of Angular that allows you to bind data between the component's class and the HTML template. There are two types of data binding in Angular:

There are two types of data binding in Angular:

- **One-way binding** - This allows for passing data from the component's class to the HTML template or vice-versa.

- **Two-way binding** - This allows for binding a property of an HTML element to a property in the component's class and vice-versa.

### One way binding

One-way binding allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding in Angular, including:

1. From Component to View
2. From View to Component

**1. From Component to View** - This allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding from the component to the view in Angular, including:

1. Interpolation
2. Property binding
3. Class binding
4. Style binding
5. Attribute binding

**Interpolation** - This allows for embedding expressions in the HTML template. It is denoted by double curly braces ({{}}).

Example :

```html
<h1>{{ firstText }} {{ lastText }}</h1>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstText = 'Interpolation';
  lastText = 'Example';
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-zu564w?file=src%2Fapp%2Fapp.component.ts)

**Property binding** - This allows for binding a property of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```html
<h1 [innerText]="title"></h1>

<button [disabled]="isDisabled">I am disabled</button>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Property Binding Example';

  isDisabled = true;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-vcpyoq?file=src/app/app.component.ts)

**class binding** - This allows for binding a class of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```

```html
<div [class.active]="isActive">This div is active.</div>
<button (click)="toggleActive()">Toggle Active</button>
```

```css
.active {
  background-color: yellow;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-s1pkwg?file=src/app/app.component.ts)

**style binding** - This allows for binding a style of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  backgroundColor = 'red';
  textColor = 'white';
}
```

```html
<div [style.background-color]="backgroundColor">
  <h1 [style.color]="textColor">Hello, world!</h1>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-w8nf7f?file=src/app/app.component.ts)

**attribute binding** - This allows for binding an attribute of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl = 'https://example.com/image.jpg';
  imageAlt = 'Example image';
  isButtonDisabled = false;
}
```

```html
<img [attr.src]="imageUrl" [attr.alt]="imageAlt">
<button [attr.disabled]="isButtonDisabled">Click me</button>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-bhqsgc?file=src/app/app.component.html)

**b. From View to Component** - This allows for passing data from the HTML template to the component's class.

There are several ways to achieve one-way binding from the view to the component in Angular, including:

1. Event binding
2. ngModel

**Event binding** - This allows for binding an event of an HTML element to a method in the component's class. It is denoted by parentheses (()).

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onClick() {
    console.log('Button was clicked');
  }
}
```

```html
<h1>Event Binding Example</h1>
<button (click)="onClick()">Click me</button>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-kxuxsk?file=src/app/app.component.ts)

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

**Remeber💡** :

The (click) calls the specified function when a user clicks on the given element (in your example, when a user clicks on a row).

The (change) event binds to HTML's onChange event. This event is fired for `<input>`, `<select>`, and `<textarea>` elements when a change to the element's value is committed by the user.

The (change) event can also be specifically implemented by other Angular components. It is generally implemented on components where the contents of the component are changed by the user.

[☝️Source of Explaination](https://stackoverflow.com/a/51127794/14292971)

### Two ways binding

Two-way binding allows for binding a property of an HTML element to a property in the component's class and vice-versa. It is denoted by `[(ngModel)]`.

There are several ways to achieve two-way binding in Angular, including:

1. ngModel
2. ngModelChange
3. change event

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-wrru3d?file=src/app/app.component.ts)

[Back to top⤴️](#table-of-contents)

**ngModelChange** - The `ngModelChange` event is emitted when the value of an input element bound to `ngModel` changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (ngModelChange)="onNameChange($event)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-s43hdu?file=src%2Fmain.ts)

**change event** - The `change` event is emitted when the value of an input element changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (change)="onNameChange($event.target.value)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-s43hdu?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Directives

Directives add behaviour to an existing DOM element or an existing component instance.

### Types of Directives

There are three types of directives in Angular:

1. **Structural Directives** - Structural directives are used to add or remove elements from the DOM based on a condition. They are denoted by an asterisk (*) before the directive name.

2. **Attribute Directives** - Attribute directives are used to change the appearance or behavior of an element. They are denoted by square brackets [] before the directive name.

3. **Custom Directives** - Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

### Structural Directives

There are several built-in structural directives in Angular, including:

1. NgIf
2. NgFor
3. NgSwitch

**ngIf** - The `ngIf` directive is used to conditionally display elements based on the value of a given expression. It is commonly used to show or hide elements in the UI based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showElement = true;
}
```

```html
<h1>ngIf Example</h1>
<div *ngIf="showElement">
  This element will only be displayed if showElement is true.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-bajfgs?file=src%2Fapp%2Fapp.component.ts)

**ngFor** - The `ngFor` directive is used to iterate over a list of items and create a template for each item. It is commonly used to display a list of items in the UI.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
```

```html
<h1>ngFor Example</h1>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-sn3tgd?file=src%2Fapp%2Fapp.component.ts)

**ngSwitch** - The `ngSwitch` directive is used to conditionally display elements based on the value of a given expression. It is similar to a switch statement in JavaScript.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = 1;
}
```

```html
<h1>ngSwitch Example</h1>
<div [ngSwitch]="value">
  <div *ngSwitchCase="1">Case 1</div>
  <div *ngSwitchCase="2">Case 2</div>
  <div *ngSwitchCase="3">Case 3</div>
  <div *ngSwitchDefault>Default case</div>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-xm8ztp?file=src%2Fapp%2Fapp.component.ts)

### Attribute Directives

There are several built-in attribute directives in Angular, including:

1. NgClass
2. NgStyle
3. NgModel

**ngClass** - The `ngClass` directive is used to conditionally apply CSS classes to an element based on the value of a given expression. It is commonly used to apply styles to elements based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHighlighted = true;
}
```

```html
<h1>ngClass Example</h1>
<div [ngClass]="{ highlighted: isHighlighted }">
  This element will have the 'highlighted' class if isHighlighted is true.
</div>
```

```css
.highlighted {
  background-color: yellow;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-cn1fph?file=src%2Fapp%2Fapp.component.ts)

**ngStyle** - The `ngStyle` directive is used to conditionally apply inline styles to an element based on the value of a given expression. It is commonly used to apply dynamic styles to elements based on certain conditions.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'red';
}
```

```html
<h1>ngStyle Example</h1>
<div [ngStyle]="{ color: color }">
  This element will have the color style set to the value of the color property.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-zcgf1h?file=src%2Fapp%2Fapp.component.ts)

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
}
```

```html
<h1>ngModel Example</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="name" name="name" />
</form>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-wrru3d?file=src%2Fapp%2Fapp.component.ts)

### Custom Directives

Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

Example :

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomDirectiveDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<h1>Custom Directive Element</h1>
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-xyv8qw?file=src%2Fapp%2Fapp.component.ts)

[Back to top⤴️](#table-of-contents)

### Other directives

There are several other built-in directives in Angular, including:

- **ngContainer**
- **ngTemplate**
- **ngContent**
- **ngTemplateOutlet**

**ngContainer** - The `ngContainer` directive is a simple container that doesn't generate any markup in the DOM. It's mainly used as a placeholder to group and structure content within Angular templates.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  condition = true;
}
```

```html
<h1>ngContainer Example</h1>
<div *ngIf="condition">
  <ng-container>
    <p>Content to be conditionally rendered</p>
    <p>More content...</p>
  </ng-container>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-zjr4xc?file=src%2Fmain.ts)

**ngTemplate** - The `ngTemplate` directive is used to define a reusable template block that can be used later within the same component or shared across components using the ngTemplateOutlet directive.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplate Example</h1>
<ng-template #myTemplate>
  <p>This is a template</p>
  <p>It can be reused in multiple places</p>
</ng-template>

<div>
  <ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>
</div>

<button (click)="selectedTemplate = myTemplate">Load Template</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-azqjxv?file=src%2Fmain.ts)

**ngContent** - The `ngContent` directive is used for content projection or transclusion. It allows you to create reusable components with customizable content.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})

export class ChildComponent {}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})

export class ParentComponent {}
```

```html
<!-- Parent Component -->
<app-child>
  <p>Content projected into the child component</p>
</app-child>
```

```html
<!-- Child Component Template -->
<div>
  <ng-content></ng-content>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-8ddr3h?file=src%2Fmain.ts)

**ngTemplateOutlet** - The `ngTemplateOutlet` directive is used to render a template defined using ngTemplate. It allows you to dynamically render a template within a component's template.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplateOutlet Example</h1>
<ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>

<ng-template #template1>
  Template 1 content
</ng-template>

<ng-template #template2>
  Template 2 content
</ng-template>

<button (click)="selectedTemplate = template1">Load Template 1</button>
<button (click)="selectedTemplate = template2">Load Template 2</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-yerwcu?file=src%2Fmain.ts)

## Pipes

A pipe takes in data as input and transforms it to a desired output.

Syntax:

```text
{{ data | pipe }}
```

```text
Expression | pipeOperator[:pipeArguments]

# Expression: is the expression, which you want to transform
# | : is the Pipe Character
# pipeOperator : name of the Pipe
# pipeArguments: arguments to the Pipe
```

### Built-in Pipes

There are several built-in pipes in Angular, including:

- **Date Pipe**
- **Uppercase Pipe**
- **Lowercase Pipe**
- **Currency Pipe**
- **Percent Pipe**
- **Slice Pipe**
- **Decimal/number Pipe**
- **JSON Pipe**
- **Async Pipe**

### Date Pipe

The `date` pipe is used to format a date value according to the locale rules specified in the application.

```ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new Date();

  constructor(private datePipe: DatePipe) {}

  formatDate() {
    return this.datePipe.transform(this.date, 'shortDate');
  }
}
```

```html
<h1>Date Pipe Example</h1>
<p>{{ date | date: 'shortDate' }}</p>
```

```ts
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DatePipe],
})
export class AppModule {}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-fobnad?file=src%2Fapp%2Fapp.component.ts)

### Uppercase Pipe

The `uppercase` pipe is used to transform a string to uppercase.

```html
<h1>Upper Case Pipe Example</h1>
<p>{{ name | uppercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-hlmoxp?file=src%2Fapp%2Fapp.component.ts)

### Lowercase Pipe

The `lowercase` pipe is used to transform a string to lowercase.

```html
<p>{{ name | lowercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-6gcdgx?file=src%2Fapp%2Fapp.component.ts)

### Currency Pipe

The `currency` pipe is used to format a number as currency using the locale rules specified in the application.

```html
<h1>Currency Pipe Example</h1>
<p>{{ price | currency }}</p>
```

```ts
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  price = 100;

  constructor(private currencyPipe: CurrencyPipe) { }

  formatCurrency() {
    return this.currencyPipe.transform(this.price, 'USD', true);
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe],
})
export class AppModule {}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-3fhhzz?file=src%2Fapp%2Fapp.component.ts)

### Percent Pipe

The `percent` pipe is used to format a number as a percentage.

```html
<h1>Percent Pipe Example</h1>
<p>{{ percentage | percent }}</p>
```

```ts
import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  percentage = 0.5;

  constructor(private percentPipe: PercentPipe) {}

  formatPercentage() {
    return this.percentPipe.transform(this.percentage, '2');
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PercentPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PercentPipe],
})
export class AppModule {}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-tccybj?file=src%2Fapp%2Fapp.component.ts)

### Slice Pipe

The `slice` pipe is used to create a new array or string containing a subset of the elements of the input array or string.

```typescript
<p>{{ ['apple', 'banana', 'orange', 'mango'] | slice:1:3 }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-q88gmm?file=src%2Fapp%2Fapp.component.ts)

### Decimal/number Pipe

The `number` pipe is used to format a number as text. It can be used to format a number as a percentage, currency, or decimal number.

```html
<p>{{ 123456.78 | number:'3.2-3' }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-7cwk1u?file=src%2Fapp%2Fapp.component.ts)

### JSON Pipe

The `json` pipe is used to transform a JavaScript object into a JSON string.

```html
<p>{{data | json}}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = { name: 'Manthan Ank', age: 25 };
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-jgc252?file=src%2Fmain.ts)

### Async Pipe

The `async` pipe is used to subscribe to an Observable or Promise and return the latest value it has emitted.

```html
<p>{{data$ | async}}</p>
```

```typescript
// DataService.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  private data$: Observable<string>;

  constructor() {
    // Simulating an asynchronous data source
    this.data$ = of('Hello, async pipe!').pipe(
      // Simulating delay
      delay(2000)
    );
  }

  getData(): Observable<string> {
    return this.data$;
  }
}
```

```typescript
// ExampleComponent.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: '<div>{{ data$ | async }}</div>',
})
export class ExampleComponent {
  data$: Observable<string>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-iatcbn?file=src%2Fmain.ts)

### Impure Pipes

By default, Angular pipes are pure, meaning they are stateless and do not change unless the input value changes. However, you can create impure pipes by setting the pure property to false in the @Pipe decorator.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false,
})

export class ImpurePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
```

```html
<p>{{ data | impurePipe }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = 'Hello, world!';
}
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ImpurePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-xy3hhp?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Decorators

Decorators are design patterns used to isolate the modification or decoration of a class without modifying the source code.

There are several built-in decorators in Angular, including:

- **@Component**
- **@Directive**
- **@Injectable**
- **@Pipe**
- **@NgModule**
- **@Input**
- **@Output**
- **@HostListener**
- **@ContentChild**
- **@ContentChildren**
- **@ViewChild**
- **@ViewChildren**

### Component

The `@Component` decorator is used to define a new component in Angular.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'My App';
}
```

```html
<h1>{{ title }}</h1>
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

### Directive

The `@Directive` decorator is used to define a new directive in Angular.

```ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})

export class CustomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

```html
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```

```typescript
import { NgModule } from '@angular/core';

import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [CustomDirective],
})

export class AppModule {}
```

### Injectable

The `@Injectable` decorator is used to define a new service in Angular.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Hello, world!';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

```typescript
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [DataService],
})

export class AppModule {}
```

### Pipe

The `@Pipe` decorator is used to define a new pipe in Angular.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})

export class CustomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}
```

```html
<h1>{{ data | customPipe }}</h1>
```

```typescript
import { NgModule } from '@angular/core';

import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [CustomPipe],
})

export class AppModule {}
```

### NgModule

The `@NgModule` decorator is used to define a new module in Angular.

```ts
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  bootstrap: [],
})

export class AppModule {}
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

### Input

The `@Input` decorator is used to pass data from a parent component to a child component.

```ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {}

}
```

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentMessage = 'Hello from the parent component!';
  constructor() {}

  ngOnInit() {}
}
```

```html
<p>{{ message }}</p>
```

```html
<app-child [message]="parentMessage"></app-child>
```

```html
<h1>@Input Example</h1>
<app-parent></app-parent>
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, ChildComponent, ParentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Output

The `@Output` decorator is used to pass data from a child component to a parent component.

```ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    this.messageEvent.emit('Hello from the child component!');
  }
}
```

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleMessage(message: string) {
    console.log(message);
  }
}
```

```html
<button (click)="sendMessage()">Send message</button>
```

```html
<app-child (messageEvent)="handleMessage($event)"></app-child>
```

```html
<h1>@Output Decorator Example</h1>
<app-parent></app-parent>
```

### HostListener

The `@HostListener` decorator is used to listen for events on the host element of a directive or component.

```html
<h1>@HostListener Decorator Example</h1>
<p>Click the host element to trigger the 'click' event.</p>
```

```ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostListener('click')
  onClick() {
    console.log('The host element was clicked!');
  }
}
```

### contentChild & contentChildren

The `@ContentChild` and `@ContentChildren` decorators are used to query for content children in the component's view.

```ts
import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ContentChild('childButton1', { static: true }) childButton1: ElementRef;
  @ContentChildren('childButton2') childButtons2: QueryList<ElementRef>;

  ngAfterContentInit() {
    console.log(this.childButton1.nativeElement.textContent);
    this.childButtons2.forEach((button) => {
      console.log(button.nativeElement.textContent);
    });
  }

  constructor() {}

  ngOnInit() {}
}
```

```html
<ng-content></ng-content>
```

```html
<h1>@ContentChild Decorator Example</h1>
<app-parent></app-parent>
```

### viewChild & viewChildren

The `@ViewChild` and `@ViewChildren` decorators are used to query for view children in the component's view.

```ts
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('childButton1', { static: true }) childButton1: ElementRef;
  @ViewChildren('childButton2') childButtons2: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.childButton1.nativeElement.textContent);
    this.childButtons2.forEach(button => {
      console.log(button.nativeElement.textContent);
    });
  }
}
```

```html
<h1>@viewChild & @viewChildren Example</h1>
<button #childButton1>Button 1</button>
<button #childButton2>Button 2</button>
```

[Back to top⤴️](#table-of-contents)

## Life Cycle Hooks

Angular provides a set of lifecycle hooks that give you visibility into key moments in the component's lifecycle.

There are several lifecycle hooks in Angular, including:

- **ngOnChanges**
- **ngOnInit**
- **ngDoCheck**
- **ngAfterContentInit**
- **ngAfterContentChecked**
- **ngAfterViewInit**
- **ngAfterViewChecked**
- **ngOnDestroy**

### OnChanges

It is called when the data-bound properties of a directive/component are changed. It is called before ngOnInit and whenever one or more data-bound input properties change.

```html
<form>
  <input [(ngModel)]="message" name="message" />
  <button type="submit" (click)="onSubmit()">Submit</button>
</form>
<p>{{ message }}</p>
```

```ts
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnChanges {
  @Input() message: string;
  prevMessage: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.message) {
      console.log(
        `message changed from ${changes.message.previousValue} to ${changes.message.currentValue}`
      );
    }
  }

  onSubmit() {
    this.prevMessage = this.message;
  }
}
```

```html
<app-test  [message]="'Hello World'"></app-test>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-19r5mc?file=src/app/test/test.component.ts)

### OnInit

It is called after Angular has initialized all data-bound properties of a directive/component. It is called only once after the first ngOnChanges.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    console.log('logged from ngOnInit');
  }
}
```

[Stackblits Link](https://stackblitz.com/edit/angular-ivy-hkmssz?file=src/app/app.component.html)

### DoCheck

It is called during every change detection run, and it is used to detect and act upon changes that Angular doesn't catch on its own.

```ts
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }
}
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-f5msas?file=src/app/app.component.ts)

### AfterViewInit

It is called after Angular has fully initialized a component's view. It is the perfect place to put any initialization logic that depends on the view.

```ts
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  
  ngAfterViewInit(){
    console.log("after view init")
  }
  clickMe(){
    console.log("link clicked")
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-wscf59?file=src/main.ts)

### AfterViewChecked

It is called after Angular has checked the component's view and child views. It is called after ngAfterViewInit and every subsequent ngAfterContentChecked.

```ts
import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  clickMe(){
    console.log("link clicked")
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-wnwfnv?file=src/main.ts)

### AfterContentInit

It is called after Angular has fully initialized the content of a directive. It is the perfect place to put any initialization logic that depends on the content.

```ts
import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    console.log('after content init');
  }
  clickMe() {
    console.log('clicked');
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-qhy7cw?file=src/main.ts)

### AfterContentChecked

It is called after the default change detector has completed checking all content of a directive. It is called after ngAfterContentInit and every subsequent ngAfterContentChecked.

```ts
import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  ngAfterContentChecked() {
    console.log('after content init');
  }
  clickMe() {
    console.log('clicked');
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ryx2uh?file=src/main.ts)

### OnDestroy

It is called just before Angular destroys the directive/component. It is used to cleanup any resources or subscriptions that the directive/component has created.

```ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    const someObservable = of(1, 2, 3);
    this.subscription = someObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-urqida?file=src/app/app.module.ts)

[Back to top⤴️](#table-of-contents)

## Forms

Angular provides two types of forms:

- **Template-driven forms**
- **Reactive forms**

### Template-driven Forms

Template-driven forms are created using directives in the template. Angular automatically tracks the value and validity of the form controls.

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
```

### Reactive Forms

Reactive forms are created programmatically using form controls and form groups. They provide more control and flexibility compared to template-driven forms.

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

[Back to top⤴️](#table-of-contents)

Set Value in Template Driven forms in Angular

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  onSubmit(form: NgForm) {
    form.setValue({ name: 'John' });
  }
}
```

[Back to top⤴️](#table-of-contents)

FormBuilder in Reactive Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

SetValue & PatchValue in Angular
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.setValue({
      name: 'John',
      email: 'john.doe@gmail.com',
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

StatusChanges in Angular Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

ValueChanges in Angular Forms

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormControl

```ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = new FormControl('');

  onSubmit() {
    console.log(this.name.value);
  }
}
```

FormGroup

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormArray Example

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      emails: this.fb.array([]),
    });
  }

  get emails() {
    return this.form.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="emails">
    <div *ngFor="let email of emails.controls; let i = index">
      <input type="email" [formControlName]="i" />
      <button type="button" (click)="removeEmail(i)">Remove</button>
    </div>
  </div>
  <button type="button" (click)="addEmail()">Add Email</button>
  <button type="submit">Submit</button>
</form>
```

Build Dynamic or Nested Forms using FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

SetValue & PatchValue in FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });

    this.form.setValue({
      name: 'John',
      addresses: [
        { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
        { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' },
      ],
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

Select Options Dropdown

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      gender: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <select formControlName="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

Typed Forms in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group<User>({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

FormRecord in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

## Services

Services are used to encapsulate reusable functionality that can be shared across components. They are used to fetch data from a server, perform calculations, or interact with external services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

[Back to top⤴️](#table-of-contents)

### Injectable Decorator

The `@Injectable` decorator is used to define a service class that can be injected into other components or services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

[Back to top⤴️](#table-of-contents)

### Dependency Injection

Dependency injection is a design pattern used to create objects and manage their dependencies. It allows you to inject dependencies into a class rather than creating them within the class.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

[Back to top⤴️](#table-of-contents)

### Providers

Providers are used to define dependencies that are injected into components, directives, pipes, and services. They are defined in the `@NgModule` decorator of the root module or feature modules.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})

export class AppModule {}
```

[Back to top⤴️](#table-of-contents)

## Routing

Routing is used to navigate between different components in an Angular application. It allows users to move between different parts of the application by changing the URL in the browser.

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
```

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```

[Back to top⤴️](#table-of-contents)

### Router Outlet

The `router-outlet` directive is used to render the component associated with the current route.

```html
<router-outlet></router-outlet>
```

[Back to top⤴️](#table-of-contents)

### Router Link

The `routerLink` directive is used to navigate to a different route when the element is clicked.

```html
<a [routerLink]="['/home']">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router Link Active

The `routerLinkActive` directive is used to add a CSS class to an element when the associated route is active.

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router Link Active Options

The `routerLinkActiveOptions` directive is used to configure the behavior of the `routerLinkActive` directive.

```html
<a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router State

The `RouterState` class is used to access the current state of the router.

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {
  const state = this.router.routerState;
  console.log(state);
}
```

[Back to top⤴️](#table-of-contents)

### Router Events

The `RouterEvents` class is used to listen for router events such as navigation start, navigation end, and navigation error.

```ts
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

constructor(private router: Router) {
  router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
    if (event instanceof NavigationError) {
      console.log('Navigation error');
    }
  });
}
```

[Back to top⤴️](#table-of-contents)

### Router Guards

Router guards are used to control navigation and access to routes in an Angular application. They can be used to prevent unauthorized access to certain routes, redirect users to a login page, or perform other actions before navigating to a route.

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule {}
```

[Back to top⤴️](#table-of-contents)

## HTTP Client Module

The `HttpClientModule` is used to make HTTP requests to a server in an Angular application. It provides services for making GET, POST, PUT, DELETE, and other types of requests.

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})

export class AppModule {}
```

In the angular v17 and above, the `HttpClientModule` has been deprecated. Instead, you can use the `provideHttpClient` function to provide the `HttpClient` service in your application. Here is an example of how to use the `provideHttpClient` function to provide the `HttpClient` service in your application:

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
```

## HTTP Client

The `HttpClient` service is used to make HTTP requests to a server. It provides methods for making GET, POST, PUT, DELETE, and other types of requests.

```ts
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

getData() {
  return this.http.get('https://api.example.com/data');
}
```

[Back to top⤴️](#table-of-contents)

## Destroy Ref

The DestroyRef provider is a utility that allows Angular components to register cleanup callbacks that are executed when the component is destroyed. This is useful for cleaning up resources, such as subscriptions, timers, or other resources that need to be released when the component is no longer in use.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestroyRef } from '@angular/core/testing';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit, OnDestroy {

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    // Register a destroy callback with the DestroyRef provider.
    this.destroyRef.register(() => {
      // Do any cleanup tasks here.
    });
  }

}
```

## HTTP

Import HttpClient Module in Root Module -

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Import Required Module in Component/Service -

```typescript
import { HttpClient } from '@angular/common/http';
```

Inject HttpClient service -

```typescript
constructor(public http: HttpClient) {
}
```

### HTTP GET

```typescript
getData(){
  return this.http.get('url');
}
```

### HTTP POST

```typescript
sendData(data: any){
  return this.http.post('url', data);
}
```

### HTTP PUT

```typescript
updateData(data: any){
  return this.http.put('url', data);
}
```

### HTTP PATCH

```typescript
updateData(data: any){
  return this.http.patch('url', data);
}
```

### HTTP DELETE

```typescript
deleteData(id: string){
  return this.http.delete(`url/${id}`);
}
```

### HTTP Interceptor

Http Interceptors are a powerful feature provided by the `@angular/common/http` module. They allow you to intercept and modify HTTP requests and responses in your Angular application. With interceptors, you can perform various tasks such as authentication, logging, error handling, and more. Interceptors provide a way to add global behavior to your HTTP requests and responses, making it easier to implement common functionalities across your application.

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request started');
    return next.handle(req).pipe(
      catchError((error) => {
        console.error('Request failed', error);
        return throwError(error);
      })
    );
  }
}
```

In angular v17, the `HttpInterceptor` interface has been deprecated in favor of the `HttpInterceptorFn` type. The `HttpInterceptorFn` type is a function that takes a `HttpRequest` and a `HttpHandler` and returns an `Observable<HttpEvent>`. Here is an example of how to create an interceptor using the `HttpInterceptorFn` type:

```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request started');
  return next.handle(req).pipe(
    catchError((error) => {
      console.error('Request failed', error);
      return throwError(error);
    })
  );
};
```

### Using Observable

```typescript
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('utl');
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.put<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch<any>('utl', data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`utl/${id}`);
  }
}
```

Options—Headers/Params

```typescript
import { HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application
  'Authorization': 'Bearer my-token'
});

const params = new HttpParams()
  .set('param1', 'value1')
  .set('param2', 'value2');

this.http.get('url', { headers, params });

this.http.post('url', data, { headers, params });

this.http.put('url', data, { headers, params });

this.http.patch('url', data, { headers, params });

this.http.delete(`url/${id}`, { headers, params });
```

Options—Observe/Response Type

```typescript
import { HttpResponse } from '@angular/common/http';

this.http.get('url', { observe: 'response' });
```

## Module

A module is a container for a group of related components, directives, pipes, and services. It is used to organize an Angular application into cohesive blocks of functionality.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

[Back to top⤴️](#table-of-contents)

### Lazy loading

Lazy loading is a technique used to load modules only when they are needed. This can help reduce the initial load time of the application by loading only the necessary modules.

Example of lazy loading in non standalone components:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-1',
    loadChildren: () =>
      import('./page-1/page-1.module').then((m) => m.Page1Module),
  },
  {
    path: 'page-2',
    loadChildren: () =>
      import('./page-2/page-2.module').then((m) => m.Page2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page-1.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page-1.component';
import { Page1RoutingModule } from './page-1-routing.module';

@NgModule({
  imports: [CommonModule, Page1RoutingModule],
  declarations: [Page1Component],
})
export class Page1Module {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page-2.component';

const routes: Routes = [
  {
    path: '',
    component: Page2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2RoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page-2.component';
import { Page2RoutingModule } from './page-2-routing.module';

@NgModule({
  imports: [CommonModule, Page2RoutingModule],
  declarations: [Page2Component],
})
export class Page2Module {}
```

```html
<h1>Lazy Loading Example</h1>
<a routerLink="page-1">Page-1</a> &nbsp;
<a routerLink="page-2">Page-2</a>
<router-outlet></router-outlet>
```

Example of lazy loading in standalone components:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-1',
    loadComponent: () => import('./page-1/page-1.component').then((m) => m.Page1Component),
  },
  {
    path: 'page-2',
    loadComponent: () => import('./page-2/page-2.component').then((m) => m.Page2Component),
  }
];
```

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
};
```

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // component logic here
}
```

```html
<h1>Lazy Loading Example</h1>
<a routerLink="page-1">Page-1</a> &nbsp;
<a routerLink="page-2">Page-2</a>
<router-outlet></router-outlet>
```

[Back to top⤴️](#table-of-contents)

### Router

The Angular Router is a powerful tool that allows you to define navigation paths and routes in your application. It enables you to navigate between different components and views based on the URL path.

Example of routing in Angular non standalone components:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Required Route Params

To define a route with a required parameter, you can use a colon (`:`) followed by the parameter name. For example, in `app.module.ts`:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Navigating in the App

To navigate to a route with a required parameter, you can use the `Router` service. For example, in a component:

```typescript
// some-component.component.ts
import { Router } from '@angular/router';

export class SomeComponent {

  constructor(private router: Router) {}

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }
}
```

### Optional Route Params

To define a route with an optional parameter, you can use a question mark (`?`) after the parameter name. For example, in `app.module.ts`:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'user/:id?', component: UserDetailsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Params

To access route parameters in a component, you can use the `ActivatedRoute` service. For example, in a component:

```typescript
// user-details.component.ts
import { ActivatedRoute } from '@angular/router';

export class UserDetailsComponent {

  constructor(private route: ActivatedRoute) {
    // Accessing route parameters
    this.route.params.subscribe(params => {
      const userId = params['id'];
      // Do something with the userId...
    });
  }
}
```

## Route Parameters

Route parameters are used to pass data to a route in Angular. They allow you to create dynamic routes that can be customized based on user input or other factors. Route parameters are defined in the route configuration and can be accessed in the component associated with the route.

There are three types of route parameters in Angular:

***Path Parameters***:

Path parameters are used to extract data from the URL path. They are denoted by placing a colon (":") before the parameter name in the route configuration. Path parameters are part of the route path and can be accessed in the component associated with the route. For example:

```typescript
{ path: 'users/:id', component: UserComponent }
```

In this example, the ":id" parameter is a path parameter. The UserComponent can retrieve the value of the ":id" parameter from the URL and use it to fetch user data.

***Query Parameters***:

Query parameters are used to pass data as key-value pairs in the URL query string. They are denoted by placing a question mark ("?") after the route path, followed by the parameter name and value. Query parameters are not part of the route path but can be accessed in the component associated with the route. For example:

```typescript
{ path: 'search', component: SearchComponent }
```

In this example, the SearchComponent can access query parameters like "/search?query=angular" or "/search?query=react" and use them to perform a search operation.

***Optional Parameters***:

Optional parameters are used to define route parameters that are not required. They are denoted by placing a question mark ("?") after the parameter name in the route configuration. Optional parameters can be present or absent in the URL, and the component associated with the route can handle both cases. For example:

```typescript
{ path: 'products/:id/:category?', component: ProductComponent }
```

In this example, the ":category" parameter is optional. The ProductComponent can handle URLs like "/products/123" or "/products/123/electronics" based on the presence of the ":category" parameter.

## Route Guards

Route guards are used to control access to routes in an Angular application. They allow you to implement logic that determines whether a user is allowed to navigate to a particular route or not. Route guards can be used to protect routes based on user authentication, authorization, or other criteria.

There are four types of route guards in Angular:

***CanActivate***:

The CanActivate guard is used to determine whether a route can be activated or not. It is typically used to check if a user is authenticated before allowing access to a route. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is activated; if it returns false, the route is blocked.

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanActivateChild***:

The CanActivateChild guard is similar to CanActivate but is used to protect child routes of a parent route. It is applied to the parent route configuration and is triggered when any child route is activated. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value.

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanDeactivate***:

The CanDeactivate guard is used to determine whether a route can be deactivated or not. It is typically used to prompt the user for confirmation before leaving a route with unsaved changes. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is deactivated; if it returns false, the route is not deactivated.

```typescript
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user wants to leave the route
    return confirm('Are you sure you want to leave?');
  }
}
```

***CanLoad***:

The CanLoad guard is used to determine whether a lazy-loaded module can be loaded or not. It is applied to the route configuration of a lazy-loaded module and is triggered when the module is about to be loaded. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the module is loaded; if it returns false, the module is not loaded.

```typescript
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow loading
  }
}
```

[Back to top⤴️](#table-of-contents)

## Observables in Angular

An observable is a class that can be used to handle asynchronous data streams. Observables are used to handle data that can arrive over time, such as data received from a server, user input, or timed events.

### Creating Observables

There are several ways to create observables in Angular:

***Using the Observable Constructor***: You can create an observable using the `Observable` constructor and the `new` keyword. The constructor takes a function as an argument, which is called when the observable is subscribed to.

```typescript
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
```

***Using the `of` Operator***: You can create an observable from a list of values using the `of` operator. The `of` operator emits each value in the list in sequence.

```typescript
import { of } from 'rxjs';

const observable = of('Hello', 'World');
```

***Using the `from` Operator***: You can create an observable from an array, promise, or iterable using the `from` operator. The `from` operator emits each item in the array, promise, or iterable in sequence.

```typescript
import { from } from 'rxjs';

const observable = from(['Hello', 'World']);
```

### Subscribing to Observables

To receive data from an observable, you need to subscribe to it. The `subscribe` method is used to subscribe to an observable and receive data emitted by the observable.

```typescript
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log('Complete')
});
```

### Difference between `observables` and `promises` in Angular

- **Observables**:
  - Observables are lazy, meaning they only execute when subscribed to.
  - Observables can emit multiple values over time.
  - Observables can be canceled using the `unsubscribe` method.
  - Observables can be transformed and combined using operators.
  - Observables are used for handling streams of data, such as user input, server responses, and events.

- **Promises**:
  - Promises are eager, meaning they execute immediately when created.
  - Promises can only emit a single value.
  - Promises cannot be canceled once created.
  - Promises do not have built-in transformation or combination methods.
  - Promises are used for handling asynchronous operations that produce a single result, such as HTTP requests and file reads.

[Back to top⤴️](#table-of-contents)

## Unsubscribe in Angular

In Angular, managing subscriptions is crucial to avoid memory leaks and improve the performance of your application. Here are five ways to unsubscribe in Angular:

1. Using the takeUntil operator:

    - Create a subject to act as a notifier.
    - In your component, create a private property for the subject.
    - Subscribe to observables using the takeUntil operator with the subject as the parameter.
    - Emit a value on the subject when you want to unsubscribe, typically in the ngOnDestroy lifecycle hook.
    - In the ngOnDestroy hook, call complete() on the subject to stop emitting values.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subject } from 'rxjs';
    import { takeUntil } from 'rxjs/operators';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private unsubscribe$ = new Subject<void>();

      ngOnInit() {
        // Subscribe to an observable
        someObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }
    }
    ```

2. Using the async pipe:

    - In your template, use the async pipe to subscribe to observables directly.
    - Angular automatically handles the subscription and unsubscription for you.
    - Ensure you don't manually subscribe to the observable in your component.

    ```html
    <div>{{ someObservable$ | async }}</div>
    ```

3. Using the Subscription object:

    - Declare a Subscription property in your component.
    - Assign the subscription to the property when subscribing.
    - In the ngOnDestroy hook, unsubscribe from the subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription: Subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

4. Using the unsubscribe operator:

    - Store the subscription in a variable.
    - Call the unsubscribe method on the subscription in the ngOnDestroy hook.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

5. Using the ngOnDestroy hook and manual unsubscription:

    - Declare an array to store all the subscriptions.
    - Push the subscription to the array when subscribing.
    - Loop through the array in the ngOnDestroy hook and unsubscribe from each subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscriptions: Subscription[] = [];

      ngOnInit() {
        // Push the subscription to the array
        this.subscriptions.push(someObservable.subscribe((data) => {
          // Handle data
        }));
      }

      ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
    }
    ```

[Back to top⤴️](#table-of-contents)

## Renderer2

Renderer2 is a utility class that provides methods to manipulate and interact with the DOM (Document Object Model). It is used to perform operations such as creating, modifying, and removing elements, applying styles, and listening to events.

```typescript
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="changeColor()">Change Color</button>
  `
})
export class ExampleComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeColor() {
    const button = this.el.nativeElement.querySelector('button');
    this.renderer.setStyle(button, 'background-color', 'red');
  }
}

```

## JIT

**Just-in-Time** (JIT) is a type of compilation that compiles your app in the browser at runtime. This is the default compilation mode for Angular applications.

### Advantages of JIT

- Faster development cycle as changes can be seen immediately.
- No build step required during development.
- More flexible for dynamic template generation.

## AOT

**Ahead-of-Time** (AOT) is a type of compilation that compiles your app at build time. This mode is used to pre-compile your Angular application before deployment.

### Advantages of AOT

- Faster startup times as the browser only needs to execute the compiled code.
- Improved performance due to optimized and pre-compiled templates.
- Better security as the templates are already compiled and validated before deployment.
- Smaller bundle sizes since the templates are not included.

## JIT vs AOT

### Differences between AOT and JIT

| Feature | AOT | JIT |
|---|---|---|
| Compilation time | Build time | Runtime |
| Application size | Smaller | Larger |
| Application load time | Faster | Slower |
| Debugging | More difficult | Easier |
| Development | More difficult | Easier |
| Performance | Better | Worse |

## Deferrable Views

Deferrable views can be used in component template to defer the loading of select dependencies within that template.

```typescript
@defer {
  <large-component />
}
```

## Meta tags

### Title Service

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
```

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
export class TitleComponent implements OnInit {
  constructor(private title:Title) { }
}
```

```typescript
ngOnInit() {
  this.title.setTitle("Learn Angular")
}
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Title, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private title:Title){
  }
 
  ngOnInit() {
    this.title.setTitle("Learn Angular")
  }
 
}
```

### Title Service Example

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Service Example';
 
  constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
```

```html
<!-- app.component.html -->
<h1>Title Service Example</h1>
 
<ul>
  <li><a [routerLink]="['/home']">Home</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
  title = 'Home Component Title';
 
  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
 
}
```

### Dynamic Title

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {path: '', component:HomeComponent, data : {title:'Title for Home Component'}},
  {path: 'parent', component:ParentComponent, data : {title:'Title for Parent Component'},
    children: [
      { path: 'child', component:ChildComponent, data : {title:'Title for Child Component'}}
    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private titleService: Title
  ) { }
 
  ngOnInit() {
 
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
 
        var rt = this.getChild(this.activatedRoute)
 
        rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(data.title)})
      })
 
  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
}
```

```html
<!-- app.component.html -->
<h1>Dynamic Title Example</h1>
 
<ul>
  <li><a routerLink="">Home</a> </li>
  <li><a [routerLink]="['/parent']">Parent</a> </li>
  <li><a [routerLink]="['/child']">Child</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// parent.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Parent Component</h1>
  <router-outlet></router-outlet>
  `
})
export class ParentComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// child.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Child Component</h1>`
})
export class ChildComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

### Meta Service

```typescript
import { BrowserModule, Meta } from '@angular/platform-browser';
```

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private metaService:Meta){
  }
 
  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"Article Description"});
  }
 
}
```

Adding Tags with addTag() & addTags()

```typescript
this.metaService.addTag( { name:'description',content:"Article Description"});
```

```typescript
this.metaService.addTag( 
  { name: 'description', content: 'Article Description' },
  { name: 'robots', content: 'index,follow' },
  { property: 'og:title', content: 'Content Title for social media' }
);
```

Reading the Tags with getTag()

```typescript
this.metaService.getTag("name='description'")
```

Update the Tag with updateTag()

```typescript
this.metaService.updateTag( { name:'robots', content:'index, nofoloow'},"name='robots'");
```

Removing the Tag with removeTag()

```typescript
this.metaService.removeTag("name='robots'");
```

[Back to top⤴️](#table-of-contents)

## Security

The security of an Angular application is a critical aspect that needs to be considered during development. Here are some best practices to enhance the security of your Angular application:

## Preventing cross-site scripting (XSS)

Cross-site scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. To prevent XSS attacks in Angular applications, you can use the following best practices:

- Use Angular's built-in sanitization mechanisms to sanitize user input and prevent script injection.
- Avoid using unsafe methods like innerHTML and instead use Angular's data binding syntax to render dynamic content.
- Use Angular's built-in security features like Content Security Policy (CSP) to restrict the sources of scripts and other resources that can be loaded by your application.
- Enable strict mode in Angular templates to prevent template expressions from executing arbitrary code.
- Use Angular's HttpClient module to make HTTP requests and automatically sanitize responses to prevent XSS attacks.

## Angular's cross-site scripting security model

Angular provides a built-in security model to prevent cross-site scripting (XSS) attacks in applications. This security model includes the following features:

- Automatic sanitization of user input: Angular automatically sanitizes user input to prevent script injection and other security vulnerabilities.
- Strict mode in templates: Angular templates run in strict mode by default, which prevents template expressions from executing arbitrary code.
- Content Security Policy (CSP): Angular applications can use CSP to restrict the sources of scripts and other resources that can be loaded by the application.
- Trusted Types: Angular supports Trusted Types, a new web platform feature that helps prevent DOM-based XSS attacks by enforcing strict type checking on DOM APIs.

## Sanitization and security contexts

Angular provides a built-in sanitization mechanism to prevent cross-site scripting (XSS) attacks in applications. Sanitization is the process of cleaning user input to remove potentially dangerous content, such as script tags and event handlers. Angular uses security contexts to determine how to sanitize user input based on its intended use.

Angular provides the following security contexts for sanitization:

- HTML: Sanitizes user input for use in HTML contexts, such as rendering dynamic content in templates.
- Style: Sanitizes user input for use in CSS contexts, such as setting inline styles.
- Script: Sanitizes user input for use in script contexts, such as event handlers and script tags.
- URL: Sanitizes user input for use in URL contexts, such as setting href attributes.
- Resource URL: Sanitizes user input for use in resource URL contexts, such as loading external resources.

## Sanitization example

```typescript
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<div [innerHTML]="safeHtml"></div>`
})
export class AppComponent {
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const untrustedHtml = '<img src=x onerror=alert(1)>';
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
}
```

## Direct use of the DOM APIs and explicit sanitization calls

Directly using the DOM APIs to manipulate the DOM can introduce security vulnerabilities in Angular applications. To prevent XSS attacks, avoid using unsafe methods like innerHTML and instead use Angular's built-in sanitization mechanisms to render dynamic content safely.

```typescript
import { Renderer2 } from '@angular/core';

constructor(private renderer: Renderer2, private sanitizer: DomSanitizer) { }

const div = this.renderer.createElement('div');
const unsafeContent = '<script>alert("XSS")</script>';
const sanitizedContent = this.sanitizer.sanitize(SecurityContext.HTML, unsafeContent);
this.renderer.setProperty(div, 'innerHTML', sanitizedContent);
document.body.appendChild(div);
```

## Trusting safe values

Angular provides a mechanism to trust safe values and bypass the built-in sanitization mechanisms when rendering trusted content. To trust a safe value, you can use the bypassSecurityTrustHtml, bypassSecurityTrustStyle, bypassSecurityTrustScript, bypassSecurityTrustUrl, and bypassSecurityTrustResourceUrl methods provided by the DomSanitizer service.

```typescript
const safeHtml = this.sanitizer.bypassSecurityTrustHtml('<b>Safe Content</b>');
```

## Content security policy

Content Security Policy (CSP) is a security feature that helps prevent cross-site scripting (XSS) attacks by restricting the sources of scripts and other resources that can be loaded by a web application. Angular applications can use CSP to define a policy that specifies which content is allowed to be loaded by the application.

To enable CSP in an Angular application, you can add a Content-Security-Policy header to the HTTP response from the server. The CSP header should include directives that restrict the sources of scripts, styles, images, fonts, and other resources that can be loaded by the application.

```typescript
Content-Security-Policy: default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://example.com; img-src 'self' https://example.com; font-src 'self' https://example.com;
```

## Enforcing Trusted Types

Trusted Types is a new web platform feature that helps prevent DOM-based cross-site scripting (XSS) attacks by enforcing strict type checking on DOM APIs. Angular applications can use Trusted Types to ensure that only trusted values are passed to DOM APIs, preventing script injection and other security vulnerabilities.

To enable Trusted Types in an Angular application, you can configure the Trusted Types policy using the TrustedTypesConfig token provided by Angular. The policy can specify which types of values are considered trusted and enforce strict type checking on DOM APIs.

```typescript
import { InjectionToken } from '@angular/core';

export const TRUSTED_TYPES_CONFIG = new InjectionToken('TRUSTED_TYPES_CONFIG');

const trustedTypesConfig = {
  createPolicy: (name, policy) => {
    return policy;
  }
};
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TRUSTED_TYPES_CONFIG } from './trusted-types.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: TRUSTED_TYPES_CONFIG, useValue: trustedTypesConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use the AOT template compiler

The Angular Ahead-of-Time (AOT) template compiler compiles Angular templates at build time, which helps prevent cross-site scripting (XSS) attacks by statically analyzing the templates and generating optimized code. AOT compilation eliminates the need for the browser to compile templates at runtime, reducing the risk of template injection vulnerabilities.

To enable AOT compilation in an Angular application, you can use the ngc command to compile the application ahead of time. AOT compilation is recommended for production builds to improve performance, security, and compatibility with Content Security Policy (CSP) restrictions.

```bash
ng build --aot
```

## Server-side XSS protection

Server-side XSS protection is a security feature that helps prevent cross-site scripting (XSS) attacks by validating and sanitizing user input on the server before rendering it in the browser. To protect against XSS attacks, you can implement server-side input validation and sanitization to ensure that user input is safe and does not contain malicious content.

## HTTP-level vulnerabilities

Angular applications can be vulnerable to various HTTP-level attacks, such as cross-site request forgery (CSRF), cross-site scripting (XSS), and cross-site script inclusion (XSSI). To protect against these vulnerabilities, you can use Angular's built-in security features, such as HttpClient XSRF/CSRF protection, custom cookie/header names, and disabling XSRF protection.

## Cross-site request forgery

Cross-site request forgery (CSRF) is a security vulnerability that allows attackers to execute unauthorized actions on behalf of authenticated users. To prevent CSRF attacks in Angular applications, you can use Angular's built-in XSRF/CSRF protection mechanism to add a token to HTTP requests and validate it on the server.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## HttpClient XSRF/CSRF security

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. The HttpClientXsrfModule.withOptions method allows you to configure custom cookie and header names for the XSRF/CSRF token.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Configure custom cookie/header names

Angular's HttpClient module allows you to configure custom cookie and header names for the XSRF/CSRF token using the HttpClientXsrfModule.withOptions method. By specifying custom names for the XSRF/CSRF token, you can enhance the security of your application and prevent CSRF attacks.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Disabling XSRF protection

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. If you want to disable XSRF protection for specific requests, you can use the { withCredentials: true } option in the HttpClient request.

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

this.http.get('/api/data', { withCredentials: true });
```

## Cross-site script inclusion (XSSI)

Cross-site script inclusion (XSSI) is a security vulnerability that allows attackers to include external scripts in an application and execute malicious code. To prevent XSSI attacks in Angular applications, you can use Angular's built-in security features, such as HttpClient XSSI protection, to validate and sanitize external script responses.

## Auditing Angular applications

Auditing Angular applications is an essential step to identify and fix security vulnerabilities in the codebase. You can use various tools and techniques to audit Angular applications, such as security scanners, code reviews, penetration testing, and security best practices.

[Back to top⤴️](#table-of-contents)

## Standalone Components

A standalone component is a type of component which is not part of any Angular module. It provides a simplified way to build Angular applications.

## Angular Signals

Angular Signals is a powerful system that provides detailed monitoring of state usage within an application, enabling the framework to efficiently optimize rendering updates.

```typescript
import { Component, OnInit } from '@angular/core';
import { signal, computed } from '@angular/core'; // Import from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {}

  ngOnInit() {
    // Optional logging for debugging displayedCount changes
    // console.log('Displayed count changed to:', this.displayedCount());
  }

  incrementCount() {
    this.count.set(this.count() + 1);
  }

  decrementCount() {
    this.count.update((value) => Math.max(0, value - 1));
  }
}
```

```html
<h1>Angular Signals Example</h1>

<button (click)="incrementCount()" style="margin-right: 10px;">Increment Count</button>
<button (click)="decrementCount()">Decrement Count</button>

<p>Count: {{ count() }}</p>
<p>Double Count: {{ doubleCount() }}</p>
```

[Back to top⤴️](#table-of-contents)

## Control Flow

Conditionally display content with @if, @else-if and @else

```html
@if (a > b) {
  <p>{{a}} is greater than {{b}}</p>
}
```

```html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```

Repeat content with the @for block

```html
@for (item of items; track item.id) {
  {{ item.name }}
}
```

Providing a fallback for @for blocks with the @empty block

```html
@for (item of items; track item.name) {
  <li> {{ item.name }}</li>
} @empty {
  <li aria-hidden="true"> There are no items. </li>
}
```

Conditionally display content with the @switch block

```html
@switch (userPermissions) {
  @case ('admin') {
    <app-admin-dashboard />
  }
  @case ('reviewer') {
    <app-reviewer-dashboard />
  }
  @case ('editor') {
    <app-editor-dashboard />
  }
  @default {
    <app-viewer-dashboard />
  }
}
```

[Back to top⤴️](#table-of-contents)

## Angular Animations

Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are @angular/animations and @angular/platform-browser.

### Installing Angular Animations

```bash
npm install @angular/animations
```

### Importing Angular Animations

To use Angular animations in an Angular application, you need to import the BrowserAnimationsModule module in the app.module.ts file.

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

### Animation Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent {
  show = false;

  toggle() {
    this.show = !this.show;
  }
}
```

```html
<button (click)="toggle()">Toggle</button>
<div *ngIf="show" @fadeInOut>
  <h1>Angular Animation Example</h1>
</div>
```

[Back to top⤴️](#table-of-contents)

## Angular Universal

Angular Universal is a server-side rendering (SSR) solution for Angular applications that allows you to render your application on the server and send the fully rendered HTML to the client. This can improve performance, SEO, and user experience by reducing the time to first contentful paint and enabling search engines to crawl and index your application.

---
## What is SEO in angular
**SEO (Search Engine Optimization)** in Angular refers to the process of optimizing Angular applications to improve their visibility and ranking on search engine results pages (SERPs). Since Angular is a **Single-Page Application (SPA)** framework, it presents unique challenges for SEO because most of the content is dynamically rendered using JavaScript, which search engines traditionally struggle to crawl and index.

---

## **Why SEO is Challenging in Angular**
1. **Client-Side Rendering (CSR)**:
   - By default, Angular applications render content on the client side (in the browser). This means that when a search engine crawls the page, it may only see an empty HTML shell without the dynamically loaded content.

2. **JavaScript Rendering**:
   - Search engines like Google can execute JavaScript, but they may not do so as efficiently as static HTML. This can lead to incomplete indexing of your content.

3. **Dynamic Content**:
   - Content loaded dynamically (e.g., via API calls) may not be immediately available for search engines to crawl.

---

## **How to Improve SEO in Angular**

To make Angular applications more SEO-friendly, you can use the following techniques:

---

### **1. Server-Side Rendering (SSR) with Angular Universal**
- **What it does**: Angular Universal allows you to render Angular applications on the server side, generating static HTML that is sent to the browser. This ensures that search engines can crawl and index your content effectively.
- **How to implement**:
  1. Add Angular Universal to your project:
     ```bash
     ng add @nguniversal/express-engine
     ```
  2. Build and run the server-side application:
     ```bash
     npm run build:ssr
     npm run serve:ssr
     ```
- **Benefits**:
  - Improves page load time by sending pre-rendered HTML to the browser.
  - Ensures search engines can see the full content of your pages.

---

### **2. Pre-Rendering**
- **What it does**: Pre-rendering generates static HTML files for specific routes at build time. These files are served to users and search engines.
- **How to implement**:
  1. Use a tool like [Prerender.io](https://prerender.io/) or Angular's built-in pre-rendering capabilities.
  2. Add pre-rendering to your Angular project:
     ```bash
     ng run <project-name>:prerender
     ```
- **Benefits**:
  - Simple to implement for static or semi-static content.
  - Improves SEO for pages that don't change frequently.

---

### **3. Meta Tags and Title Service**
- **What it does**: Dynamically update meta tags (e.g., `title`, `description`, `og:title`) for each route to improve SEO and social sharing.
- **How to implement**:
  Use Angular's `Meta` and `Title` services in your components:
  ```typescript
  import { Meta, Title } from '@angular/platform-browser';

  @Component({ ... })
  export class HomeComponent {
    constructor(private meta: Meta, private title: Title) {
      this.title.setTitle('Home Page - My Angular App');
      this.meta.addTag({ name: 'description', content: 'Welcome to the home page of my Angular app!' });
    }
  }
  ```
- **Benefits**:
  - Ensures each page has unique and relevant meta tags for search engines.

---

### **4. Lazy Loading with SEO in Mind**
- **What it does**: Lazy loading improves performance by loading modules only when needed. However, ensure that lazy-loaded content is accessible to search engines.
- **How to implement**:
  Use Angular's `loadChildren` syntax for lazy loading:
  ```typescript
  const routes: Routes = [
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
  ];
  ```
- **Best Practices**:
  - Use SSR or pre-rendering to ensure lazy-loaded content is indexed.

---

### **5. Structured Data (Schema.org)**
- **What it does**: Adds structured data to your pages to help search engines understand your content better (e.g., articles, products, events).
- **How to implement**:
  Add JSON-LD script to your component templates:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "My Angular Article",
    "description": "Learn how to improve SEO in Angular."
  }
  </script>
  ```
- **Benefits**:
  - Enhances search engine understanding of your content.
  - Can lead to rich snippets in search results.

---

### **6. Canonical URLs**
- **What it does**: Prevents duplicate content issues by specifying the canonical URL for each page.
- **How to implement**:
  Add a canonical link tag to your `index.html` or dynamically in your components:
  ```html
  <link rel="canonical" href="https://example.com/about" />
  ```
- **Benefits**:
  - Helps search engines identify the preferred version of a page.

---

### **7. Optimize Performance**
- **What it does**: Improves page load speed, which is a ranking factor for search engines.
- **How to implement**:
  - Use lazy loading for modules.
  - Enable compression (e.g., gzip) for your server.
  - Optimize images and use modern formats like WebP.
  - Minimize and bundle your JavaScript and CSS files.

---

### **8. Use a Sitemap**
- **What it does**: A sitemap helps search engines discover and index your pages.
- **How to implement**:
  - Generate a sitemap using a tool like [sitemap-generator](https://www.npmjs.com/package/sitemap-generator).
  - Submit the sitemap to search engines via their webmaster tools (e.g., Google Search Console).

---

### **9. Use Robots.txt**
- **What it does**: Controls which pages search engines can crawl.
- **How to implement**:
  Create a `robots.txt` file in your `src/assets` folder:
  ```txt
  User-agent: *
  Allow: /
  Disallow: /admin
  ```
- **Benefits**:
  - Prevents search engines from crawling sensitive or irrelevant pages.

---

### **10. Monitor SEO with Tools**
- Use tools like **Google Search Console**, **Google Analytics**, and **Lighthouse** to monitor and improve your Angular app's SEO performance.
- Regularly check for crawl errors, indexing issues, and performance metrics.

---

## **Key Takeaways**
- **Server-Side Rendering (SSR)** with Angular Universal is the most effective way to improve SEO in Angular.
- Use **meta tags**, **structured data**, and **canonical URLs** to enhance search engine understanding of your content.
- Optimize performance and ensure your app is crawlable by search engines.
- Regularly monitor and refine your SEO strategy using tools like Google Search Console.



### Creating an Angular Universal application

To create an Angular Universal application, you can use the Angular CLI to generate a new project with the Universal schematic.

```bash
ng new --ssr
```

To add Angular Universal to an existing Angular application, you can use the Angular CLI to add the Universal schematic to the project.

```bash
ng add @angular/ssr
```

[Back to top⤴️](#table-of-contents)

## Bootstrap

Bootstrap is a popular front-end framework for building responsive web applications. It provides a set of CSS and JavaScript components that can be used to create modern and mobile-friendly user interfaces.

### Installing Bootstrap

```bash
npm install bootstrap
```

### Importing Bootstrap

To use Bootstrap in an Angular application, you need to import the Bootstrap CSS file in the styles array of the angular.json file.

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

[Back to top⤴️](#table-of-contents)

## Angular Material

Angular Material is a UI component library for Angular applications that provides a set of reusable and customizable components, such as buttons, cards, dialogs, and menus. It is built on top of the Angular CDK (Component Dev Kit) and follows the Material Design guidelines.

### Installing Angular Material

```bash
ng add @angular/material
```

### Importing Angular Material

To use Angular Material in an Angular application, you need to import the required modules in the app.module.ts file.

```typescript
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

[Back to top⤴️](#table-of-contents)

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes for styling web applications. It allows you to build custom designs by composing utility classes together, rather than writing custom CSS styles.

### Installing Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Configure your template paths

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Importing Tailwind CSS

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

[Back to top⤴️](#table-of-contents)

## PrimeNG

PrimeNG is a popular UI component library for Angular applications that provides a set of rich and customizable components, such as data tables, calendars, dialogs, and charts. It is built on top of the PrimeFaces library and follows the PrimeNG design guidelines.

### Installing PrimeNG

```bash
npm install primeng
```

### Importing PrimeNG

To use PrimeNG in an Angular application, you need to import the required styles and modules in the angular.json file.

```json
// angular.json
"styles": [
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "src/styles.css"
]
```

```css
/* styles.css */
@import 'primeng/resources/themes/saga-blue/theme.css';
@import 'primeng/resources/primeng.min.css';
```

[Back to top⤴️](#table-of-contents)

## SPA

**SPA** (Single Page Application) is a web application that dynamically rewrites the current page instead of loading entire new pages from the server, providing a fluid and responsive user experience.

### Advantages of SPA

- **Faster Load Times**: Loads the initial page once; subsequent interactions update dynamically.
- **Better User Experience**: No full page reloads, allowing faster navigation and smoother transitions.
- **Reduced Server Load**: Less server load as only necessary data is fetched.
- **Improved SEO**: Optimizable for search engines with server-side rendering and meta tags.
- **Offline Support**: Accessible offline using service workers and caching.
- **Mobile Support**: Optimized for mobile with responsive design and touch gestures.
- **Scalability**: Handles many users and interactions with performance optimizations like lazy loading.

[Back to top⤴️](#table-of-contents)

## PWA

Progressive Web Apps (PWAs) are web applications that provide a native app-like experience to users, including offline support, push notifications, and home screen installation. Angular provides built-in support for creating PWAs using the @angular/pwa package.

### Installing PWA

```bash
ng add @angular/pwa
```

### Configuring PWA

To configure the PWA settings, you can modify the ngsw-config.json file in the src/ directory.

```json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }
  ]
}
```

### Building PWA

To build the PWA, you can run the ng build --prod command with the --configuration=production flag.

```bash
ng build --prod --configuration=production
```

### Service Worker

The service worker is a script that runs in the background of the browser and handles tasks such as caching assets, intercepting network requests, and providing offline support. Angular's service worker is generated automatically when you create a PWA using the @angular/pwa package.

### Features of PWA

**Offline Support** - The service worker caches assets and intercepts network requests to provide offline support for the application.

**Push Notifications** - The service worker can receive push notifications from the server and display them to the user.

**Background Sync** - The service worker can perform background sync tasks, such as sending data to the server when the network connection is available.

**Home Screen Installation** - The service worker can prompt the user to install the application on the home screen for quick access.

[Back to top⤴️](#table-of-contents)

## CLI Commands

Installing Angular CLI

```bash
npm install -g @angular/cli
```

Help

```bash
ng help
```

Check version

```bash
ng version
```

Create, build, and serve a new, basic Angular project cli command

```bash
ng new my-first-project
cd my-first-project
ng serve
```

Generating new application

```bash
ng new app-name
```

Create new app without installing cli

```bash
npm init @angular app-name
```

Component

```bash
ng g c component-name
ng generate component component-name
```

Adding External libraries

```bash
ng add
```

Build

```bash
ng build
```

Running project

```bash
ng serve
```

Run project on particular port

```bash
ng serve --port=portname
// example
ng serve --port=3000
```

Run project and open the url in default browser

```bash
ng  serve --open
```

Update

```bash
ng update
```

Directive

```bash
ng generate directive component-name
ng g directive component-name
```

Module

```bash
ng generate module module-name
ng g m module-name
```

Service

```bash
ng generate service component-name
ng g service component-name
```

Routing Module

```bash
ng g module module-name --routing
ng g m module-name --routing
```

Component with module, routing module

```bash
ng generate module component-name --route component-name --module app.module
```

Pipe

```bash
ng g pipe pipe-name
```

Enum

```bash
ng g enum some-enum
```

Class

```bash
ng g cl my-class
```

Interface

```bash
ng g interface my-interface
```

Guard

```bash
ng g guard guard-name
```

Multiple Projects in one Angular App

```bash
ng generate application sub-app-name

ng new app-name --create-application=false
```

Generate environments

```bash
ng generate environments
```

## Version compatibility

| Angular            | Node.js                              | TypeScript     | RxJS               |
| ------------------ | ------------------------------------ | -------------- | ------------------ |
| 18.0.x             | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0  | >=5.4.0 <5.5.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.3.x             | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.5.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.1.x \|\| 17.2.x | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.4.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.0.x             | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.3.0 | ^6.5.3 \|\| ^7.4.0 |
| 16.1.x \|\| 16.2.x | ^16.14.0 \|\| ^18.10.0               | >=4.9.3 <5.2.0 | ^6.5.3 \|\| ^7.4.0 |
| 16.0.x             | ^16.14.0 \|\| ^18.10.0               | >=4.9.3 <5.1.0 | ^6.5.3 \|\| ^7.4.0 |

## Deploying an Angular Application

| DEPLOYMENT TO | PACKAGE |
|---|---|
| Firebase hosting | ng add @angular/fire |
| Vercel | vercel init angular |
| Netlify | ng add @netlify-builder/deploy |
| GitHub pages | ng add angular-cli-ghpages |
| NPM | ng add ngx-deploy-npm |
| Amazon Cloud S3 | ng add @jefiozie/ngx-aws-deploy |

[Back to top⤴️](#table-of-contents)

## Imports

Angular Core

```typescript
import { Component } from '@angular/core'; // Component decorator
import { NgModule } from '@angular/core'; // NgModule decorator
import { RouterModule, Routes } from '@angular/router'; // Routing module
import { FormsModule } from '@angular/forms'; // Forms module
import { ReactiveFormsModule } from '@angular/forms'; // Reactive forms module
import { HttpClientModule } from '@angular/common/http'; // HTTP client module
import { BrowserModule } from '@angular/platform-browser'; // Browser module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animations module
import { CommonModule } from '@angular/common'; // Common module
import { NgModel } from '@angular/forms'; // NgModel directive
import { NgForm } from '@angular/forms'; // NgForm directive
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Form group, form control, validators
import { HttpClient } from '@angular/common/http'; // HTTP client
import { ActivatedRoute } from '@angular/router'; // Route parameters
import { Router } from '@angular/router'; // Router service
import { Title } from '@angular/platform-browser'; // Title service
import { Meta } from '@angular/platform-browser'; // Meta service
import { Renderer2 } from '@angular/core'; // Renderer2 service
import { ElementRef } from '@angular/core'; // ElementRef service
import { ViewChild } from '@angular/core'; // ViewChild decorator
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef service
import { Pipe, PipeTransform } from '@angular/core'; // Pipe decorator, PipeTransform interface
import { Injectable } from '@angular/core'; // Injectable decorator
import { EventEmitter } from '@angular/core'; // EventEmitter class
import { Output } from '@angular/core'; // Output decorator
import { Input } from '@angular/core'; // Input decorator
import { HostListener } from '@angular/core'; // HostListener decorator
import { HostBinding } from '@angular/core';  // HostBinding decorator
import { ContentChild } from '@angular/core'; // ContentChild decorator
import { ContentChildren } from '@angular/core';  // ContentChildren decorator
import { QueryList } from '@angular/core';  // QueryList class
import { AfterContentInit } from '@angular/core'; // AfterContentInit interface
import { AfterContentChecked } from '@angular/core';  // AfterContentChecked interface
import { AfterViewInit } from '@angular/core';  // AfterViewInit interface
import { AfterViewChecked } from '@angular/core'; // AfterViewChecked interface
import { OnInit } from '@angular/core'; // OnInit interface
import { OnDestroy } from '@angular/core';  // OnDestroy interface
import { OnChanges } from '@angular/core';  // OnChanges interface
import { SimpleChanges } from '@angular/core';  // SimpleChanges class
import { DoCheck } from '@angular/core';  // DoCheck interface
import { KeyValueDiffers } from '@angular/core';  // KeyValueDiffers service
import { KeyValueDiffer } from '@angular/core'; // KeyValueDiffer interface
import { KeyValueChanges } from '@angular/core';  // KeyValueChanges interface
import { KeyValueChangeRecord } from '@angular/core'; // KeyValueChangeRecord interface 
import { IterableDiffers } from '@angular/core';  // IterableDiffers service
import { IterableDiffer } from '@angular/core'; // IterableDiffer interface
import { IterableChanges } from '@angular/core';  // IterableChanges interface
import { IterableChangeRecord } from '@angular/core'; // IterableChangeRecord interface
import { ChangeDetectionStrategy } from '@angular/core';  // ChangeDetectionStrategy enum
import { ChangeDetectorRef } from '@angular/core';  // ChangeDetectorRef service
import { NgZone } from '@angular/core'; // NgZone service
import { ApplicationRef } from '@angular/core'; // ApplicationRef service
import { ComponentRef } from '@angular/core'; // ComponentRef class
import { ComponentFactory } from '@angular/core'; // ComponentFactory class
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { TemplateRef } from '@angular/core';  // TemplateRef class
import { EmbeddedViewRef } from '@angular/core';  // EmbeddedViewRef class
```

Angular Material

```typescript
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
```

RxJS

```typescript
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subscription } from 'rxjs/Subscription';
import { from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { merge } from 'rxjs';
import { zip } from 'rxjs';
import { combineLatest } from 'rxjs';
import { concat } from 'rxjs';
import { forkJoin } from 'rxjs';
import { race } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { scan } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { exhaustMap } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { share } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { buffer } from 'rxjs/operators';
import { bufferCount } from 'rxjs/operators';
import { bufferTime } from 'rxjs/operators';
import { bufferToggle } from 'rxjs/operators';
import { bufferWhen } from 'rxjs/operators';
import { combineAll } from 'rxjs/operators';
import { concatAll } from 'rxjs/operators';
import { count } from 'rxjs/operators';
import { endWith } from 'rxjs/operators';
import { every } from 'rxjs/operators';
import { exhaust } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { groupBy } from 'rxjs/operators';
import { ignoreElements } from 'rxjs/operators';
import { isEmpty } from 'rxjs/operators';
import { last } from 'rxjs/operators';
import { max } from 'rxjs/operators';
import { mergeAll } from 'rxjs/operators';
import { min } from 'rxjs/operators';
import { pairwise } from 'rxjs/operators';
import { partition } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
```

Firebase

```typescript
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireRemoteConfigModule } from '@angular/fire/remote-config';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
```

## MVVM

**MVVM** stands for Model-View-ViewModel. It is a design pattern that separates the user interface (View) from the business logic (Model) using a ViewModel. The ViewModel acts as an intermediary between the View and the Model, providing data binding and event handling.

## MVC

**MVC** stands for Model-View-Controller. It is a design pattern that separates the user interface (View) from the business logic (Model) using a Controller. The Controller acts as an intermediary between the View and the Model, handling user input and updating the Model.

## TypeScript

**TypeScript** is JavaScript with syntax for types. TypeScript is a superset of JavaScript that compiles to plain JavaScript. It is developed and maintained by Microsoft.

## Rxjs

**Reactive Extensions Library for JavaScript** - RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

## NgRx

**NgRx** is a Reactive libraries for Angular. It provides state management, side effects, and route handling. It is inspired by Redux. It is a set of Angular libraries to help manage state at scale in Angular applications.

## NgXS

**NgXS** is a state management pattern + library for Angular. It acts as a single source of truth for your application's state, providing simple rules for predictable state mutations.

[Back to top⤴️](#table-of-contents)

## Learn more from GitHub Repositories

- [Awesomw Angular](https://github.com/PatrickJS/awesome-angular)
- [Angular JumpStart](https://github.com/DanWahlin/Angular-JumpStart)
- [Angular Interview Questions by Sudheerj](https://github.com/sudheerj/angular-interview-questions)
- [Angular Learning Resources](https://github.com/avatsaev/angular-learning-resources)
- [CodAffection](https://github.com/CodAffection)
- [Bezkoder](https://github.com/bezkoder)
- [Angular Interview Questions by Yonet](https://github.com/Yonet/Angular-Interview-Questions)
- [Angular Basics ( v14.x )](https://github.com/learning-zone/angular-basics)

## Learn more from Websites

- [Official Documentation](https://angular.io/)
- [Tektutorialshub](https://www.tektutorialshub.com/)
- [W3School](https://www.w3schools.com/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [DevDocs](https://devdocs.io/)
- [Freecodecamp](https://www.freecodecamp.org/)
- [Javatpoint](https://www.javatpoint.com/)
- [Tutorialspoint](https://www.tutorialspoint.com/index.htm)
- [Udemy](https://www.udemy.com/)
- [YouTube](https://www.youtube.com)
- [Stackoverflow](https://stackoverflow.com)
- [NX Blog](https://blog.nrwl.io/angular/home)
- [Indepthdev](https://indepth.dev/angular)
- [Angular University](https://blog.angular-university.io/)
- [Bezkoder](https://www.bezkoder.com/)

## Learn more from Books

- [Angular From Theory To Practice](https://www.amazon.in/gp/product/B01N9S0CZN/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N9S0CZN&linkCode=as2&tag=tektutorialsh-21&linkId=80a3add2d10e438ee877f0812a370f80)
- [Angular in Action](https://www.amazon.in/gp/product/1617293318/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1617293318&linkCode=as2&tag=tektutorialsh-21&linkId=03b773dca252208c495a23ff9a7a9658)
- [Ng-Book: The Complete Guide to Angular](https://www.amazon.in/gp/product/1985170280/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1985170280&linkCode=as2&tag=tektutorialsh-21&linkId=61634c765c76ef908e150a0890dee4ab)
- [Pro Angular 6](https://www.amazon.in/gp/product/1484236483/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1484236483&linkCode=as2&tag=tektutorialsh-21&linkId=5782a77503f4cbb8ec775b4f3dff8e2b)
- [Beginning Angular with Typescript](https://www.amazon.in/dp/B01N9ZUHBA/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N9ZUHBA&linkCode=am2&tag=tektutorialsh-21&linkId=904b107f5a59c4150a4c1f414ad3bbe5)
- [Angular 6 for Enterprise-Ready Web Applications](https://www.amazon.in/dp/B078PNWRDN/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B078PNWRDN&linkCode=am2&tag=tektutorialsh-21&linkId=920065d52a27f89347011de7586867ff)
- [ASP.NET Core 2 and Angular 5](https://www.amazon.in/dp/B0778LXCCQ/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B0778LXCCQ&linkCode=am2&tag=tektutorialsh-21&linkId=dd160acb0338cf2704adbbf8e4d95126)
- [Angular Up & Running](https://www.amazon.in/gp/product/9352137426/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9352137426&linkCode=as2&tag=tektutorialsh-21&linkId=1a5a75d4af830585e3f935a6b5c9a083)
- [Codecraft](https://codecraft.tv/courses/angular/)
- [Rangle.io](https://angular-training-guide.rangle.io/)
- [Angular 2 Succinctly](https://www.syncfusion.com/succinctly-free-ebooks/angular2-succinctly)
- [Angular2Book](https://goalkicker.com/Angular2Book/)
- [Learning Angular: A no-nonsense guide to building web applications with Angular 15, 4th Edition](https://a.co/d/epVsJMG)

## Learn from YouTube Channels

- [Freecodecamp](https://www.youtube.com/@freecodecamp)
- [Programming With Mosh](https://www.youtube.com/@programmingwithmosh)
- [Angular University](https://www.youtube.com/@AngularUniversity)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [Code With Harry](https://www.youtube.com/@CodeWithHarry)
- [Fireship](https://www.youtube.com/@Fireship)
- [Academind](https://www.youtube.com/@academind)
- [Decoded Frontend](https://www.youtube.com/@DecodedFrontend)
- [Brandon Roberts](https://www.youtube.com/@BrandonRobertsDev)
- [ARC Tutorials](https://www.youtube.com/@ARCTutorials)
- [Edureka](https://www.youtube.com/@edurekaIN)
- [Simplilearn](https://www.youtube.com/@SimplilearnOfficial)
- [Joshua Morony](https://www.youtube.com/@JoshuaMorony)
- [Codevolution](https://www.youtube.com/@Codevolution)
- [Code Step By Step](https://www.youtube.com/@codestepbystep)
- [UX Trendz](https://www.youtube.com/@uxtrendz)
- [Devstackr](https://www.youtube.com/@Devstackr)
- [David Acosta](https://www.youtube.com/@davidacosta4611)
- [Testy Codiez](https://www.youtube.com/@TestyCodiez)
- [CodAffection](https://www.youtube.com/@CodAffection)
- [Techsith](https://www.youtube.com/@techsithtube)

## Learn More From Blogs Sites

- [Freecodecamp](https://www.freecodecamp.org/news)
- [Medium](https://medium.com/)
- [Dev.to](https://dev.to/)
- [Hashnode](https://hashnode.com/)
- [Angular Blog](https://blog.angular.io/)
- [Angular In Depth](https://angularindepth.com/)
- [Angular University](https://blog.angular-university.io/)

## List of Online Editors/Compiler for Angular

- [Stackblitz](https://stackblitz.com/)
- [CodeSandbox](https://codesandbox.io/)
- [Plunker](https://plnkr.co/)

## List of Twitter Users to Follow

- [Mosh](https://twitter.com/moshhamedani)
- [Minko Gechev](https://twitter.com/mgechev)
- [Todd Motto](https://twitter.com/toddmotto)
- [Deborah Kurata](https://twitter.com/DeborahKurata)
- [John Papa](https://twitter.com/John_Papa)
- [Dan Wahlin](https://twitter.com/DanWahlin)
- [Maximilian Schwarzmüller](https://twitter.com/maxedapps)
- [Wes Bos](https://twitter.com/wesbos)
- [Tracy Lee | ladyleet](https://twitter.com/ladyleet)
- [Shai Reznik](https://twitter.com/shai_reznik)
- [Victor Savkin](https://twitter.com/victorsavkin)
- [Stephen Fluin](https://twitter.com/stephenfluin)
- [Juri Strumpflohner](https://twitter.com/juristr)

## List of LinkedIn Users to Follow

- [Kevin Kreuzer](https://www.linkedin.com/in/kevin-kreuzer-a63b39121/)
- [Aristeidis Bampakos](https://www.linkedin.com/in/aristeidisbampakos/)
- [Dmytro Mezhenskyi](https://www.linkedin.com/in/dmezhenskyi/)
- [Santosh Yadav](https://www.linkedin.com/in/santoshyadavdev/)
- [Tomas Trajan](https://www.linkedin.com/in/tomastrajan/)
- [Marko Stanimirović](https://www.linkedin.com/in/markostanimirovic/)
- [Teja Gandhamu](https://www.linkedin.com/in/tejagandhamu/)
- [Santosh Yadav](https://www.linkedin.com/in/santoshyadavdev/)
- [Juri Strumpflohner](https://www.linkedin.com/in/juristr/)
- [Minko Gechev](https://www.linkedin.com/in/mgechev/)
- [Todd Motto](https://www.linkedin.com/in/toddmotto/)
- [Deborah Kurata](https://www.linkedin.com/in/deborah-kurata-7b7b5a1/)

## List of Discord Servers to Join

- [Angular](https://discord.com/invite/angular)



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.io/)
- [Stackblitz](https://stackblitz.com/)


---
# What is package.json in angular

 Its configuration file that is used to manage the project's dependencies, scripts, and metadata. It is a standard file in Node.js and npm (Node Package Manager) projects, and it plays a key role in defining how the project is built, tested, and run.

Key Components of package.json in an Angular Application:
* Metadata:

  - name: The name of the project.

  - version: The current version of the project.

  - description: A brief description of the project.

  - author: The author of the project.

  - license: The license under which the project is distributed.

* Dependencies:

  - dependencies: Lists all the npm packages that your project depends on to run. These are installed when you run npm install.

  - devDependencies: Lists the npm packages that are only needed for development, such as testing libraries, build tools, etc.

* Scripts:

  - scripts: Defines a set of commands that can be run using npm run <script-name>. Common scripts in an Angular project include:

  - start or ng serve: Starts the development server.

  - build: Builds the project for production.

  - test: Runs the unit tests.

  - lint: Runs the linter to check for code quality issues.

  - e2e: Runs end-to-end tests.

* Configurations:

  - config: Allows you to set configuration parameters that can be used in your scripts or by npm.

* Engines:

  - engines: Specifies the versions of Node.js and npm that are compatible with your project.

Example package.json for an Angular Application:
```
{
  "name": "my-angular-app",
  "version": "1.0.0",
  "description": "An example Angular application",
  "author": "Your Name",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^15.0.0",
    "@angular/common": "^15.0.0",
    "@angular/compiler": "^15.0.0",
    "@angular/core": "^15.0.0",
    "@angular/forms": "^15.0.0",
    "@angular/platform-browser": "^15.0.0",
    "@angular/platform-browser-dynamic": "^15.0.0",
    "@angular/router": "^15.0.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^15.0.0",
    "@angular/cli": "~15.0.0",
    "@angular/compiler-cli": "^15.0.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.8.0"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  }
}
```
* How It Works:
When you run npm install, npm reads the package.json file and installs all the dependencies listed under dependencies and devDependencies.

The scripts section allows you to define custom commands that can be executed using npm run <script-name>. For example, npm run start will start the development server.

* Importance:
Dependency Management: Ensures that all team members are using the same versions of libraries.

Build and Run Scripts: Simplifies the process of building, testing, and running the application.

Project Configuration: Centralizes configuration settings, making the project easier to manage and share.

# What is package.json in angular?
It is generated by the Angular CLI (Command Line Interface) and serves as the main configuration file for the entire Angular workspace. This file defines the structure, settings, and behavior of your Angular application(s) and libraries within the workspace.

* Purpose of angular.json:
The angular.json file is used to configure:

  - Project structure: Defines the applications and libraries in the workspace.

  - Build options: Configures how the application is built, including optimization settings, output paths, and more.

  - Serve options: Configures the development server (e.g., ng serve).

  - Test options: Configures how tests are run (e.g., ng test).

  - Linting options: Configures the linting rules and tools (e.g., ng lint).

  - Architect targets: Defines custom commands and configurations for tasks like building, serving, testing, and linting.

* Structure of angular.json:
  The angular.json file is a JSON file with a specific structure. Here are the key sections:

* version:

  Specifies the version of the Angular workspace configuration schema. This is automatically managed by the Angular CLI.

* projects:

  Contains configurations for each project in the workspace (e.g., applications and libraries).

  Each project has its own configuration, including build, serve, test, and lint options.

* defaultProject:

  Specifies the default project to use when running CLI commands without explicitly specifying a project.

* schematics:

  Defines default configurations for generating components, services, modules, etc., using the Angular CLI.

* cli:

  Contains global configuration options for the Angular CLI.

* architect (or targets in newer versions):

  Defines the tasks (e.g., build, serve, test, lint) and their configurations for each project.

  Each task has a builder (the tool used to perform the task) and options (configuration for the task).

* Example angular.json File:
  Here’s an example of what an angular.json file might look like for a simple Angular workspace with one application:

```
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-app": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "my-app:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "my-app:build:production"
            }
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": ["tsconfig.app.json", "tsconfig.spec.json"],
            "exclude": ["**/node_modules/**"]
          }
        }
      }
    }
  },
  "defaultProject": "my-app"
}
```
Key Sections Explained:
* projects:

  Contains configurations for each project in the workspace.

  Each project has a projectType (e.g., application or library).

  The root and sourceRoot specify the root directory and source directory for the project.

* architect (or targets):

  Defines the tasks (e.g., build, serve, test, lint) and their configurations.

  Each task has a builder (the tool used to perform the task) and options (configuration for the task).

    - For example:

    The build task uses the @angular-devkit/build-angular:browser builder to compile the application.

    The serve task uses the @angular-devkit/build-angular:dev-server builder to start the development server.

* configurations:

    Allows you to define different configurations for tasks (e.g., production for the build task).

    For example, the production configuration enables optimizations like AOT (Ahead-of-Time) compilation and minification.

* schematics:

    Defines default options for generating components, services, modules, etc., using the Angular CLI.

* cli:

  Contains global configuration options for the Angular CLI.

* Common Use Cases:
    - Customizing the Build Process:

        You can modify the build options to change the output path, enable/disable source maps, or add custom assets.

    - Configuring the Development Server:

      You can modify the serve options to change the port, host, or other server settings.

    - Setting Up Multiple Environments:

      You can define different configurations (e.g., production, staging) for building and serving the application.

    - Linting and Testing:

      You can configure linting rules and testing frameworks (e.g., Karma, Jasmine) in the lint and test sections.

* Importance of angular.json:
    - Centralized Configuration: All project settings are stored in one place, making it easier to manage and share.

    - Customization: Allows you to customize the build, serve, test, and lint processes to fit your project's needs.

    - Workspace Management: Supports multiple projects (applications and libraries) in a single workspace.
# What is tsconfig.json in angular?

The tsconfig.json file is a configuration file for TypeScript, the primary language used in Angular applications. It specifies the root files and compiler options required to compile the TypeScript code into JavaScript. This file is essential for Angular projects because Angular is built with TypeScript, and the Angular CLI relies on this file to understand how to compile your application.

* Purpose of tsconfig.json:
  - Compiler Configuration: Defines how the TypeScript compiler (tsc) should behave when compiling your code.

  - Project Structure: Specifies the root files and include/exclude patterns for the TypeScript project.

  - Type Checking: Configures strict type-checking options to ensure type safety in your code.

  - Output Settings: Controls the output directory, module system, and JavaScript version for the compiled code.

* Key Sections in tsconfig.json:
    - compilerOptions:

        This is the most important section, where you configure how TypeScript compiles your code.

    - Common options include:

        1. target: Specifies the target JavaScript version (e.g., ES5, ES6, ES2020).

        2. module: Defines the module system for the output (e.g., CommonJS, ESNext).

        3. outDir: Specifies the output directory for compiled JavaScript files.

        4. strict: Enables strict type-checking options.

        5. esModuleInterop: Enables compatibility with CommonJS modules.

        6. skipLibCheck: Skips type-checking of declaration files (.d.ts).

        7. baseUrl and paths: Configure path aliases for imports.

    - include:

      Specifies the files or directories to include in the compilation.

      By default, Angular includes all .ts files in the src folder.

    - exclude:

      Specifies the files or directories to exclude from the compilation.

      Common exclusions include node_modules, dist, and test files.

    - extends:

        Allows you to extend another tsconfig.json file. This is useful for sharing configurations across multiple projects.

    - files:

      Explicitly lists the files to include in the compilation. This is rarely used in Angular projects because include is more common.

* Example tsconfig.json in an Angular Project:
Here’s an example of a typical tsconfig.json file in an Angular project:

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2017",
    "module": "es2020",
    "lib": ["es2020", "dom"],
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "angularCompilerOptions": {
    "enableIvy": true,
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}
```
* Key Compiler Options in Angular:
    - arget:

        Specifies the JavaScript version to compile to (e.g., ES5, ES2015, ES2020).

        Angular typically targets ES2015 or higher.

  - module:

    Defines the module system for the output (e.g., CommonJS, ESNext).

    Angular uses ESNext or ES2020 for modern module systems.

  - strict:

    Enables strict type-checking options, which help catch errors at compile time.

  - experimentalDecorators:

    Enables support for decorators, which are used extensively in Angular (e.g., @Component, @NgModule).

  - esModuleInterop:

    Ensures compatibility with CommonJS modules.

  - kipLibCheck:

    Skips type-checking of declaration files (.d.ts), which can speed up compilation.

  - angularCompilerOptions:

    Angular-specific compiler options.

  - enableIvy: Enables the Ivy compiler (Angular's next-generation compilation and rendering pipeline).

  - fullTemplateTypeCheck: Enables strict type-checking in templates.

  - strictInjectionParameters: Ensures that injection parameters are type-checked.
* Multiple tsconfig.json Files in Angular:
  In an Angular workspace, you may see multiple tsconfig.json files:

    Root tsconfig.json:

    The main configuration file for the entire workspace.

    It sets the default compiler options for all projects.

    tsconfig.app.json:

    Extends the root tsconfig.json and provides configuration specific to the application.

    tsconfig.spec.json:

    Extends the root tsconfig.json and provides configuration for running tests.

    tsconfig.lib.json:

    Extends the root tsconfig.json and provides configuration for Angular libraries.

Example of tsconfig.app.json:
```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": ["src/main.ts"],
  "include": ["src/**/*.d.ts"]
}
```
* Importance of tsconfig.json in Angular:
  - Type Safety: Ensures that your code adheres to TypeScript's type-checking rules.

  - Compiler Configuration: Customizes how TypeScript compiles your code.

  - Angular Compatibility: Configures Angular-specific options like Ivy and template type-checking.

  - Workspace Management: Supports multiple projects and configurations in a single workspace.


# What is angular standalone vs module
Angular introduced standalone components in version 14, offering an alternative to the traditional NgModule-based architecture. And version 17 onward they made is by default. Let's compare the two:
* Angular Modules:
Structure: Organizes components, directives, pipes, and services into logical units.
  - Benefits:
    1. Code Organization: Provides clear structure for large applications.
    2. Reusability: Facilitates sharing of modules across projects.
    3. Lazy Loading: Enables efficient loading of application sections.
    4. Backward Compatibility: Works with older Angular versions.
  - Drawbacks:
    1. Boilerplate: Requires creating modules and declaring components within them.
    2. Complexity: Can be challenging to manage in large applications.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

* Angular Standalone Components:
Structure: Components are self-contained and don't require a NgModule.
  - Benefits:
    1. Simplicity: Less boilerplate code, easier to get started.
    2. Flexibility: Import only necessary dependencies directly.
  Improved Performance: Potential for smaller bundle sizes and faster startup times.
  - Drawbacks:
    1. Less Mature: Still under development, may have limitations.
    2. Not Suitable for All Cases: Large applications might still benefit from the  structure of modules.
```
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-practice';
}
===========
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
# Which one to choose?
New Projects: Angular team recommends using standalone components for all new projects.
Existing Projects: You can gradually migrate to standalone components or continue using modules, depending on your needs.
Libraries: Standalone components are ideal for creating reusable libraries.
Large Applications: If your application is complex, modules might still provide better organization and maintainability. 


# `package.json` in Angular Applications

The `package.json` file is a fundamental configuration file in an Angular application. It is used to manage the project's dependencies, scripts, and metadata. This file is essential for any Node.js or npm (Node Package Manager) project, including Angular applications.

---

## Table of Contents
1. [Purpose of `package.json`](#purpose-of-packagejson)
2. [Key Components](#key-components)
   - [Metadata](#metadata)
   - [Dependencies](#dependencies)
   - [Scripts](#scripts)
   - [Configurations](#configurations)
   - [Engines](#engines)
3. [Example `package.json`](#example-packagejson)
4. [How It Works](#how-it-works)
5. [Importance](#importance)

---

## Purpose of `package.json`
The `package.json` file serves the following purposes:
- **Dependency Management**: Lists all the npm packages required for the project.
- **Scripts**: Defines commands for building, testing, and running the application.
- **Metadata**: Provides information about the project, such as its name, version, and author.
- **Configuration**: Specifies settings for the project and npm.

---

## Key Components

### Metadata
- **`name`**: The name of the project.
- **`version`**: The current version of the project.
- **`description`**: A brief description of the project.
- **`author`**: The author of the project.
- **`license`**: The license under which the project is distributed.

### Dependencies
- **`dependencies`**: Lists all the npm packages required for the application to run.
- **`devDependencies`**: Lists the npm packages required only for development (e.g., testing libraries, build tools).

### Scripts
- **`scripts`**: Defines commands that can be executed using `npm run <script-name>`.
  - Common scripts in Angular:
    - `start` or `ng serve`: Starts the development server.
    - `build`: Builds the project for production.
    - `test`: Runs unit tests.
    - `lint`: Runs the linter to check for code quality issues.
    - `e2e`: Runs end-to-end tests.

### Configurations
- **`config`**: Allows you to set configuration parameters for npm or your scripts.

### Engines
- **`engines`**: Specifies the versions of Node.js and npm that are compatible with your project.

---

## Example `package.json`

```json
{
  "name": "my-angular-app",
  "version": "1.0.0",
  "description": "An example Angular application",
  "author": "Your Name",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^15.0.0",
    "@angular/common": "^15.0.0",
    "@angular/compiler": "^15.0.0",
    "@angular/core": "^15.0.0",
    "@angular/forms": "^15.0.0",
    "@angular/platform-browser": "^15.0.0",
    "@angular/platform-browser-dynamic": "^15.0.0",
    "@angular/router": "^15.0.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^15.0.0",
    "@angular/cli": "~15.0.0",
    "@angular/compiler-cli": "^15.0.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.8.0"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  }
}
```

---

## How It Works
- When you run `npm install`, npm reads the `package.json` file and installs all the dependencies listed under `dependencies` and `devDependencies`.
- The `scripts` section allows you to define custom commands that can be executed using `npm run <script-name>`. For example:
  - `npm run start`: Starts the development server.
  - `npm run build`: Builds the project for production.

---

## Importance
- **Dependency Management**: Ensures that all team members are using the same versions of libraries.
- **Build and Run Scripts**: Simplifies the process of building, testing, and running the application.
- **Project Configuration**: Centralizes configuration settings, making the project easier to manage and share.

---
---

# Angular 17

This document contains a complete list of **Angular interview questions and answers** tailored for the latest version of Angular (v16/v17) and beyond. It is designed to help you prepare for Angular interviews by covering **fundamental concepts, advanced topics, and best practices**.

---

## Table of Contents
1. [Angular Basics](#angular-basics)
2. [Components and Templates](#components-and-templates)
3. [Directives and Pipes](#directives-and-pipes)
4. [Services and Dependency Injection](#services-and-dependency-injection)
5. [Routing and Navigation](#routing-and-navigation)
6. [Forms](#forms)
7. [State Management](#state-management)
8. [HTTP and APIs](#http-and-apis)
9. [Angular CLI](#angular-cli)
10. [Advanced Topics](#advanced-topics)
11. [Performance Optimization](#performance-optimization)
12. [Testing](#testing)
13. [Best Practices](#best-practices)

---

## Angular Basics

### 1. What is Angular?
Angular is a **TypeScript-based open-source web application framework** developed by Google. It is used to build **dynamic, single-page applications (SPAs)** with a **component-based architecture**.

### 2. What are the key features of Angular?
- **Two-way data binding**: Synchronizes data between the model and view.
- **Dependency Injection (DI)**: Manages dependencies and services.
- **Component-based architecture**: Encourages reusability and modularity.
- **Routing**: Enables navigation between views.
- **TypeScript**: Provides static typing and advanced tooling.
- **Angular CLI**: Simplifies project setup and development.

### 3. What is the difference between AngularJS and Angular?
- **AngularJS** (1.x) is based on JavaScript and uses a **controller-based architecture**.
- **Angular** (2+) is based on TypeScript and uses a **component-based architecture**.
- Angular is faster, more modular, and has better tooling compared to AngularJS.

---

## Components and Templates

### 4. What is a Component in Angular?
A component is a **building block of an Angular application**. It consists of:
- **Template**: Defines the view (HTML).
- **Class**: Contains the logic (TypeScript).
- **Metadata**: Defined using the `@Component` decorator (e.g., selector, template, styles).

### 5. What is the difference between `ngOnInit` and `constructor`?
- **`constructor`**: Used for dependency injection and initializing class members.
- **`ngOnInit`**: A lifecycle hook used for initialization logic after Angular has set up the component.

### 6. What is Data Binding in Angular?
Data binding synchronizes data between the component and the view. Types of data binding:
- **Interpolation**: `{{ value }}`
- **Property Binding**: `[property]="value"`
- **Event Binding**: `(event)="handler()"`
- **Two-way Binding**: `[(ngModel)]="value"`

---

## Directives and Pipes

### 7. What are Directives in Angular?
Directives are used to manipulate the DOM. Types of directives:
- **Component Directives**: Components with templates.
- **Structural Directives**: Modify the DOM layout (e.g., `*ngIf`, `*ngFor`).
- **Attribute Directives**: Change the appearance or behavior of an element (e.g., `ngClass`, `ngStyle`).

### 8. What are Pipes in Angular?
Pipes are used to transform data in templates. Examples:
- `{{ value | uppercase }}`
- `{{ date | date:'shortDate' }}`
- Custom pipes can be created using the `@Pipe` decorator.

---

## Services and Dependency Injection

### 9. What is a Service in Angular?
A service is a **reusable class** that provides specific functionality (e.g., data fetching, logging). Services are injected into components using **Dependency Injection (DI)**.

### 10. What is Dependency Injection (DI)?
DI is a design pattern where dependencies are injected into a class rather than created within it. Angular's DI system provides instances of services to components.

---

## Routing and Navigation

### 11. How does Routing work in Angular?
Routing enables navigation between views. Key concepts:
- **RouterModule**: Configures routes.
- **RouterOutlet**: Placeholder for rendering routed components.
- **RouterLink**: Directive for navigation links.

Example:
```typescript
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

### 12. What is Lazy Loading in Angular?
Lazy loading loads feature modules on demand, improving performance. Example:
```typescript
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
```

---

## Forms

### 13. What are the types of Forms in Angular?
- **Template-driven Forms**: Simple forms with two-way binding (`ngModel`).
- **Reactive Forms**: Complex forms with programmatic control and validation.

### 14. How do you validate forms in Angular?
- Use built-in validators (e.g., `required`, `minLength`).
- Create custom validators for specific rules.

---

## State Management

### 15. What is State Management in Angular?
State management involves managing the state of an application (e.g., user data, UI state). Libraries like **NgRx** or **Akita** are used for advanced state management.

---

## HTTP and APIs

### 16. How do you make HTTP requests in Angular?
Use the `HttpClient` service to make HTTP requests. Example:
```typescript
this.http.get('https://api.example.com/data').subscribe(response => {
  console.log(response);
});
```

---

## Angular CLI

### 17. What is Angular CLI?
Angular CLI is a command-line tool for creating, building, and testing Angular applications. Common commands:
- `ng new`: Create a new project.
- `ng serve`: Start the development server.
- `ng build`: Build the project for production.

---

## Advanced Topics

### 18. What is Ivy in Angular?
Ivy is Angular's **next-generation compilation and rendering pipeline**. It improves performance, reduces bundle size, and enables better debugging.

### 19. What is Change Detection in Angular?
Change detection is the process of updating the view when the model changes. Angular uses **Zone.js** to detect changes.

---

## Performance Optimization

### 20. How do you optimize Angular applications?
- Use **lazy loading** for modules.
- Enable **AOT (Ahead-of-Time) compilation**.
- Use **OnPush change detection** strategy.
- Minimize DOM manipulations.

---

## Testing

### 21. How do you test Angular applications?
- Use **Jasmine** for unit testing.
- Use **Karma** as the test runner.
- Use **Protractor** for end-to-end (E2E) testing.

---

## Best Practices

### 22. What are some Angular best practices?
- Use **modular architecture**.
- Follow the **single responsibility principle**.
- Use **reactive forms** for complex forms.
- Avoid logic in templates.
- Use **trackBy** with `*ngFor` for better performance.

---
### 23. Whats the difference between **.NET Core with Angular** and **directly using the Angular JavaScript framework**
---
The difference between **.NET Core with Angular** and **directly using the Angular JavaScript framework** lies in how Angular is integrated and used in the application architecture. Below is a detailed comparison:

---

## 1. **.NET Core with Angular**
In this setup, Angular is used as the **front-end framework** within a **.NET Core application**, which acts as the back-end. This is typically done using the **ASP.NET Core Angular template** provided by Visual Studio or the .NET CLI.

### Key Features:
- **Full-stack development**: Combines Angular (front-end) with .NET Core (back-end) in a single project.
- **Integration**: Angular is served by the .NET Core application, often using the `UseSpa` middleware.
- **API Communication**: Angular communicates with the .NET Core back-end via REST APIs or SignalR for real-time communication.
- **Project Structure**:
  - Angular app resides in the `ClientApp` folder.
  - .NET Core handles routing, API endpoints, and server-side logic.

### Advantages:
- **Single Project**: Simplifies development by combining front-end and back-end in one solution.
- **Seamless Integration**: Easy to set up and deploy as a single unit.
- **Strong Typing**: Both Angular (TypeScript) and .NET Core (C#) use strong typing, reducing runtime errors.
- **Security**: .NET Core provides built-in security features like authentication and authorization.

### Disadvantages:
- **Complexity**: Managing both front-end and back-end in one project can be challenging for large teams.
- **Tight Coupling**: Changes in the back-end may require updates in the front-end, and vice versa.

### Use Case:
- Ideal for full-stack developers or teams working on small to medium-sized applications where Angular and .NET Core are the preferred technologies.

---

## 2. **Directly Using Angular (Standalone Angular Framework)**
In this setup, Angular is used as a **standalone front-end framework**, and it communicates with any back-end (e.g., .NET Core, Node.js, Java, etc.) via APIs.

### Key Features:
- **Front-end Only**: Angular is used exclusively for the client-side application.
- **Back-end Agnostic**: Angular can communicate with any back-end technology via REST APIs, GraphQL, or WebSockets.
- **Project Structure**:
  - Angular app is a separate project.
  - Back-end is a separate project (e.g., .NET Core, Node.js, etc.).

### Advantages:
- **Separation of Concerns**: Clear separation between front-end and back-end.
- **Flexibility**: Can integrate with any back-end technology.
- **Scalability**: Easier to scale front-end and back-end independently.
- **Modern Development**: Aligns with modern development practices like microservices and API-driven architectures.

### Disadvantages:
- **Multiple Projects**: Requires managing separate projects for front-end and back-end.
- **Deployment Complexity**: Requires separate deployment pipelines for front-end and back-end.
- **CORS Issues**: Cross-Origin Resource Sharing (CORS) may need to be configured for API communication.

### Use Case:
- Ideal for large-scale applications where front-end and back-end are developed by separate teams or when the back-end technology is not fixed.

---

## Key Differences

| Feature                     | .NET Core with Angular                          | Directly Using Angular                        |
|-----------------------------|------------------------------------------------|-----------------------------------------------|
| **Architecture**            | Full-stack (Angular + .NET Core in one project)| Front-end only (Angular as standalone)        |
| **Back-end**                | .NET Core                                      | Any back-end (e.g., .NET Core, Node.js, Java) |
| **Project Structure**       | Single project with `ClientApp` folder         | Separate projects for front-end and back-end  |
| **Integration**             | Tightly integrated                             | Loosely coupled via APIs                      |
| **Deployment**              | Single deployment                              | Separate deployments for front-end and back-end |
| **Flexibility**             | Limited to .NET Core back-end                  | Can integrate with any back-end               |
| **Use Case**                | Small to medium-sized applications             | Large-scale or microservices-based applications |

---

## When to Use Which?

### Use **.NET Core with Angular** if:
- You are a full-stack developer or team comfortable with both Angular and .NET Core.
- You want a tightly integrated solution for small to medium-sized applications.
- You prefer a single project structure for simplicity.

### Use **Standalone Angular** if:
- You are building a large-scale application with separate front-end and back-end teams.
- You want flexibility to switch or integrate with different back-end technologies.
- You prefer a modern, API-driven architecture.

---

## Example Scenarios

### 1. **.NET Core with Angular**
- A small e-commerce site where the front-end (Angular) and back-end (.NET Core) are tightly integrated.
- A corporate intranet application where both front-end and back-end are managed by the same team.

### 2. **Standalone Angular**
- A large-scale SaaS application where the front-end (Angular) communicates with multiple microservices (e.g., .NET Core, Node.js, Python).
- A mobile app with an Angular-based web portal and a separate back-end API.

---

## Conclusion
- **.NET Core with Angular** is ideal for tightly integrated, full-stack applications.
- **Standalone Angular** is better for large-scale, flexible, and decoupled architectures.
---
### 24. Difference between `app.config.ts` and `app.module.ts` 
 In Angular, `app.config.ts` and `app.module.ts` serve different purposes and are used at different stages of the application lifecycle. Below is a detailed explanation of their roles and differences:

---

## 1. **`app.module.ts`**
The `app.module.ts` file is a **core file** in Angular applications. It defines the **root module** of the application using the `@NgModule` decorator.

### Purpose:
- **Bootstrapping**: It bootstraps the root component (`AppComponent`) of the application.
- **Declarations**: It declares all the components, directives, and pipes that belong to the module.
- **Imports**: It imports other Angular modules (e.g., `BrowserModule`, `FormsModule`, `HttpClientModule`) or feature modules.
- **Providers**: It registers services and dependencies that are available throughout the module.
- **Exports**: It exports components, directives, or pipes to make them available to other modules.

### Example:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

## 2. **`app.config.ts`**
The `app.config.ts` file is **not a standard Angular file** but can be used to define **application-wide configuration settings**. It is typically used to store constants, environment variables, or configuration objects that are used throughout the application.

### Purpose:
- **Configuration**: It centralizes configuration settings such as API endpoints, feature flags, or third-party library configurations.
- **Reusability**: It makes it easy to reuse configuration values across the application.
- **Environment-specific settings**: It can be used to define different configurations for development, staging, and production environments.

### Example:
```typescript
export const AppConfig = {
  apiUrl: 'https://api.example.com',
  featureFlags: {
    enableNewFeature: true,
  },
  maxRetries: 3,
};
```

---

## Key Differences

| Feature                  | `app.module.ts`                              | `app.config.ts`                              |
|--------------------------|----------------------------------------------|---------------------------------------------|
| **Purpose**              | Defines the root module of the application.  | Stores application-wide configuration.      |
| **Angular Standard**     | Yes (required for Angular applications).     | No (custom file, not part of Angular core). |
| **Decorator**            | Uses `@NgModule`.                           | No decorator (plain TypeScript file).       |
| **Usage**                | Bootstraps the app, declares components, etc.| Stores constants, environment variables, etc.|
| **Example Content**      | Components, modules, providers, etc.        | API URLs, feature flags, retry logic, etc.  |

---

## How They Work Together

### Example Workflow:
1. **Configuration in `app.config.ts`**:
   - Define application-wide settings.
   ```typescript
   export const AppConfig = {
     apiUrl: 'https://api.example.com',
     maxRetries: 3,
   };
   ```

2. **Usage in `app.module.ts`**:
   - Import the configuration and use it in the module.
   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { HttpClientModule } from '@angular/common/http';
   import { AppComponent } from './app.component';
   import { AppConfig } from './app.config';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, HttpClientModule],
     providers: [
       { provide: 'APP_CONFIG', useValue: AppConfig }, // Provide config
     ],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

3. **Usage in a Service**:
   - Inject the configuration into a service.
   ```typescript
   import { Injectable, Inject } from '@angular/core';
   import { AppConfig } from './app.config';

   @Injectable({
     providedIn: 'root',
   })
   export class ApiService {
     constructor(@Inject('APP_CONFIG') private config: typeof AppConfig) {}

     fetchData() {
       const url = this.config.apiUrl + '/data';
       // Make HTTP request
     }
   }
   ```

---

## When to Use Which?

### Use `app.module.ts` for:
- Defining the root module of the application.
- Declaring components, directives, and pipes.
- Importing other modules.
- Providing services and dependencies.

### Use `app.config.ts` for:
- Centralizing application-wide configuration settings.
- Storing environment-specific variables.
- Defining constants or feature flags.

---

## Conclusion
- **`app.module.ts`** is a **core Angular file** used to define the root module of the application.
- **`app.config.ts`** is a **custom file** used to store application-wide configuration settings.
---

### 25. Explain typical angular component files?
In Angular, a **component** typically consists of **four main files**. These files work together to define the component's structure, behavior, and styling. Below is a breakdown of the files and their purposes:

---

## 1. **Component Class File (`.ts`)**
- **Purpose**: Contains the TypeScript logic for the component.
- **File Name**: `<component-name>.component.ts`
- **Contents**:
  - The `@Component` decorator to define the component metadata (e.g., selector, template, styles).
  - The component class with properties and methods.

### Example:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  title = 'Example Component';
}
```

---

## 2. **Template File (`.html`)**
- **Purpose**: Defines the HTML structure (view) of the component.
- **File Name**: `<component-name>.component.html`
- **Contents**:
  - HTML markup with Angular-specific syntax (e.g., interpolation, directives, bindings).

### Example:
```html
<h1>{{ title }}</h1>
<p>This is an example component.</p>
```

---

## 3. **Styles File (`.css` or `.scss` or `.less`)**
- **Purpose**: Defines the component-specific styles.
- **File Name**: `<component-name>.component.css` (or `.scss`, `.less`, etc.).
- **Contents**:
  - CSS, SCSS, or LESS styles that are scoped to the component.

### Example:
```css
h1 {
  color: blue;
}
```

---

## 4. **Test File (`.spec.ts`)**
- **Purpose**: Contains unit tests for the component.
- **File Name**: `<component-name>.component.spec.ts`
- **Contents**:
  - Test cases written using Jasmine and Angular's testing utilities.

### Example:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
    });
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## Optional Files

### 5. **Inline Template and Styles**
Instead of separate `.html` and `.css` files, you can define the template and styles **inline** in the component class file using the `template` and `styles` properties of the `@Component` decorator.

#### Example:
```typescript
@Component({
  selector: 'app-example',
  template: `<h1>{{ title }}</h1>`,
  styles: [`h1 { color: blue; }`],
})
export class ExampleComponent {
  title = 'Example Component';
}
```

### 6. **Additional Files**
- **`.module.ts`**: If the component is part of a feature module, there may be a module file.
- **`.service.ts`**: If the component uses a service, there may be a separate service file.

---

## Summary of Component Files

| File Type                  | File Name                          | Purpose                                      |
|----------------------------|------------------------------------|----------------------------------------------|
| **Component Class**        | `<component-name>.component.ts`    | Contains the component logic and metadata.   |
| **Template**               | `<component-name>.component.html`  | Defines the HTML structure (view).           |
| **Styles**                 | `<component-name>.component.css`   | Defines the component-specific styles.       |
| **Test**                   | `<component-name>.component.spec.ts` | Contains unit tests for the component.       |

---

## Folder Structure Example
A typical component folder structure looks like this:
```
src/app/example/
├── example.component.ts
├── example.component.html
├── example.component.css
└── example.component.spec.ts
```

---

## Conclusion
An Angular component typically consists of **four files**:
1. **Component Class File (`.ts`)**
2. **Template File (`.html`)**
3. **Styles File (`.css` or `.scss`)**
4. **Test File (`.spec.ts`)**

These files work together to define the component's structure, behavior, and styling. Optionally, you can use **inline templates and styles** or add additional files like services or modules. Let me know if you need further clarification! 🚀

### 26. The app.module.ts before Angular 17 and app.config.ts in Angular 17 on wards
Before Angular 17, Angular applications were based on a **module-based architecture**. This approach relied on `NgModule` to define and configure the application. However, from Angular 17 onward, Angular introduced a **new standalone API**, which eliminates the need for `NgModule` and simplifies the app structure.

### **Changes from Angular 17 onwards**
With the standalone API, Angular applications no longer require `app.module.ts`. Instead, they use a `app.config.ts` file for global configurations.

### **Key Differences**
| Feature | Angular 16 and Before (`app.module.ts`) | Angular 17+ (`app.config.ts`) |
|---------|----------------------------------------|--------------------------------|
| **Configuration** | Uses `NgModule` (`@NgModule` decorator) to configure dependencies, providers, and declarations. | Uses `provide*` functions (`provideRouter`, `provideHttpClient`, etc.) in `app.config.ts`. |
| **Bootstrap** | Relies on `platformBrowserDynamic().bootstrapModule(AppModule)`. | Uses `bootstrapApplication(AppComponent, { providers: [...] })`. |
| **Code Structure** | Requires multiple modules (`AppModule`, `FeatureModule`). | Uses a more functional, modular approach with standalone components. |
| **Standalone Components** | Not supported; components must be declared in a module. | Fully supported, making modules optional. |

### **Example Code Differences**
#### **Before Angular 17 (`app.module.ts`)**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
And the `main.ts` file:
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

---

#### **Angular 17+ (`app.config.ts`)**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([])]
};
```
And `main.ts`:
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, appConfig);
```

### **Why the Change?**
1. **Simplification** – Reduces the need for unnecessary modules.
2. **Performance** – Standalone APIs are optimized for tree-shaking, making apps smaller.
3. **Better Developer Experience** – Less boilerplate and easier-to-understand architecture.
4. **Modularity** – Encourages a more component-driven design.


The transition from **`app.module.ts`** to **`app.config.ts`** in Angular 17 onward reflects a significant shift in Angular's architecture and design philosophy. This change is part of Angular's ongoing efforts to simplify development, improve performance, and align with modern web development practices. Below is a detailed explanation of why this change occurred and what it means for Angular developers.

---

## 1. **The Role of `app.module.ts` in Angular (Before Angular 17)**
Before Angular 17, the `app.module.ts` file was a **core part of every Angular application**. It served as the **root module** of the application and was responsible for:
- **Bootstrapping**: Starting the application by bootstrapping the root component (`AppComponent`).
- **Declarations**: Registering components, directives, and pipes.
- **Imports**: Importing other Angular modules (e.g., `BrowserModule`, `HttpClientModule`).
- **Providers**: Registering services and dependencies for dependency injection.

### Example of `app.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Why `app.module.ts` Was Used:
- **Modularity**: Angular applications were built around the concept of modules (`NgModule`), which allowed for better organization and lazy loading.
- **Dependency Injection**: Services and dependencies were registered in the `providers` array of the module.
- **Bootstrapping**: The `bootstrap` array specified the root component to start the application.

---

## 2. **The Shift to `app.config.ts` in Angular 17 Onward**
With Angular 17 and later versions, Angular introduced a **simplified architecture** that reduces the reliance on `NgModule` and shifts toward a **standalone components** approach. The `app.config.ts` file is part of this new architecture and serves a different purpose.

### Key Changes:
1. **Standalone Components**:
   - Angular 17 introduced **standalone components**, which do not require an `NgModule` to function.
   - Components, directives, and pipes can now be declared as standalone, reducing the need for `app.module.ts`.

2. **Simplified Bootstrapping**:
   - The `bootstrapApplication` function is used to start the application directly, without requiring a root module.

3. **Configuration Centralization**:
   - The `app.config.ts` file is used to centralize **application-wide configuration settings**, such as:
     - Router configuration.
     - Dependency injection providers.
     - Environment-specific settings.

### Example of `app.config.ts`:
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Router configuration
    // Other providers (e.g., HTTP, forms, etc.)
  ],
};
```

### Example of Bootstrapping in `main.ts`:
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

---

## 3. **Why the Change?**
The shift from `app.module.ts` to `app.config.ts` was driven by several factors:

### a. **Simplification**:
- **Reduced Boilerplate**: The `NgModule` system introduced a lot of boilerplate code. By moving to standalone components and `app.config.ts`, Angular reduces complexity and makes the codebase cleaner.
- **Easier Learning Curve**: New developers find it easier to start with standalone components and a centralized configuration file.

### b. **Performance Improvements**:
- **Tree Shaking**: Standalone components and the new configuration system improve tree-shaking capabilities, resulting in smaller bundle sizes.
- **Lazy Loading**: The new architecture makes it easier to lazy load components and routes without relying on `NgModule`.

### c. **Modern Development Practices**:
- **Micro Frontends**: The standalone components approach aligns better with modern architectures like micro frontends.
- **API-Driven Development**: The `app.config.ts` file centralizes configuration, making it easier to manage environment-specific settings and third-party integrations.

### d. **Future-Proofing**:
- Angular is evolving to support **web standards** and **modern frameworks**. The shift away from `NgModule` is part of this evolution.

---

## 4. **Key Differences Between `app.module.ts` and `app.config.ts`**

| Feature                  | `app.module.ts` (Before Angular 17)          | `app.config.ts` (Angular 17 Onward)          |
|--------------------------|----------------------------------------------|---------------------------------------------|
| **Purpose**              | Defines the root module of the application.  | Centralizes application-wide configuration. |
| **Bootstrapping**        | Uses `NgModule` to bootstrap the app.        | Uses `bootstrapApplication` to bootstrap.   |
| **Dependency Injection** | Providers are registered in `providers`.     | Providers are configured in `appConfig`.    |
| **Component Registration** | Components are declared in `declarations`. | Components are standalone or configured in routes. |
| **File Type**            | Required for all Angular apps.               | Optional, used for configuration.           |

---

## 5. **How to Migrate from `app.module.ts` to `app.config.ts`**
If you're upgrading an existing Angular application to Angular 17 or later, follow these steps:
1. **Convert Components to Standalone**:
   - Use the `standalone: true` flag in your components.
   - Remove components from `declarations` in `app.module.ts`.

2. **Update Bootstrapping**:
   - Replace `platformBrowserDynamic().bootstrapModule(AppModule)` with `bootstrapApplication(AppComponent, appConfig)`.

3. **Move Configuration to `app.config.ts`**:
   - Centralize router configuration, providers, and other settings in `app.config.ts`.

4. **Remove `app.module.ts`**:
   - Once all components are standalone and configuration is moved, delete `app.module.ts`.

---

## 6. **Conclusion**
The introduction of `app.config.ts` in Angular 17 and later versions marks a significant shift in Angular's architecture. It simplifies development, improves performance, and aligns Angular with modern web development practices. By moving away from `NgModule` and embracing standalone components, Angular makes it easier to build scalable and maintainable applications.


Angular 17+ removes `app.module.ts` and introduces `app.config.ts` to streamline application setup. This shift aligns Angular with modern frontend trends, making apps more efficient and developer-friendly.

---

### 27. Explain the use of app.rountes.ts file
In Angular, the `app.routes.ts` file is used to **define and configure the routing** for your application. It centralizes all the route definitions, making it easier to manage navigation between different views or components. This file is particularly useful in applications with multiple routes and complex navigation structures.

---

## **Purpose of `app.routes.ts`**
The `app.routes.ts` file serves the following purposes:
1. **Route Configuration**:
   - Defines the mapping between URLs (paths) and the components that should be displayed when those URLs are accessed.
2. **Lazy Loading**:
   - Enables lazy loading of feature modules, improving performance by loading modules only when needed.
3. **Route Guards**:
   - Allows you to protect routes using guards (e.g., authentication guards).
4. **Centralized Routing**:
   - Keeps all route definitions in one place, making the application easier to maintain and scale.

---

## **Key Features of `app.routes.ts`**
1. **Route Definitions**:
   - Each route maps a URL path to a component.
   - Example:
     ```typescript
     const routes: Routes = [
       { path: 'home', component: HomeComponent },
       { path: 'about', component: AboutComponent },
     ];
     ```

2. **Lazy Loading**:
   - Loads feature modules on demand to improve performance.
   - Example:
     ```typescript
     const routes: Routes = [
       { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     ];
     ```

3. **Route Guards**:
   - Protects routes based on conditions (e.g., user authentication).
   - Example:
     ```typescript
     const routes: Routes = [
       { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
     ];
     ```

4. **Wildcard and Default Routes**:
   - Handles unknown paths (404 pages) and default routes.
   - Example:
     ```typescript
     const routes: Routes = [
       { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
       { path: '**', component: PageNotFoundComponent }, // Wildcard route
     ];
     ```

---

## **Example of `app.routes.ts`**
Here’s an example of what an `app.routes.ts` file might look like:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy loading
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent }, // Wildcard route (404)
];
```

---

## **How to Use `app.routes.ts`**
1. **Import Routes**:
   - Import the `Routes` type from `@angular/router`.

2. **Define Routes**:
   - Create an array of route definitions using the `Routes` type.

3. **Register Routes**:
   - Use `provideRouter` (Angular 17+) or `RouterModule.forRoot` (Angular 16 and below) to register the routes in the application.

### Example (Angular 17+):
In `app.config.ts`:
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

In `main.ts`:
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

### Example (Angular 16 and Below):
In `app.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModule {}
```

---

## **Benefits of Using `app.routes.ts`**
1. **Separation of Concerns**:
   - Keeps route definitions separate from the main module or configuration file.
2. **Reusability**:
   - Routes can be reused across different parts of the application.
3. **Scalability**:
   - Makes it easier to add new routes as the application grows.
4. **Maintainability**:
   - Centralized routing makes the application easier to maintain and debug.

---

## **Common Use Cases**
1. **Basic Navigation**:
   - Define routes for different views (e.g., home, about, contact).
2. **Lazy Loading**:
   - Load feature modules (e.g., admin, user) only when needed.
3. **Protected Routes**:
   - Use guards to restrict access to certain routes (e.g., authenticated users only).
4. **Error Handling**:
   - Use wildcard routes to handle unknown paths (404 pages).

---

## **Conclusion**
The `app.routes.ts` file is a **centralized and organized way to manage routing** in Angular applications. It simplifies navigation, enables lazy loading, and supports route guards for secure access. By using this file, you can build scalable and maintainable Angular applications with ease.

---
### 28. How to achieve Lazy load on angular 17 onwards?
In Angular 17 and later versions, **lazy loading** is achieved using **standalone components** and the **`loadComponent`** function. This approach simplifies lazy loading by eliminating the need for `NgModule` and allows you to load components on demand, improving performance.

Below is a step-by-step guide to achieving lazy loading of components in Angular 17+:

---

## **Steps to Lazy Load a Component in Angular 17+**

### 1. **Create a Standalone Component**
Ensure the component you want to lazy load is **standalone**. A standalone component does not belong to an `NgModule` and is declared with the `standalone: true` flag.

#### Example: `lazy.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  standalone: true,
  template: `<h1>Lazy Loaded Component</h1>`,
})
export class LazyComponent {}
```

---

### 2. **Define Routes with `loadComponent`**
In your `app.routes.ts` file, use the `loadComponent` function to lazy load the standalone component.

#### Example: `app.routes.ts`
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () =>
      import('./lazy/lazy.component').then((m) => m.LazyComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route
];
```

---

### 3. **Register Routes in `app.config.ts`**
Use the `provideRouter` function to register the routes in the application configuration.

#### Example: `app.config.ts`
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

---

### 4. **Bootstrap the Application**
Update the `main.ts` file to bootstrap the application using the `bootstrapApplication` function.

#### Example: `main.ts`
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

---

### 5. **Add a Router Outlet**
In your root component (`AppComponent`), add a `<router-outlet>` to render the lazy-loaded component.

#### Example: `app.component.html`
```html
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/lazy">Lazy</a>
</nav>
<router-outlet></router-outlet>
```

---

### 6. **Run the Application**
When you navigate to the `/lazy` route, Angular will lazy load the `LazyComponent` only when needed.

---

## **How It Works**
1. **`loadComponent`**:
   - The `loadComponent` function dynamically imports the component using the `import()` syntax.
   - This ensures the component is loaded only when the route is accessed.

2. **Standalone Components**:
   - Standalone components do not require an `NgModule`, making lazy loading simpler and more efficient.

3. **Router Configuration**:
   - The `provideRouter` function registers the routes and enables lazy loading.

---

## **Benefits of Lazy Loading in Angular 17+**
1. **Improved Performance**:
   - Reduces the initial bundle size by loading components only when needed.
2. **Simplified Code**:
   - No need for `NgModule`, making the codebase cleaner and easier to maintain.
3. **Better User Experience**:
   - Faster initial load times and smoother navigation.

---

## **Example Project Structure**
```
src/app/
├── app.component.ts
├── app.component.html
├── app.routes.ts
├── app.config.ts
├── main.ts
└── lazy/
    ├── lazy.component.ts
    └── lazy.component.html
```

---

## **Conclusion**
In Angular 17+, lazy loading components is straightforward and efficient using **standalone components** and the **`loadComponent`** function. This approach eliminates the need for `NgModule` and improves application performance by loading components on demand.

---

### 29. Different types of decorators in Angular

In Angular, **decorators** are special functions that modify or enhance classes, methods, properties, or parameters. They are used to add metadata to these elements, which Angular uses to configure and manage the application. Decorators are a key part of Angular's architecture and are heavily used in components, services, directives, and more.

---

## **What is a Decorator?**
A decorator is a **TypeScript feature** that allows you to annotate or modify classes, methods, properties, or parameters. In Angular, decorators are prefixed with the `@` symbol and are used to define metadata for Angular's compiler and runtime.

---

## **Types of Decorators in Angular**
Angular provides several built-in decorators, each serving a specific purpose. Below are the most commonly used decorators:

---

### 1. **Class Decorators**
Class decorators are applied to classes to define their behavior and metadata.

#### a. **`@Component`**
- Used to define an Angular component.
- Metadata includes:
  - `selector`: The custom HTML tag for the component.
  - `template` or `templateUrl`: The component's view.
  - `styles` or `styleUrls`: The component's styles.
  - `standalone`: Marks the component as standalone (Angular 17+).

#### Example:
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
```

#### b. **`@NgModule`**
- Used to define an Angular module.
- Metadata includes:
  - `declarations`: Components, directives, and pipes belonging to the module.
  - `imports`: Other modules to import.
  - `providers`: Services to provide.
  - `bootstrap`: The root component to bootstrap.

#### Example:
```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### c. **`@Injectable`**
- Used to define a service that can be injected into other components or services.
- Metadata includes:
  - `providedIn`: Specifies where the service should be provided (e.g., `root`).

#### Example:
```typescript
@Injectable({
  providedIn: 'root',
})
export class DataService {}
```

#### d. **`@Directive`**
- Used to define an Angular directive.
- Metadata includes:
  - `selector`: The custom attribute or element for the directive.

#### Example:
```typescript
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {}
```

#### e. **`@Pipe`**
- Used to define a custom pipe.
- Metadata includes:
  - `name`: The name of the pipe.

#### Example:
```typescript
@Pipe({
  name: 'customPipe',
})
export class CustomPipe {}
```

---

### 2. **Property Decorators**
Property decorators are applied to class properties.

#### a. **`@Input`**
- Used to define an input property for a component or directive.
- Allows data to be passed from a parent component to a child component.

#### Example:
```typescript
@Input() message: string;
```

#### b. **`@Output`**
- Used to define an output property for a component or directive.
- Emits events to the parent component.

#### Example:
```typescript
@Output() notify = new EventEmitter<string>();
```

#### c. **`@ViewChild`**
- Used to access a child component, directive, or DOM element from the parent component.

#### Example:
```typescript
@ViewChild('myElement') myElement: ElementRef;
```

#### d. **`@ContentChild`**
- Used to access content projected into a component (via `<ng-content>`).

#### Example:
```typescript
@ContentChild('projectedContent') projectedContent: ElementRef;
```

---

### 3. **Method Decorators**
Method decorators are applied to class methods.

#### a. **`@HostListener`**
- Used to listen to DOM events on the host element of a directive or component.

#### Example:
```typescript
@HostListener('click', ['$event'])
onClick(event: Event) {
  console.log('Clicked!', event);
}
```

---

### 4. **Parameter Decorators**
Parameter decorators are applied to constructor parameters.

#### a. **`@Inject`**
- Used to specify a custom injection token for dependency injection.

#### Example:
```typescript
constructor(@Inject('API_URL') private apiUrl: string) {}
```

#### b. **`@Optional`**
- Used to mark a dependency as optional. If the dependency is not found, Angular will inject `null`.

#### Example:
```typescript
constructor(@Optional() private logger: LoggerService) {}
```

#### c. **`@Self`**
- Used to restrict dependency injection to the current component or directive.

#### Example:
```typescript
constructor(@Self() private logger: LoggerService) {}
```

#### d. **`@SkipSelf`**
- Used to skip the current component or directive and look for the dependency in a parent injector.

#### Example:
```typescript
constructor(@SkipSelf() private logger: LoggerService) {}
```

#### e. **`@Host`**
- Used to restrict dependency injection to the current host element.

#### Example:
```typescript
constructor(@Host() private logger: LoggerService) {}
```

---

## **Custom Decorators**
You can also create your own custom decorators in TypeScript. These are not specific to Angular but can be used in Angular applications.

#### Example: Custom Method Decorator
```typescript
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args:`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class MyClass {
  @LogMethod
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}
```

---

## **Summary of Angular Decorators**

| Type              | Decorator         | Purpose                                                                 |
|-------------------|-------------------|-------------------------------------------------------------------------|
| **Class**         | `@Component`      | Defines an Angular component.                                           |
|                   | `@NgModule`       | Defines an Angular module.                                              |
|                   | `@Injectable`     | Defines an injectable service.                                          |
|                   | `@Directive`      | Defines an Angular directive.                                           |
|                   | `@Pipe`           | Defines a custom pipe.                                                  |
| **Property**      | `@Input`          | Defines an input property for a component or directive.                 |
|                   | `@Output`         | Defines an output property for a component or directive.                |
|                   | `@ViewChild`      | Accesses a child component, directive, or DOM element.                 |
|                   | `@ContentChild`   | Accesses projected content.                                             |
| **Method**        | `@HostListener`   | Listens to DOM events on the host element.                              |
| **Parameter**     | `@Inject`         | Specifies a custom injection token.                                     |
|                   | `@Optional`       | Marks a dependency as optional.                                         |
|                   | `@Self`           | Restricts dependency injection to the current component or directive.   |
|                   | `@SkipSelf`       | Skips the current component or directive for dependency injection.      |
|                   | `@Host`           | Restricts dependency injection to the current host element.             |

---

## **Conclusion**
Decorators are a powerful feature in Angular that allow you to add metadata and behavior to classes, properties, methods, and parameters. They are essential for defining components, services, directives, and more. By understanding the different types of decorators and their uses, you can effectively build and manage Angular applications.

---

### 30. Different datatypes in typescripts
TypeScript is a **superset of JavaScript** that adds **static typing** to the language. This means you can explicitly define the types of variables, function parameters, and return values. TypeScript provides several built-in data types, as well as support for custom types. Below is a comprehensive list of **data types in TypeScript**:

---

## **1. Basic (Primitive) Data Types**
These are the most fundamental data types in TypeScript.

### a. **`number`**
- Represents both integer and floating-point numbers.
- Example:
  ```typescript
  let age: number = 25;
  let price: number = 99.99;
  ```

### b. **`string`**
- Represents a sequence of characters (text).
- Example:
  ```typescript
  let name: string = "John Doe";
  ```

### c. **`boolean`**
- Represents a true/false value.
- Example:
  ```typescript
  let isActive: boolean = true;
  ```

### d. **`null`**
- Represents an intentional absence of any object value.
- Example:
  ```typescript
  let data: null = null;
  ```

### e. **`undefined`**
- Represents a variable that has not been assigned a value.
- Example:
  ```typescript
  let value: undefined = undefined;
  ```

### f. **`symbol`**
- Represents a unique and immutable value (introduced in ES6).
- Example:
  ```typescript
  let id: symbol = Symbol("id");
  ```

---

## **2. Special Data Types**
These types are specific to TypeScript and provide additional functionality.

### a. **`any`**
- Represents a dynamic type that can hold any value (disables type checking).
- Example:
  ```typescript
  let data: any = "Hello";
  data = 42; // No error
  ```

### b. **`unknown`**
- Similar to `any`, but safer. Requires type checking before use.
- Example:
  ```typescript
  let data: unknown = "Hello";
  if (typeof data === "string") {
    console.log(data.toUpperCase()); // Safe to use
  }
  ```

### c. **`void`**
- Represents the absence of a value (commonly used as the return type of functions that do not return a value).
- Example:
  ```typescript
  function logMessage(): void {
    console.log("This is a message");
  }
  ```

### d. **`never`**
- Represents a value that never occurs (e.g., a function that throws an error or an infinite loop).
- Example:
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

---

## **3. Object and Array Types**
These types are used to work with complex data structures.

### a. **`object`**
- Represents a non-primitive type (anything that is not `number`, `string`, `boolean`, etc.).
- Example:
  ```typescript
  let user: object = { name: "John", age: 25 };
  ```

### b. **Array**
- Represents a collection of elements of the same type.
- Example:
  ```typescript
  let numbers: number[] = [1, 2, 3];
  let names: Array<string> = ["John", "Jane"];
  ```

### c. **Tuple**
- Represents an array with a fixed number of elements, where each element has a specific type.
- Example:
  ```typescript
  let user: [string, number] = ["John", 25];
  ```

---

## **4. Function Types**
These types are used to define the structure of functions.

### a. **Function**
- Represents a function type.
- Example:
  ```typescript
  let greet: (name: string) => string;
  greet = function (name: string): string {
    return `Hello, ${name}`;
  };
  ```

### b. **Optional and Default Parameters**
- Parameters can be optional or have default values.
- Example:
  ```typescript
  function greet(name: string, age?: number): string {
    return `Hello, ${name}`;
  }
  ```

---

## **5. Custom Types**
TypeScript allows you to define custom types using `type`, `interface`, and `class`.

### a. **`type`**
- Defines a custom type alias.
- Example:
  ```typescript
  type User = {
    name: string;
    age: number;
  };

  let user: User = { name: "John", age: 25 };
  ```

### b. **`interface`**
- Defines a contract for the structure of an object.
- Example:
  ```typescript
  interface User {
    name: string;
    age: number;
  }

  let user: User = { name: "John", age: 25 };
  ```

### c. **`class`**
- Defines a blueprint for creating objects.
- Example:
  ```typescript
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  let user = new User("John", 25);
  ```

---

## **6. Union and Intersection Types**
These types allow you to combine multiple types.

### a. **Union Types**
- Represents a value that can be one of several types.
- Example:
  ```typescript
  let value: string | number;
  value = "Hello";
  value = 42;
  ```

### b. **Intersection Types**
- Combines multiple types into one.
- Example:
  ```typescript
  type Person = { name: string };
  type Employee = { id: number };
  type EmployeeDetails = Person & Employee;

  let employee: EmployeeDetails = { name: "John", id: 1 };
  ```

---

## **7. Literal Types**
These types allow you to specify exact values.

### a. **String Literal Types**
- Represents a specific string value.
- Example:
  ```typescript
  let status: "active" | "inactive";
  status = "active";
  ```

### b. **Numeric Literal Types**
- Represents a specific numeric value.
- Example:
  ```typescript
  let direction: 1 | 2 | 3 | 4;
  direction = 1;
  ```

---

## **8. Advanced Types**
These types provide additional functionality for complex scenarios.

### a. **`enum`**
- Defines a set of named constants.
- Example:
  ```typescript
  enum Status {
    Active,
    Inactive,
    Pending,
  }

  let userStatus: Status = Status.Active;
  ```

### b. **`keyof`**
- Represents the keys of an object type.
- Example:
  ```typescript
  type User = { name: string; age: number };
  type UserKeys = keyof User; // "name" | "age"
  ```

### c. **`typeof`**
- Represents the type of a variable.
- Example:
  ```typescript
  let name = "John";
  type NameType = typeof name; // string
  ```

---

## **Summary of TypeScript Data Types**

| Category          | Type              | Description                                                                 |
|-------------------|-------------------|-----------------------------------------------------------------------------|
| **Primitive**     | `number`          | Integer or floating-point numbers.                                          |
|                   | `string`          | Text data.                                                                  |
|                   | `boolean`         | True/false values.                                                          |
|                   | `null`            | Intentional absence of a value.                                             |
|                   | `undefined`       | Unassigned value.                                                           |
|                   | `symbol`          | Unique and immutable value.                                                 |
| **Special**       | `any`             | Dynamic type (disables type checking).                                      |
|                   | `unknown`         | Safer alternative to `any`.                                                 |
|                   | `void`            | Absence of a value (e.g., function return type).                            |
|                   | `never`           | Represents a value that never occurs.                                       |
| **Object/Array**  | `object`          | Non-primitive type.                                                         |
|                   | `Array`           | Collection of elements of the same type.                                    |
|                   | `Tuple`           | Fixed-length array with specific types.                                     |
| **Function**      | `Function`        | Represents a function type.                                                 |
| **Custom**        | `type`            | Defines a custom type alias.                                                |
|                   | `interface`       | Defines a contract for object structure.                                    |
|                   | `class`           | Blueprint for creating objects.                                             |
| **Union/Intersection** | `Union`      | Combines multiple types (e.g., `string | number`).                          |
|                   | `Intersection`    | Combines multiple types into one (e.g., `Person & Employee`).               |
| **Literal**       | `String Literal`  | Specific string value (e.g., `"active" | "inactive"`).                     |
|                   | `Numeric Literal` | Specific numeric value (e.g., `1 | 2 | 3`).                              |
| **Advanced**      | `enum`            | Set of named constants.                                                     |
|                   | `keyof`           | Keys of an object type.                                                     |
|                   | `typeof`          | Type of a variable.                                                         |

---

## **Conclusion**
TypeScript's rich type system enhances JavaScript by providing **static typing**, which helps catch errors at compile time and improves code quality. By understanding and using these data types effectively, you can write more robust and maintainable code.

### 31. Different Types of functions in typescript

In TypeScript, **functions** are a fundamental building block of the language. They allow you to encapsulate reusable blocks of code and add type safety to parameters and return values. TypeScript enhances JavaScript functions by adding **type annotations**, **optional and default parameters**, **rest parameters**, and more.

Below is a comprehensive guide to **functions in TypeScript**:

---

## **1. Basic Function Syntax**
A function in TypeScript can be defined using the `function` keyword or as an arrow function.

### a. **Named Function**
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### b. **Arrow Function**
```typescript
const greet = (name: string): string => {
  return `Hello, ${name}`;
};
```

---

## **2. Function Parameters**
TypeScript allows you to specify the types of function parameters.

### a. **Typed Parameters**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### b. **Optional Parameters**
Use `?` to make a parameter optional.
```typescript
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}`;
}
```

### c. **Default Parameters**
Provide default values for parameters.
```typescript
function greet(name: string, age: number = 25): string {
  return `Hello, ${name}. You are ${age} years old.`;
}
```

### d. **Rest Parameters**
Use the rest parameter (`...`) to accept a variable number of arguments.
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
```

---

## **3. Function Return Types**
TypeScript allows you to specify the return type of a function.

### a. **Explicit Return Type**
```typescript
function multiply(a: number, b: number): number {
  return a * b;
}
```

### b. **Void Return Type**
For functions that do not return a value.
```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

### c. **Never Return Type**
For functions that never return (e.g., throw an error or have an infinite loop).
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## **4. Function Overloading**
TypeScript supports function overloading, where you can define multiple function signatures for the same function.

### Example:
```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("Hello, ", "World")); // "Hello, World"
```

---

## **5. Arrow Functions**
Arrow functions provide a concise syntax for writing functions and automatically bind `this` to the surrounding context.

### Example:
```typescript
const greet = (name: string): string => `Hello, ${name}`;
```

---

## **6. Callback Functions**
Functions can be passed as arguments to other functions.

### Example:
```typescript
function fetchData(callback: (data: string) => void): void {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data fetched"
});
```

---

## **7. Higher-Order Functions**
Functions that take other functions as arguments or return functions.

### Example:
```typescript
function createMultiplier(multiplier: number): (num: number) => number {
  return (num: number) => num * multiplier;
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

---

## **8. Generic Functions**
Generic functions allow you to write reusable functions that work with multiple types.

### Example:
```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // "Hello"
console.log(identity<number>(42)); // 42
```

---

## **9. Async Functions**
TypeScript supports `async`/`await` for working with asynchronous code.

### Example:
```typescript
async function fetchData(): Promise<string> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData().then((data) => console.log(data));
```

---

## **10. Function Type Aliases**
You can define a type alias for a function signature.

### Example:
```typescript
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => `Hello, ${name}`;
```

---

## **11. Function as Object Property**
Functions can be defined as properties of objects.

### Example:
```typescript
const user = {
  name: "John",
  greet: function (): string {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // "Hello, John"
```

---

## **12. Immediately Invoked Function Expressions (IIFE)**
Functions that are executed immediately after they are defined.

### Example:
```typescript
(function (): void {
  console.log("This is an IIFE");
})();
```

---

## **13. Function Context (`this`)**
TypeScript ensures type safety for the `this` context in functions.

### Example:
```typescript
const user = {
  name: "John",
  greet: function (this: { name: string }): string {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // "Hello, John"
```

---

## **14. Function Composition**
Combining multiple functions to create a new function.

### Example:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const addAndMultiply = (a: number, b: number, c: number): number => {
  return multiply(add(a, b), c);
};

console.log(addAndMultiply(2, 3, 4)); // 20
```

---

## **Summary of Function Features in TypeScript**

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Typed Parameters**     | Specify types for function parameters.                                      |
| **Optional Parameters**  | Use `?` to make parameters optional.                                        |
| **Default Parameters**   | Provide default values for parameters.                                      |
| **Rest Parameters**      | Accept a variable number of arguments using `...`.                         |
| **Return Types**         | Specify the return type of a function.                                      |
| **Function Overloading** | Define multiple function signatures for the same function.                 |
| **Arrow Functions**      | Concise syntax for writing functions.                                       |
| **Callback Functions**   | Pass functions as arguments to other functions.                            |
| **Higher-Order Functions** | Functions that take or return other functions.                            |
| **Generic Functions**    | Write reusable functions that work with multiple types.                     |
| **Async Functions**      | Use `async`/`await` for asynchronous code.                                  |
| **Function Type Aliases** | Define a type alias for a function signature.                              |
| **Function as Object Property** | Define functions as properties of objects.                          |
| **IIFE**                 | Immediately invoked function expressions.                                   |
| **Function Context (`this`)** | Type safety for the `this` context.                                   |
| **Function Composition** | Combine multiple functions to create a new function.                        |
| **Generator functions** | They are defined using the `function*` syntax and use the `yield` keyword to produce values one at a time, pausing execution between each value.                        |
---

## **Conclusion**
Functions in TypeScript are powerful and flexible, with features like **type annotations**, **overloading**, **generics**, and **async/await**. By leveraging these features, you can write **type-safe**, **reusable**, and **maintainable** code.
----------------------
### 32. Explain Generator functions in TypeScript 
Generator functions in TypeScript (and JavaScript) are special functions that allow you to generate a sequence of values over time, rather than computing them all at once. They are defined using the `function*` syntax and use the `yield` keyword to produce values one at a time, pausing execution between each value.

### Key Features of Generator Functions:
1. **`function*` Syntax**: Generator functions are defined using the `function*` keyword.
2. **`yield` Keyword**: Used to produce a value and pause the function's execution until the next value is requested.
3. **Iterator Protocol**: Generator functions return an iterator object that conforms to the iterator protocol, allowing you to use `next()`, `return()`, and `throw()` methods.
4. **Lazy Evaluation**: Values are generated on-demand, making them memory-efficient for large or infinite sequences.

### Example of a Generator Function in TypeScript:
```typescript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

### How It Works:
1. When you call a generator function, it doesn't execute immediately. Instead, it returns an iterator object.
2. Each call to `generator.next()` resumes the function until the next `yield` statement is encountered.
3. The `yield` statement produces a value and pauses the function.
4. When there are no more `yield` statements, the generator returns `{ value: undefined, done: true }`.

### Using Generators with TypeScript Types:
You can explicitly type the values yielded by a generator function using TypeScript's generics:
```typescript
function* stringGenerator(): Generator<string> {
    yield "Hello";
    yield "World";
}

const gen = stringGenerator();

console.log(gen.next()); // { value: "Hello", done: false }
console.log(gen.next()); // { value: "World", done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Infinite Sequences:
Generators are particularly useful for creating infinite sequences:
```typescript
function* infiniteSequence(): Generator<number> {
    let n = 0;
    while (true) {
        yield n++;
    }
}

const infiniteGen = infiniteSequence();

console.log(infiniteGen.next().value); // 0
console.log(infiniteGen.next().value); // 1
console.log(infiniteGen.next().value); // 2
// This can continue indefinitely.
```

### Use Cases:
1. **Lazy Evaluation**: Generate values only when needed.
2. **Iterating Over Large Data Sets**: Avoid loading all data into memory at once.
3. **Custom Iterators**: Create custom iteration logic.
4. **Asynchronous Programming**: Used with `async`/`await` for advanced control flow.

### Combining Generators with `for...of`:
You can easily iterate over the values produced by a generator using a `for...of` loop:
```typescript
function* fibonacci(): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

for (const value of fibonacci()) {
    if (value > 100) break;
    console.log(value); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
}
```
---
### 33. Global variable in angular

In Angular, creating a global variable can be achieved in several ways depending on your use case. Below are some common approaches:

---

### 1. **Using a Service**
The most recommended way to create a global variable in Angular is by using a **service**. Services are singleton by default, meaning they are instantiated only once during the application lifecycle, making them ideal for storing global data.

#### Steps:
1. **Create a Service**:
   ```bash
   ng generate service shared-data
   ```
   This will create a `shared-data.service.ts` file.

2. **Define the Global Variable in the Service**:
   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root', // Makes the service available globally
   })
   export class SharedDataService {
     public globalVariable: any;

     constructor() {}
   }
   ```

3. **Inject and Use the Service**:
   Inject the service into any component or other service where you need to access or modify the global variable.

   ```typescript
   import { Component } from '@angular/core';
   import { SharedDataService } from './shared-data.service';

   @Component({
     selector: 'app-root',
     template: `<p>{{ sharedData.globalVariable }}</p>`,
   })
   export class AppComponent {
     constructor(public sharedData: SharedDataService) {
       sharedData.globalVariable = 'Hello, World!';
     }
   }
   ```

---

### 2. **Using `environment.ts`**
If you need a global variable that is constant and doesn't change during runtime, you can use the `environment.ts` file.

#### Steps:
1. **Define the Variable in `environment.ts`**:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://api.example.com',
     globalVariable: 'This is a global variable',
   };
   ```

2. **Use the Variable in Your Application**:
   Import the `environment` file wherever you need to access the variable.

   ```typescript
   import { environment } from '../environments/environment';

   console.log(environment.globalVariable);
   ```

---

### 3. **Using `window` Object (Not Recommended)**
You can also define a global variable using the `window` object, but this is generally not recommended as it pollutes the global namespace and can lead to potential issues.

#### Example:
```typescript
(window as any).globalVariable = 'This is a global variable';

// Access it anywhere
console.log((window as any).globalVariable);
```

---

### 4. **Using Angular's `Inject` and `providedIn`**
If you want to provide a global variable at the root level without creating a service, you can use Angular's dependency injection system.

#### Example:
```typescript
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariable {
  public value: any = 'Global Value';
}

// Inject it into a component
@Component({
  selector: 'app-root',
  template: `<p>{{ globalVar.value }}</p>`,
})
export class AppComponent {
  constructor(@Inject(GlobalVariable) public globalVar: GlobalVariable) {}
}
```

---

### 5. **Using RxJS `BehaviorSubject` for Reactive Global State**
If you need a global variable that can be observed for changes, you can use RxJS's `BehaviorSubject`.

#### Example:
1. **Create a Service with `BehaviorSubject`**:
   ```typescript
   import { Injectable } from '@angular/core';
   import { BehaviorSubject } from 'rxjs';

   @Injectable({
     providedIn: 'root',
   })
   export class GlobalStateService {
     private globalVariable = new BehaviorSubject<any>('Initial Value');
     public globalVariable$ = this.globalVariable.asObservable();

     setGlobalVariable(value: any) {
       this.globalVariable.next(value);
     }
   }
   ```

2. **Use the Service in a Component**:
   ```typescript
   import { Component } from '@angular/core';
   import { GlobalStateService } from './global-state.service';

   @Component({
     selector: 'app-root',
     template: `<p>{{ globalVariable }}</p>`,
   })
   export class AppComponent {
     globalVariable: any;

     constructor(private globalState: GlobalStateService) {
       this.globalState.globalVariable$.subscribe((value) => {
         this.globalVariable = value;
       });

       // Update the global variable
       this.globalState.setGlobalVariable('New Value');
     }
   }
   ```

---

### Summary
- **For reactive global state**: Use a service with `BehaviorSubject`.
- **For constant values**: Use `environment.ts`.
- **For general global variables**: Use a singleton service.
- Avoid using the `window` object unless absolutely necessary.

---

1. **What is RxJS?**
   - RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables to handle asynchronous data streams.

2. **What is an Observable?**
   - An Observable is a representation of a stream of data that can be observed over time. It can emit multiple values synchronously or asynchronously.

3. **What is an Observer?**
   - An Observer is an object with `next`, `error`, and `complete` methods that listens to an Observable.

4. **What is a Subscription?**
   - A Subscription represents the execution of an Observable. It is used to unsubscribe and release resources.

5. **What is the difference between `Observable` and `Promise`?**
   - Observables can emit multiple values over time, are lazy, and can be canceled. Promises resolve or reject a single value and execute immediately.

6. **What is the purpose of `subscribe`?**
   - `subscribe` is used to start the execution of an Observable and listen to its emitted values.

7. **What are RxJS Operators?**
   - Operators are functions that transform, filter, or combine Observables.

8. **What is the difference between `of` and `from`?**
   - `of` emits a sequence of values as individual emissions. `from` converts an array, promise, or iterable into an Observable.

9. **What is a Subject?**
   - A Subject is a special type of Observable that can multicast values to multiple Observers.

10. **What is the difference between `Subject`, `BehaviorSubject`, `ReplaySubject`, and `AsyncSubject`?**
    - `Subject`: Basic multicast Observable.
    - `BehaviorSubject`: Requires an initial value and emits the latest value to new subscribers.
    - `ReplaySubject`: Replays a specified number of previous values to new subscribers.
    - `AsyncSubject`: Emits the last value only when it completes.

---

### **Operators**
11. **What is the `map` operator?**
    - `map` transforms each emitted value using a function.
    ```typescript
    of(1, 2, 3).pipe(map(x => x * 2)).subscribe(console.log); // Output: 2, 4, 6
    ```

12. **What is the `filter` operator?**
    - `filter` emits only values that satisfy a condition.
    ```typescript
    of(1, 2, 3).pipe(filter(x => x > 1)).subscribe(console.log); // Output: 2, 3
    ```

13. **What is the `mergeMap` operator?**
    - `mergeMap` maps to an Observable and flattens the result, subscribing to all inner Observables concurrently.

14. **What is the `switchMap` operator?**
    - `switchMap` maps to an Observable and switches to the new Observable, canceling the previous one.

15. **What is the `concatMap` operator?**
    - `concatMap` maps to an Observable and processes them sequentially.

16. **What is the `debounceTime` operator?**
    - `debounceTime` emits a value only after a specified time has passed without another emission.

17. **What is the `throttleTime` operator?**
    - `throttleTime` emits a value and then ignores subsequent values for a specified duration.

18. **What is the `distinctUntilChanged` operator?**
    - `distinctUntilChanged` emits only values that are different from the previous value.

19. **What is the `take` operator?**
    - `take` emits only the first `n` values from the source Observable.

20. **What is the `takeUntil` operator?**
    - `takeUntil` emits values from the source Observable until a notifier Observable emits a value.

21. **What is the `catchError` operator?**
    - `catchError` handles errors in the Observable stream and returns a fallback Observable.

22. **What is the `retry` operator?**
    - `retry` re-subscribes to the source Observable a specified number of times in case of an error.

23. **What is the `forkJoin` operator?**
    - `forkJoin` waits for all input Observables to complete and emits their last values as an array.

24. **What is the `combineLatest` operator?**
    - `combineLatest` combines multiple Observables and emits an array of their latest values whenever any of them emits.

25. **What is the `zip` operator?**
    - `zip` combines multiple Observables and emits an array of values in the same order.

26. **What is the `startWith` operator?**
    - `startWith` emits a specified value before the source Observable starts emitting.

27. **What is the `withLatestFrom` operator?**
    - `withLatestFrom` combines the source Observable with another Observable and emits an array of their latest values.

28. **What is the `scan` operator?**
    - `scan` applies an accumulator function to each emitted value and emits the intermediate results.

29. **What is the `reduce` operator?**
    - `reduce` applies an accumulator function to the source Observable and emits the final result when it completes.

30. **What is the `tap` operator?**
    - `tap` performs side effects (e.g., logging) without modifying the stream.

---

### **Subjects**
31. **What is a `Subject`?**
    - A `Subject` is a multicast Observable that can emit values to multiple Observers.

32. **What is a `BehaviorSubject`?**
    - A `BehaviorSubject` requires an initial value and emits the latest value to new subscribers.

33. **What is a `ReplaySubject`?**
    - A `ReplaySubject` replays a specified number of previous values to new subscribers.

34. **What is an `AsyncSubject`?**
    - An `AsyncSubject` emits the last value only when it completes.

35. **What is the difference between `Subject` and `Observable`?**
    - A `Subject` is both an Observable and an Observer, while an Observable is only a data producer.

---

### **Error Handling**
36. **How do you handle errors in RxJS?**
    - Use the `catchError` operator or the `error` callback in `subscribe`.

37. **What is the purpose of `catchError`?**
    - `catchError` handles errors in the Observable stream and returns a fallback Observable.

38. **What is the purpose of `retry`?**
    - `retry` re-subscribes to the source Observable in case of an error.

39. **What is the difference between `catchError` and `retry`?**
    - `catchError` handles errors and returns a fallback Observable. `retry` re-subscribes to the source Observable.

---

### **Advanced Concepts**
40. **What is a Scheduler in RxJS?**
    - A Scheduler controls when a subscription starts and when notifications are delivered.

41. **What are the types of Schedulers?**
    - `asyncScheduler`, `queueScheduler`, `asapScheduler`, etc.

42. **What is `switchMap` used for?**
    - `switchMap` is used for scenarios like search inputs where only the latest result matters.

43. **What is `mergeMap` used for?**
    - `mergeMap` is used when you want to handle multiple concurrent inner Observables.

44. **What is `concatMap` used for?**
    - `concatMap` is used when you need to process Observables sequentially.

45. **What is the difference between `mergeMap`, `switchMap`, and `concatMap`?**
    - `mergeMap`: Concurrent inner Observables.
    - `switchMap`: Cancels previous inner Observables.
    - `concatMap`: Sequential inner Observables.

46. **What is `exhaustMap`?**
    - `exhaustMap` ignores new emissions while the current inner Observable is still active.

47. **What is the purpose of `unsubscribe`?**
    - `unsubscribe` cancels a subscription and releases resources.

48. **What is a Cold Observable?**
    - A Cold Observable starts emitting values only when subscribed to.

49. **What is a Hot Observable?**
    - A Hot Observable emits values regardless of whether it is subscribed to.

50. **What is the difference between Cold and Hot Observables?**
    - Cold Observables start emitting on subscription. Hot Observables emit values independently of subscriptions.

---

### **Practical Use Cases**
51. **How do you handle HTTP requests in Angular using RxJS?**
    - Use the `HttpClient` service, which returns Observables.

52. **How do you debounce user input in a search box?**
    - Use `debounceTime` and `switchMap`.

53. **How do you handle multiple HTTP requests in parallel?**
    - Use `forkJoin`.

54. **How do you handle dependent HTTP requests?**
    - Use `switchMap` or `concatMap`.

55. **How do you cache HTTP responses?**
    - Use `ReplaySubject` or `shareReplay`.

56. **How do you handle WebSocket connections with RxJS?**
    - Use `webSocket` from RxJS.

57. **How do you handle form validation with RxJS?**
    - Use `valueChanges` and RxJS operators like `debounceTime` and `distinctUntilChanged`.

58. **How do you handle polling with RxJS?**
    - Use `interval` and `switchMap`.

59. **How do you handle real-time data updates?**
    - Use `Subject` or `BehaviorSubject`.

60. **How do you handle race conditions in RxJS?**
    - Use `switchMap` to cancel previous requests.

---
[Back to top⤴️](#table-of-contents)

### 1. **What is RxJS?**
RxJS is a library for composing asynchronous and event-based programs using observable sequences. It provides a powerful way to handle asynchronous data streams, such as HTTP requests, user input events, and more.

- **Key Concepts**:
  - **Observables**: Represent a stream of data that can be observed over time.
  - **Observers**: Objects that listen to observables and react to emitted values.
  - **Operators**: Functions that allow you to manipulate, filter, or transform data streams.
  - **Subjects**: Special types of observables that can multicast values to multiple observers.

---

### 2. **What is an Observable?**
An **Observable** is a representation of a stream of data that can be observed over time. It can emit multiple values (synchronously or asynchronously) and can be subscribed to by observers.

- **Example**:
  ```typescript
  import { Observable } from 'rxjs';

  const observable = new Observable((observer) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  observable.subscribe({
    next: (value) => console.log(value), // Output: Hello, World
    complete: () => console.log('Completed'),
  });
  ```

---

### 3. **What is the difference between `Observable` and `Promise`?**
| Feature                | Observable                          | Promise                          |
|------------------------|-------------------------------------|----------------------------------|
| **Emission**           | Can emit multiple values over time. | Resolves or rejects a single value. |
| **Lazy Execution**     | Executes only when subscribed.      | Executes immediately when created. |
| **Cancellation**       | Supports cancellation via `unsubscribe`. | Cannot be canceled once initiated. |
| **Operators**          | Provides powerful operators for transformation. | Limited to `.then` and `.catch`. |
| **Multicasting**       | Can multicast to multiple observers. | Always unicast (single consumer). |

---

### 4. **What are RxJS Operators?**
Operators are functions that allow you to manipulate, filter, or transform data streams emitted by observables. They are pure functions that return new observables.

- **Common Operators**:
  - **`map`**: Transforms each emitted value.
    ```typescript
    of(1, 2, 3).pipe(map((x) => x * 2)).subscribe(console.log); // Output: 2, 4, 6
    ```
  - **`filter`**: Filters values based on a condition.
    ```typescript
    of(1, 2, 3).pipe(filter((x) => x > 1)).subscribe(console.log); // Output: 2, 3
    ```
  - **`mergeMap` (flatMap)**: Maps to an observable and flattens the result.
    ```typescript
    of('Hello').pipe(mergeMap((x) => of(x + ' World'))).subscribe(console.log); // Output: Hello World
    ```
  - **`switchMap`**: Maps to an observable and switches to the new observable.
    ```typescript
    of('Hello').pipe(switchMap((x) => of(x + ' World'))).subscribe(console.log); // Output: Hello World
    ```
  - **`debounceTime`**: Emits a value only after a specified time has passed without another emission.
    ```typescript
    fromEvent(document, 'click').pipe(debounceTime(1000)).subscribe(console.log);
    ```

---

### 5. **What is a Subject?**
A **Subject** is a special type of observable that can multicast values to multiple observers. It acts as both an observable and an observer.

- **Types of Subjects**:
  - **`Subject`**: Basic subject that emits values to all subscribers.
    ```typescript
    const subject = new Subject();
    subject.subscribe(console.log);
    subject.next('Hello'); // Output: Hello
    ```
  - **`BehaviorSubject`**: Requires an initial value and emits the latest value to new subscribers.
    ```typescript
    const behaviorSubject = new BehaviorSubject('Initial Value');
    behaviorSubject.subscribe(console.log); // Output: Initial Value
    behaviorSubject.next('New Value'); // Output: New Value
    ```
  - **`ReplaySubject`**: Replays a specified number of previous values to new subscribers.
    ```typescript
    const replaySubject = new ReplaySubject(2);
    replaySubject.next('Value 1');
    replaySubject.next('Value 2');
    replaySubject.subscribe(console.log); // Output: Value 1, Value 2
    ```
  - **`AsyncSubject`**: Emits the last value only when it completes.
    ```typescript
    const asyncSubject = new AsyncSubject();
    asyncSubject.subscribe(console.log);
    asyncSubject.next('Value 1');
    asyncSubject.next('Value 2');
    asyncSubject.complete(); // Output: Value 2
    ```

---

### 6. **What is the difference between `mergeMap`, `switchMap`, and `concatMap`?**
- **`mergeMap` (flatMap)**:
  - Maps to an observable and flattens the result.
  - All inner observables are subscribed to concurrently.
  - Use case: When order and completion of inner observables don't matter.

- **`switchMap`**:
  - Maps to an observable and switches to the new observable, canceling the previous one.
  - Use case: For search inputs or autocomplete where only the latest result matters.

- **`concatMap`**:
  - Maps to an observable and processes them sequentially.
  - Use case: When order of emissions is important.

---

### 7. **How do you handle errors in RxJS?**
Errors in RxJS can be handled using the `catchError` operator or the `error` callback in the `subscribe` method.

- **Using `catchError`**:
  ```typescript
  import { of } from 'rxjs';
  import { catchError } from 'rxjs/operators';

  of(1, 2, 3).pipe(
    map((x) => {
      if (x === 2) throw new Error('Error occurred');
      return x;
    }),
    catchError((err) => {
      console.error(err); // Handle the error
      return of('Fallback Value');
    })
  ).subscribe(console.log); // Output: 1, Fallback Value
  ```

- **Using `error` callback in `subscribe`**:
  ```typescript
  observable.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.error(err),
  });
  ```

---

### 8. **What is the difference between `of` and `from`?**
- **`of`**:
  - Emits a sequence of values as individual emissions.
  - Example: `of(1, 2, 3)` emits `1`, `2`, `3`.

- **`from`**:
  - Converts an array, promise, or iterable into an observable.
  - Example: `from([1, 2, 3])` emits `1`, `2`, `3`.

---

### 9. **What is `Scheduler` in RxJS?**
A **Scheduler** controls when a subscription starts and when notifications are delivered. It allows you to control the timing of observable execution.

- **Common Schedulers**:
  - **`asyncScheduler`**: Schedules tasks asynchronously (e.g., `setTimeout`).
  - **`queueScheduler`**: Executes tasks synchronously in a queue.
  - **`asapScheduler`**: Schedules tasks as soon as possible (e.g., `Promise`).

---

### 10. **What is the purpose of `unsubscribe`?**
- **`unsubscribe`** is used to cancel a subscription to an observable, freeing up resources and preventing memory leaks.
- Example:
  ```typescript
  const subscription = observable.subscribe(console.log);
  subscription.unsubscribe(); // Cancels the subscription
  ```

---

### 11. **What is `forkJoin`?**
- **`forkJoin`** is used to combine multiple observables and wait for all of them to complete before emitting their last values as an array.
- Example:
  ```typescript
  forkJoin([of(1), of(2)]).subscribe(console.log); // Output: [1, 2]
  ```

---

### 12. **What is `combineLatest`?**
- **`combineLatest`** combines multiple observables and emits an array of their latest values whenever any of them emits.
- Example:
  ```typescript
  combineLatest([of(1), of(2)]).subscribe(console.log); // Output: [1, 2]
  ```

---
[Back to top⤴️](#table-of-contents)

### What is difference between promise vs observable vs subscriber vs subject

In JavaScript and RxJS, **Promises**, **Observables**, **Subscribers**, and **Subjects** are used to handle asynchronous operations, but they serve different purposes and have distinct characteristics. Here's a detailed comparison:

---

### **1. Promise**
- **Definition**: A Promise represents a single value that will be available in the future, either resolved or rejected.
- **Role**: Handles **single asynchronous operations**.
- **Key Characteristics**:
  - **Eager Execution**: Executes immediately when created.
  - **Single Value**: Resolves or rejects only once.
  - **No Cancellation**: Cannot be canceled once initiated.
  - **Chaining**: Uses `.then()` and `.catch()` for chaining.
- **Example**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  promise.then((value) => console.log(value)); // Output: Hello (after 1 second)
  ```

---

### **2. Observable**
- **Definition**: An Observable represents a stream of data that can be observed over time. It can emit multiple values (synchronously or asynchronously).
- **Role**: Handles **multiple asynchronous operations** or streams of data.
- **Key Characteristics**:
  - **Lazy Execution**: Executes only when subscribed to.
  - **Multiple Values**: Can emit multiple values over time.
  - **Cancellation**: Supports cancellation via `unsubscribe`.
  - **Operators**: Provides powerful operators like `map`, `filter`, `mergeMap`, etc.
- **Example**:
  ```typescript
  import { Observable } from 'rxjs';

  const observable = new Observable((observer) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  observable.subscribe({
    next: (value) => console.log(value), // Output: Hello, World
    complete: () => console.log('Completed'),
  });
  ```

---

### **3. Subscriber**
- **Definition**: A Subscriber is an object that listens to an Observable. It implements the `Observer` interface with `next`, `error`, and `complete` methods.
- **Role**: Acts as a **data consumer** for Observables.
- **Key Characteristics**:
  - Receives values emitted by the Observable.
  - Handles errors and completion notifications.
  - Can unsubscribe to stop receiving values.
- **Example**:
  ```typescript
  const observable = new Observable((observer) => {
    observer.next('Hello');
    observer.complete();
  });

  const subscriber = observable.subscribe({
    next: (value) => console.log(value), // Output: Hello
    complete: () => console.log('Completed'),
  });

  subscriber.unsubscribe(); // Stops listening to the Observable
  ```

---

### **4. Subject**
- **Definition**: A Subject is a special type of Observable that can multicast values to multiple Observers. It acts as both an **Observable** and an **Observer**.
- **Role**: Acts as a **data producer and consumer**.
- **Key Characteristics**:
  - **Multicast**: Can emit values to multiple Observers.
  - **Hot Observable**: Emits values regardless of whether it is subscribed to.
  - **Mutable**: Can emit new values using `next`, `error`, and `complete` methods.
- **Example**:
  ```typescript
  import { Subject } from 'rxjs';

  const subject = new Subject();

  subject.subscribe((value) => console.log('Observer 1:', value)); // Output: Observer 1: Hello
  subject.subscribe((value) => console.log('Observer 2:', value)); // Output: Observer 2: Hello

  subject.next('Hello');
  ```

---

### **Key Differences**

| Feature                | Promise                          | Observable                          | Subscriber                          | Subject                          |
|------------------------|----------------------------------|-------------------------------------|-------------------------------------|----------------------------------|
| **Role**               | Single async value               | Stream of async values              | Listens to Observable               | Multicast stream of values       |
| **Execution**          | Eager                            | Lazy                                | N/A                                 | Eager (Hot Observable)           |
| **Values**             | Single value (resolve/reject)    | Multiple values                     | Receives values from Observable     | Multiple values (multicast)      |
| **Cancellation**       | Not supported                    | Supported (`unsubscribe`)           | Can unsubscribe                     | Can unsubscribe                  |
| **Chaining**           | `.then()`, `.catch()`            | Operators (`map`, `filter`, etc.)   | N/A                                 | Operators (`map`, `filter`, etc.) |
| **Use Case**           | Single async operation           | Multiple async operations/streams   | Consumes Observable values          | Multicast values to Observers    |

---

### **Summary**
- **Promise**: Handles a single asynchronous operation.
- **Observable**: Handles multiple asynchronous operations or streams of data.
- **Subscriber**: Listens to and consumes values from an Observable.
- **Subject**: Acts as both an Observable and an Observer, enabling multicast.
---
Handling asynchronous and synchronous operations is a fundamental aspect of modern web development. Below are the different ways to handle these operations in **JavaScript**, **TypeScript**, **RxJS**, and **Angular**:

---

### **1. JavaScript**
JavaScript provides several mechanisms to handle asynchronous and synchronous operations:

#### **Synchronous Operations**
- Synchronous code executes line-by-line, blocking further execution until the current operation completes.
- Example:
  ```javascript
  console.log("Start");
  console.log("Middle");
  console.log("End");
  ```

#### **Asynchronous Operations**
- **Callbacks**:
  - Functions passed as arguments to other functions, executed after an asynchronous operation completes.
  - Example:
    ```javascript
    setTimeout(() => {
      console.log("Async operation completed");
    }, 1000);
    ```

- **Promises**:
  - Represent the eventual completion (or failure) of an asynchronous operation.
  - Example:
    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 1000);
    });
    promise.then((result) => console.log(result));
    ```

- **Async/Await**:
  - Syntactic sugar over Promises, making asynchronous code look synchronous.
  - Example:
    ```javascript
    async function fetchData() {
      const result = await someAsyncOperation();
      console.log(result);
    }
    ```

---

### **2. TypeScript**
TypeScript is a superset of JavaScript, so it supports all JavaScript features for handling asynchronous and synchronous operations. Additionally, TypeScript provides type safety.

#### **Synchronous Operations**
- Same as JavaScript, but with type annotations.
- Example:
  ```typescript
  const add = (a: number, b: number): number => a + b;
  console.log(add(2, 3));
  ```

#### **Asynchronous Operations**
- **Promises with Types**:
  - Example:
    ```typescript
    const fetchData = (): Promise<string> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
      });
    };
    fetchData().then((data: string) => console.log(data));
    ```

- **Async/Await with Types**:
  - Example:
    ```typescript
    async function fetchData(): Promise<string> {
      const data = await fetchData();
      return data;
    }
    ```

---
[Back to top⤴️](#table-of-contents)

### **3. RxJS (Reactive Extensions for JavaScript)**
RxJS is a library for reactive programming using Observables. It is particularly useful for handling asynchronous streams of data.

#### **Synchronous Operations**
- RxJS is primarily designed for asynchronous operations, but it can handle synchronous data streams as well.
- Example:
  ```typescript
  import { of } from 'rxjs';

  const data$ = of(1, 2, 3); // Synchronous stream
  data$.subscribe((value) => console.log(value));
  ```

#### **Asynchronous Operations**
- **Observables**:
  - Represent a stream of data that can be observed over time.
  - Example:
    ```typescript
    import { Observable } from 'rxjs';

    const observable$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next("Data");
        observer.complete();
      }, 1000);
    });

    observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("Completed"),
    });
    ```

- **Operators**:
  - RxJS provides operators like `map`, `filter`, `switchMap`, etc., to transform and manage asynchronous streams.
  - Example:
    ```typescript
    import { of } from 'rxjs';
    import { map } from 'rxjs/operators';

    of(1, 2, 3).pipe(
      map((value) => value * 2)
    ).subscribe((value) => console.log(value));
    ```

- **Subjects**:
  - Special types of Observables that allow multicasting to multiple observers.
  - Example:
    ```typescript
    import { Subject } from 'rxjs';

    const subject = new Subject<number>();
    subject.subscribe((value) => console.log(value));
    subject.next(1);
    ```

---

### **4. Angular**
Angular leverages RxJS and Promises for handling asynchronous operations, especially in HTTP requests and reactive forms.

#### **Synchronous Operations**
- Angular handles synchronous operations like plain JavaScript/TypeScript.
- Example:
  ```typescript
  ngOnInit() {
    console.log("Component initialized");
  }
  ```

#### **Asynchronous Operations**
- **HTTP Requests with RxJS**:
  - Angular's `HttpClient` returns Observables for HTTP requests.
  - Example:
    ```typescript
    import { HttpClient } from '@angular/common/http';

    constructor(private http: HttpClient) {}

    fetchData() {
      this.http.get('https://api.example.com/data').subscribe((data) => {
        console.log(data);
      });
    }
    ```

- **Async Pipe**:
  - Angular's `async` pipe automatically subscribes to Observables and handles unsubscription.
  - Example:
    ```html
    <div *ngIf="data$ | async as data">
      {{ data }}
    </div>
    ```

- **Promises in Angular**:
  - While Angular prefers Observables, Promises can still be used.
  - Example:
    ```typescript
    fetchData(): Promise<any> {
      return this.http.get('https://api.example.com/data').toPromise();
    }
    ```

- **Reactive Forms**:
  - Angular's reactive forms use Observables to track form control values and status changes.
  - Example:
    ```typescript
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
    ```

---

### **Summary**
| **Technology** | **Synchronous**                     | **Asynchronous**                                                                 |
|-----------------|-------------------------------------|----------------------------------------------------------------------------------|
| **JavaScript**  | Line-by-line execution              | Callbacks, Promises, Async/Await                                                |
| **TypeScript**  | Same as JavaScript + type safety    | Promises with types, Async/Await with types                                     |
| **RxJS**        | `of`, `from` for sync streams       | Observables, Operators, Subjects                                                |
| **Angular**     | Plain JS/TS                         | HTTPClient (Observables), Async Pipe, Reactive Forms                            |

[Back to top⤴️](#table-of-contents)

### Explain life cycle of angular?
The **Angular lifecycle** refers to the series of phases an Angular component or directive goes through from its creation to its destruction. Angular provides lifecycle hooks—methods that allow you to tap into these phases and execute custom logic at specific moments. Understanding the lifecycle is crucial for managing component behavior, optimizing performance, and avoiding memory leaks.

---
[Back to top⤴️](#table-of-contents)

### **Angular Component Lifecycle Hooks**
Angular provides the following lifecycle hooks for components and directives:

1. **ngOnChanges**:
   - Called when Angular sets or resets data-bound input properties.
   - Receives a `SimpleChanges` object containing the current and previous values of the input properties.
   - Use this hook to react to changes in input properties.
   - Example:
     ```typescript
     @Input() name: string;

     ngOnChanges(changes: SimpleChanges) {
       console.log('Input property changed:', changes.name);
     }
     ```

2. **ngOnInit**:
   - Called once, after Angular has initialized the component and set its input properties.
   - Ideal for initialization logic (e.g., fetching data from a server).
   - Example:
     ```typescript
     ngOnInit() {
       console.log('Component initialized');
     }
     ```

3. **ngDoCheck**:
   - Called during every change detection cycle.
   - Use this hook to implement custom change detection logic.
   - Example:
     ```typescript
     ngDoCheck() {
       console.log('Change detection cycle');
     }
     ```

4. **ngAfterContentInit**:
   - Called once, after Angular projects external content into the component's view (using `<ng-content>`).
   - Use this hook to interact with projected content.
   - Example:
     ```typescript
     ngAfterContentInit() {
       console.log('Content projected into component');
     }
     ```

5. **ngAfterContentChecked**:
   - Called after Angular checks the content projected into the component.
   - Use this hook to react to changes in projected content.
   - Example:
     ```typescript
     ngAfterContentChecked() {
       console.log('Content checked');
     }
     ```

6. **ngAfterViewInit**:
   - Called once, after Angular initializes the component's view and child views.
   - Use this hook to interact with the DOM or child components.
   - Example:
     ```typescript
     ngAfterViewInit() {
       console.log('View initialized');
     }
     ```

7. **ngAfterViewChecked**:
   - Called after Angular checks the component's view and child views.
   - Use this hook to react to changes in the view.
   - Example:
     ```typescript
     ngAfterViewChecked() {
       console.log('View checked');
     }
     ```

8. **ngOnDestroy**:
   - Called just before Angular destroys the component or directive.
   - Use this hook to clean up resources (e.g., unsubscribe from observables, detach event listeners).
   - Example:
     ```typescript
     ngOnDestroy() {
       console.log('Component destroyed');
     }
     ```

---

### **Lifecycle Sequence**
The lifecycle hooks are executed in the following order:

1. **Creation Phase**:
   - `ngOnChanges` (if inputs are bound)
   - `ngOnInit`
   - `ngDoCheck`
   - `ngAfterContentInit`
   - `ngAfterContentChecked`
   - `ngAfterViewInit`
   - `ngAfterViewChecked`

2. **Update Phase** (during change detection):
   - `ngOnChanges` (if inputs change)
   - `ngDoCheck`
   - `ngAfterContentChecked`
   - `ngAfterViewChecked`

3. **Destruction Phase**:
   - `ngOnDestroy`

---
[Back to top⤴️](#table-of-contents)

### **Example of Lifecycle in Action**
```typescript
import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `<p>{{ name }}</p>`,
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
```

---

### **Key Points**
- **Initialization**: Use `ngOnInit` for setup logic (e.g., API calls).
- **Change Detection**: Use `ngDoCheck` for custom change detection.
- **Content Projection**: Use `ngAfterContentInit` and `ngAfterContentChecked` to interact with projected content.
- **View Initialization**: Use `ngAfterViewInit` and `ngAfterViewChecked` to interact with the DOM or child components.
- **Cleanup**: Use `ngOnDestroy` to release resources and prevent memory leaks.
---
### Explain angular Routing cycle and different router events?
The Angular routing cycle is the process that occurs when a user navigates from one route to another in an Angular application. It involves a series of steps, including route matching, guard execution, data resolution, component activation, and URL updates. During this cycle, the Angular router emits **router events** that developers can use to track and respond to navigation changes.

Below is a detailed explanation of the **Angular routing cycle** and the **different router events**:

---

## **Angular Routing Cycle**

The routing cycle consists of the following steps:

1. **Trigger Navigation**:
   - Navigation is triggered by user actions (e.g., clicking a link, using the browser's back/forward buttons) or programmatically (e.g., calling `Router.navigate()` or `Router.navigateByUrl()`).

2. **Parse the URL**:
   - The Angular router parses the URL to determine the target route.

3. **Route Matching**:
   - The router matches the URL against the defined routes in the `Routes` array (configured in `app-routing.module.ts` or similar). It uses a **first-match wins** strategy.

4. **Run Guards**:
   - Route guards are executed to determine if the navigation can proceed:
     - `CanActivate`: Checks if the route can be activated.
     - `CanActivateChild`: Checks if child routes can be activated.
     - `CanDeactivate`: Checks if the current route can be deactivated (e.g., to prevent unsaved changes).
     - `CanLoad`: Checks if a lazy-loaded module can be loaded.

5. **Resolve Data (Optional)**:
   - If the route has a `resolve` guard, the router fetches the required data before activating the route.

6. **Activate the Route**:
   - The router instantiates the component(s) associated with the route and renders them in the `<router-outlet>`.

7. **Update the Browser URL**:
   - The browser's URL is updated to reflect the new route using the `History.pushState()` API.

8. **Component Lifecycle Hooks**:
   - The component's lifecycle hooks are executed (e.g., `ngOnInit`, `ngAfterViewInit`).

9. **Complete Navigation**:
   - The navigation is complete, and the router emits a `NavigationEnd` event.

10. **Error Handling**:
    - If any step fails (e.g., a guard rejects navigation or a resolver throws an error), the router cancels the navigation and may redirect to an error page or fallback route.

---

## **Router Events**

During the routing cycle, the Angular router emits a series of events that developers can subscribe to for tracking navigation. These events are instances of the `RouterEvent` class and are part of the `@angular/router` package.

Here are the key **router events** in the order they occur:

1. **NavigationStart**:
   - Emitted when navigation starts.
   - Useful for showing a loading spinner or performing initial setup.

   ```typescript
   router.events.subscribe(event => {
     if (event instanceof NavigationStart) {
       console.log('Navigation started');
     }
   });
   ```

2. **RouteConfigLoadStart**:
   - Emitted when the router begins loading a lazy-loaded route configuration.

3. **RouteConfigLoadEnd**:
   - Emitted when the router finishes loading a lazy-loaded route configuration.

4. **RoutesRecognized**:
   - Emitted when the router has parsed the URL and matched it to a route.

5. **GuardsCheckStart**:
   - Emitted when the router begins checking guards.

6. **GuardsCheckEnd**:
   - Emitted when the router finishes checking guards.

7. **ResolveStart**:
   - Emitted when the router begins resolving data (if `resolve` guards are used).

8. **ResolveEnd**:
   - Emitted when the router finishes resolving data.

9. **NavigationEnd**:
   - Emitted when navigation ends successfully.
   - Useful for performing actions after navigation completes.

   ```typescript
   router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       console.log('Navigation ended');
     }
   });
   ```

10. **NavigationCancel**:
    - Emitted when navigation is canceled (e.g., by a guard returning `false` or a `UrlTree`).

    ```typescript
    router.events.subscribe(event => {
      if (event instanceof NavigationCancel) {
        console.log('Navigation canceled', event.reason);
      }
    });
    ```

11. **NavigationError**:
    - Emitted when navigation fails due to an error (e.g., a resolver throws an error).

    ```typescript
    router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        console.log('Navigation error', event.error);
      }
    });
    ```

12. **Scroll**:
    - Emitted when the router restores the scroll position after navigation.

---

## **Subscribing to Router Events**

To track router events, you can subscribe to the `Router.events` observable in your component or service:

```typescript
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
  });
}
```

---

## **Practical Use Cases for Router Events**
- **Loading Spinner**: Show a spinner during navigation using `NavigationStart` and `NavigationEnd`.
- **Analytics**: Track page views using `NavigationEnd`.
- **Error Handling**: Log navigation errors using `NavigationError`.
- **Scroll Restoration**: Customize scroll behavior using the `Scroll` event.

---
[Back to top⤴️](#table-of-contents)

## **Example of Router Event Subscription**

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="loading">Loading...</div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
}
```

---
### Key Concepts in Angular Routing

Angular routing is a powerful feature that enables navigation between different views or components in a single-page application (SPA) without reloading the entire page. Below are the **key concepts in Angular routing** that every developer should understand:

---

### **1. Routes Configuration**
- The `Routes` array defines the mapping between URLs and components.
- Each route is an object with properties like `path`, `component`, `children`, `redirectTo`, and more.
- Example:
  ```typescript
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: '**', component: NotFoundComponent } // Wildcard route for 404
  ];
  ```

---

### **2. Router Outlet**
- The `<router-outlet>` directive acts as a placeholder where the routed component is rendered.
- Example:
  ```html
  <router-outlet></router-outlet>
  ```

---

### **3. Router Module**
- The `RouterModule` is used to configure and enable routing in an Angular application.
- Use `RouterModule.forRoot(routes)` in the root module and `RouterModule.forChild(routes)` in feature modules.
- Example:
  ```typescript
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  ```

---

### **4. Navigation**
- **Declarative Navigation**: Use the `routerLink` directive in templates to navigate.
  ```html
  <a routerLink="/home">Home</a>
  <a [routerLink]="['/about', userId]">About</a>
  ```
- **Programmatic Navigation**: Use the `Router` service to navigate in code.
  ```typescript
  constructor(private router: Router) {}
  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  ```

---

### **5. Route Parameters**
- Routes can accept dynamic parameters (e.g., `:id`).
- Access parameters in the component using `ActivatedRoute`.
- Example:
  ```typescript
  { path: 'detail/:id', component: DetailComponent }
  ```
  ```typescript
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']); // Access the 'id' parameter
    });
  }
  ```

---

### **6. Query Parameters**
- Pass optional query parameters in the URL (e.g., `?page=1`).
- Access query parameters using `ActivatedRoute`.
- Example:
  ```typescript
  this.router.navigate(['/search'], { queryParams: { page: 1 } });
  ```
  ```typescript
  this.route.queryParams.subscribe(params => {
    console.log(params['page']); // Access the 'page' query parameter
  });
  ```

---

### **7. Route Guards**
- Route guards control whether a user can navigate to or away from a route.
- Types of guards:
  - `CanActivate`: Controls access to a route.
  - `CanActivateChild`: Controls access to child routes.
  - `CanDeactivate`: Controls whether a user can leave a route (e.g., to prevent unsaved changes).
  - `CanLoad`: Controls whether a lazy-loaded module can be loaded.
- Example:
  ```typescript
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    canActivate(): boolean {
      return this.authService.isLoggedIn();
    }
  }
  ```
  ```typescript
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
  ```

---

### **8. Lazy Loading**
- Lazy loading improves performance by loading feature modules only when needed.
- Use the `loadChildren` property to lazy-load a module.
- Example:
  ```typescript
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  ```

---

### **9. Nested Routes (Child Routes)**
- Routes can have child routes, enabling nested views.
- Use the `children` property to define child routes.
- Example:
  ```typescript
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
  ```

---

### **10. Wildcard Route**
- A wildcard route (`**`) is used to handle unknown paths (e.g., 404 pages).
- Example:
  ```typescript
  { path: '**', component: NotFoundComponent }
  ```

---

### **11. Router Events**
- The router emits events during the navigation cycle (e.g., `NavigationStart`, `NavigationEnd`).
- Subscribe to `Router.events` to track navigation.
- Example:
  ```typescript
  this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
  });
  ```

---

### **12. Route Resolvers**
- Route resolvers fetch data before activating a route.
- Use the `resolve` property to define a resolver.
- Example:
  ```typescript
  @Injectable({ providedIn: 'root' })
  export class DataResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.dataService.getData();
    }
  }
  ```
  ```typescript
  { path: 'data', component: DataComponent, resolve: { data: DataResolver } }
  ```

---

### **13. Relative Navigation**
- Navigate relative to the current route using `relativeTo`.
- Example:
  ```typescript
  this.router.navigate(['../details'], { relativeTo: this.route });
  ```

---

### **14. Router State**
- The `RouterState` represents the state of the router at any point in time.
- Access the current route and its parameters using `Router.routerState`.
- Example:
  ```typescript
  const currentRoute = this.router.routerState.snapshot.root;
  ```

---

### **15. Scroll Position Restoration**
- The router can restore the scroll position after navigation.
- Enable it in the router configuration:
  ```typescript
  RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ```

---

### **16. Route Reuse Strategy**
- Customize how routes are reused using the `RouteReuseStrategy` interface.
- Useful for optimizing performance in complex applications.

---

### **17. Router Testing**
- Use Angular's testing utilities to test routing behavior.
- Example:
  ```typescript
  TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(routes)]
  });
  ```

---
[Back to top⤴️](#table-of-contents)

### Explain the different types of data binding in Angular?

Angular provides several ways to bind data between the component class and the template. These binding techniques enable communication between the TypeScript code (component logic) and the HTML template (view). Below is a detailed explanation of the **different types of data binding in Angular**:

---

## **1. Interpolation (`{{ }}`)**
- **Purpose**: Used to display dynamic data in the template.
- **Syntax**: `{{ expression }}`
- **Direction**: One-way (component to view).
- **Use Case**: Displaying component properties, method results, or expressions in the view.

### Example:
```typescript
// Component class
export class AppComponent {
  title = 'Angular Interpolation';
}
```
```html
<!-- Template -->
<h1>{{ title }}</h1>
<p>2 + 2 = {{ 2 + 2 }}</p>
```
Output:
```html
<h1>Angular Interpolation</h1>
<p>2 + 2 = 4</p>
```

---

## **2. Property Binding (`[ ]`)**
- **Purpose**: Binds a component property to an HTML element property or attribute.
- **Syntax**: `[property]="expression"`
- **Direction**: One-way (component to view).
- **Use Case**: Setting values for HTML element properties (e.g., `src`, `disabled`, `class`, etc.).

### Example:
```typescript
// Component class
export class AppComponent {
  imageUrl = 'https://example.com/image.png';
  isDisabled = true;
}
```
```html
<!-- Template -->
<img [src]="imageUrl" [alt]="'Example Image'">
<button [disabled]="isDisabled">Click Me</button>
```
- The `src` attribute of the `<img>` tag is bound to the `imageUrl` property.
- The `disabled` attribute of the `<button>` tag is bound to the `isDisabled` property.

---

## **3. Event Binding (`( )`)**
- **Purpose**: Binds a component method to a DOM event (e.g., `click`, `input`, `keyup`, etc.).
- **Syntax**: `(event)="method()"`
- **Direction**: One-way (view to component).
- **Use Case**: Handling user interactions like button clicks, form submissions, etc.

### Example:
```typescript
// Component class
export class AppComponent {
  onClick() {
    alert('Button clicked!');
  }
}
```
```html
<!-- Template -->
<button (click)="onClick()">Click Me</button>
```
- When the button is clicked, the `onClick()` method in the component is executed.

---

## **4. Two-Way Binding (`[( )]`)**
- **Purpose**: Combines property binding and event binding to synchronize data between the component and the view.
- **Syntax**: `[(ngModel)]="property"`
- **Direction**: Two-way (component ⇄ view).
- **Use Case**: Commonly used with form inputs to keep the component property and the view in sync.

### Example:
```typescript
// Component class
export class AppComponent {
  name = '';
}
```
```html
<!-- Template -->
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>
```
- When the user types in the input field, the `name` property in the component is updated.
- The `<p>` tag displays the updated value of `name`.

**Note**: To use `ngModel`, you must import `FormsModule` in your Angular module.

---

## **5. Attribute Binding (`attr.`)**
- **Purpose**: Binds a component property to an HTML attribute (used when the attribute is not a property of the DOM element).
- **Syntax**: `[attr.attribute]="expression"`
- **Direction**: One-way (component to view).
- **Use Case**: Setting attributes like `aria-*`, `colspan`, `data-*`, etc.

### Example:
```typescript
// Component class
export class AppComponent {
  colSpan = 2;
}
```
```html
<!-- Template -->
<td [attr.colspan]="colSpan">Table Cell</td>
```
- The `colspan` attribute of the `<td>` element is bound to the `colSpan` property.

---

## **6. Class Binding (`[class]`)**
- **Purpose**: Dynamically add or remove CSS classes based on component properties.
- **Syntax**:
  - Single class: `[class.class-name]="expression"`
  - Multiple classes: `[class]="classExpression"`
- **Direction**: One-way (component to view).
- **Use Case**: Conditionally applying CSS classes.

### Example:
```typescript
// Component class
export class AppComponent {
  isActive = true;
}
```
```html
<!-- Template -->
<div [class.active]="isActive">This is a div</div>
```
- If `isActive` is `true`, the `active` class is added to the `<div>`.

---

## **7. Style Binding (`[style]`)**
- **Purpose**: Dynamically set inline styles based on component properties.
- **Syntax**:
  - Single style: `[style.style-property]="expression"`
  - Multiple styles: `[style]="styleExpression"`
- **Direction**: One-way (component to view).
- **Use Case**: Conditionally applying inline styles.

### Example:
```typescript
// Component class
export class AppComponent {
  fontSize = '20px';
}
```
```html
<!-- Template -->
<p [style.font-size]="fontSize">This is a paragraph</p>
```
- The `font-size` style of the `<p>` element is bound to the `fontSize` property.

---

## **8. Template Reference Variables (`#`)**
- **Purpose**: Creates a reference to a DOM element or Angular component/directive in the template.
- **Syntax**: `#variableName`
- **Use Case**: Accessing DOM elements or Angular components directly in the template.

### Example:
```html
<!-- Template -->
<input #inputRef placeholder="Enter text">
<button (click)="logValue(inputRef.value)">Log Value</button>
```
```typescript
// Component class
export class AppComponent {
  logValue(value: string) {
    console.log(value);
  }
}
```
- `#inputRef` creates a reference to the `<input>` element.
- The `logValue()` method logs the value of the input when the button is clicked.

---

## **9. Structural Directives (`*`)**
- **Purpose**: Modify the DOM structure by adding or removing elements.
- **Syntax**: `*directive="expression"`
- **Use Case**: Conditionally rendering elements or iterating over lists.

### Examples:
#### `*ngIf`:
```html
<div *ngIf="isVisible">This is visible</div>
```
- The `<div>` is rendered only if `isVisible` is `true`.

#### `*ngFor`:
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
- The `<li>` element is repeated for each item in the `items` array.

---

## **Summary of Binding Types**
| Binding Type         | Syntax                | Direction          | Use Case                                      |
|----------------------|-----------------------|--------------------|----------------------------------------------|
| Interpolation         | `{{ expression }}`    | Component → View   | Display dynamic data in the view.            |
| Property Binding      | `[property]="expr"`   | Component → View   | Bind component data to HTML properties.      |
| Event Binding         | `(event)="method()"`  | View → Component   | Handle user interactions.                    |
| Two-Way Binding       | `[(ngModel)]="prop"`  | Component ⇄ View   | Synchronize data between component and view. |
| Attribute Binding     | `[attr.attribute]`    | Component → View   | Bind to HTML attributes.                    |
| Class Binding         | `[class.class-name]`  | Component → View   | Dynamically add/remove CSS classes.          |
| Style Binding         | `[style.style-prop]`  | Component → View   | Dynamically set inline styles.               |
| Template Reference    | `#variableName`       | N/A                | Reference DOM elements or components.        |
| Structural Directives | `*directive="expr"`   | N/A                | Modify DOM structure conditionally.          |

---
[Back to top⤴️](#table-of-contents)

### The one-way binding and two-way binding in angular?
In Angular, data binding is a powerful feature that allows you to connect the component class (TypeScript) with the template (HTML). There are two main types of data binding: **one-way binding** and **two-way binding**. Below are examples of each type:

---

## **One-Way Binding**
One-way binding means data flows in a single direction, either from the component to the view or from the view to the component.

### **1. Component to View (One-Way)**
#### a. **Interpolation (`{{ }}`)**:
- Displays component data in the view.
```typescript
// Component class
export class AppComponent {
  message = 'Hello, Angular!';
}
```
```html
<!-- Template -->
<p>{{ message }}</p>
```
Output:
```html
<p>Hello, Angular!</p>
```

#### b. **Property Binding (`[ ]`)**:
- Binds component data to an HTML element property.
```typescript
// Component class
export class AppComponent {
  imageUrl = 'https://example.com/image.png';
}
```
```html
<!-- Template -->
<img [src]="imageUrl" alt="Example Image">
```
- The `src` attribute of the `<img>` tag is bound to the `imageUrl` property.

#### c. **Attribute Binding (`[attr.]`)**:
- Binds component data to an HTML attribute.
```typescript
// Component class
export class AppComponent {
  colSpan = 2;
}
```
```html
<!-- Template -->
<td [attr.colspan]="colSpan">Table Cell</td>
```
- The `colspan` attribute of the `<td>` element is bound to the `colSpan` property.

#### d. **Class Binding (`[class]`)**:
- Dynamically adds or removes CSS classes.
```typescript
// Component class
export class AppComponent {
  isActive = true;
}
```
```html
<!-- Template -->
<div [class.active]="isActive">This is a div</div>
```
- If `isActive` is `true`, the `active` class is added to the `<div>`.

#### e. **Style Binding (`[style]`)**:
- Dynamically sets inline styles.
```typescript
// Component class
export class AppComponent {
  fontSize = '20px';
}
```
```html
<!-- Template -->
<p [style.font-size]="fontSize">This is a paragraph</p>
```
- The `font-size` style of the `<p>` element is bound to the `fontSize` property.

---

### **2. View to Component (One-Way)**
#### a. **Event Binding (`( )`)**:
- Binds a component method to a DOM event.
```typescript
// Component class
export class AppComponent {
  onClick() {
    alert('Button clicked!');
  }
}
```
```html
<!-- Template -->
<button (click)="onClick()">Click Me</button>
```
- When the button is clicked, the `onClick()` method is executed.

#### b. **Template Reference Variables (`#`)**:
- Accesses DOM elements or Angular components directly in the template.
```html
<!-- Template -->
<input #inputRef placeholder="Enter text">
<button (click)="logValue(inputRef.value)">Log Value</button>
```
```typescript
// Component class
export class AppComponent {
  logValue(value: string) {
    console.log(value);
  }
}
```
- `#inputRef` creates a reference to the `<input>` element.
- The `logValue()` method logs the value of the input when the button is clicked.

---

## **Two-Way Binding**
Two-way binding allows data to flow in both directions: from the component to the view and from the view to the component. It is commonly used with form inputs.

### **1. Two-Way Binding (`[( )]`)**:
- Combines property binding and event binding.
- Requires the `FormsModule` to be imported.

#### Example:
```typescript
// Component class
export class AppComponent {
  name = '';
}
```
```html
<!-- Template -->
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>
```
- When the user types in the input field, the `name` property in the component is updated.
- The `<p>` tag displays the updated value of `name`.

#### **How It Works**:
- `[(ngModel)]` is shorthand for:
  ```html
  <input [ngModel]="name" (ngModelChange)="name = $event">
  ```
  - `[ngModel]`: Binds the `name` property to the input value (component to view).
  - `(ngModelChange)`: Updates the `name` property when the input value changes (view to component).

---

## **Summary of Examples**

### **One-Way Binding (Component → View)**:
1. **Interpolation**:
   ```html
   <p>{{ message }}</p>
   ```
2. **Property Binding**:
   ```html
   <img [src]="imageUrl">
   ```
3. **Attribute Binding**:
   ```html
   <td [attr.colspan]="colSpan"></td>
   ```
4. **Class Binding**:
   ```html
   <div [class.active]="isActive"></div>
   ```
5. **Style Binding**:
   ```html
   <p [style.font-size]="fontSize"></p>
   ```

### **One-Way Binding (View → Component)**:
1. **Event Binding**:
   ```html
   <button (click)="onClick()">Click Me</button>
   ```
2. **Template Reference Variables**:
   ```html
   <input #inputRef>
   <button (click)="logValue(inputRef.value)">Log Value</button>
   ```

### **Two-Way Binding**:
1. **Two-Way Binding with `ngModel`**:
   ```html
   <input [(ngModel)]="name">
   <p>Hello, {{ name }}!</p>
   ```

---
### Different types of Directives in angular?
In Angular, directives are used to extend the functionality of HTML elements and attributes. There are three main types of directives in Angular:

1. **Component Directives**:
   - **Description**: Components are the most common type of directive in Angular. They are essentially directives with a template. Components are used to create reusable UI elements and are defined using the `@Component` decorator.
   - **Example**:
     ```typescript
     @Component({
       selector: 'app-example',
       template: `<h1>Hello, World!</h1>`
     })
     export class ExampleComponent {}
     ```

2. **Structural Directives**:
   - **Description**: Structural directives change the DOM layout by adding or removing elements. They are typically used to conditionally include or exclude elements from the DOM.
   - **Common Structural Directives**:
     - `*ngIf`: Conditionally includes or excludes an element based on an expression.
     - `*ngFor`: Repeats an element for each item in a list.
   - **Example**:
     ```html
     <div *ngIf="isVisible">Visible Content</div>
     <ul>
       <li *ngFor="let item of items">{{ item }}</li>
     </ul>
     ```

3. **Attribute Directives**:
   - **Description**: Attribute directives change the appearance or behavior of an element, component, or another directive. They are typically used to modify the attributes of an element.
   - **Common Attribute Directives**:
     - `ngClass`: Adds or removes CSS classes based on an expression.
     - `ngStyle`: Adds or removes inline styles based on an expression.
   - **Custom Attribute Directives**: You can also create custom attribute directives using the `@Directive` decorator.
   - **Example**:
     ```typescript
     @Directive({
       selector: '[appHighlight]'
     })
     export class HighlightDirective {
       constructor(private el: ElementRef) {
         el.nativeElement.style.backgroundColor = 'yellow';
       }
     }
     ```
     ```html
     <p appHighlight>Highlighted text</p>
     ```

### Summary of Directive Types:
- **Component Directives**: Create reusable UI elements with templates.
- **Structural Directives**: Modify the DOM layout by adding or removing elements.
- **Attribute Directives**: Change the appearance or behavior of elements.
---
[Back to top⤴️](#table-of-contents)

### Different types of Structural Directives in details?
In Angular, **structural directives** are used to manipulate the DOM by adding, removing, or replacing elements based on conditions or loops. They are prefixed with an asterisk (`*`) to indicate their structural nature. Below are the **key structural directives** in Angular, explained in detail:

---

### 1. **`*ngIf`**
   - **Purpose**: Conditionally includes or excludes an element from the DOM based on the evaluation of an expression.
   - **Syntax**: `*ngIf="expression"`
   - **Behavior**:
     - If the expression evaluates to `true`, the element is added to the DOM.
     - If the expression evaluates to `false`, the element is removed from the DOM.
   - **Example**:
     ```html
     <div *ngIf="isLoggedIn">
       Welcome, User!
     </div>
     ```
     ```typescript
     export class AppComponent {
       isLoggedIn = true;
     }
     ```
   - **Advanced Usage**:
     - You can use `else` to display an alternative template when the condition is `false`.
     ```html
     <div *ngIf="isLoggedIn; else loggedOut">
       Welcome, User!
     </div>
     <ng-template #loggedOut>
       Please log in.
     </ng-template>
     ```

---

### 2. **`*ngFor`**
   - **Purpose**: Repeats an element for each item in a list or collection.
   - **Syntax**: `*ngFor="let item of items; let i = index"`
   - **Behavior**:
     - Iterates over an array or iterable object and creates a new instance of the element for each item.
     - Provides additional context variables like `index`, `first`, `last`, `even`, and `odd`.
   - **Example**:
     ```html
     <ul>
       <li *ngFor="let item of items; let i = index">
         {{ i + 1 }}. {{ item }}
       </li>
     </ul>
     ```
     ```typescript
     export class AppComponent {
       items = ['Apple', 'Banana', 'Orange'];
     }
     ```
   - **Advanced Usage**:
     - Use `trackBy` to improve performance by tracking items by a unique identifier.
     ```html
     <ul>
       <li *ngFor="let item of items; trackBy: trackByFn">
         {{ item.name }}
       </li>
     </ul>
     ```
     ```typescript
     export class AppComponent {
       items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
       trackByFn(index: number, item: any): number {
         return item.id; // Track by item ID
       }
     }
     ```

---

### 3. **`*ngSwitch`**
   - **Purpose**: Conditionally displays one element from a set of possible elements based on the value of an expression.
   - **Syntax**:
     - `[ngSwitch]="expression"` (on the parent element)
     - `*ngSwitchCase="value"` (on child elements)
     - `*ngSwitchDefault` (optional, for a default case)
   - **Behavior**:
     - Evaluates the expression and compares it with the values provided in `*ngSwitchCase`.
     - Displays the element whose `*ngSwitchCase` matches the expression.
     - If no match is found, the `*ngSwitchDefault` element is displayed (if provided).
   - **Example**:
     ```html
     <div [ngSwitch]="status">
       <p *ngSwitchCase="'success'">Operation Successful!</p>
       <p *ngSwitchCase="'error'">An Error Occurred.</p>
       <p *ngSwitchDefault>Unknown Status.</p>
     </div>
     ```
     ```typescript
     export class AppComponent {
       status = 'success';
     }
     ```

---

### 4. **Custom Structural Directives**
   - **Purpose**: You can create your own structural directives using the `@Directive` decorator and the `TemplateRef` and `ViewContainerRef` services.
   - **Example**:
     ```typescript
     import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

     @Directive({
       selector: '[appUnless]'
     })
     export class UnlessDirective {
       @Input() set appUnless(condition: boolean) {
         if (!condition) {
           this.viewContainer.createEmbeddedView(this.templateRef);
         } else {
           this.viewContainer.clear();
         }
       }

       constructor(
         private templateRef: TemplateRef<any>,
         private viewContainer: ViewContainerRef
       ) {}
     }
     ```
     ```html
     <div *appUnless="isHidden">
       This content is shown unless `isHidden` is true.
     </div>
     ```
     ```typescript
     export class AppComponent {
       isHidden = false;
     }
     ```

---

### Key Points to Remember:
1. **Asterisk (`*`) Syntax**: The `*` is syntactic sugar for Angular's template syntax. It simplifies the usage of structural directives.
   - For example, `*ngIf` is transformed into:
     ```html
     <ng-template [ngIf]="condition">
       <div>Content</div>
     </ng-template>
     ```

2. **Performance Considerations**:
   - Use `trackBy` with `*ngFor` to optimize rendering for large lists.
   - Avoid using heavy logic inside structural directives, as they can trigger frequent DOM updates.

3. **Custom Structural Directives**: Angular allows you to create your own structural directives for advanced use cases.

---
[Back to top⤴️](#table-of-contents)

### Different types of Attribute in angular?
In Angular, **attribute directives** are used to change the appearance, behavior, or attributes of DOM elements. Unlike structural directives, which modify the DOM structure, attribute directives work with existing elements to enhance their functionality. Below are the **types of attribute directives** in Angular, explained in detail:

---

### 1. **Built-in Attribute Directives**
Angular provides several built-in attribute directives that are commonly used in applications:

#### a) **`ngClass`**
   - **Purpose**: Dynamically add or remove CSS classes from an element based on an expression.
   - **Syntax**: `[ngClass]="expression"`
   - **Behavior**:
     - The expression can be a string, array, or object.
     - If the expression is an object, keys are class names, and values are boolean expressions that determine whether the class is applied.
   - **Example**:
     ```html
     <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
       Content
     </div>
     ```
     ```typescript
     export class AppComponent {
       isActive = true;
       isDisabled = false;
     }
     ```

#### b) **`ngStyle`**
   - **Purpose**: Dynamically apply inline styles to an element based on an expression.
   - **Syntax**: `[ngStyle]="expression"`
   - **Behavior**:
     - The expression is typically an object where keys are style properties and values are their corresponding values.
   - **Example**:
     ```html
     <div [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">
       Styled Content
     </div>
     ```
     ```typescript
     export class AppComponent {
       textColor = 'red';
       fontSize = 20;
     }
     ```

#### c) **`ngModel`**
   - **Purpose**: Enables two-way data binding for form controls (e.g., input, select, textarea).
   - **Syntax**: `[(ngModel)]="property"`
   - **Behavior**:
     - Binds the value of a form control to a component property.
     - Updates the property when the user changes the input and vice versa.
   - **Example**:
     ```html
     <input [(ngModel)]="username" placeholder="Enter your name">
     <p>Hello, {{ username }}!</p>
     ```
     ```typescript
     export class AppComponent {
       username = '';
     }
     ```

---

### 2. **Custom Attribute Directives**
You can create your own attribute directives to add custom behavior or appearance to elements. Custom attribute directives are defined using the `@Directive` decorator.

#### Steps to Create a Custom Attribute Directive:
1. Use the Angular CLI to generate a directive:
   ```bash
   ng generate directive highlight
   ```
2. Implement the directive logic:
   ```typescript
   import { Directive, ElementRef, HostListener, Input } from '@angular/core';

   @Directive({
     selector: '[appHighlight]'
   })
   export class HighlightDirective {
     @Input() appHighlight = 'yellow'; // Default color

     constructor(private el: ElementRef) {}

     @HostListener('mouseenter') onMouseEnter() {
       this.highlight(this.appHighlight);
     }

     @HostListener('mouseleave') onMouseLeave() {
       this.highlight(null);
     }

     private highlight(color: string | null) {
       this.el.nativeElement.style.backgroundColor = color;
     }
   }
   ```
3. Use the directive in a template:
   ```html
   <p appHighlight>Hover over me!</p>
   <p [appHighlight]="'lightblue'">Hover over me too!</p>
   ```

---

### 3. **Host Binding and Host Listening**
Custom attribute directives often use `@HostBinding` and `@HostListener` to interact with the host element.

#### a) **`@HostBinding`**
   - **Purpose**: Binds a directive property to a host element's property.
   - **Example**:
     ```typescript
     @HostBinding('class.active') isActive = false;
     ```
     This binds the `isActive` property to the `class.active` property of the host element.

#### b) **`@HostListener`**
   - **Purpose**: Listens for events on the host element.
   - **Example**:
     ```typescript
     @HostListener('click') onClick() {
       this.isActive = !this.isActive;
     }
     ```
     This listens for a `click` event on the host element and toggles the `isActive` property.

---

### 4. **Attribute Directives with Inputs**
Custom attribute directives can accept inputs to make them more flexible and reusable.

#### Example:
```typescript
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText = ''; // Input for tooltip text

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip(this.tooltipText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip(text: string) {
    // Logic to display tooltip
  }

  private hideTooltip() {
    // Logic to hide tooltip
  }
}
```
```html
<div appTooltip="This is a tooltip">Hover over me</div>
```

---

### 5. **Attribute Directives for Accessibility**
You can create attribute directives to improve accessibility, such as adding ARIA attributes dynamically.

#### Example:
```typescript
@Directive({
  selector: '[appAriaLabel]'
})
export class AriaLabelDirective {
  @Input('appAriaLabel') ariaLabel = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('aria-label', this.ariaLabel);
  }
}
```
```html
<button appAriaLabel="Close">X</button>
```

---

### Summary of Attribute Directives:
1. **Built-in Directives**:
   - `ngClass`: Dynamically add/remove CSS classes.
   - `ngStyle`: Dynamically apply inline styles.
   - `ngModel`: Enable two-way data binding for form controls.

2. **Custom Directives**:
   - Create custom behavior or appearance for elements.
   - Use `@HostBinding` and `@HostListener` for interaction with the host element.
   - Accept inputs for flexibility.

3. **Accessibility Directives**:
   - Enhance accessibility by dynamically adding ARIA attributes.

   ### How to call rest api in angular using providers/standalone components
   In **Angular 18**, you can call a **REST API** using the `providers` array in different ways, such as providing `HttpClient` at different levels (e.g., in `AppModule`, `main.ts`, or a standalone component). Below are different methods to achieve this:

---

## **Method 1: Using `providers` in `main.ts` (Recommended)**
Instead of importing `HttpClientModule`, use `provideHttpClient()` in `providers`.

### 📌 **Step 1: Configure `main.ts`**
Modify `main.ts` to include `provideHttpClient()`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Providing HttpClient globally
}).catch(err => console.error(err));
```

### 📌 **Step 2: Create API Service**
Generate an API service:

```sh
ng generate service api
```

Then, modify `api.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Available throughout the app
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // GET Request
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

### 📌 **Step 3: Inject Service in Component**
Modify `app.component.ts` to fetch API data:

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
```

### 📌 **Step 4: Display Data in HTML**
Modify `app.component.html`:

```html
<h1>Posts</h1>
<ul>
  <li *ngFor="let post of posts">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
  </li>
</ul>
```

✅ **Run the application**:

```sh
ng serve
```

---

## **Method 2: Using `providers` in AppModule (Traditional)**
This method uses `HttpClientModule` inside `AppModule`.

### 📌 **Step 1: Modify `app.module.ts`**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Import HttpClientModule
  providers: [HttpClient], // Provide HttpClient here
  bootstrap: [AppComponent],
})
export class AppModule {}
```

💡 The rest of the setup remains the same (`ApiService`, `AppComponent`, and HTML).

---

## **Method 3: Providing `HttpClient` at Component Level**
You can also provide `HttpClient` inside a standalone component.

### 📌 **Step 1: Modify `app.component.ts`**
```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideHttpClient()], // Providing HttpClient at component level
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
```

✅ This approach is useful when `HttpClient` is only needed in specific components.

---

## **Comparison of Methods**
| Method | Where `HttpClient` is Provided | Recommended for |
|--------|--------------------------------|-----------------|
| **1. `provideHttpClient()` in `main.ts`** | Globally in `main.ts` | **Modern Angular projects** ✅ |
| **2. `providers: [HttpClient]` in `AppModule`** | In `app.module.ts` | Traditional apps |
| **3. `providers` in `@Component()`** | Only for the specific component | Isolated usage |

---

## **Summary**
- ✅ **Recommended:** Use `provideHttpClient()` in `main.ts` for better **tree-shaking and performance**.
- ✅ Use `providers: [HttpClient]` in `AppModule` for **traditional apps**.
- ✅ Provide `HttpClient` **at the component level** if it's needed **only in that component**.
---
###  How to call rest api in angular with appmodule?

In **Angular 18**, calling a **REST API** within `AppModule` follows a structured approach using `HttpClientModule`. Here’s how you can do it step by step.

---

### **1. Import HttpClientModule in AppModule**
First, ensure you import `HttpClientModule` in your **AppModule (`app.module.ts`)**.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Add HttpClientModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---
[Back to top⤴️](#table-of-contents)

### **2. Create a Service to Handle API Calls**
Create an Angular service using the CLI:

```sh
ng generate service api
```

This will create `api.service.ts` inside the `src/app` folder.

Now, update the service to make HTTP requests:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  constructor(private http: HttpClient) {}

  // GET Request
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST Request
  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  // PUT Request
  updatePost(id: number, postData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }

  // DELETE Request
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
```

---

### **3. Inject and Use the Service in AppComponent**
Modify `app.component.ts` to use the service and fetch data.

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
```

---

### **4. Display API Data in HTML**
Modify `app.component.html` to display the API response.

```html
<h1>Posts</h1>
<ul>
  <li *ngFor="let post of posts">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
  </li>
</ul>
```

---

### **5. Run and Test**
Start your Angular app using:

```sh
ng serve
```

You should see the API data displayed in the browser.

---

### **Summary**
✅ **Imported `HttpClientModule`** in `AppModule`.  
✅ **Created `ApiService`** to handle API requests.  
✅ **Injected and used the service** in `AppComponent`.  
✅ **Displayed the API data** in the HTML file.  
[Back to top⤴️](#table-of-contents)

### How to fix  CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
The **CORS (Cross-Origin Resource Sharing)** error occurs when a web application running at one origin (domain) tries to make a request to a server at a different origin, and the server does not allow the request due to missing or incorrect CORS headers.

To fix the **CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource** error in Angular, you can use one of the following approaches:

---
[Back to top⤴️](#table-of-contents)

### 1. **Fix CORS on the Server-Side (Recommended)**
The best and most secure way to resolve CORS issues is to configure the server to allow requests from your Angular application's origin.

#### Steps:
1. **Add CORS Headers on the Server**:
   - If you control the server, configure it to include the `Access-Control-Allow-Origin` header in the response.
   - For example, in a Node.js/Express server:
     ```javascript
     const express = require('express');
     const cors = require('cors'); // Use the cors middleware
     const app = express();

     // Allow requests from your Angular app's origin
     app.use(cors({
       origin: 'http://localhost:4200', // Replace with your Angular app's URL
     }));

     app.get('/api/data', (req, res) => {
       res.json({ message: 'Hello from the server!' });
     });

     app.listen(3000, () => {
       console.log('Server is running on port 3000');
     });
     ```

2. **Allow All Origins (Not Recommended for Production)**:
   - If you want to allow requests from any origin (not recommended for production):
     ```javascript
     app.use(cors()); // Allow all origins
     ```

3. **Set Specific Headers**:
   - If you need to allow specific HTTP methods or headers:
     ```javascript
     app.use(cors({
       origin: 'http://localhost:4200',
       methods: ['GET', 'POST', 'PUT', 'DELETE'],
       allowedHeaders: ['Content-Type', 'Authorization'],
     }));
     ```

---
[Back to top⤴️](#table-of-contents)


### 2. **Use a Proxy in Angular (Development Only)**
If you cannot modify the server, you can set up a **proxy** in your Angular application during development. This avoids CORS issues by making the API requests appear to come from the same origin as your Angular app.

#### Steps:
1. **Create a Proxy Configuration File**:
   - Create a file named `proxy.conf.json` in the root of your Angular project:
     ```json
     {
       "/api": {
         "target": "http://your-api-server.com",
         "secure": false,
         "changeOrigin": true
       }
     }
     ```
   - Replace `http://your-api-server.com` with the base URL of your API.

2. **Update `angular.json` to Use the Proxy**:
   - Modify the `serve` options in `angular.json` to use the proxy configuration:
     ```json
     "architect": {
       "serve": {
         "options": {
           "proxyConfig": "src/proxy.conf.json"
         }
       }
     }
     ```

3. **Use Relative URLs in Your Angular Service**:
   - Update your API calls to use relative URLs (without the domain):
     ```typescript
     // Example: Use /api instead of http://your-api-server.com/api
     this.http.get('/api/data').subscribe((data) => {
       console.log(data);
     });
     ```

4. **Restart the Angular Development Server**:
   - Restart the server for the proxy configuration to take effect:
     ```bash
     ng serve
     ```

---
[Back to top⤴️](#table-of-contents)

### 3. **Disable CORS in the Browser (Temporary Workaround)**
This is **not recommended** for production but can be used for local development and testing.

#### Steps:
1. **Disable CORS in Chrome**:
   - Close all instances of Chrome.
   - Open a terminal and run the following command:
     ```bash
     google-chrome --disable-web-security --user-data-dir=/tmp/chrome
     ```
   - This will open Chrome with CORS disabled. Use this only for testing.

2. **Use a Browser Extension**:
   - Install a browser extension like **CORS Unblock** or **Allow CORS** to bypass CORS restrictions.

---

### 4. **Use a Backend-to-Backend Solution**
If you cannot modify the server or use a proxy, you can create a backend service (e.g., using Node.js) that acts as a middleman between your Angular app and the API. Your backend service will make the request to the API and return the response to your Angular app.

#### Example:
1. **Create a Backend Service**:
   ```javascript
   const express = require('express');
   const axios = require('axios');
   const app = express();

   app.get('/api/data', async (req, res) => {
     try {
       const response = await axios.get('http://your-api-server.com/api/data');
       res.json(response.data);
     } catch (error) {
       res.status(500).json({ error: 'Something went wrong' });
     }
   });

   app.listen(3000, () => {
     console.log('Backend service is running on port 3000');
   });
   ```

2. **Call Your Backend Service from Angular**:
   ```typescript
   this.http.get('http://localhost:3000/api/data').subscribe((data) => {
     console.log(data);
   });
   ```

---

### 5. **Use JSONP (Only for GET Requests)**
If the API supports JSONP, you can use it to bypass CORS for GET requests. However, JSONP is outdated and not recommended for modern applications.

#### Example:
```typescript
import { HttpClientJsonpModule } from '@angular/common/http';

// In your service
this.http.jsonp('http://your-api-server.com/api/data?callback=JSONP_CALLBACK', 'callback').subscribe((data) => {
  console.log(data);
});
```

---

### Summary
- **Recommended**: Fix CORS on the server by adding the `Access-Control-Allow-Origin` header.
- **Development Workaround**: Use a proxy in Angular to avoid CORS issues.
- **Temporary Workaround**: Disable CORS in the browser (not for production).
- **Backend Solution**: Create a backend service to act as a middleman.
- **JSONP**: Use JSONP for GET requests (not recommended).

### Other option to call proxy is 
```
edit "start" of your package.json to look below

"start": "ng serve --proxy-config proxy.conf.json",

```
---
[Back to top⤴️](#table-of-contents)

### The difference between the new (@)control flow statement (introduced in Angular 17) and the *directive. Please give example of all control flow statements

The introduction of the **new `@` control flow statements** in **Angular 17** marks a significant shift in how developers handle conditional rendering and looping in Angular templates. These new control flow statements (e.g., `@if`, `@for`, `@switch`) are designed to replace or complement the traditional **`*` directives** (e.g., `*ngIf`, `*ngFor`, `*ngSwitch`). Here's a detailed comparison of the two:

---

### **1. Syntax**
#### **`@` Control Flow Statements**
- The new control flow statements use a **declarative, JavaScript-like syntax**.
- They are prefixed with `@` (e.g., `@if`, `@for`, `@switch`).
- No need for `*` (asterisk) or additional directives.
- Example:
  ```html
  @if (isLoggedIn) {
    <p>Welcome back!</p>
  } @else {
    <p>Please log in.</p>
  }
  ```

#### **`*` Directives**
- The traditional directives use **Angular's microsyntax** with `*` (asterisk).
- They are prefixed with `*` (e.g., `*ngIf`, `*ngFor`, `*ngSwitch`).
- Example:
  ```html
  <div *ngIf="isLoggedIn; else loggedOut">
    Welcome back!
  </div>
  <ng-template #loggedOut>
    Please log in.
  </ng-template>
  ```

---

### **2. Purpose**
#### **`@` Control Flow Statements**
- Designed specifically for **control flow** (e.g., conditionals, loops, switches) in templates.
- Provide a **more intuitive and readable syntax** for common use cases.
- Built-in support for advanced features like `@empty` for `@for` and `@case`/`@default` for `@switch`.

#### **`*` Directives**
- General-purpose **structural directives** that manipulate the DOM.
- Can be used for control flow but are more verbose and less intuitive for complex logic.
- Require additional syntax (e.g., `ng-template`, `trackBy`) for advanced use cases.

---

### **3. Features**
#### **`@` Control Flow Statements**
- **Built-in `@empty` block** for `@for`:
  ```html
  @for (item of items; track item.id) {
    <div>{{ item.name }}</div>
  } @empty {
    <div>No items found.</div>
  }
  ```
- **`@switch` with `@case` and `@default`**:
  ```html
  @switch (status) {
    @case ('active') { <p>Active</p> }
    @case ('inactive') { <p>Inactive</p> }
    @default { <p>Unknown</p> }
  }
  ```
- **No need for `ng-template`**: The new syntax eliminates the need for `ng-template` in most cases.

#### **`*` Directives**
- **`*ngFor` with `trackBy`**:
  ```html
  <div *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
  </div>
  ```
- **`*ngSwitch` with `*ngSwitchCase` and `*ngSwitchDefault`**:
  ```html
  <div [ngSwitch]="status">
    <p *ngSwitchCase="'active'">Active</p>
    <p *ngSwitchCase="'inactive'">Inactive</p>
    <p *ngSwitchDefault>Unknown</p>
  </div>
  ```
- **Requires `ng-template`** for `else` blocks in `*ngIf`:
  ```html
  <div *ngIf="isLoggedIn; else loggedOut">
    Welcome back!
  </div>
  <ng-template #loggedOut>
    Please log in.
  </ng-template>
  ```

---

### **4. Readability**
#### **`@` Control Flow Statements**
- More **intuitive and concise**.
- Closer to JavaScript syntax, making it easier for developers to understand.
- Example:
  ```html
  @if (isLoggedIn) {
    <p>Welcome back!</p>
  } @else {
    <p>Please log in.</p>
  }
  ```

#### **`*` Directives**
- More **verbose and less intuitive**.
- Requires familiarity with Angular's microsyntax and additional constructs like `ng-template`.
- Example:
  ```html
  <div *ngIf="isLoggedIn; else loggedOut">
    Welcome back!
  </div>
  <ng-template #loggedOut>
    Please log in.
  </ng-template>
  ```

---

### **5. Performance**
#### **`@` Control Flow Statements**
- Optimized for **better performance**.
- Built-in support for efficient change detection (e.g., `track` in `@for`).
- Example:
  ```html
  @for (item of items; track item.id) {
    <div>{{ item.name }}</div>
  }
  ```

#### **`*` Directives**
- Efficient but requires **manual optimization** (e.g., `trackBy` in `*ngFor`).
- Example:
  ```html
  <div *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
  </div>
  ```

---

### **6. Migration**
- The new `@` control flow statements are **optional** in Angular 17.
- Developers can gradually migrate from `*` directives to `@` control flow statements.
- Angular provides tools and schematics to automate the migration process.

---

### **Summary of Differences**

| Feature                | `@` Control Flow Statements                | `*` Directives                          |
|------------------------|--------------------------------------------|------------------------------------------|
| **Syntax**             | JavaScript-like, declarative (`@if`, `@for`). | Angular microsyntax with `*` (`*ngIf`, `*ngFor`). |
| **Purpose**            | Designed specifically for control flow.    | General-purpose structural directives.   |
| **Readability**        | More intuitive and concise.               | More verbose and less intuitive.         |
| **Features**           | Built-in `@empty`, `@switch` support.     | Requires `ng-template` and `trackBy`.    |
| **Performance**        | Optimized for better performance.         | Efficient but requires manual tuning.    |
| **Angular Version**    | Introduced in Angular 17 (new feature).   | Available in all Angular versions.       |

---
[Back to top⤴️](#table-of-contents)

### **When to Use What**
- Use **`@` control flow statements** if:
  - You are using Angular 17 or later.
  - You want a cleaner, more intuitive syntax.
  - You need built-in support for advanced features like `@empty` or `@switch`.
- Use **`*` directives** if:
  - You are working with older versions of Angular (pre-17).
  - You need a general-purpose solution for DOM manipulation.

---

### **Example Comparison**

#### Using `@if` (Control Flow Statement)
```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
} @else {
  <p>Please log in.</p>
}
```

#### Using `*ngIf` (Directive)
```html
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome back!
</div>
<ng-template #loggedOut>
  Please log in.
</ng-template>
```

---

### **Example 1**
The introduction of the **new `@` control flow statements** in **Angular 17** provides a more modern and intuitive way to handle conditional rendering, looping, and switching in Angular templates compared to the traditional **`*` directives**. Below is a detailed explanation of the differences, along with examples of all the new `@` control flow statements and their `*` directive equivalents.

---

### **Key Differences**

| Feature                | `@` Control Flow Statements                | `*` Directives                          |
|------------------------|--------------------------------------------|------------------------------------------|
| **Syntax**             | JavaScript-like, declarative (`@if`, `@for`, `@switch`). | Angular microsyntax with `*` (`*ngIf`, `*ngFor`, `*ngSwitch`). |
| **Purpose**            | Designed specifically for control flow.    | General-purpose structural directives.   |
| **Readability**        | More intuitive and concise.               | More verbose and less intuitive.         |
| **Features**           | Built-in `@empty`, `@switch` support.     | Requires `ng-template` and `trackBy`.    |
| **Performance**        | Optimized for better performance.         | Efficient but requires manual tuning.    |
| **Angular Version**    | Introduced in Angular 17 (new feature).   | Available in all Angular versions.       |

---
[Back to top⤴️](#table-of-contents)

### **Examples of All Control Flow Statements**

#### 1. **Conditional Rendering**
##### `@if` (New Control Flow Statement)
```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
} @else if (isGuest) {
  <p>Welcome, guest!</p>
} @else {
  <p>Please log in.</p>
}
```

##### `*ngIf` (Directive)
```html
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome back!
</div>
<ng-template #loggedOut>
  <div *ngIf="isGuest; else loginPrompt">
    Welcome, guest!
  </div>
  <ng-template #loginPrompt>
    Please log in.
  </ng-template>
</ng-template>
```

---

#### 2. **Looping**
##### `@for` (New Control Flow Statement)
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <div>No items found.</div>
}
```

##### `*ngFor` (Directive)
```html
<div *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</div>
<div *ngIf="items.length === 0">
  No items found.
</div>
```

---

#### 3. **Switching**
##### `@switch` (New Control Flow Statement)
```html
@switch (status) {
  @case ('active') {
    <p>Active</p>
  }
  @case ('inactive') {
    <p>Inactive</p>
  }
  @default {
    <p>Unknown</p>
  }
}
```

##### `*ngSwitch` (Directive)
```html
<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">Active</p>
  <p *ngSwitchCase="'inactive'">Inactive</p>
  <p *ngSwitchDefault>Unknown</p>
</div>
```

---

### **Advantages of `@` Control Flow Statements**
1. **Cleaner Syntax**:
   - The new syntax is more intuitive and closer to JavaScript, making it easier to read and write.
   - Example:
     ```html
     @if (isLoggedIn) {
       <p>Welcome back!</p>
     }
     ```

2. **Built-in Features**:
   - `@for` has a built-in `@empty` block for handling empty lists.
   - `@switch` has built-in `@case` and `@default` blocks.

3. **No Need for `ng-template`**:
   - The new syntax eliminates the need for `ng-template` in most cases, reducing boilerplate code.

4. **Better Performance**:
   - The new control flow statements are optimized for better performance and change detection.

---
[Back to top⤴️](#table-of-contents)

### **Advantages of `*` Directives**
1. **Backward Compatibility**:
   - `*` directives work in all Angular versions, making them suitable for older projects.

2. **Flexibility**:
   - `*` directives can be used for more than just control flow (e.g., `ngClass`, `ngStyle`).

3. **Familiarity**:
   - Many developers are already familiar with `*` directives, making them easier to use in existing projects.

---

### **When to Use What**
- Use **`@` control flow statements** if:
  - You are using Angular 17 or later.
  - You want a cleaner, more intuitive syntax.
  - You need built-in support for advanced features like `@empty` or `@switch`.
- Use **`*` directives** if:
  - You are working with older versions of Angular (pre-17).
  - You need a general-purpose solution for DOM manipulation.

---

### **Summary**
The new `@` control flow statements in Angular 17 provide a **modern, intuitive, and performant** way to handle control flow in templates, while the traditional `*` directives remain a reliable and widely used option for older projects. Here’s a quick recap of the examples:

| Control Flow          | `@` Syntax (Angular 17+)                  | `*` Syntax (All Angular Versions)        |
|-----------------------|-------------------------------------------|------------------------------------------|
| **Conditional**       | `@if`/`@else`/`@else if`                  | `*ngIf` with `ng-template`               |
| **Looping**           | `@for` with `@empty`                      | `*ngFor` with `trackBy`                  |
| **Switching**         | `@switch` with `@case`/`@default`         | `*ngSwitch` with `*ngSwitchCase`/`*ngSwitchDefault` |

By adopting the new `@` control flow statements, you can write cleaner, more maintainable Angular templates with less boilerplate code.

[Back to top⤴️](#table-of-contents)

### Explain with example Angular different types of directives e.g structural ,attribute, custom , other and  so on
Angular directives are a core feature that allow you to extend HTML with custom behavior and functionality. They can be categorized into several types, including **structural**, **attribute**, **component**, **custom**, **built-in**, **template**, **host**, **exportAs**, and more. Below is a detailed explanation of each type with examples, covering Angular up to version 19.

---

### 1. **Structural Directives**
Structural directives change the structure of the DOM by adding, removing, or manipulating elements. They are prefixed with an asterisk (`*`).

#### Examples:
- **`*ngIf`**: Conditionally adds or removes an element.
  ```html
  <div *ngIf="isVisible">
    This is visible!
  </div>
  ```
  The `<div>` is added to the DOM only if `isVisible` is `true`.

- **`*ngFor`**: Repeats an element for each item in a list.
  ```html
  <ul>
    <li *ngFor="let item of items">
      {{ item.name }}
    </li>
  </ul>
  ```
  This creates a `<li>` for each item in the `items` array.

- **`*ngSwitch`**: Conditionally displays elements based on a value.
  ```html
  <div [ngSwitch]="status">
    <p *ngSwitchCase="'success'">Success!</p>
    <p *ngSwitchCase="'error'">Error!</p>
    <p *ngSwitchDefault>Unknown status.</p>
  </div>
  ```

---

### 2. **Attribute Directives**
Attribute directives change the appearance or behavior of an element, component, or another directive. They are applied as attributes to existing elements.

#### Examples:
- **`ngClass`**: Dynamically adds or removes CSS classes.
  ```html
  <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
    Content
  </div>
  ```
  Adds the `active` class if `isActive` is `true` and the `disabled` class if `isDisabled` is `true`.

- **`ngStyle`**: Dynamically applies inline styles.
  ```html
  <div [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">
    Styled Text
  </div>
  ```
  Applies the `color` and `font-size` styles dynamically.

- **`ngModel`**: Enables two-way data binding for form inputs.
  ```html
  <input [(ngModel)]="username" placeholder="Enter username">
  ```

---

### 3. **Component Directives**
Components are a special type of directive with a template. They are the building blocks of Angular applications.

#### Example:
```typescript
@Component({
  selector: 'app-root',
  template: `<h1>Hello, World!</h1>`
})
export class AppComponent {}
```
Usage in HTML:
```html
<app-root></app-root>
```

---

### 4. **Custom Directives**
Custom directives are user-defined directives that extend HTML functionality. You can create **attribute** or **structural** directives.

#### Example: Custom Attribute Directive
```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```
Usage in HTML:
```html
<p appHighlight>Hover over me to highlight!</p>
```

#### Example: Custom Structural Directive
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```
Usage in HTML:
```html
<div *appUnless="isHidden">
  This content is shown unless `isHidden` is true.
</div>
```

---

### 5. **Built-in Directives**
Angular provides several built-in directives for common use cases.

#### Examples:
- **`ngIf`**, **`ngFor`**, **`ngSwitch`**: Structural directives.
- **`ngClass`**, **`ngStyle`**, **`ngModel`**: Attribute directives.

---

### 6. **Template Directives**
Template directives are used to manipulate Angular templates. They include `ng-template`, `ng-container`, and `ng-content`.

#### Examples:
- **`ng-template`**: Defines a template that can be reused.
  ```html
  <ng-template #myTemplate>
    <p>This is a template.</p>
  </ng-template>
  <div *ngTemplateOutlet="myTemplate"></div>
  ```

- **`ng-container`**: A logical container that does not render any additional DOM elements.
  ```html
  <ng-container *ngIf="isVisible">
    <p>This is inside a container.</p>
  </ng-container>
  ```

- **`ng-content`**: Used for content projection in components.
  ```html
  <!-- app-card.component.html -->
  <div class="card">
    <ng-content></ng-content>
  </div>
  ```
  Usage:
  ```html
  <app-card>
    <p>This content is projected into the card.</p>
  </app-card>
  ```

---

### 7. **Host Directives**
Host directives are applied to the host element of a component or directive. They allow you to modify the behavior or appearance of the host element.

#### Example:
```typescript
@Directive({
  selector: '[appHostDirective]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HostDirective {
  onMouseEnter() {
    console.log('Mouse entered!');
  }

  onMouseLeave() {
    console.log('Mouse left!');
  }
}
```
Usage:
```html
<div appHostDirective>Hover over me!</div>
```

---

### 8. **ExportAs Directives**
The `exportAs` property in a directive allows you to expose the directive instance to the template, making it accessible via a template reference variable.

#### Example:
```typescript
@Directive({
  selector: '[appExportAs]',
  exportAs: 'exportedDirective'
})
export class ExportAsDirective {
  logMessage() {
    console.log('Directive method called!');
  }
}
```
Usage in HTML:
```html
<div appExportAs #dir="exportedDirective">
  <button (click)="dir.logMessage()">Call Directive Method</button>
</div>
```

---

### 9. **Other Directives**
- **Pipes**: While not directives, pipes transform data in templates.
  ```html
  <p>{{ today | date:'fullDate' }}</p>
  ```

- **Router Directives**: Used for navigation and routing.
  ```html
  <a routerLink="/home">Home</a>
  <router-outlet></router-outlet>
  ```

---

### Summary Table
| Type              | Example Directives       | Purpose                                                                 |
|-------------------|--------------------------|-------------------------------------------------------------------------|
| **Structural**    | `*ngIf`, `*ngFor`, `*ngSwitch` | Modify the DOM structure by adding/removing elements.                  |
| **Attribute**     | `ngClass`, `ngStyle`, `ngModel` | Change the appearance or behavior of elements.                         |
| **Component**     | `@Component`             | Define reusable UI components with templates.                          |
| **Custom**        | User-defined directives  | Extend HTML functionality with custom logic.                           |
| **Built-in**      | `ngIf`, `ngFor`, `ngClass` | Provide common functionality out of the box.                           |
| **Template**      | `ng-template`, `ng-container`, `ng-content` | Manipulate templates and content projection.                           |
| **Host**          | Host bindings/listeners  | Modify the behavior of the host element.                               |
| **ExportAs**      | `exportAs` property      | Expose directive instances to templates.                               |
| **Other**         | Pipes, Router Directives | Transform data or handle navigation.                                   |

By leveraging these directives, you can create dynamic, reusable, and maintainable Angular applications.

[Back to top⤴️](#table-of-contents)

### Angular redirection?
In Angular, redirection is commonly used to navigate users from one route to another programmatically. This is typically done using Angular's **Router** service. Below is a detailed explanation of how to implement a **redirect function** in Angular, along with examples.

---

### 1. **Using `Router.navigate()`**
The `Router.navigate()` method is used to navigate to a specific route programmatically. It takes an array of route segments and an optional navigation extras object.

#### Example:
```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

redirectToHome() {
  this.router.navigate(['/home']);
}

redirectToUserProfile(userId: number) {
  this.router.navigate(['/user', userId]); // Navigates to /user/123
}

redirectWithQueryParams() {
  this.router.navigate(['/search'], { queryParams: { q: 'angular' } }); // Navigates to /search?q=angular
}
```

#### Usage in Template:
```html
<button (click)="redirectToHome()">Go to Home</button>
<button (click)="redirectToUserProfile(123)">View Profile</button>
<button (click)="redirectWithQueryParams()">Search Angular</button>
```

---

### 2. **Using `Router.navigateByUrl()`**
The `Router.navigateByUrl()` method is used to navigate to a specific URL. It takes a string representing the full URL.

#### Example:
```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

redirectToAbout() {
  this.router.navigateByUrl('/about');
}

redirectToExternalUrl() {
  window.location.href = 'https://angular.io'; // Redirects to an external URL
}
```

#### Usage in Template:
```html
<button (click)="redirectToAbout()">Go to About</button>
<button (click)="redirectToExternalUrl()">Visit Angular Website</button>
```

---

### 3. **Route Redirection in `RouterModule`**
You can configure route redirection directly in the `RouterModule` using the `redirectTo` property in the route configuration.

#### Example:
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirects empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'old-path', redirectTo: '/new-path', pathMatch: 'full' }, // Redirects /old-path to /new-path
  { path: 'new-path', component: NewComponent },
  { path: '**', redirectTo: '/not-found' } // Redirects all unknown paths to /not-found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

### 4. **Conditional Redirection**
You can implement conditional redirection based on certain logic, such as user authentication status.

#### Example:
```typescript
import { Router } from '@angular/router';

constructor(private router: Router, private authService: AuthService) {}

redirectBasedOnAuth() {
  if (this.authService.isLoggedIn()) {
    this.router.navigate(['/dashboard']);
  } else {
    this.router.navigate(['/login']);
  }
}
```

#### Usage in Template:
```html
<button (click)="redirectBasedOnAuth()">Go to Dashboard</button>
```

---

### 5. **Redirection with Guards**
Angular route guards can be used to enforce redirection based on certain conditions, such as authentication or authorization.

#### Example: Auth Guard
```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

#### Usage in Route Configuration:
```typescript
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
```

---

### 6. **Redirection in Components**
You can also perform redirection directly in component lifecycle hooks, such as `ngOnInit`.

#### Example:
```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

ngOnInit() {
  // Redirect to /home after 5 seconds
  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 5000);
}
```

---

### 7. **Redirection with Query Parameters and Fragments**
You can pass query parameters or fragments during redirection.

#### Example:
```typescript
redirectWithQueryParamsAndFragment() {
  this.router.navigate(['/search'], {
    queryParams: { q: 'angular' },
    fragment: 'section1'
  }); // Navigates to /search?q=angular#section1
}
```

#### Usage in Template:
```html
<button (click)="redirectWithQueryParamsAndFragment()">Search Angular</button>
```

---

### 8. **Redirection to External URLs**
To redirect to an external URL, you can use `window.location.href`.

#### Example:
```typescript
redirectToExternalUrl() {
  window.location.href = 'https://angular.io';
}
```

#### Usage in Template:
```html
<button (click)="redirectToExternalUrl()">Visit Angular Website</button>
```

---

### Summary Table
| Method/Feature               | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **`Router.navigate()`**       | Navigates to a route programmatically using an array of route segments.     |
| **`Router.navigateByUrl()`**  | Navigates to a specific URL.                                                |
| **`redirectTo` in Routes**    | Configures route redirection in the `RouterModule`.                         |
| **Conditional Redirection**   | Redirects based on conditions like authentication status.                   |
| **Route Guards**              | Enforces redirection using guards like `AuthGuard`.                        |
| **Query Parameters/Fragments**| Passes query parameters or fragments during redirection.                    |
| **External URLs**             | Redirects to external URLs using `window.location.href`.                    |


### Angular Route.redirectTo function
In Angular, the `redirectTo` property is used in the route configuration to specify a redirection from one route to another. This is useful when you want to redirect users from a certain path to a different path automatically.

### Usage of `redirectTo`

The `redirectTo` property is typically used within the `Routes` array in your Angular routing module. It allows you to define a route that, when matched, will redirect the user to another route.

### Syntax

```typescript
const routes: Routes = [
  { path: 'old-path', redirectTo: '/new-path', pathMatch: 'full' },
  { path: 'new-path', component: NewComponent }
];
```

### Key Points:

1. **`path`**: The path that you want to redirect from.
2. **`redirectTo`**: The path you want to redirect to.
3. **`pathMatch`**: This determines how the router should match the URL. The value `'full'` means the entire URL path needs to be matched and should be equal to the `path` property. This is often used with `redirectTo` to ensure that the redirection only happens when the entire path matches.

### Example

Suppose you have an application where you want to redirect users from the root path (`/`) to a default route like `/home`:

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

In this example:

- When the user navigates to the root URL (`/`), they will be automatically redirected to `/home`.
- The `pathMatch: 'full'` ensures that the redirection only occurs if the entire URL is exactly `/`.

### Important Notes:

- **Order of Routes**: The order of routes in the `Routes` array matters. Angular uses a first-match wins strategy when matching routes, so more specific routes should be placed before less specific ones.
- **Wildcard Routes**: If you want to redirect all unknown paths to a specific route, you can use a wildcard (`**`) route:

  ```typescript
  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/home' } // Redirects all unknown paths to /home
  ];
  ```

- **Avoid Infinite Loops**: Be careful when using `redirectTo` to avoid creating infinite loops. For example, redirecting from `/a` to `/b` and then from `/b` to `/a` will cause an infinite loop.

---
[Back to top⤴️](#table-of-contents)
### Explain ng g environments in which version of cli added and which version of angular? what are the use cases of it?

The `ng g environments` command is used in Angular CLI to generate environment files for different build configurations (e.g., development, production, staging). These files allow you to manage environment-specific variables and settings in your Angular application.

### **When was `ng g environments` added?**
- The `ng g environments` command was introduced in **Angular CLI version 15**. Prior to Angular CLI 15, developers manually created environment files (`environment.ts` and `environment.prod.ts`) and configured them in the `angular.json` file. Angular CLI 15 simplified this process by providing a dedicated command to generate and manage environment files.

### **Which version of Angular is it associated with?**
- Angular CLI 15 is part of **Angular 15**, which was released in **November 2022**. Therefore, the `ng g environments` command is available in Angular 15 and later versions.

---
[Back to top⤴️](#table-of-contents)
### **Use Cases of `ng g environments`**
The `ng g environments` command is used to:
1. **Manage Environment-Specific Configurations**:
   - Generate environment files for different build targets (e.g., development, production, staging).
   - Store environment-specific variables like API endpoints, feature flags, or third-party service keys.

2. **Simplify Configuration**:
   - Automatically updates the `angular.json` file with the new environment configurations, reducing manual errors.

3. **Support Multiple Build Targets**:
   - Create custom environments for different deployment scenarios (e.g., `staging`, `qa`, `production`).

4. **Improve Development Workflow**:
   - Easily switch between environments during development, testing, and production builds.

---

### **How to Use `ng g environments`**
1. **Generate Environment Files**:
   Run the following command to generate environment files:
   ```bash
   ng g environments
   ```
   This creates:
   - `src/environments/environment.ts` (default development environment).
   - `src/environments/environment.prod.ts` (production environment).

2. **Add Custom Environments**:
   To add a custom environment (e.g., staging), update the `angular.json` file and create a corresponding environment file (e.g., `environment.staging.ts`).

3. **Use Environment Variables**:
   Import the environment file in your Angular components or services:
   ```typescript
   import { environment } from '../environments/environment';
   console.log(environment.apiUrl);
   ```

4. **Build for Specific Environments**:
   Use the `--configuration` flag to build for a specific environment:
   ```bash
   ng build --configuration=staging
   ```

---

### **Example of Environment Files**
- **`environment.ts` (Development)**:
  ```typescript
  export const environment = {
    production: false,
    apiUrl: 'https://dev.api.example.com',
  };
  ```

- **`environment.prod.ts` (Production)**:
  ```typescript
  export const environment = {
    production: true,
    apiUrl: 'https://api.example.com',
  };
  ```
[Back to top⤴️](#table-of-contents)
---

### **Summary**
- **Introduced in**: Angular CLI 15 (Angular 15).
- **Purpose**: Simplify the creation and management of environment-specific configurations.
- **Use Cases**: Managing API endpoints, feature flags, and other environment-specific settings for different build targets.

This feature is particularly useful for developers working on applications that require different configurations for development, testing, and production environments.

[Back to top⤴️](#table-of-contents)

---

### Explain all Template Variables and Reference variables with example in angular?
In Angular, **template variables** and **reference variables** are used to reference and interact with DOM elements, Angular components, directives, or other constructs within the template. Below is a comprehensive explanation of all types of template and reference variables, along with examples.

---

### 1. **Template Variables**
Template variables are defined using the `#` symbol followed by a variable name. They can reference:
- DOM elements
- Angular components
- Directives
- Template contexts (e.g., `ngFor`)

#### Example 1: Reference to a DOM Element
```html
<input #myInput type="text" placeholder="Enter something">
<button (click)="logValue(myInput.value)">Log Input Value</button>
```
- `#myInput` is a reference to the `<input>` DOM element.
- You can access its properties, such as `value`, in the component class or directly in the template.

#### Example 2: Reference to an Angular Component
```html
<app-my-component #myComponent></app-my-component>
<button (click)="myComponent.doSomething()">Call Component Method</button>
```
- `#myComponent` is a reference to the instance of the `MyComponent` component.
- You can call its methods or access its properties.

#### Example 3: Reference to a Directive
```html
<div #myDirective="myDirective" myDirective></div>
```
- `#myDirective="myDirective"` creates a reference to the directive instance.
- This is useful when the directive exposes properties or methods.

---

### 2. **Reference Variables**
Reference variables are a subset of template variables. They are used to reference specific Angular constructs, such as `ngModel`, `ngForm`, or structural directives.

#### Example 1: `#var="ngModel"`
```html
<input [(ngModel)]="name" #myInput="ngModel" required>
<p *ngIf="myInput.invalid && myInput.touched">Name is required.</p>
```
- `#myInput="ngModel"` creates a reference to the `ngModel` directive instance.
- You can access properties like:
  - `myInput.valid`: Whether the control is valid.
  - `myInput.touched`: Whether the control has been touched.
  - `myInput.errors`: Validation errors.

#### Example 2: `#var="ngForm"`
```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input name="name" ngModel required>
  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```
- `#myForm="ngForm"` creates a reference to the `ngForm` directive instance.
- You can access properties like:
  - `myForm.valid`: Whether the form is valid.
  - `myForm.value`: The value of the form.
  - `myForm.submitted`: Whether the form has been submitted.

#### Example 3: `#var="ngTemplateOutlet"`
```html
<ng-template #myTemplate>
  <p>This is a template.</p>
</ng-template>
<ng-container *ngTemplateOutlet="myTemplate"></ng-container>
```
- `#myTemplate` is a reference to the `<ng-template>`.
- It is used with `ngTemplateOutlet` to dynamically render the template.

#### Example 4: `#var` with Structural Directives (`ngIf`, `ngFor`)
```html
<div *ngIf="condition; else elseBlock">Content</div>
<ng-template #elseBlock>Else Content</ng-template>
```
- `#elseBlock` is a reference to the `<ng-template>` used in the `else` clause of `ngIf`.

```html
<ul>
  <li *ngFor="let item of items; index as i" #listItem>
    {{ i }}: {{ item }}
  </li>
</ul>
```
- `#listItem` is a reference to each `<li>` element created by `ngFor`.

---

### 3. **Special Reference Variables**
Angular provides special reference variables for specific use cases.

#### Example 1: `$event`
```html
<input (input)="onInput($event)">
```
- `$event` is a special variable that represents the event object emitted by DOM events.

#### Example 2: `#var` with `ViewChild` in Component Class
```html
<input #myInput type="text">
```
```typescript
@ViewChild('myInput') myInput: ElementRef;
```
- `#myInput` is a reference to the `<input>` element.
- You can access it in the component class using `@ViewChild`.

---

### 4. **Template Context Variables**
These variables are available within the context of structural directives like `ngFor`.

#### Example: `ngFor` Context Variables
```html
<ul>
  <li *ngFor="let item of items; index as i; first as isFirst; last as isLast">
    {{ i }}: {{ item }} (First: {{ isFirst }}, Last: {{ isLast }})
  </li>
</ul>
```
- `index as i`: The current index of the iteration.
- `first as isFirst`: Whether the current item is the first in the iteration.
- `last as isLast`: Whether the current item is the last in the iteration.

---

### 5. **Summary of All Types**
| Type                          | Example                                  | Description                                                                 |
|-------------------------------|------------------------------------------|-----------------------------------------------------------------------------|
| **DOM Element Reference**     | `<input #myInput>`                      | References a DOM element.                                                   |
| **Component Reference**       | `<app-my-component #myComponent>`       | References an Angular component instance.                                   |
| **Directive Reference**       | `<div #myDirective="myDirective">`      | References a directive instance.                                            |
| **`ngModel` Reference**       | `<input #myInput="ngModel">`            | References the `ngModel` directive for form controls.                       |
| **`ngForm` Reference**        | `<form #myForm="ngForm">`               | References the `ngForm` directive for forms.                                |
| **Template Reference**        | `<ng-template #myTemplate>`             | References an `<ng-template>`.                                              |
| **Structural Directive**      | `<div *ngIf="condition; #elseBlock">`   | References a template used in structural directives like `ngIf`.            |
| **Context Variables**         | `*ngFor="let item of items; index as i"`| References context variables like `index`, `first`, `last` in `ngFor`.      |

---

### Key Takeaways
- Template variables (`#var`) are used to reference elements, components, or directives in the template.
- Reference variables (`#var="directive"`) are used to reference specific Angular constructs like `ngModel` or `ngForm`.
- Special variables like `$event` and context variables (`index`, `first`, `last`) are used in specific scenarios.

---

### **Template Variables and Reference Variables in Angular**
Template variables and reference variables in Angular allow interaction with elements, components, and directives inside a template. These variables provide an efficient way to manipulate elements without needing a component class property.

---

## **1. Local Reference Variables (`#varName`)**
- Defined using `#` before a variable name.
- Used to reference **DOM elements, components, or directives**.

### **Example (Accessing DOM Element)**
```html
<input #myInput type="text">
<button (click)="logValue(myInput.value)">Log Value</button>
```
```typescript
logValue(value: string) {
  console.log(value);
}
```
- Here, `#myInput` references the `<input>` element and is accessed inside the button’s click event.

### **Example (Accessing Component)**
```html
<app-child #childComp></app-child>
<button (click)="childComp.someMethod()">Call Method</button>
```
- `#childComp` allows calling methods of `<app-child>`.

---

## **2. Directive Export Variables (`exportAs`)**
- Some Angular directives support `exportAs`, enabling them to be referenced in templates.
- Commonly used with **forms, ngModel, custom directives**.

### **Example (`exportAs` with `ngForm`)**
```html
<form #myForm="ngForm">
  <input name="email" ngModel required>
</form>
<p>Form valid: {{ myForm.valid }}</p>
```
- `#myForm="ngForm"` makes the `ngForm` instance accessible.

### **Example (`exportAs` with `ngModel`)**
```html
<input name="email" ngModel #emailCtrl="ngModel" required>
<p>Email Valid: {{ emailCtrl.valid }}</p>
```
- `#emailCtrl="ngModel"` provides validation state.

### **Example (`exportAs` with Custom Directive)**
```typescript
@Directive({
  selector: '[myHighlight]',
  exportAs: 'highlight'
})
export class HighlightDirective {
  toggle() { console.log('Highlight toggled!'); }
}
```
```html
<div myHighlight #highlight="highlight"></div>
<button (click)="highlight.toggle()">Toggle Highlight</button>
```
- The custom directive `myHighlight` is referenced as `#highlight`.

---

## **3. Implicit Template Variables**
- Available in **structural directives** (`*ngIf`, `*ngFor`).
- Automatically created **without `#`**.

### **Example (`*ngFor`)**
```html
<ul>
  <li *ngFor="let item of items; index as i">
    {{ i }} - {{ item }}
  </li>
</ul>
```
- `index as i` provides the index of the loop.

### **Example (`*ngIf`)**
```html
<p *ngIf="user as u">User: {{ u.name }}</p>
```
- `user as u` allows using `u` as a reference.

---

## **4. Template Input Variables (`let-variable`)**
- Used in `<ng-template>` to pass context values.

### **Example (`ng-template`)**
```html
<ng-template #greet let-name>
  <p>Hello, {{ name }}!</p>
</ng-template>

<ng-container *ngTemplateOutlet="greet; context: { $implicit: 'John' }"></ng-container>
```
- `let-name` gets `'John'` from `context`.

---

## **Difference Between `#var="ngModel"` vs `#var="ngForm"`**
| Feature | `#var="ngModel"` | `#var="ngForm"` |
|---------|-----------------|-----------------|
| **Reference Type** | Individual form control (input) | Entire form |
| **Example** | `<input #emailCtrl="ngModel" ngModel>` | `<form #myForm="ngForm">` |
| **Common Properties** | `.value`, `.valid`, `.touched`, `.dirty` | `.valid`, `.invalid`, `.pristine`, `.controls` |

### **Example: `#var="ngModel"`**
```html
<input name="email" ngModel #emailCtrl="ngModel" required>
<p>Email Valid: {{ emailCtrl.valid }}</p>
```
- `#emailCtrl="ngModel"` checks validity of input.

### **Example: `#var="ngForm"`**
```html
<form #myForm="ngForm">
  <input name="email" ngModel required>
</form>
<p>Form Valid: {{ myForm.valid }}</p>
```
- `#myForm="ngForm"` checks validity of the entire form.

---

## **Summary**
| Type | Example | Purpose |
|-------|---------|---------|
| **Local Reference Variable** | `#myInput` | Access elements & components |
| **Directive Export Variable** | `#myForm="ngForm"` | Reference directives (`exportAs`) |
| **Implicit Variables** | `let item of items` | Auto-generated in `*ngFor`, `*ngIf` |
| **Template Input Variables** | `<ng-template let-name>` | Used inside `ng-template` |


[Back to top⤴️](#table-of-contents)