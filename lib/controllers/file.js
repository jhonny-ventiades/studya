/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
var path = require('path'),
    formidable = require('formidable'),
    fs = require('fs');

var mongoose = require('mongoose'),
    Teacher = mongoose.model('Teacher');

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

exports.upload = function(req,res){

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var old_path = files.miarchivo.path,
            //this part is for get a name of file diferent
            //file_ext = files.miarchivo.name.split('.').pop(),
            //index = old_path.lastIndexOf('/') + 1,

            id = fields._id,

            //file_ext = files.miarchivo.type,
            file_name = files.miarchivo.name, //old_path.substr(index),
            new_path = path.join(process.env.PWD, './lib/files/', file_name);//+ '.' + file_ext);


        fs.readFile(old_path, function(err, data) {
            fs.writeFile(new_path, data, function(err) {
                fs.unlink(old_path, function(err) {
                    if (err) {
                        res.status(500);
                        res.send('Error al guardar archivo');
                    } else {
                        var filterOptions = { $push: {files: { nameFile:file_name}}};

                        //UPDATE THE LIST OF FILES
                        Teacher.findOneAndUpdate({_id:id},filterOptions,{multi: false},function(err){
                            if(err) {
                                return next(err);
                            }
                            return res.json(200);
                        });



                        res.status(200);
                        res.json('Exito al guardar archivo');
                    }
                });
            });
        });
    });
};