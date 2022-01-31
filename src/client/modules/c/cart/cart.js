import { LightningElement, api } from 'lwc';

export default class Cart extends LightningElement {
    
    // _cart;
    @api cartCount;
    @api cartTotal;
    
    @api 
    set cart(value) {
        this._cart = value;
    }
    get cart() {
        return this._cart;
    }

    get randomId() {
        return Math.floor(Math.random() * 1000);
    }
}
