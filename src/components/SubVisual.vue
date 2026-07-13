<template>

    <div id="subVisual" v-if="group && !route.meta.hideSubVisual">
        <div class="bgImg">
            <div class="img pc">
                <img :src="`/img/sub/sub_visual_${group.image}.png`" :alt="`${group.title} 상단이미지`">
            </div>
            <div class="img mo">
                <img :src="`/img/sub/sub_visual_mo_${group.image}.png`" :alt="`${group.title} 상단이미지`">
            </div>
        </div>
        <div class="titArea flex justy_btw alend fcf abs w100 inner89 x_center">
            <div class="title gb fs40 fwtbold lh130">{{ group.title }}</div>
            <div class="breadcrumb fs16 flex alc">
                <i>HOME</i> &gt; <i>{{ group.title }}</i> &gt; <i>{{ activeLabel }}</i>
            </div>
        </div>
        <ul class="subTabMenu flex fs18 fcf abs w100 inner89 x_center">
            <li v-for="tab in visibleTabs" :key="tab.name" class="menuBtn" :class="{ on: tab.name === activeTabName }">
                <RouterLink :to="{ name: tab.name }">{{ tab.label }}</RouterLink>
            </li>
        </ul>
        <div class="utilBtn flex abs">
            <a href="" class="block img btn">
                <img src="/img/sub/ic_util_share.svg" alt="공유하기">
            </a>
            <a href="" class="block img btn">
                <img src="/img/sub/ic_util_printer.svg" alt="프린트">
            </a>
        </div>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { findGroupByRouteName } from '@/menu';

const route = useRoute();

const group = computed(() => findGroupByRouteName(route.name));
// 탭 메뉴에 노출할 탭 (hidden 제외)
const visibleTabs = computed(() => group.value?.tabs.filter((t) => !t.hidden) ?? []);
// 활성으로 표시할 탭명 (하위 페이지는 meta.activeTab 로 특정 탭에 on)
const activeTabName = computed(() => route.meta.activeTab || route.name);
const activeLabel = computed(() => {
    const tab = group.value?.tabs.find((t) => t.name === route.name);
    return tab ? tab.label : '';
});
</script>
