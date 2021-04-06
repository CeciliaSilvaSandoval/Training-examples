//Generics - separate logic from type 
function echo(data:any):any{
    return DataCue;
}

echo('string');
echo(21);
echo(true);
echo({name:'pepe',age:3})

//generic function in react are to be used
function betterEcho<T>(data:T):T{
    return data;
}
betterEcho<string>('string');
betterEcho<number>(21);
betterEcho<boolean>(true);
betterEcho<{name:string,age:number}>({name:'pepe',age:3})


let Hobbies0: string[]=['cooking','baseball'];

let Hobbies1: Array<string> =['cooking','baseball'];
let Hobbies2: Array<number> =[1,2];
let Hobbies3: Array<boolean> =[true,false];
let Hobbies4: Array<{}> =[{},{}];
let Hobbies5: any[]=['cooking','baseball'];

type myType={name:string,age:number};

class Collection<T extends string|number|myType>{
    add(data:T){
        console.log(data);
    }
}
let obj0= new Collection<string>();
obj0.add('hello');

let obj1= new Collection<number>();
obj1.add(5);

let obj2= new Collection<myType>();
obj2.add({name:'pepe',age:3});
