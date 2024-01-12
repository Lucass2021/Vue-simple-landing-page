<template>
    <div>
        <!-- Carousel Desktop -->
        <q-carousel
        v-if="!isMobile"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="red"
        navigation
        padding
        arrows
        :breakpoints="{ mobile: 1, tablet: 2, laptop: 1 }"
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
        <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <div class="slider-card rounded-borders col-4 full-height">
                    <span>4</span>
                    <h3>Exceptional Customer Support</h3>
                    <p>Count on our dedicated customer support team to assist you at every step. We prioritize your satisfaction, providing prompt and effective assistance for all your queries and concerns.</p>
                </div>

                <div class="slider-card rounded-borders col-4 full-height">
                    <span>5</span>
                    <h3>Proven Track Record</h3>
                    <p>Trust in our proven track record of delivering reliable and high-quality product data analytics solutions. Our success stories and client testimonials speak volumes about our commitment to excellence.</p>
                </div>

                <div class="slider-card rounded-borders col-4 full-height">
                    <span>6</span>
                    <h3>Security and Privacy Assurance</h3>
                    <p>Rest easy knowing that your data is handled with the utmost care. We prioritize security and privacy, implementing robust measures to ensure the confidentiality and integrity of your valuable information.</p>
                </div>
            </div>
        </q-carousel-slide>
        </q-carousel>

        <!-- Carousel Mobile -->
        <q-carousel
        v-if="isMobile"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="red"
        navigation
        padding
        arrows
        :breakpoints="{ mobile: 1, tablet: 2, laptop: 1 }"
        class="rounded-borders slider-carousel"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <div class="slider-card rounded-borders col-12 full-height">
                    <span>1</span>
                    <h3>Actionable insight</h3>
                    <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
                </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                        <span>2</span>
                        <h3>Data-driven decisions</h3>
                        <p>Make data-driven decisions with our product data analytics. Our Al-generated reports help you unlock insights hidden in your product data.</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                        <span>3</span>
                        <h3>Always affordable</h3>
                        <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                        <span>4</span>
                        <h3>Exceptional Customer Support</h3>
                        <p>Count on our dedicated customer support team to assist you at every step. We prioritize your satisfaction, providing prompt and effective assistance for all your queries and concerns.</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                        <span>5</span>
                        <h3>Proven Track Record</h3>
                        <p>Trust in our proven track record of delivering reliable and high-quality product data analytics solutions. Our success stories and client testimonials speak volumes about our commitment to excellence.</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="6" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                        <span>6</span>
                        <h3>Security and Privacy Assurance</h3>
                        <p>Rest easy knowing that your data is handled with the utmost care. We prioritize security and privacy, implementing robust measures to ensure the confidentiality and integrity of your valuable information.</p>
                    </div>
            </div>
        </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    const slide = ref(1);
    let isMobile = ref(false)

    const checkScreenWidth = () => {
        isMobile.value = window.innerWidth < 1000;
    };

    onMounted(() => {
        checkScreenWidth(); 
        window.addEventListener("resize", checkScreenWidth); 
    });

    onUnmounted(() => {
        window.removeEventListener("resize", checkScreenWidth); 
    });

</script>

<style scoped>

.slider-carousel{
    background-image: url("../assets/slider-bg.svg");
    background-position: center;
    background-size: cover;
    height: 500px;
    padding-top:100px;
}

.slider-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
}

span{
    border: 2px solid #000;
    padding:10px 15px;
    border-radius: 50%;
    font-weight: bold;
    margin-bottom:40px;
}

h3, p{
    text-align: center;
}

h3{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
}

p{
    color: #404040;
}

@media only screen and (max-width: 1000px) {
    h3{
        line-height: 26px;
    }
}  

</style>