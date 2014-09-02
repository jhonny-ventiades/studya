/**
 * Angular Settings page controller.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-08-02
 */

angular.module('studyaAPP')
    .factory('Students', function ($resource) {
        return $resource('/api/students',
            {}, { //parameters default
                registerStudent: {
                    method: 'POST'
                }
            });
    });