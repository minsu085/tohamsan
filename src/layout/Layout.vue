<template>
    <div class="wrap">
        <Header />

        <main id="container">
            <SubVisual />
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import SubVisual from '@/components/SubVisual.vue';
</script>
