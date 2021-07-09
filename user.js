// User Class
// Checks Auth with Backend
// Gets user classes = []
// Classlist class:
// Gets and stores user classlists
// Creates new classlists

class User {
    constructor(address){
        this.address = address;
        this._id = "";
        this.name = "TEST_NAME";
        this.classLists = [];
    }

    // Clears up the page by running removeGroup from each class
    /*clearClasses(){
        this.classLists.forEach(group => group.removeGroup());

        this.classLists = [];
    }*/

    getAllGroupNames() {
        let allGroups = this.classLists.map(group => group.name);
        return allGroups;
    }

    getGroupPupils(groupName) {
        let pupils = this.classLists.find(({ name }) => name === groupName).pupils;
        return pupils;
    }

    async storeDetails(data) {
        console.log(data);
        this._id = data._id;
        this.name = data.user;
        // For all groups create a new group object
        data.classes.forEach(group => {
            let new_group = new Group(
                group._id,
                group.name,
                group.pupils
            );

            this.classLists.push(new_group);
        });

        return data.user;
    }
 
    // Fetches images from a given category
    // Takes category as a STRING and finds the matching ID for the get params.
    async userLogin(username, password) {
        let data = {
            email: username,
            pw: password
        }

        let res = await fetch(this.address + "/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })    
            .then(response => {
                //test for promise status?
                // add a return here ?
                return response.json()
            })
            
            .then(details => {
                console.log(details);
                this._id = details._id;
                this.name = details.user;
                // For all groups create a new group object
                details.classes.forEach(group => {
                    let new_group = new Group(
                        group._id,
                        group.name,
                        group.pupils
                    );

                    this.classLists.push(new_group);
                })
            })
            .then(() => {               
                alert("Logged in!");
                return { status: true, name: this.name };
            })
            .catch(err => {
                alert(err, "Sorry, could not log you in.");
                return { status: false, name: "Error" };
            });
        
        return res;

    }
};