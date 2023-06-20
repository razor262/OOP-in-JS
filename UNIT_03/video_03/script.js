console.log('power_on');  

// class - > function 
// ab class - > class - >  object  

    let a = 'Ivan';  
    let b = '777888866666666';  

    const person = new User(a, b)

    console.log(person.username)
    console.log(person)  
    console.log(person.validatePassword())

    let firstStudent = new Student(a, b, 'I123')  
    console.log(firstStudent); 
    console.log(firstStudent.getStudentCourses()); 
    console.log(firstStudent.validatePassword());
