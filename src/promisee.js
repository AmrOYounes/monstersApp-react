const myPromise= new Promise((resolve,reject)=>{

    if(true){
        setTimeout(()=>{
            resolve('i have succeeded');
    
        },1000)
    }
    else{
        reject('i have faild');
    }
    
     
});
myPromise
.then(value=>value+'fuck me')
.then(newValue=>console.log(newValue))
.catch(rejectValue=>console.log(rejectValue));