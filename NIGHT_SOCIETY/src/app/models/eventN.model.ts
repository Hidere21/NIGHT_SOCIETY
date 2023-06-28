export class Event{
    name?: String
    address?: String
    date_from?: Date
    date_to?: Date
    hour?: String
    images?: String[]
    description?: String
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
        opinions?: [],
        qualify?: []        
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
            this.qualify = qualify
            }
}

