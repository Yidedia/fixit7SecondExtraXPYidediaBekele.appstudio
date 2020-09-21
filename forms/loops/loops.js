////create variables 
let row = Number(prompt('Enter the number of rows'))
let col = Number(prompt('Enter the number of colums'))

//loop
var x,y,chr;
for(x=1; x <= row; x++)
{ chr=''
   for (y=1; y <= col; y++)
     {
    chr=chr + ("*");        
      }
 document.write(chr);
 document.write("<br />")
 chr='';    
}
   