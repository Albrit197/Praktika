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
    
    "use strict";


    function arrayMadness(a, b) {
        let suma1 = 0;
        let suma2 = 0;
        a.le
        for (let i =0, {length} = a; i < length; i++)
        {
            suma1 += a[i]**2;
        }
        for (let i =0, {length} = b; i < length; i++)
        {
            suma2 += b[i]**3;
        }
        return suma1 > suma2; 
    }
     
    function noBoringZeros(n) {
      
        for(i=n.length-1; i>=0; i--)
        {
            if(n.charAt(i) == 0)
            {
            n.slice(0,n.length-i);
            }
            if(n.charAt(i) != 0)
            break;
        }
        
        return n;
      }
    
    // cons stringArr = string.split("")
    //   for (let i = 0; i<stringArr.length; i++){
    //     switch (stringArr[i]){
    //         case "ą":
    //         stringArr[i] = "a";
    //         break;
    //         case "ć":
    //         stringArr[i] = "c";
    //         break;
    //         case "ę":
    //         stringArr[i] = "e";
    //         break;
    //         case "ł":
    //         stringArr[i] = "l";
    //         break;
    //         case "ń":
    //         stringArr[i] = "n";
    //         break;
    //         case "ó":
    //         stringArr[i] = "o";
    //         break;
    //         case "ś":
    //         stringArr[i] = "s";
    //         break;
    //         case "ź":
    //         stringArr[i] = "z";
    //         break;
    //         case "ż":
    //         stringArr[i] = "z";
    //         break;
    //         default:
    //         stringArr[i];
    //     }
    //   }
    //   return stringArr.join("");
    
    
    
    
      var splitInParts = function(s, partLength){
        // Good Luck!
        let zodis = '';
    
        for ( let i=0; i<s.length; i++) {
    
            zodis += s[i];
            if ( i % partLength === partLength-1) {
                zodis += ' ';
            }
        }
        return zodis.trim();
      }
    
      
    
    
    
    
    
    
    
      console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
    //   console.log(splitInParts("HelloKata", 1), "H e l l o K a t a")
    //   console.log(splitInParts("HelloKata", 9), "HelloKata")
    
    
    // function digitize(n) {
    //     //code here
    // let answer = n;
    // let i = 0;
    // while (I < 10) {
    //     console.log("THE NUmber is" + i);
    //     i++;
        
    // }
    // return answer
    
    
    //   }
    // console.log( digitize(35231),[1,3,2,5,3]);
    function noBoringZeros(n) {

        var nToString = n.toString();
        var newNumber = "";
        var counter = 0;
        if (n===0)
            return 0;
        for(let i = nToString.length-1; i>=0; i--){
            counter++;
            if(nToString.charAt(i)!=="0"){
                for(let j = 0; j < nToString.length-counter+1; j++ )
                {
                    newNumber += nToString.charAt(j);
                }
              break;
            }
        }
    
        n = parseInt(newNumber);
        return n;
    }