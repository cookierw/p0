import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {

    @api cartCount;
    @api cartTotal;
    @api isShowingNavigation;
    @api userIcon;

    handleNavigation() {
        this.dispatchEvent(new CustomEvent("navigate"));
    }

    presentCart() {
        this.dispatchEvent(new CustomEvent("present", { detail: "cart" }))
    }
}
