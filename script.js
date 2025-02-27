/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer = arr.filter((item) => item.profession === "developer");
  console.log(developer.map((item) => item.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let remove = arr.filter((item) => item.profession !== "admin");
  console.log(remove);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    {
      id: 11,
      subject: "English",
    },
    {
      id: 12,
      subject: "Maths",
    },
    {
      id: 13,
      subject: "Science",
    }
  ];
  console.log(arr.concat(arr2));
}

concatenateArray(arr);