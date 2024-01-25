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

// Define the TopBar component directly in the script.js file
app.component('top-bar', {
    props: ['headerText'], // Define the prop for headerText
    template: `
        <q-bar id="top-bar" style="color: white;">
            <span id="HeaderText">{{headerText}}</span>
            <q-space></q-space>
            <a>
                <q-icon id="ButtonIcon" size="lg" name="fa-brands fa-discord"></q-icon>
            </a>
            <a href="https://github.com/ihyajb">
                <q-icon id="ButtonIcon" size="lg" name="fa-brands fa-github"></q-icon>
            </a>
            <a href="https://x.com/ihyajb">
                <q-icon id="ButtonIcon" size="lg" name="fa-brands fa-x-twitter"></q-icon>
            </a>
        </q-bar>
    `,
});

app.use(Quasar, { config: {} })
app.mount('#q-app')