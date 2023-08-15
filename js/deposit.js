document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const totalDepositAmount = parseFloat(depositAmount);

    const depositeBalance = document.getElementById('deposite-balance');
    const totalDepositBalance = depositeBalance.innerText;
    const totalBalanceAmount = parseFloat(totalDepositBalance);

    const stockBalance = document.getElementById('stock-balance')
    const totalStock = stockBalance.innerText;
    const stockBalanceAmount = parseFloat(totalStock);

    const currentDeposit = totalBalanceAmount + totalDepositAmount;

    const remainStockBalance = stockBalanceAmount + totalDepositAmount;

    depositeBalance.innerText = currentDeposit;
    stockBalance.innerText = remainStockBalance;
    
    depositInput.value = '';
})