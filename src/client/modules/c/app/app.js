import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    items = [];
    cart = [];
    isShowingCart = false;
    userIcon = "/SLDS/icons/standard-sprite/svg/symbols.svg#avatar";
    
    // cart
    get cartCount() { 
        return this.cart.length; 
    }
    get cartTotal() { 
        if (!this.cart.length === 0) {
            return this.cart.reduce((prev, curr) => prev + curr); 
        }
        return 0;
    }
    addItemToCart(item) { 
        this.cart.push(item); 
    }
    clearCart() { 
        this.cart = []; 
    }

    // header
    // When user clicks the cart button
    handleShowItems() { this.isShowingCart = true; }

    // itemsList
    // When the user navigates back from the cart
    handleOnNavigate() { this.isShowingCart = false; }
}
