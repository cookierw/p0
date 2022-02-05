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
        // Event passes item obj up the hierarchy
        // Should use something other than id to make system more robust
        let item = {...e.detail};
        let i = this.cart.findIndex(elem => elem.id === item.id);

        if (i >= 0) {
            item.ordered++;
            this.cart[i] = item;
        } else {
            item.ordered = 1;
            this.cart.push(item);
        }
    }
 
    clearCart() { 
        this.cart = []; 
    }

    // header
    // When user clicks the cart button
    handleShowCart() { this.isShowingCart = true; }

    // itemsList
    // When the user navigates back from the cart
    handleOnNavigate() { this.isShowingCart = false; }
}
