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
    margin-top:30px;
}

.menu{
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding:0;
}

.menu li:first-child{
    
}
.menu li:last-child{
    cursor:pointer;
    font-weight: 500;
}

.menu li:last-child:hover{
    border-bottom: 3px solid #43FFA1;
}

</style>