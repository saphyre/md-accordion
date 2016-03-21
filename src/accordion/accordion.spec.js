describe('Accordion', function () {
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
        template = '\
            <md-accordion multiple="multiple">\
                <md-accordion-item>\
                    <md-accordion-title>Blind Guardian</md-accordion-title>\
                    <md-accordion-content>And then there was silence</md-accordion-content>\
                </md-accordion-item>\
                <md-accordion-item>\
                    <md-accordion-title>Iron Maiden</md-accordion-title>\
                    <md-accordion-content>Fear of the dark</md-accordion-content>\
                </md-accordion-item>\
            </md-accordion>';
        $scope = $rootScope.$new();
        $scope.multiple = false;

        element = $compile(template)($scope);
        $scope.$digest();
    }));

    it('should have title', function () {
        expect(element.find('h2').eq(0).find('md-accordion-title').html()).toEqual('Blind Guardian');
        expect(element.find('md-content').eq(0).find('md-accordion-content').html()).toEqual('And then there was silence');
        expect(element.find('md-content').eq(0).hasClass('ng-hide')).toBe(true);

        expect(element.find('h2').eq(1).find('md-accordion-title').html()).toEqual('Iron Maiden');
        expect(element.find('md-content').eq(1).find('md-accordion-content').html()).toEqual('Fear of the dark');
        expect(element.find('md-content').eq(1).hasClass('ng-hide')).toBe(true);

        // collapse
        element.find('button').eq(0).triggerHandler('click'); // clicking  on the title
        $scope.$digest();
        expect(element.find('md-content').eq(0).hasClass('ng-hide')).toBe(false);

        // expand
        element.find('button').eq(1).triggerHandler('click'); // clicking  on the title
        $scope.$digest();
        expect(element.find('md-content').eq(0).hasClass('ng-hide')).toBe(true);
        expect(element.find('md-content').eq(1).hasClass('ng-hide')).toBe(false);

        $scope.multiple = true;
        $scope.$digest();
        element.find('button').eq(0).triggerHandler('click'); // clicking  on the title
        $scope.$digest();
        expect(element.find('md-content').eq(0).hasClass('ng-hide')).toBe(false);
        expect(element.find('md-content').eq(1).hasClass('ng-hide')).toBe(false);
    });
});