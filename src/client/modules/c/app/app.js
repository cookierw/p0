import { LightningElement, track } from 'lwc';
import { items as testItems } from "../data/TestData"

export default class App extends LightningElement {

    items;
    @track cart;
    isShowingCart = false;
    userIcon = "/SLDS/icons/standard-sprite/svg/symbols.svg#avatar";

    connectedCallback() {
        this.items = testItems;
        this.cart = [];
    }
    
    // cart
    get cartCount() { 
        return this.cart.length; 
    }
    get cartTotal() { 
        return this.cart.length * 1;
    }
    addItemToCart(e) { 
        console.log("Item added to cart");
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
