<template>
    <div id="products">
        <Product 
        v-for="product in products" :key="product.id" 
        :product="product"
        @busket="getBasket"
        class="product__tag"
        />
    </div>
</template>

<script>
    import Product from '@/components/Product.vue'

    export default {
        components: {
            Product,
        },
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        methods: {
            getBasket(product) {
                let basket = localStorage.getItem('basket');
                basket = basket ? basket : [];
                basket = typeof basket === 'string' ? JSON.parse(basket) : basket;
                for(let i of basket) 
                    if(i.id === product.id) return;
                product.productAmount = 1;
                product.immutablePrice = product.price;
                basket.push(product);
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }
    }
</script>

<style scoped>
    #products {
        padding: 20px 0;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>