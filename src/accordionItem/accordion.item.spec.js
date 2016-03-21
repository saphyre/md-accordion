describe('AccordionItem', function () {
    'use strict';

    var $compile,
        $rootScope,
        $scope,
        element,
        template;

    beforeEach(module('mdAccordion'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        template = '<md-accordion-item title="Blind Guardian" on-expand="onExpandFn()">And then there was silence</md-accordion-item>';
        $scope = $rootScope.$new();
        $scope.onExpandFn = jasmine.createSpy();

        element = $compile(template)($scope);
        $scope.$digest();
    }));

    it('should have title', function () {
        expect(element.find('h2').html()).toEqual('Blind Guardian');
        expect(element.find('md-content').find('span').html()).toEqual('And then there was silence');
        expect(element.find('md-content').hasClass('ng-hide')).toBe(true);

        // collapse
        element.find('button').triggerHandler('click'); // clicking  on the title
        $scope.$digest();
        expect(element.find('md-content').hasClass('ng-hide')).toBe(false);
        expect($scope.onExpandFn).toHaveBeenCalled();

        // expand
        element.find('button').triggerHandler('click'); // clicking on the title
        $scope.$digest();
        expect(element.find('md-content').hasClass('ng-hide')).toBe(true);
    });
});