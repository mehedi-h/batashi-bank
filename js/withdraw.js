document.getElementById('btn-withdraw').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const totalWithdrawAmount = parseFloat(withdrawAmount);
    
    const withdrawBalance = document.getElementById('withdraw-balance');
    const totalWithdrawBalance = withdrawBalance.innerText;
    const totalBalanceAmount = parseFloat(totalWithdrawBalance);

    const stockBalance = document.getElementById('stock-balance')
    const totalStock = stockBalance.innerText;
    const stockBalanceAmount = parseFloat(totalStock); 

    const currentWithdraw = totalWithdrawAmount + totalBalanceAmount;
    const remainStockBalance =  stockBalanceAmount - totalWithdrawAmount;

    withdrawBalance.innerText = currentWithdraw;
    stockBalance.innerText = remainStockBalance;

    withdrawInput.value = '';
    
})