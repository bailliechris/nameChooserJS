let user = new User("http://localhost:5000");

async function login() {
   // Add check for data types/formatting here.
   let email = document.getElementById("username").value;
   let pw = document.getElementById("password").value;
   
   //let res = await user.userLogin(email, pw);
   let res = await user.userLogin("sporkina@hotmail.com", "sporks");

   navSwap(res.status, res.name);
   closeForm(1);
}


function showGroups() {
   let groupNames = user.getAllGroupNames();
   let groupPage = new GroupPageCreator(groupNames, "card_area", "classname_div");
   console.log(groupNames);
   groupPage.create();
}
// Add register function

// Main entry function
function main() {
   // user.userLogin("sporkina@hotmail.com", "sporks");
}

main();