const table=document.getElementsByTagName('table')[0];

for(let i=0;i<5;i++){
    table.tHead.rows[0].cells[i].style.backgroundColor='#b2ad7F';
}
table.tBodies[0].rows[0].style.backgroundColor='#feb236';
table.tBodies[0].rows[1].style.backgroundColor='#d64161';
table.tBodies[0].rows[2].style.backgroundColor='#b5e7a0';
table.tBodies[0].rows[3].style.backgroundColor='#92a8d1';
table.tBodies[0].rows[4].style.backgroundColor='#b2b2b2';
 
let arr=[];
let k=0;
for(let i=0;i<5;i++){    
    for(let j=0;j<5;j++){
        if(j%2!=0){
            arr[k]=table.tBodies[0].rows[i].cells[j].innerHTML;    
            k++;
        }
    } 
}
for(let k=0;k<10;k++){
    document.write("<br>");
    document.write(`"`+  arr[k]+`"`);
    document.write("<br>");   
}