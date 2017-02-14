function words(str){
    var strArray =str.split(" ");
    var strObject={};
    for(i=0;i<strArray.length;i++){

        if(strObject[strArray[i]]===undefined){  
            strObject[strArray[i]]=1;
        }else{ 
            strObject[strArray[i]]++;
        }
    }
    
    return strObject;
}