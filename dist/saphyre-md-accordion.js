!function(n){"use strict";n.module("mdAccordion",["ngMdIcons","ngMaterial"])}(angular),function(n){"use strict";function t(){function t(n){e.items.push(n)}function o(t){t.expanded=!t.expanded,t.expanded&&!e.multiple&&n.forEach(e.items,function(n){n!==t&&(n.expanded=!1)})}var e=this;e.items=[],e.multiple=n.isUndefined(e.multiple)?!1:e.multiple,e.active=!1,e.expand=o,e.register=t}n.module("mdAccordion").component("mdAccordion",{transclude:!0,controller:t,template:'<div class="sph-accordion" layout="column"><ng-transclude></ng-transclude></div>',bindings:{multiple:"=?",title:"@"}}),t.$inject=[]}(angular),function(n){"use strict";function t(){function n(){t.accordionCtrl?t.accordionCtrl.expand(t):t.expanded=!t.expanded,t.onExpand&&t.onExpand()}var t=this;t.$onInit=function(){t.accordionCtrl&&t.accordionCtrl.register(t)},t.toggle=n}n.module("mdAccordion").component("mdAccordionItem",{controller:t,bindings:{expanded:"=?",onExpand:"&"},transclude:{title:"mdAccordionTitle",content:"mdAccordionContent"},require:{accordionCtrl:"^?mdAccordion"},template:'<div class="md-accordion" layout="column">                <md-button class="md-primary accordion-toolbar" ng-click="$ctrl.toggle()" layout="row">                    <h2 flex class="md-flex" ng-transclude="title"></h2>                    <ng-md-icon icon="{{ $ctrl.expanded ? \'expand_less\' : \'expand_more\' }}"></ng-md-icon>                </md-button>                <md-content flex layout-padding ng-transclude="content" ng-show="$ctrl.expanded"></md-content>            </div>'}),t.$inject=[]}(angular);
//# sourceMappingURL=saphyre-md-accordion.js.map
