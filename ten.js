let x=24;
let y=15;
let z=30;
if(x<y && x<z){
    console.log(x);
    if(y<z){
        console.log(y);
        console.log(z);
    }
}
else if(y<z && y<x){
    console.log(y);
    if(z<x){
        console.log(z);
        console.log(x);
    }
}
else if(z<x && z<y){
    console.log(z);
    if(x<y){
        console.log(x);
        console.log(y);
    }
}