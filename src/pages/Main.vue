<template> 
    <div class="main">
        <div id="upper">
            <div id="search" style="text-align: center;">
                <h4 style="margin-bottom: 10px;">Поиск по названию</h4>
                <input type="text" v-model="search" @input="searchByLetter">
            </div>
            <div id="filter">
                <select v-model="selectedCategory" @change="sortByCategory">
                    <option value="" disabled selected>Выберите категорию</option>
                    <option value="computer">Компьютер</option>
                    <option value="clothes">Одежда</option>
                    <option value="toy">Игрушки</option>
                </select>
            </div>
        </div>
        <Products 
        :products="searchByLetter"
        />
    </div>
</template>

<script>
    import Products from '@/components/Products.vue';

    export default {
        components: {
            Products
        },
        data: () => ({
            products: [],
            search: '',
            selectedCategory: '',
        }),
        computed: {
            sortByCategory() {
                return this.products.sort((product1, product2) => {
                    if(product1.category === this.selectedCategory && product2.categpry !== this.selectedCategory) return -1
                    else if(product1.category !== this.selectedCategory && product2.category === this.selectedCategory) return 1
                    else if(product1.category !== this.selectedCategory && product2.category !== this.selectedCategory) return 0
                })
            },
            searchByLetter() {
                return [...this.sortByCategory].filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()))
            }
        },
        async mounted() {
            const response = await fetch('/products.json');
            const products = await response.json();
            this.products = products;
        }
    }
</script>

<style scoped>
    #upper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 30px;
    }

    input {
        margin-bottom: 15px;
        padding: 5px 40px;
        font-family: 'Montserrat', 'sans-serif';
    }

    select {
        font-family: 'Montserrat', 'sans-serif';
        padding: 5px 20px;
        font-weight: 600;
    }

</style>