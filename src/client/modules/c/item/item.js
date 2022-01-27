import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {

    @api item;
    
    addItemToCart() {
        this.dispatchEvent(new CustomEvent("add", { detail: this.item }))
    }
}
