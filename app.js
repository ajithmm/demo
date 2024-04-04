add=()=>{
    let amount = document.getElementById('amount')
    let member =document.getElementById('member')
    let result = amount.value / member.value;
    document.getElementById('result').innerText=result.toFixed(2);
}