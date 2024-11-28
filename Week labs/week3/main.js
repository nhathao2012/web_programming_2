
var app = new Vue({
    el:'#app',
    data: {       
        brand: 'Vue brand',
        productName : 'Socks',
        //productImg: './assets/images/socks_blue.jpg',
        selectedVariant: 0,
        description:'A pair of warm, fuzzy socks ', //Challenge 1
        // inStock: true,
        // inventory: 0,
        onSale: true, //Challenge 3 and 7
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImg: './assets/images/socks_green.jpg',
                variantQuantity: 10,
                onSale: true

            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImg: './assets/images/socks_blue.jpg',
                variantQuantity: 0,
                onSale: false
            },
        ],
        sizes: ["S" , "M" , "L"], //Challenge 4
        
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        deleteItem() { //Challenge 5
            if (this.cart ===0 ){
                //DO NOTHING
            } else { this.cart -= 1}
            
        },
        
    },
    computed: {
        title() {
            return this.brand + ' ' + this.productName
        },
        productImg() {
            return this.variants[this.selectedVariant].variantImg
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() { //Challenge 7
            if (this.onSale) {
              return this.brand + ' ' + this.product + ' are ON SALE!'
            } 
              return  this.brand + ' ' + this.product + ' are NOT ON SALE!'
          }
    }
})

