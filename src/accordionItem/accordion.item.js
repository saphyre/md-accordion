(function (angular) {
    'use strict';

    angular.module('mdAccordion').component('mdAccordionItem', {
        controller : accordionItemController,
        bindings : {
            title : '@',
            expanded : '=?',
            onExpand : '&'
        },
        transclude : true,
        require : {
            accordionCtrl : '^?mdAccordion'
        },
        template :
            '<div class="md-accordion" layout="column">\
                <md-button class="md-primary accordion-toolbar" ng-click="$ctrl.toggle()" layout="row">\
                    <h2 flex class="md-flex">{{ $ctrl.title }}</h2>\
                    <ng-md-icon icon="{{ $ctrl.expanded ? \'expand_less\' : \'expand_more\' }}"></ng-md-icon>\
                </md-button>\
                <md-content flex layout-padding ng-transclude ng-show="$ctrl.expanded"></md-content>\
            </div>'
    });

    accordionItemController.$inject = [];

    function accordionItemController() {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            if ($ctrl.accordionCtrl) {
                $ctrl.accordionCtrl.register($ctrl);
            }
        };

        $ctrl.toggle = toggle;

        function toggle() {
            if ($ctrl.accordionCtrl) {
                $ctrl.accordionCtrl.expand($ctrl);
            } else {
                $ctrl.expanded = !$ctrl.expanded;
            }

            if ($ctrl.onExpand) {
                $ctrl.onExpand();
            }
        }
    }

}(angular));