/**
 * Angular Settings page controller.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

angular.module('studyaAPP')
    .factory('Subject', function ($resource) {
        return $resource('/api/subjects/:id',
            {}, { //parameters default
                get: {
                    method: 'GET',
                    params: {
                        id:'@id'
                    },
                    isArray:true
                }
            });
    });