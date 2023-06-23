export class User {

    //atributos
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    number?: string;
    dateBirth?: string;
    gener?:string


    //constructor

    constructor(
        name = "",
        lastName = "",
        email = "",
        password = "",
        number = "",
        dateBirth = "",
        gener = ""
    ){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.number = number;
        this.dateBirth = dateBirth;
        this.gener = gener;
    }


}