<template>
    <section class="service_section">
        <div class="container">
            <div class="service_head"><h1>OUR SERVICES </h1></div>
            <div class="row">
                <div class="col-md-4 col-lg-4" v-for="(item, index) in items" v-bind:key="index">
                    <div class="col-md-12 col-lg-12">
                        <img :src="require('../../images/'+item.image+'.png')">
                    </div>
                    <h4 class="main_heading_service">{{ item.title }}</h4>
                    <p class="main_para_service col-lg-12 col-md-12 col-sm-12">
                        {{ item.paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'serviceSection',
  props: ['items'],
};
</script>

<style scoped>
    img {
        margin: 0 auto;
        display: block;
    }
</style>
