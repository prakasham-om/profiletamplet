var showbtn=document.getElementById("uploadbtn")
window.onload=function getData(){
    let fetchdata=localStorage.getItem("autho_data");
    let freshData=JSON.parse(fetchdata);
    let getimg=localStorage.getItem('img');
    let profile=JSON.parse(getimg);
    console.log(profile);
    var newImage = document.getElementById('img_get');
        newImage.src = profile;
    

    

    console.log(freshData.git)
    console.log(freshData.profession)
    document.getElementById('profilename').innerHTML=freshData.name
    document.getElementById('card-name').innerHTML=freshData.name
    document.getElementById('number').innerHTML=freshData.number
    document.getElementById('email').innerHTML=freshData.email;
    document.getElementById('proffesion').innerHTML=freshData.profession
    document.getElementById('dobs').innerHTML=freshData.dob;
    document.getElementById('git').innerHTML=freshData.git;
    document.getElementById('university').innerHTML=freshData.university;
    document.getElementById('imgg').innerHTML=newImage.outerHTML

    document.getElementById("profilebtn").addEventListener('click',(e)=>{
        event.preventDefault();
        window.location.assign("dummy.html")
        console.log("helooooo")
     })
   document.getElementById('delete').addEventListener('click',()=>{
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/')
 
   })
}   
//getData();


