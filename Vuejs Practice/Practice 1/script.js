// Creating a v app, it's job is control our website or a certain part of it
const app = Vue.createApp({
    //  data, functions
    // template : '<h2>I am the template</h2>'
    data() {
        return {
            btnVal: 'Hide Books',
            showBook: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x:0,
            y:0,
            books: [
                {title:'name of the wind',author:'patric rothfuss',age: 23, img:'images/1.jpg', isFav: true},
                {title:'the way of kings',author:'brandon sanderson',age: 55, img:'images/2.jpg', isFav: false},
                {title:'the final empire',author:'brandon sanderson',age: 48, img:'images/3.jpg', isFav: true}
            ],
            url:'https://vuejs.org/guide/introduction.html#what-is-vue'
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
            // console.log("You clicked me  !!!")
        },
        toggleShowBook() {
            this.showBook = !this.showBook
            if(this.showBook){
                this.btnVal = 'Hide Books'
            }
            else {
                this.btnVal = 'Show Books'
            }
        },
        handleEvent(e,data) {
            console.log(e,e.type)
            if(e.type === 'mouseover') {
                console.log('mouseover hehe')
                console.log(data)
            }
            else if(e.type === 'mouseleave') {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x =  e.offsetX
            this.y =  e.offsetY
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')























// let data = {
//     title: "Vue 2 Reactivity"
// }
// Object.defineProperty(data, 'reactive_title', {
//     get() { return data.title;},
//     set(newVal) {
//         data.title = newVal;
//         document.getElementById('h1').innerText = newVal;
//     }
// });

// function Reactive() {
//     let msg = 'Vue 2 Reactivity';
//     // document.getElementById('para').innerText = msg;
//     Object.defineProperty(this,'reactive_msg',{
//         get() {return msg},
//         set(newVal){
//             msg = newVal;
//             document.getElementById('para').innerText = msg;
//         }
//     })
// }

// let vm = new Reactive();
// // let cm = Reactive();
