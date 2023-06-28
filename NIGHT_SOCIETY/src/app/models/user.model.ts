export class User {

    //atributos
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    number?: string;
    dateBirth?: string;
    gener?:string;
    userImage?:string;


    //constructor

    constructor(
        name = "",
        lastName = "",
        email = "",
        password = "",
        number = "",
        dateBirth = "",
        gener = "",
        userImage = ""
    ){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.number = number;
        this.dateBirth = dateBirth;
        this.gener = gener;
        this.userImage = userImage;
    }


}