<template>
    <div>
        <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="red"
        navigation
        padding
        arrows
        class="rounded-borders slider-carousel"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <div class="slider-card rounded-borders col-4 full-height">
                <span>1</span>
                <h3>Actionable insight</h3>
                <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
            </div>
            <div class="slider-card rounded-borders col-4 full-height">
                <span>2</span>
                <h3>Data-driven decisions</h3>
                <p>Make data-driven decisions with our product data analytics. Our Al-generated reports help you unlock insights hidden in your product data.</p>
            </div>
            <div class="slider-card rounded-borders col-4 full-height">
                <span>3</span>
                <h3>Always affordable</h3>
                <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
            </div>
            </div>
        </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const slide = ref(1);

</script>

<style scoped>

.slider-carousel{
    background-image: url("../assets/slider-bg.svg");
    background-position: center;
    background-size: cover;
    height: 400px;
    padding-top:100px;
}

.slider-card{
    display: flex;
    flex-direction: column;
    align-items: center;
}

span{
    border: 2px solid #000;
    padding:10px 15px;
    border-radius: 50%;
    font-weight: bold;
    margin-bottom:50px;
}

h3, p{
    text-align: center;
}

</style>