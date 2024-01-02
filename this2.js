
let user = {
    name: "Khushi",
    age : 24,
    childObj :{
        newName : "Namaste js",
        getDetails (){
            console.log(this.name, this.newName)
        },
        myDetails: () => {
            console.log(this, this.names, this.newName);
        }
    },
    getName :()=>{
        console.log(this.name);
    }
}
// normal function only point to immediate parent so => this will point to immediate object
// arrow function point to parent object
user.childObj.getDetails();
user.childObj.myDetails();
user.getName();