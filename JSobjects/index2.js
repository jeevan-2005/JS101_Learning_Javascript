let arr = [
    {
      grade: "V",
      students: [
        {name: "Nrupul", marks: [10, 20, 30]},
        {name: "Prateek", marks: [20, 30, 40]}
      ]
    },
    {
      grade: "VI",
      students: [
        {name: "Aman", marks: [10, 20, 30]},
        {name: "Albert", marks: [20, 30, 40]}
      ]
    },
    {
      grade: "VII",
      students: [
        {name: "Yogesh", marks: [10, 20, 30]},
        {name: "Sandhya", marks: [20, 30, 40]}
      ]
    }
  ]

for(let i = 0; i<arr.length;i++)
  {
    let a = arr[i]["students"]
    var check = 0
    var index
    for(let j = 0;j<a.length;j++)
      {
        let b = a[j]["marks"];
        var sum = 0;
        for(let k = 0;k<b.length;k++)
          {
            sum += b[k];
          }
        
        if(check<sum)
        {check = sum;index = j};
      }

    console.log(arr[i]["grade"]+"-"+arr[i]["students"][index]["name"]+"-"+check);
  }