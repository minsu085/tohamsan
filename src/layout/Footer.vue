<template>
    <footer id="footer">
       <div class="content">
            <div class="topArea flex alc justy_btw">
                <h1 class="logo img">
                    <img src="/img/logo_w.svg" alt="">
                </h1>
                <ul class="ftMenu flex fs16 fcf">
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">이메일무단수집거부</a></li>
                    <li><a href="">팝업열기</a></li>
                </ul>
            </div>
            <div class="botArea flex">
                <div class="info fs15 fcf">
                    <div class="lst flex">
                        <div>주소 : 경주시 불국로 1208-45 토함산자연휴양림</div>
                        <div>대표전화 :  054-123-1234</div>
                        <div>대표메일 :  abc@abcd.efg</div>
                    </div>
                    <div class="copy">Copyright © 2026 토함산 워케이션빌리지. All Rights resered.</div>
                </div>
                <div class="util flex">
                    <div class="contact"></div>
                    <div class=""></div>
                </div>
            </div>
       </div>
    </footer>
</template>

<script setup>
import { reactive } from 'vue';

// 사이트 정보가 정해지면 채워 넣기
const siteInfo = reactive({
    address: '',
    phone: '',
});
</script>
