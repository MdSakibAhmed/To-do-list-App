// CODE EXPLAINED channel




(function appControler() {
    let inputValue = document.querySelector('.todo-item').value;
    let sakib = 'sakib'
    let addItem = function () {
        let htmlText = `  <div class="list-item">
                <!--<i class="fas fa-check-circle"></i>-->
                <div class="cheack-icon"><i class="far fa-circle"></i></div> <span> ${inputValue}</span>
                <div class="trash-icon"><i class="fas fa-trash-alt"></i></div>
            </div>`
        
        document.querySelector('.item-container').insertAdjacentHTML('beforeend',htmlText)
    }
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            document.querySelector('.todo-item').value = "";
            addItem()
            
        }
    });

    let deleteItem = function () {
        let element = document.querySelector(".list-item");
        element.parentNode.removeChild(element);


    }

    document.querySelector(".trash-icon").addEventListener('click', deleteItem )
})()