(function Component(){
    'use strict'

    function Component (){
        if(!(this instanceof Component)){
            throw new TypeError(
                'Class constructor Component' + 
                "cannot be invoked without 'new'"
            )
        }
    }
    initializePrototype(Component)

    return Component
})()
function initializePrototype(Class){
    Object.defineProperty(
        Class, 'prototype' ,{
            configurable : false,
            enumerable : false ,
            writable : false
        }
    )
    Object.defineProperty(
        Class.prototype, 'constructor' , {
            configurable : true ,
            writable: true,
            enumerable: false,
            value: Class
        }
    )
}
console.log(Component)