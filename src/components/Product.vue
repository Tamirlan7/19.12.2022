<template>
    <div class="product">
        <h4 class="product__name">{{ product.name }}</h4>
        <div class="product__image__block">
            <img class="product__img" :src="product.img" alt="product image" />
        </div>
        <h4 class="product__price">Цена:  {{ product.price }}&#8376</h4>
        <h4 class="product__category">Категория: 
            {{
                product.category == 'computer' ? 'Компьютер' : product.category == 'toy' ? 'Игрушки' : 'Одежда' 
            }}
        </h4>
        <button @click="this.$emit('busket', product)">Добавить в корзину</button>
        <button @click="this.$router.push({params: {id: product.id}, name: 'productDetails', query: {
                name: product.name, 
                img: product.img,
                description: product.description,
                price: product.price,
                category: product.category,
                date: product.data
            }})">Подробнее</button>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .product {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0 80px;
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

    button:not(:last-child) {
        margin: 10px 0;
    }
</style>