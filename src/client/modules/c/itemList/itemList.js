import { LightningElement, api } from 'lwc';

export default class ItemList extends LightningElement {

    @api items;
    categories = ["Apples", "Oranges"];

    addItemToCart(e) {
        this.dispatchEvent(new CustomEvent('add', { detail: e.detail }));
    }
}
