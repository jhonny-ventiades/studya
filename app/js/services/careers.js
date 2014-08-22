/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

angular.module('studyaAPP')
    .factory('Careers', function ($resource) {
        return $resource('/api/subjects',
            {}, { //parameters default
                get: {
                    method: 'GET',
                    isArray:true
                }
            });
    });