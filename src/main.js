import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import VCalendar from "v-calendar";
import "v-calendar/style.css";

import "./assets/css/reset.css";
import "./assets/css/basic.css";
import "./assets/css/style.css";

const app = createApp(App);

app.directive("reveal", {
    beforeMount(el) {
        el.classList.add("reveal-item");
    },

    mounted(el) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("reveal-active");
                        }, 100);

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        observer.observe(el);
    },
});

app.use(VCalendar, {});
app.use(router);
app.mount("#app");
