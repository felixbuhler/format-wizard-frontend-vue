<script setup>
import Print from './Print.vue';
import PrintDin from './PrintDin.vue';
import PrintOther from './PrintOther.vue';

</script>

<template>
    <section id="print">

        <div class='bubblewrap sticky'>
            <h2 class='sticky bubble bg-print'>Print</h2>
        </div>


        <PrintDin />
        <PrintOther />

    </section>
</template>