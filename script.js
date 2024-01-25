const { useQuasar } = Quasar
const app = Vue.createApp({
    data() {
        return {
            TODO3: false,

        }
    },
    created() {},
    destroyed() {
        window.removeEventListener('message', this.listener);
    },
    mounted() {
        this.listener = window.addEventListener('message', event => {
            switch (event.data.action) {
                case 'TODO1':
                    console.log('TODO1')
                    break;
                case 'TODO2':
                    console.log('TODO2')
                    break;
                default:
                    console.log('Unknown Case!', event.data.action)
                    break;
            }
        }, false,);
    },     
    methods: {
        TestPrint() {
            console.log('Yes')
        },
    }
})
app.use(Quasar, { config: {} })
app.mount('#q-app')