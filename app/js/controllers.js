'use strict';

/* Controllers */

kendoApp.controller('MyCtrl', function($scope) {
  $scope.productsDataSource = {
              type: "odata",
              serverFiltering: true,
              transport: {
                  read: {
                      url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                  }
              }
          };
});