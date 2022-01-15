
const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){

    var today=new Date();
    var currentday=today.getDay();
    var day="";

    if(currentday==0){
        day="sunday";
    }
    else if(currentday==1){
        day="monday";
    }
    else if(currentday==2){
        day="tuesday";
    }
    else if(currentday==3){
        day="wednesday";
    }
    else if(currentday==4){
        day="thursday";
    }
    else if(currentday==5){
        day="friday";
    }
    else{
        day="saturday";
    }
    res.render("list", {kindOfDay: day});
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});