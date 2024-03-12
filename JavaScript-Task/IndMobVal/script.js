function validate(){
    var text=document.getElementById("text1").value;

    var regx=/^[6-9]\d{9}$/;
    if(regx.test(text)){
        document.getElementById("lbltext").innerHTML="Valid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="green";
    }
    else{
        document.getElementById("lbltext").innerHTML="InValid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red";
    }
}

/*\d - match any digit ([0-9])
\w - match any word character (a-z,A-Z,0-9 & _)*/