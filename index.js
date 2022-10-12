console.log("asynchonous with callback 1");

getDate(1, (students) => {
                console.log(students)
                    getCourses(students, (courses) => {
                        console.log(courses.courses)
                            getMarks(courses.courses, (marks) => {
                                console.log(marks)
                            });
                    });
                    
});

console.log("asynchonous with callback 2");


function getDate (id, callBack) {
    setTimeout(() => {
        callBack ({id: id, name: 'Md. Omar Faruk'});
    }, 500);
}

function getCourses (id, callBack) {
    setTimeout(() => {
        callBack ({id: id.id, name: id.name, courses: ["JavaScript", "Python"]});
    }, 550)
}

function getMarks(courses, callBack) {
    setTimeout(() => {
        callBack ({[courses[0]]: 99, [courses[1]]: 100,});
    }, 600)
}
