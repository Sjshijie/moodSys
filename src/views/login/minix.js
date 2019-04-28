export default {
    data() {
        return {
            isShow: false
        }
    },
    methods:{
        beforeEnter: function (dom) {
            dom.classList.add("workin-enter", "workin-enter-active");
        },
        enter: function (dom, done) {
            var diff = dom.dataset.diff || 100;
            var delay = dom.dataset.index * diff;
            setTimeout(function () {
                dom.classList.remove("workin-enter");
            }, delay);
        },
        afterEnter: function (dom) {
            dom.classList.remove("workin-enter-active");
        },
    },
    mounted() {
        this.isShow = true
    }
}