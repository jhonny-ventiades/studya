/**
 * Angular Settings page controller.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-08-01
 */

angular.module('studyaAPP')
    .factory('Teachers', function ($resource) {
        return $resource('/api/teachers/:id',
            {}, { //parameters default
                getAll: {
                    method: 'GET',
                    params: {
                        id:'@id'
                    },
                    isArray:true
                }
            });
    });


angular.module('studyaAPP')
    .factory('TeachersAll', function ($resource) {
        return $resource('/api/teachers',
            {}, { //parameters default
                post: {
                    method: 'POST'
                }
            });
    });