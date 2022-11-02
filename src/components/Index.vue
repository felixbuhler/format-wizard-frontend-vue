<script setup>
import IndexBehance from './IndexBehance.vue';
import IndexFacebook from './IndexFacebook.vue';
import IndexInstagram from './IndexInstagram.vue';
import IndexLinkedin from './IndexLinkedin.vue';
import IndexPrintDin from './IndexPrintDin.vue';
import IndexPrintOther from './IndexPrintOther.vue';
import IndexTiktok from './IndexTiktok.vue';
</script>
<template>

    <section class="index-print">
        <h3><a href="#print">Print</a></h3>
        <section>
            <h4><a href="#din">DIN</a></h4>
            <IndexPrintDin />
        </section>
        <section>
            <h4><a href="#other">Other</a></h4>
            <IndexPrintOther />
        </section>
    </section>
    <section class="index-digital">
        <h3>Digital</h3>
        <section>
            <h4><a href="#instagram">Instagram</a></h4>
            <IndexInstagram />
        </section>
        <section>
            <h4><a href="#facebook">Facebook</a></h4>
            <IndexFacebook />
        </section>
        <section>
            <h4><a href="#tiktok">TikTok</a></h4>
            <IndexTiktok />
        </section>
        <section>
            <h4><a href="#behance">Behance</a></h4>
            <IndexBehance />
        </section>
        <section>
            <h4><a href="#linkedin">LinkedIn</a></h4>
            <IndexLinkedin />
        </section>
    </section>
</template>