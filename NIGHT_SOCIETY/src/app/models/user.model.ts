export class User {

    //atributos
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;


    //constructor

    constructor(
        name = "",
        lastName = "",
        email = "",
        password = ""
    ){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


}