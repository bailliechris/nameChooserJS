class GroupPageCreator{
    constructor(groups, parent, style) {
        // Possibly do it all here? 
        this.style = style;
        this.groups = groups;
        this.parent = parent;
        this.id = "";
    }
    
    create() {
        let toAdd = ``;

        this.groups.forEach(group => {
            toAdd += `<div class="${this.style}"><p>${group}</p></div>`
        });

        document.getElementById(this.parent).innerHTML = toAdd;

        //return toAdd;
    }

    remove() {
        document.getElementById(this.parent).innerHTML = "";
        //me.remove();
    }
}