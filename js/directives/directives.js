var app = angular.module('starter.directives', [])

// Injeção de dependência do header
app.directive("myHeader", function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "pages/template/header.html"
    };
});

// Injeção de dependência main
app.directive("myMain", function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "pages/main.html"
    };
});

// Injeção de dependência do footer
app.directive("myFooter", function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "pages/template/footer.html"
    };
});
