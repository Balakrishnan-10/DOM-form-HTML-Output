function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}
function break_create(){
    var ele = document.createElement("br");
    return ele;
}
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var ele1 = document.createElement(tagname);
    ele1.setAttribute(attr1name,attr1value);
    ele1.setAttribute(attr2name,attr2value);
    return ele1;
}

function foo(){

var first = document.getElementById("firstname").value;
console.log(`Firstname: ${first}`)
var f_name = document.createElement("div")
f_name.innerHTML = `Firstname: ${f_name,first}`
 
  
var middle = document.getElementById("middlename").value;
console.log(`Middlename: ${middle}`)
var m_name = document.createElement("div")
m_name.innerHTML = `Middlename: ${m_name,middle}`

var last = document.getElementById("lastname").value;
console.log(`Lastname: ${last}`)
var l_name = document.createElement("div")
l_name.innerHTML = `Lastname: ${l_name,last}`

var email = document.getElementById("email").value;
console.log(`Email: ${email}`)
var email1 = document.createElement("div")
email1.innerHTML = `Email: ${email1,email}`

document.body.append(f_name,m_name,l_name,email1)

var password = document.getElementById("password").value;
console.log(`Password: ${password}`)

}


var first_label = label_create("label","for","firstname","Firstname");
var first_break = break_create();
var first_input = input_create("input","type","text","id","firstname");
var first1_break = break_create();

var middle_label = label_create("label","for","middlename","Middlename");
var middle_break = break_create();
var middle_input = input_create("input","type","text","id","middlename");
var middle1_break = break_create();

var last_label = label_create("label","for","lastname","Lastname");
var last_break = break_create();
var last_input = input_create("input","type","text","id","lastname");
var last1_break = break_create();

var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var email1_break = break_create();

var password = label_create("label","for","password","Password");
var password_break = break_create();
var password_input = input_create("input","type","password","id","password");
var password1_break = break_create();

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML = "ClickMe";

document.body.append(first_label,first_break,first_input,first1_break,middle_label,middle_break,middle_input,middle1_break,last_label,last_break,last_input,last1_break,email,email_break,email_input,email1_break,password,password_break,password_input,password1_break,button);




