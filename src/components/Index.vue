<script setup>
import IndexInstagram from './IndexInstagram.vue';
import IndexPrintDin from './IndexPrintDin.vue';
import IndexPrintOther from './IndexPrintOther.vue';
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
            <h4>TikTok</h4>
        </section>
        <section>
            <h4>Facebook</h4>
        </section>
    </section>
</template>