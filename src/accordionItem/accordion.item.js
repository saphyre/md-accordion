(function (angular) {
    'use strict';

    angular.module('mdAccordion').component('mdAccordionItem', {
        controller : accordionItemController,
        bindings : {
            expanded : '=?',
            onExpand : '&'
        },
        transclude : {
            title : 'mdAccordionTitle',
            content : 'mdAccordionContent'
        },
        require : {
            accordionCtrl : '^?mdAccordion'
        },
        template :
            '<div class="md-accordion" layout="column">\
                <md-button class="md-primary accordion-toolbar" ng-click="$ctrl.toggle()" layout="row">\
                    <div flex ng-transclude="title" layout="row" layout-align="start start"></div>\
                    <ng-md-icon icon="{{ $ctrl.expanded ? \'expand_less\' : \'expand_more\' }}"></ng-md-icon>\
                </md-button>\
                <md-content flex ng-transclude="content" ng-show="$ctrl.expanded" class="md-accordion-content"></md-content>\
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