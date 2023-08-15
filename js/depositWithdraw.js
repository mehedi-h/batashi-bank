document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // const depositAmountNubmer = parseFloat(depositAmount);
    const depositeBalance = document.getElementById('deposite-balance');
    const totalBalance = depositeBalance.innerText;
    depositeBalance.innerText = depositAmount;

    // console.log();
    depositInput.value = '';
})