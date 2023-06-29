export class Event{
    name?: String
    address?: String
    date_from?: Date
    date_to?: Date
    hour?: String
    images?: String[]
    description?: String
    likes?: Number
    _id?:String
    opinions?: []
    qualify?: []

    constructor(
        name = "",
        address = "",
        date_from = new Date(),
        date_to = new Date(),
        hour = "",
        images = [],
        description = "",
        _id= "",
<<<<<<< HEAD:NIGHT_SOCIETY/src/app/models/event.model.ts
        opinions?: [],
        likes = 0

=======
        opinions?: [],    
        qualify?: []    
>>>>>>> 7f7f62e4d10cbecfde7ff7fb0e4aa2fbae81cd9b:NIGHT_SOCIETY/src/app/models/eventN.model.ts
         ){
            this.name = name;
            this.address = address;
            this.date_from  = date_from 
            this.date_to = date_to;
            this.hour = hour;
            this.images = images;
            this.description = description
            this._id = _id;
            this.opinions = opinions
<<<<<<< HEAD:NIGHT_SOCIETY/src/app/models/event.model.ts
            this.likes =likes
            }
=======
            this.qualify = qualify
          }
>>>>>>> 7f7f62e4d10cbecfde7ff7fb0e4aa2fbae81cd9b:NIGHT_SOCIETY/src/app/models/eventN.model.ts
}

