// Your code here.
var n = "#";
for (var i = 0; i < 7; i++) {
	console.log(n);
  	n += "#";
}

// Your code here.
for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

// Your code here.
var odd = "# # # # ";
var even = " # # # #";
for (var i = 0; i < 8; i++) {
 if (i % 2 == 0)
   console.log(even);
  else
    console.log(odd);
}