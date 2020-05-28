const dynamoDB = require("../db/dynamodb").documentClient();
//const dynamoDB = require("../db/dynamodb");
module.exports.getToDoList = function(req, res){
    console.log("get ToDo List");
    console.log(dynamoDB.documentClient());
    var params = {
        TableName: "todolist",
        key: {
            "docid":1,
            "task": "pay bill"
        }
    };
    dynamoDB.get(params, function(err,data){
        if(err){
            console.log("error in fetching data",JSON.stringify(err));
        }else{
            console.log("succsfully added task", JSON.stringify(data));
        }
    })
}