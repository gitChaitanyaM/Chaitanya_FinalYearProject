const express =require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname+"/public"));

//Parse URL-encoded bodies
app.use(express.urlencoded({extended:true})); 

//Used to parse JSON bodies
app.use(express.json()); 

//set the view engine as ejs
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("index");    
});

app.post("/viewData",function(req,res){
    let sUserEmail = req.body.txtEmail;
    let sUserPassword = req.body.txtPassword;
    let sUserType="";

    if(sUserEmail=="admin@dataresearch.com" && sUserPassword=="admin"){
        sUserType="admin";
//        res.render("./admin/index");
    }
    if(sUserEmail=="user@dataresearch.com" && sUserPassword=="user"){
        sUserType="user";
//        res.render("./user/index");
    }
    if(sUserEmail=="manager@dataresearch.com" && sUserPassword=="manager"){
        sUserType="manager";
//        res.render("./manager/index");
    }
    res.render("displayData",{
        userType:sUserType,
        usersData:sData,
    });
});

app.get("/:id",(req,res)=>{
    let sUserId = req.params.id; 
    res.render("displayData",{
        userId:sUserId,
        usersData:sData
    });
});

app.get("/:id/:dept",(req,res)=>{
    let sUserId = req.params.id;
    let sDept = req.params.dept;
    res.render("displayData",{
        userId:sUserId,
        userDept:sDept,
        usersData:sData
    });
});

app.listen(port,function(){
    console.log("server is running on port "+port);
});

let sData = [{

    "id":"1",

    "name":"Vrushabh Redkar",

    "avatar":"",

    "email":"vrushabh@dataresearch.com",

    "phone":"123456789",

    "address":"Goregaon",

    "maritalStatus":"married",

    "DOJ":"01/21/2012",

    "Designation":"Developer",

    "Department": "IT",

    "CTC":"500000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"yes",

    "allowLTA":"no",

    "workingShift":"Morning"

},

{

    "id":"2",

    "name":"Roshan Gawas",

    "avatar":"",

    "email":"roshan@dataresearch.com",

    "phone":"123456789",

    "address":"Malad",

    "maritalStatus":"unmarried",

    "DOJ":"01/21/2012",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"500000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"yes",

    "allowLTA":"no",

    "workingShift":"Afternoon"

},

{

    "id":"3",

    "name":"Rushikesh Chavan",

    "avatar":"",

    "email":"rushikesh@dataresearch.com",

    "phone":"123456789",

    "address":"Kandivali",

    "maritalStatus":"married",

    "DOJ":"01/21/2012",

    "Designation":"Sales Executive",

    "Department": "Sales",

    "CTC":"500000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"yes",

    "allowLTA":"no",

    "workingShift":"Night"

},

{

    "id":"4",

    "name":"Chaitanya Manchekar",

    "avatar":"",

    "email":"chaitanya@dataresearch.com",

    "phone":"123456789",

    "address":"Goregaon",

    "maritalStatus":"unmarried",

    "DOJ":"01/02/2012",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"500000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"No",

    "allowLTA":"no",

    "workingShift":"Morning"

},

{

    "id":"5",

    "name":"Siddharth koli",

    "avatar":"",

    "email":"siddharth@dataresearch.com",

    "phone":"123456789",

    "address":"Malad",

    "maritalStatus":"married",

    "DOJ":"01/05/2015",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"450000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"no",

    "allowLTA":"no",

    "workingShift":"Afternoon"

},

{

    "id":"6",

    "name":"Rohan Bhadane",

    "avatar":"",

    "email":"rohan@dataresearch.com",

    "phone":"123456789",

    "address":"Bandra",

    "maritalStatus":"unmarried",

    "DOJ":"01/06/2016",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"600000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"yes",

    "allowLTA":"yes",

    "workingShift":"Night"

},

{

    "id":"7",

    "name":"Niraj Budhe",

    "avatar":"",

    "email":"niraj@dataresearch.com",

    "phone":"123456789",

    "address":"Ram mandir",

    "maritalStatus":"married",

    "DOJ":"01/11/2011",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"550000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"no",

    "allowLTA":"no",

    "workingShift":"Morning"

},

{

    "id":"8",

    "name":"Deepak Choudhary",

    "avatar":"",

    "email":"deepak@dataresearch.com",

    "phone":"123456789",

    "address":"Borivali",

    "maritalStatus":"unmarried",

    "DOJ":"01/12/2019",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"350000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"yes",

    "allowLTA":"yes",

    "workingShift":"Afternoon"

},

{

    "id":"9",

    "name":"Prathmesh Chopde",

    "avatar":"",

    "email":"prathmesh@dataresearch.com",

    "phone":"123456789",

    "address":"Dadar",

    "maritalStatus":"married",

    "DOJ":"01/06/2020",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"250000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"yes",

    "allowLTA":"no",

    "workingShift":"Night"

},

{

    "id":"10",

    "name":"Ritesh Gavde",

    "avatar":"",

    "email":"ritesh@dataresearch.com",

    "phone":"123456789",

    "address":"Vile Parle",

    "maritalStatus":"unmarried",

    "DOJ":"01/03/2017",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"600000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"no",

    "allowLTA":"no",

    "workingShift":"Morning"

},

{

    "id":"11",

    "name":"Abhang Mayekar",

    "avatar":"",

    "email":"Abhang@dataresearch.com",

    "phone":"123456789",

    "address":"Jogeshwari",

    "maritalStatus":"married",

    "DOJ":"01/10/2016",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"550000.00",

    "eligibleForBonus":"yes",

    "allowPaidLeave":"no",

    "allowLTA":"no",

    "workingShift":"Afternoon"

},

{

    "id":"12",

    "name":"Atharva Gosalkar",

    "avatar":"",

    "email":"atharva@dataresearch.com",

    "phone":"123456789",

    "address":"Jogeshwari",

    "maritalStatus":"unmarried",

    "DOJ":"01/08/2018",

    "Designation":"Tax consultant",

    "Department": "Accounts",

    "CTC":"560000.00",

    "eligibleForBonus":"no",

    "allowPaidLeave":"yes",

    "allowLTA":"no",

    "workingShift":"Night"

}

];

 
