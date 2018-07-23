export class myfirstService{

	result;
    myData = [{
		"name": "Nazeer",
		"age": 26,
		"address": "Chennai"
	},
	{
		"name": "Dilip",
		"age": 25,
		"address": "VM Street"
	}, {
		"name": "karthi",
		"age": 25,
		"address": "Triplicane"
    }
    , {
		"name": "Arzath",
		"age": 26,
		"address": "Kottivakkam"
	}, {
		"name": "Hari",
		"age": 27,
		"address": "Guindy"
	}
]

addNewData(name:string, age:number, address:string){
    this.myData.push({name, age, address});
}

// editData(i){
	
// 	return this.myData[i].name
// 	console.log(this.myData[i].name);

// }

deleteData(val){
    let user = this.myData.indexOf(val);
    this.myData.splice(user,1);
    console.log("inside service",val);
    console.log("MainData",this.myData);
}
   
}

  