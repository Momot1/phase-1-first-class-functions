function receivesAFunction(test){
    return test();
}

function returnsANamedFunction(){
    return function name(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}