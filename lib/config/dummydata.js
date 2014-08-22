/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

var mongoose = require('mongoose'),
    Subject = mongoose.model('Subject');

//Populating information about Subjects
Subject.find({}).remove(function() {
    Subject.create([{
            nameFaculty: "Teconologia",
            career: [
                {
                    nameCareer: 'Ing. Sistemas',
                    course: [
                        {
                            nameCourse: 'Primero',
                            subjects: [
                                {
                                    nameSubject: 'Matematica I',
                                    professor: 'Juanito Gonzales',
                                    files:[{
                                        name:"libro matematica 1",
                                        link:"imag.png"
                                    },{
                                        name:"tarea1",
                                        link:"file.pdf"
                                    },{
                                        name:"Ejercicios",
                                        link:"file.pdf"
                                    }]
                                },
                                {
                                    nameSubject: 'Fisica I',
                                    professor: 'Marcelo Panoso',
                                    files:[{
                                        name:"tarea1",
                                        link:"file.pdf"
                                    },{
                                        name:"Ejercicios",
                                        link:"file.pdf"
                                    }]
                                },
                                {
                                    nameSubject: 'Ingles I',
                                    professor: 'Juliana Rocabado'
                                }
                            ]
                        },
                        {
                            nameCourse: 'Segundo',
                            subjects: [
                                {
                                    nameSubject: 'Matematica II',
                                    professor: 'Marco Porcel',
                                    files:[{
                                        name:"libro matematica 2",
                                        link:"/files/download/imag.png"
                                    },{
                                        name:"tareas",
                                        link:"/files/download/file.pdf"
                                    },{
                                        name:"Ejercicios",
                                        link:"/files/download/file.pdf"
                                    }]
                                },
                                {
                                    nameSubject: 'Fisica II',
                                    professor: 'Marcelo Panoso'
                                },
                                {
                                    nameSubject: 'Ingles II',
                                    professor: 'Juliana Rocabado'
                                },
                                {
                                    nameSubject: 'Calculo II',
                                    professor: 'Felix Rodriguez',
                                    files:[{
                                        name:"libro matematica ",
                                        link:"/files/download/imag.png"
                                    },{
                                        name:"tarea1",
                                        link:"/files/download/file.pdf"
                                    },{
                                        name:"Ejercicios",
                                        link:"/files/download/file.pdf"
                                    }]
                                }
                            ]
                        }
                    ]
                }
                ,
                {
                    nameCareer: 'Ing. Telecomunicaciones',
                    course: [
                        {
                            nameCourse: 'Tercero',
                            subjects: [
                                {
                                    nameSubject: 'Matematica III',
                                    professor: 'Juanito Gonzales'
                                },
                                {
                                    nameSubject: 'Quimica III',
                                    professor: 'Marcelo Panoso'
                                }
                            ]
                        }
                    ]
                }
            ]

    }])
});