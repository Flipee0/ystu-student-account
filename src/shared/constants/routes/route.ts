export enum Route {
    Main = '/',
    StudentProfile = '/student-profile',
}

export enum StudentProfileRoute {
    GeneralInformation = `${Route.StudentProfile}/general-information`,
    Curriculum = `${Route.StudentProfile}/curriculum`,
    Grades = `${Route.StudentProfile}/grades`,
    Portfolio = `${Route.StudentProfile}/portfolio`,
    MyRequisitions = `${Route.StudentProfile}/my-requisitions`,
}
