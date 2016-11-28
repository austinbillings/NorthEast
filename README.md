# NorthEast

Angular Viewport magic by Austin for free.

### Dependencies

  - AngularJS

### Installation

```bash
  bower install northeast
```

### Usage

Make sure you require the `NE` module in your app, like so.

```js
  angular.module('MyApp', ['NE']);
```

Next, inject the `NorthEast` service into a controller, and reference it as a scope variable so you can use **NorthEast** in your frontend.

```js
  angular.module('MyApp')
    .controller('MyController', function ($scope, NorthEast) {
      $scope.ne = NorthEast;
      $scope.ui = {
        sidebarWidth: 300
      };
    });
```

Now, use Northeast in your `ng-style` directives, as seen in the following examples.

#### Divide the screen evenly into 4 horizontal sections, offset by the width of a 300px-wide sidebar.

Because we want the horizontal width of the page split into 5 total sections, we'll target the `x` axis using NorthEast.

```html
  <div ng-controller="MyController">
    <!-- Sidebar -->
    <div class="sideBar" ng-style="{'width': ui.sidebarWidth}"> <!-- SIDEBAR CONTENT --> </div>
    <!-- Quadrants outside sidebar -->
    <div class="quadrant" ng-style="{'width': ne.x.divide(4, ui.sidebarWidth)}"> First Quadrant </div>
    <div class="quadrant" ng-style="{'width': ne.x.divide(4, ui.sidebarWidth)}"> Second Quadrant </div>
    <div class="quadrant" ng-style="{'width': ne.x.divide(4, ui.sidebarWidth)}"> Third Quadrant </div>
    <div class="quadrant" ng-style="{'width': ne.x.divide(4, ui.sidebarWidth)}"> Fourth Quadrant </div>
  </div>
```
