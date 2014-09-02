/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

var mongoose = require('mongoose'),
    Teacher = mongoose.model('Teacher'),
    Student = mongoose.model('Student');

//Populating information about Subjects
Teacher.find({}).remove(function() {
    Teacher.create([
        {
            name:"Lic. filomeno",
            nameCareer:"Administracion",
            nameSubject:"Admin1",
            files:[{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"}]
        },
        {
            name:"Ing. Rodriguez",
            nameCareer:"Civil",
            nameSubject:"MAT234",
            files:[{nameFile:"file.pdf"},{nameFile:"imag.png"}]
        },
        {
            name:"Lic. Perez",
            nameCareer:"Economia",
            nameSubject:"Economia 1",
            files:[{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"}]
        },
        {
            name:"Lic. Jaldin",
            nameCareer:"Administracion",
            nameSubject:"Finanas 3",
            files:[{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"},{nameFile:"file.pdf"},{nameFile:"imag.png"}]
        },
        {
            name:"Lic. Franz",
            nameCareer:"Administracion",
            nameSubject:"Contabilidad",
            files:[{nameFile:"file.pdf"}]
        }
    ])
});


//Populating information about Subjects
Student.find({}).remove(function() {
    Student.create([
        {
            cu:"35-2657",
            name:"jhonny",
            phoneNumber:76940342
        }
    ])
});