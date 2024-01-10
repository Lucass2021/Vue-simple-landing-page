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
    background-image: url("../assets/bg-banner.svg");
    background-position: center;
    background-size: cover;
    height: 100%;
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
    animation: mover 2s infinite  alternate;
    z-index: 9;
}

@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}


@media only screen and (max-width: 767px) {

    h1{
        font-size: 40px;
    }
    img{
        width: 200px;
    }

}

</style>