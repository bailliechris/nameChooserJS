// Stores details of classlist
// id = string
// name = string
// pupils = [];


class Group {
    constructor(id, name, pupils) {
        this._id = id;
        this.name = name;
        this.pupils = [...pupils];
    }
}