<template>
  <div>
    <div style="background: #FBF8FF;">
      <BannerComponent>
        <MenuComponent/>
      </BannerComponent>
    </div>
    <SliderComponent/>
  </div>
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import SliderComponent from './components/SliderComponent.vue';



</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

button{
  background: #43FFA1;
  color: #24053E;
  padding:10px 20px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}

button:hover{
  background: #FBF8FF;
}

</style>
