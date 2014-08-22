/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
var path = require('path');


exports.downloadByID = function(req,res){
    var dir = path.join(__dirname, '../files/' + req.params.id);
    res.download(dir, req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Downloading");
        }
    });
};