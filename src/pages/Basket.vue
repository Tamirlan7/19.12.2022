<template>
    <div id="main__basket">
        <h1>Список добавленных товаров:</h1>
        <div id="basket">
            <div id="basket__products">
                <div class="basket__product" v-for="product in products" :key="product.id">
                    <h4 class="basket__product__name" style="margin-bottom: 15px;">{{ product.name }}</h4>
                    <div class="basket__product__image__block">
                        <img class="product__img" :src="product.img" alt="basket__product__image" />
                    </div>
                    <h4 class="basket__product__price" style="margin: 10px 0;">Цена:  {{ product.price }}&#8376</h4>
                    <h4 class="basket__product__category">Количество: {{ product.productAmount }}</h4>
                    <div class="amount__buttons">
                        <button @click="increment(product.id)">+</button>
                        <button style="border-left: none;" @click="decrement(product.id)">-</button>
                    </div>
                    <button style="margin: 10px;" @click="deleteProduct(product.id)">Удалить из корзины</button>
                    <button
                    @click="this.$router.push({params: {id: product.id}, name: 'ProductDetails', query: {
                        name: product.name, 
                        img: product.img,
                        description: product.description,
                        price: product.price,
                        category: product.category,
                        date: product.data
                    }})"
                    >
                        Подробнее
                    </button>
                </div>
            </div>
            <div id="sum__of__busket">
                <div>
                    <h3>Общая стоимость: {{ products.reduce((sum, product) => sum + Number(product.price), 0) }} &#8376</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            products: JSON.parse(localStorage.getItem('basket'))
        }),
        methods: {
            deleteProduct(id) {
                this.products = this.products.filter(product => product.id !== id)
                localStorage.setItem('basket', JSON.stringify(this.products))
            },
            increment(id) {
                for(let product of this.products) 
                    if(product.id === id) {
                        product.productAmount++ 
                        product.price = product.immutablePrice * product.productAmount
                        localStorage.setItem('basket', JSON.stringify(this.products))
                    }
            },
            decrement(id) {
                for(let product of this.products) 
                    if(product.id === id && product.productAmount > 1) {
                        product.productAmount--
                        product.price = product.immutablePrice * product.productAmount
                        localStorage.setItem('basket', JSON.stringify(this.products))
                    }
            }
        }
    }
</script>

<style scoped>
    #basket {
        display: flex;
        justify-content: space-around;
    }

    #basket__products {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .basket__product {
        margin: 0 20px;
        padding: 20px 0 80px;
        width: 30%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
    }

    .basket__product__image__block {
        width: 300px;
        height: 300px;
        margin-top: 10px;
    }

    .basket__product__image__block > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .amount__buttons {
        margin-top: 10px;
    }

    .amount__buttons > button {
        font-size: 20px;
    }

    #sum__of__busket {
        padding: 20px 0;
        width: 20%;
    }

    #sum__of__busket > div {
        background-color: teal;
        box-shadow: -3px 3px 4px 1px #000;
        padding: 20px;
        position: sticky;
        top: 0;
    }

    h3 {
        color: #fff;
    }
</style>