let user = {
    username : '',
    password : '',
    email : '',
    role : '' 
    // методы
    // сбросить пароль
    // getCourses(  
        if (admin) ...
        if (student) ... 
        if (guest) ... 
    )
}; 

// наследование - расширение
// 
// admin это расширение user
admin (user) {
    //changeUserStatus()
    // changeUserCourses()  
    // перезаписать метод getCourses (){ получить все курсы } 
}  
student (user) {
    // rate  
    // перезаписать метод getCourses (){ получить курсы конкретного студента } 
}  
// Полиморфизм  

course {
    title : '',  
        url : '',  
            price : 20,00, // privat, protected...
                getPrice : { return price; }
}  

course.price //!!!! 
course.getPrice() // 20$  
