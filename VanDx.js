Cau 1:

function ptbn(a,b){
    if (a==0 &&b==0){
        alert("phuong trinh vo so nghiem");
    }
    if (a==0&&b!=0){
        alert("phuong trinh vo nghiem")
    }
    if (a!=0){
        return -b/a;
    }
}
ptbn(5,10);


Cau 2:
Ham
function indexof(a,arr){
    let index = -1;
    for (let i = 0 ; i <arr.length ; i++) {
        if (a==arr[i]){
            index = i;
        }
    }
    return index;
}
Chuong Trinh

let arr = [1,3,5];
    arr1 = [2,5,8];
    inxdexofX=[];
function userindex(){
    for (let i = 0; i < arr1.length; i++) {
        inxdexofX.push(indexof(arr1[1],arr));
    }
    return inxdexofX
}

Cau 3:

Ham

function count(arr){
    let arram = ["a", "o", "e", "u", "i"];
    let check = false;
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        let index = arram.indexOf(arr[i]);
        if (index!=-1){
            check=true;
            count++;
        }
    }
    if(check){
        return count;
    } else {
        return check;
    }
}

Chuong Trinh

function countstr(arrstr){
    let arrnew = arrstr.split;
    count(arrnew);
}

Cau 4:

class Animal{
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newname){
        return this.name = newname;
    }
    setWeight(newweight){
        this.weight = newweight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return "name :"+this.name+";"+"weight:"+this.weight;
    }

}


let animal1= new Animal("Elephant",45.6);
animal1.toString();

let animal2= new Animal();
animal2.setName("voi");
animal2.setWeight(50);
animal2.setName("Mouse");