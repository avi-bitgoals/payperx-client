<template>
    <div id="carouselExampleIndicators" class="carousel slide"
         data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"
                class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 bnr_height" src="../images/Banner1.jpg"
                     alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <div class="container  text-center">
                        <div class="banner_text"> THE SMARTEST WAY TO
                            <span>PROFIT </span><br/>
                            from<br/>
                            CRYPTOCURRENCY
                        </div>
                        <a href="#" style="top: 30px; position: relative;"
                           v-if="!isAuthenticated" class="banner_btn">
                            SIGN UP <img src="../images/arro1.png"
                                                            style="margin: -4px 0 0 6px;"></a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 bnr_height" src="../images/Banner2.jpg"
                     alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <div class="container  text-center">
                        <div class="banner_text">P2P NETWORK <span>FOR</span> <br>CRYPTOCURRENCY
                            AND <br>FINANCIAL DIGITAL ASSETS
                        </div>
                        <a href="#" style="top: 30px; position: relative;"
                           v-if="!isAuthenticated" class="banner_btn">
                            SIGN UP <img src="../images/arro1.png" style="margin: -4px 0 0 6px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators"
           role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators"
           role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Carousel',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
<style scoped>
</style>
