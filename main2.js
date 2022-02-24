class User{
    constructor(fname,lname,username,pass,age){
         this.firstname = fname
         this.lastname = lname
         this.username = username
         this.password = pass
         this.age = age
         this.lastloggedin
         this.isloggedin = false
         this.isactive = true
    }
    signIn(){


        this.isloggedin = true
        this.lastloggedin = Date.now()
    }
    Signout(){

        this.isloggedin = false

    }
    getlastloggedin(){
        const date = new Date (this.lastloggedin)
        return date.toLocaleTimeString()
    }
    deactivateUser(){
        this.isactive = false
    }
    reactivate(){
        this.isactive = true
        alert ('Welcome Back' + this.firstname)
    }

} 
const u1 = new User('adam','muna','adammuna','qqq',15,'P.E')
const u4 = new User ('hanin','farhat','hanin1','sasdf',16,'10th')
u1.signIn()
console.log(u1);
console.log(u4);
class Teacher extends User {
    constructor(fname,lname,username,pass,age,subject,salary){
    super(fname,lname,username,pass,age)
    this.subject = subject
    this.salary =salary
    this.workhours = 0
    }
    giveMark()
{

}
}
class Student extends User {
    constructor(fname,lname,username,pass,age,grade,attidute){
    super(fname,lname,username,pass,age)
    this.grade = grade
    this.attidute=attidute
    }
    recivemark(){

    }

}
class School{
    constructor(name){
        this.name = name
        this.grade = {}
        this.teachers = []
        this.students = []
    }
    registerstudent(fname,lname,username,pass,age,grade){
        const student = new Student(fname, lname,username,pass,age,grade)
    }
   hireTeacher(fname,lname,username,pass,age,subject,salary){
       const teacher = new Teacher(fname,lname,username,pass,age,subject,salary)
       this.teachers.push(teacher)
   } 

}
const school = new School ("st.george school")


school.hireTeacher('adam','muna','adammuna','qqq',15,'P.E')
school.registerstudent('hanin','farhat','hanin1','sasdf',16,'10th')

console.log(school);