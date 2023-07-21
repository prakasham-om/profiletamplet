
function sendData(e){
    event.preventDefault();
    //console.log("working")

    var name=document.getElementById('name').value;
    var number=document.getElementById('number').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById("password").value;
    var dob=document.getElementById("dob").value;
    var profession=document.getElementById("proffesion").value;
    var git=document.getElementById("git").value ;
    var university=document.getElementById("university").value 

    //password validation:
    let errorno1=document.getElementById('errorno1');
    let errorno=document.getElementById('errorno');
    errorno.innerHTML='';
   var expect=/^[6789][0-9]{9}$/

    var pass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if( ! password.match(pass)){
        errorno1.innerHTML='passward should contain A-z 0-9 greater than 6charecter'
    }
   
    //no. validation
  
    
     else if(!expect.test(number)){
        errorno.innerHTML='plz enter valid no pattern:[6-9]{1}[0-9]{9}'
        //window.location.assign('index.html')
        
    }else{
  

var usersdata={
    name:name,
    number:number,
    email:email,
    password:password,
    dob:dob,
    git:git,
    profession :profession,
    university:university
}

var read_data=JSON.stringify(usersdata);
localStorage.setItem("autho_data",read_data);
console.log('userdata')
 window.location.assign('login.html')
}

}
//login page start 
function login(e){
    event.preventDefault();
    //console.log("aljshg")
    var email=document.getElementById('email').value;
    var password=document.getElementById("password").value;
    console.log()
    var user=localStorage.getItem("autho_data");
    var data =JSON.parse(user);
    console.log(data.password)
    console.log(data.email)
    if(email === data.email && password === data.password){
        window.location.assign("profile.html")
    }

    history.pushState(null,null,location.href);
    window.onpopstate=function(){
        history.go(1);
    }
    
}

//login close



