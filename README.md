# p0

Web-store with mock cart/checkout

## SDLC

**Requirements**:

- User needs a way to navigate between items list and cart view
- User should have a way to view their account
- User should have a way to see their running total and total items in cart
- User needs a list of items to choose from
- User needs a way to add items to cart for purchase

**Analyze**:

- Header
  - Navigation
  - Brand
  - User info
  - Cart total/# if items

- Body
  - Conditional rendering
    - StoreView
    - CheckoutView
  - StoreView
    - Items
  - CheckoutView
    - Items in cart
    - Total
    - Checkout button (mocked)

- Footer
  - Smaller branding
  - links
  - contact info
  
**Design**:

- Header
  - Navigation
    - left side of header
  - Brand
    - centered
  - User info
    - right side, left of cart
  - Cart total/# if items
    - right of User info

- Body
  - StoreView
    - Items
      - Image
        - Focal point
        - text description below
  - CheckoutView
    - Items in cart
    - Total
    - Checkout button (mocked)

- Footer
  - Smaller branding
  - links
  - contact info
