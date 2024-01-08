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
    padding:0;
}


.menu li{
    color: #fff;
    font-size: 20px;
}

.menu li:first-child{
    
}
.menu li:last-child{
    cursor:pointer;
    font-weight: 500;
    border-bottom: 3px solid #43FFA1;
}

</style>