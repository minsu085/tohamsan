<template>

    <div id="sub">
        <div class="inner m_center inner89">

            <div class="reserveComplete t_center">

                <div class="title fs32 gb fwtbold lh140">예약 신청이<br class="mo"> 완료되었습니다.</div>

                <p class="desc fs20 fc36 lh140">
                    토함산 워케이션빌리지 공유하우스<br class="mo"> 예약 신청이 정상적으로 접수되었습니다.<br>
                    <b>예약 현황은 <span class="fcaa">마이페이지 > 예약현황</span>에서<br class="mo"> 확인</b>하실 수 있습니다.
                </p>

                <div class="btns flex">
                    <button type="button" class="btn statusBtn">예약 현황 확인하기</button>
                    <RouterLink :to="{name: 'main'}" class="btn homeBtn">홈으로</RouterLink>
                </div>

            </div>

        </div>
    </div>

</template>

<script setup>
</script>
