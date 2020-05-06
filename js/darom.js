 "use strict"

// String.prototype.firstLeetter = function () {
//     return this[0];
// }

// console.log( 'ajfbkasd'.firstLetter() );

String.prototype.toAlternatingCase = function(){
    console.log(this);
    let naujasTekstas = '';


    for(let i=0; i<this.length; i++){
        let naujaRaide = this[i];
        

        if(naujaRaide === naujaRaide.toLowerCase()){
             //jeigu raide yra mazoji
             naujasTekstas = naujasTekstas + naujaRaide.toUpperCase();
        }
            else{
                naujasTekstas = naujasTekstas + naujaRaide.toLowerCase();
            }
           
    }

    console.log(naujasTekstas);
    return naujasTekstas;
    
}
    //console.log("hello world".toAlternatingCase() === "HELLO WORLD");
    console.log("Koja".toAlternatingCase() === "kOJA");
    
