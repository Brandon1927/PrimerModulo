function funcionFibo(n){
    let fibonacci = [0, 1]
    if(n<2){
        return false
    }else if(n==1){
        return [0]
    }
    else{
        for (let p = 2; p < n; p++){
            fibonacci[p]= fibonacci[p-1] + fibonacci[p-2]
            console.log(p)
        }
        return fibonacci       
    }
}

console.log(funcionFibo(15))