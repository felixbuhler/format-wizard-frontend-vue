<script setup>
import Index from './Index.vue';

</script>

<template>
    <header>
        <div class='bubblewrap sticky'>
            <div class='header bubble squared'>
                <h1>FORMAT WIZARD</h1>
                <button @click="handleToggle">Index</button>
            </div>


        </div>
    </header>
    <div class="index" v-bind:class="{open: isActive}">
        <div class='bubble squared'>
            <Index />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>