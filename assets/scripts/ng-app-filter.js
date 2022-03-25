var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.data = [{
            "cat": "Animal",
            "name": "Aardvark",
            "total": 22
        },
        {
            "cat": "Bird",
            "name": "Albatross",
            "total": 12
        },
        {
            "cat": "Reptile",
            "name": "Alligator",
            "total": 9
        },
        {
            "cat": "Animal",
            "name": "Alpaca",
            "total": 18
        },
        {
            "cat": "Fish",
            "name": "Beaver",
            "total": 7
        },
        {
            "cat": "Fish",
            "name": "Bison",
            "total": 22
        },
        {
            "cat": "Animal",
            "name": "Capybara",
            "total": 12
        },
        {
            "cat": "Bird ",
            "name": "Clam",
            "total": 54
        },
        {
            "cat": "Bird",
            "name": "Cobra",
            "total": 111
        },
        {
            "cat": "Reptile",
            "name": "Cockroach",
            "total": 102
        },
        {
            "cat": "Reptile",
            "name": "Dog",
            "total": 14
        },
        {
            "cat": "Bird",
            "name": "Dogfish",
            "total": 11
        },
        {
            "cat": "Animal",
            "name": "Eland",
            "total": 7
        }
    ]
});
app.filter('LetterFilter', function () {
    return function (items, letter) {
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.name.substring(0, item.name.length)) ||
                letterMatch.test(item.cat.substring(0, item.cat.length))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});