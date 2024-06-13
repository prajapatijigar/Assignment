      let addButtons = document.querySelectorAll(".add");
      let removeButtons = document.querySelectorAll(".remove");
      let tableRows = document.querySelectorAll("tr");
      let subtotal = 0
       
      removeButtons.forEach((button) => {
            button.style.display ="none"
      })       
       
      function addButtonClicked(button) {
        let rowIndex = Array.from(tableRows).indexOf(button.parentElement.parentElement);
        let inputVal = tableRows[rowIndex].children[1].children[0].value;
        let priceVal = `${tableRows[rowIndex].children[2].innerHTML}`;
        let totalQuantity = tableRows[rowIndex].children[3];
        let quantitySubTotal = tableRows[tableRows.length-1].children[3]
         
          
        removeButtons[rowIndex-1].style.display="block";
       removeButtons[rowIndex-1].style.display="block";
        
        let a = priceVal;
        let b = a.split('');
        b.shift();
        let quantityVal = b.join('');
        let subTotal = Math.round(inputVal * quantityVal);
        
        totalQuantity.innerHTML = `$${subTotal}`;

          subtotal += subTotal                   
        quantitySubTotal.innerHTML = `$${subtotal}`
      }
    
      function removeButtonClicked(button) {
        let rowIndex = Array.from(tableRows).indexOf(button.parentElement.parentElement);
        tableRows[rowIndex].remove();
      }
    
      addButtons.forEach(button => {
        button.addEventListener("click", () => {
          button.style.display = "none";


          addButtonClicked(button);
        });
      });
    
      removeButtons.forEach(button => {
        button.addEventListener("click", () => {
          removeButtonClicked(button);
        });
      });
