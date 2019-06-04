var arr = ["iphone","dot","php","java"];

//there two type of loop 1.foreach loop

 arr.forEach(element => {
    
    console.log(element);
 });

 //for loop
 for(var i =0;i<arr.length;i++)
 {
     console.log(arr[i]);

 }

 //do while loop
 var i = 0
 do
 {
     console.log(arr[i]);

      i = i + 1;


 }while(i<arr.length);

//while loop
var j =0;
while(j<arr.length)
{
    console.log(arr[j]);
 j =  j+1;
}

