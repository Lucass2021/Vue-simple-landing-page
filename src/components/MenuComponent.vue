<template>
    <div class="menu-container">
        <ul class="menu">
            <li><strong>Data</strong>Sphere</li>
            <li>Apply for access</li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>

.menu-container{
    margin: 0 100px;
    padding-top:30px;
}

.menu{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0;
}


.menu li{
    color: #fff;
    font-size: 20px;
}

.menu li:first-child{
    padding:10px;
}
.menu li:last-child{
    cursor:pointer;
    font-weight: 500;
    padding:10px 20px;
    transition: all 0.3s ease-in-out;
}

.menu li:last-child:hover{
    background: #43FFA1;
    color: #24053E;
}

@media only screen and (max-width: 767px) {

    .menu-container{
        margin: 0 30px;
    }
    .menu li{
        font-size: 14px;
    }
}

</style>