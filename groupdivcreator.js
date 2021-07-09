class GroupDivCreator{
    constructor(pupils, parent, style) {
        // Possibly do it all here? 
        this.style = style;
        this.pupils = pupils;
        this.parent = parent;
        this.id = "";
    }
    
    create() {
        let toAdd = ``;

        this.pupils.forEach(pupil => {
            toAdd += `<div class="${this.style}"><p>${pupil}</p></div>`
        });

        document.getElementById(parent).innerHTML = toAdd;

        //return toAdd;
    }

    remove() {
        document.getElementById(parent).innerHTML = "";
        //me.remove();
    }
}