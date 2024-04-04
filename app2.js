// add=()=>{
//     let amount = document.getElementById('amount')
//     let member =document.getElementById('member')
//     // let result = amount.value / member.value;
//     // document.getElementById('result').innerText=result.toFixed(2);
  
// if(persons.value == 0){
//     alert("please enter atleat one person 😅")
// }
// else{
//     let result = amount.value / persons.value;
//     document.getElementById('result').innerText = result.toFixed(0)
// }
// }


split=()=>{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    if(persons.value == 0){
        alert("please enter atleat one person 😅")
    }
    else{
        let result = amount.value / persons.value;
        document.getElementById('result').innerText = result.toFixed(0)
    }
    
}