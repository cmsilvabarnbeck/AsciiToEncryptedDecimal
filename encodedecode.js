
function encode() {

    s = document.getElementById("userInput").value;

    let finalOutput = [];
    var x = [];
    var y = 4;

    do { x.push(s.substring(0, y)) } 
    while ((s = s.substring(y, s.length)) != "");
        
    const fourUnits = x.map(letters => letters.toString());

        let z = [];
        for (n=0; n < 4; n++){

        convertStrings = fourUnits.map(units => units.charCodeAt(n).toString(2).padStart(8, '0'));
        z.push(convertStrings.toString().replace(/[A-Z]/gi, '0'));
            
        }   

        let k = [];
        for (n = 0; n < z.length; n++){

        counter = 0;
        k.push(z[n].toString().split(','));

        }
        
        let count = 0;
        let bitsOf8 = [];
        let binArray = []

    for (count = 0; count < x.length;){

        for (n = 0; n < z.length; n++){bitsOf8.push(k[n][count]);}
        binarySolution = bitsOf8.join('');
        count++;
}

    binarySolution = binarySolution.toString();

    let arrayCounter = 0;
    let slicePosition = 4;
    let finalValue = [];
    let finalCounter = 0;
    let finalSlice = 32;
    let finalDecimal = [];

    
        for (n = 0; n < binarySolution.length/32; n++){

                
        binArray[n] = (binarySolution.toString().match(/.{1,8}/g).slice(arrayCounter,slicePosition).reverse());
        arrayCounter = arrayCounter+4;
        slicePosition = slicePosition+4;
                
            for (m = 0; m < 8; m++){

            finalOutput.push(binArray[n].map(binCodes => binCodes.slice(m,m+1)).join(''));
                
            }
    }
        
        for (o = 0; o < x.length; o++){
            
            finalValue[o] = finalOutput.join('').toString().slice(finalCounter,finalSlice);
        
            finalCounter = finalCounter+32;
            finalSlice = finalSlice+32;
            
            
            finalDecimal[o] = (parseInt(finalValue[o], 2));
        
            
        }
    
        encodedOutput = finalDecimal.map(decimals => decimals.toString());
        alert(encodedOutput);
        
        
            
}
        
  

function decode(s) {

    s = document.getElementById("userInput2").value;
    let encodedBinArray = [];
    let deCodedBin = [];
    let binIn4 = [];
    let splitBin = [];
    let m = 0;
    let n = 0;
    finalDecode = [];
    let someNumber = 0;

    s = s.replace(/,/g, "").split(' ');

    for (n; n < s.length; n++) {

        encodedBinArray[n] = (+s[n]).toString(2).padStart(32, 0);
        deCodedBin[n] = encodedBinArray[n].match(/.{1,4}/g);

        binIn4[n] = deCodedBin[n];

        splitBin.push(binIn4[n]);

    }

    for (someNumber = 0; someNumber < s.length; someNumber++) {

        for (m; m < 4; m++) {


            splitBin[someNumber].map(elements => finalDecode.push(elements.slice(m, m + 1)));

        }

        m = 0;
    }
    let results = [];
    finalDecode = finalDecode.join('').toString().match(/.{1,8}/g);
    
    
    while (finalDecode.length) {
        results.push(finalDecode.splice(0, 4).reverse());
    }
    let lastBin = [];
    for (countDown = 0; countDown < s.length;){

    for (v = 0; v < 4; v++){
    lastBin.push(parseInt(results[countDown][v]).toString(10));
    
    }

    countDown++;
    v = 0;
    
}
    
    let lastArray = [];
    for (i = 0; i < lastBin.length; i++){
        lastArray.push(String.fromCharCode(parseInt(lastBin[i], 2)));
        
    
    }
    
    lastArray = lastArray.join('');
    alert(lastArray.replace(/\0/g, ''));
    
    
    
    
    

}












