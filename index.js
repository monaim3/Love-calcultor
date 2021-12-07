// const sentence="he is mukul is one of the lowest developer .Mukul wants to get some better job.but he not found.but still mukul searching .";

// const checking=sentence.match(/mukuls/gi);
// const finalCheck= checking?checking.length: '0 match';
// // console.log(finalCheck);

// let position=sentence.search(/mukul/i);
//  position= position>= 1 ? position: "not found"
  
// console.log(position)

// problem 2:::

const student=["shakib", "rakibul", "mukul", "selimsss"];
     let longest="";
     for (i=0;i<student.length; i++){
         if(student[i].length>longest.length){
             longest=student[i]
         } 
        }
        console.log(longest);
        console.log(student.indexOf(longest))