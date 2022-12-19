<template>
    <div class="product__details">
        <div class="product">
            <h3>{{data.name}}</h3>
            <div class="product__image__block">
                <img :src="`../${data.img}`" alt="image" class="product__img" />
            </div>
        </div>
        <div class="description">
            <h3>Описание:</h3>
            <br>
            <p>{{data.description}}</p>
            <h3 style="margin: 20px 0;">Цена: {{ data.price }}&#8376</h3> 
            <h3 style="margin-bottom: 20px">Дата публикации: {{ data.date }}</h3>
            <button @click="getBasket()">Добавить в корзину</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            data: {}
        }),
        mounted() {
            const data = this.$route.query;
            this.data = data;
        },
        methods: {
            getBasket() {
                let basket = localStorage.getItem('basket');
                basket = basket ? basket : [];
                basket = typeof basket === 'string' ? JSON.parse(basket) : basket;
                for(let i of basket) 
                    if(i.id === this.data.id) return;
                basket.push(this.data);
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }
}
</script>

<style scoped>
    .product__details {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
    }

    h3 {
        color: #000;
    }
    
    .description {
        width: 60%; 
    }

    .product {
        width: 30%;
    }
    .product__image__block {
        width: 300px;
        height: 300px;
        margin-top: 10px;
    }

    .product__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .product__price {
        margin: 5px 0 10px;
    }
</style>