(function (angular) {
    'use strict';

    angular.module('mdAccordion').component('mdAccordion', {
        transclude : true,
        controller : accordionController,
        template : '<div class="sph-accordion" layout="column"><ng-transclude></ng-transclude></div>',
        bindings : {
            multiple : '=?',
            title : '@'
        }
    });

    accordionController.$inject = [];

    function accordionController() {
        var $ctrl = this;

        $ctrl.items = [];
        $ctrl.multiple = angular.isUndefined($ctrl.multiple) ? false : $ctrl.multiple;
        $ctrl.active = false;
        $ctrl.expand = expand;
        $ctrl.register = register;

        function register(item) {
            $ctrl.items.push(item);
        }

        // TODO optimize method
        function expand(item) {
            item.expanded = !item.expanded;

            if (item.expanded && !$ctrl.multiple) {
                angular.forEach($ctrl.items, function (a) {
                    if (a !== item) {
                        a.expanded = false;
                    }
                });
            }
        }
    }

}(angular));