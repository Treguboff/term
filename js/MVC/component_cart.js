class Storage {

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }

}
class UI {

    renderPage() {
        let cart = Storage.getCart();
        let cartPage = document.querySelector('.cart_');
        cartPage.innerHTML = "";

        cart.forEach(function (item) {
            cartPage.innerHTML += `
        <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                   
                <div class="col-2">
                        <img src="./img/shop/img_pilates.jpg" class="img-fluid rounded-3" alt="logo">
                    </div>
                    <div class="col-7">
                        <p class="lead fw-normal mb-2">${item.title}</p>                        
                    </div>
                    
                    <div class="col-2">
                        <h5 class="mb-0">${item.price}</h5>
                    </div>

                    <div class="col-1 text-center">
                        <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;
        })
    }

}

export function cart_() {
    const ui = new UI();
    ui.renderPage();
}