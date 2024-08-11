let a = 36;   //simple if
if (a > 35);
{
    console.log("success");
}

//if.....else
a = 32;
if (a > 35) {
    console.log("success")
}
else
{
    console.log("failure")
}

//nasted if
a = 30;
if (a > 20)
{
    if (a < 50)
    {
        console.log("good")
    }
    else
    {
        console.log("bad")
        }
}

//if....else....if
let role = "admin";
if (role == "admin")
{
    console.log("welcome to admin")
}
else if (role == "teacher")
{
    console.log("welcome to teacher")
}
else if (role == "student")
{
    console.log("welcome to student")
}
else
{
    console.log("welcome to guest")
}


//while loops
a = 5;   //initialization
while (a < 15)  //condition
{
    console.log(a);
    a++   //updation
}

//do...while loops
a = 22;
do {
    console.log(a);
    a--;
}
while (a > 1);

//for-loops
for (let i = 22; i >= 1; i--)
{
    console.log(i)
}



let arr = [5, 6, 3, 4, 2]

//for....of
for (let i of arr)
{
    console.log(i)
}

//for....in
for (let i in arr) {
    console.log(i)
}


//forEach
arr.forEach(function (ele)
{
    console.log(ele)
})