<template>
    <section class="below_banner" v-if="!isAuthenticated">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12 heading_section_grid"
                     v-for="(item, index) in items" v-bind:key="index">
                    <h3>{{item.title}}</h3>
                    <div class="col-md-12 col-lg-6 col-sm-12 col-12 detail_grids">
                        <p>{{item.paragraph}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'BelowBanner',
  props: ['items'],

};
</script>

<style scoped lang="scss">
    .below_banner {
        .heading_section_grid {
            h3 {
                max-width: 125px;
            }
        }
    }
</style>
