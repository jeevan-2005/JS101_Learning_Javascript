let arr1 = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let arr2 = [32, 30, 26, 28, 44]

let arr= [];

for(var i = 0; i<arr1.length; i++)
  {
    let obj = {};
    obj["Name"] = arr1[i];
    obj["Age"] = arr2[i];
    arr.push(obj);
  }

for(var i = 0;i<arr.length;i++)
{
  if(arr[i]["Age"]>30)
    console.log(arr[i]["Name"]);
}