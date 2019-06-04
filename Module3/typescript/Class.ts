class student{
  st_id :number;
  st_name:string;   //thest are data member
  st_add:string;
  st_mob :string;

  //this is constructor of class
  constructor(st_id:number,st_name:string,st_add:string,st_mob:string){
    
    this.st_id = st_id;
    this.st_name = st_name;  
    this.st_add = st_add;
    this.st_mob = st_mob;
  }

  displaydata()  //display function to display inforamtion
  {

    console.log(this.st_id,this.st_name,this.st_add,this.st_mob);
  }

}


var obj = new student(101,'tops','surat','434343'); //here creating a object with set initial value to date member of class

obj.displaydata(); //calling function

