//Question:"Given a string, return an array where each element is a 2-value tuple → (character, frequency). Character order same as first appearance in string."
//input s = "aabbc"
//output=[['a', 2],['b', 2],['c', 1]]



function stringFreq(string){
// let string="hello world";
    let array=[];
    let fre={};
    for(let ch of [...string]){
        // let ch=string[i];
        if(fre[ch]){
            fre[ch]++;
        }else{
            fre[ch]=1;
        }
    }
    //  console.log(fre);

    for(let key in fre){
        let arr=[];
        arr.push(key,fre[key]);
        array.push(arr);
        
    }
    //  console.log(array);
     
    return array;

}
console.log(stringFreq("hello world"));
console.log(stringFreq("AAaa 1122!!@@  bbBB"));
console.log(stringFreq("hi😊😊😢hi"));
console.log(stringFreq("abcabcabcabc!!!???aaaBBBccc"));
console.log(stringFreq("hi\nhi\thi"));
console.log(stringFreq("eéeeé"));
