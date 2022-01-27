import { LightningElement, track } from 'lwc';
import { items as testItems } from "../data/TestData"

export default class App extends LightningElement {

    items = testItems;
    @track cart = [];
    isShowingCart = false;
    userIcon = "/SLDS/icons/standard-sprite/svg/symbols.svg#avatar";
    
    // cart
    get cartCount() { 
        return this.cart.length; 
    }
    get cartTotal() { 
        return this.cart.length * 1;
    }
    addItemToCart(e) { 
        this.cart.push(this.items[e.detail - 1]);
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
