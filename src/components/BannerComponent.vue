<template>
    <div class="banner-container">
        <div>
            <slot></slot>
        </div>
        
        <div class="title-container">
            <h1>Data <span>tailored</span> to your needs.</h1>
            <button>Learn More</button>
        </div>

        <div class="image-container">
            <img src="../assets/phone.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.banner-container{
    background-image: url("../assets/bg.png");
    background-position: center;
    background-size: cover;
    height: 100vh;
}

.title-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:100px;
}

h1{
    color: #fff;
    font-size: 60px;
    font-weight: 500;
    max-width: 15ch;
    text-align: center;
}

h1 span{
    border-bottom: 3px solid #43FFA1;
}

.image-container{
    display: flex;
    justify-content: center;
}

img{
    position: relative;
    top:50px;
    width:400px;
    transform: rotate(10deg);
}

</style>