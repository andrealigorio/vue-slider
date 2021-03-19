var root = new Vue({
    el: "#root",
    data: {
        counter: 0,
        photos: [
            "room1.jpg",
            "room2.jpg",
            "room3.jpg",
            "room4.jpg",
            "room5.jpg",
            "room6.jpg"
        ]
    },
    methods: {
        prevPhoto() {
            this.counter--;
            if (this.counter == -1) {
                this.counter = (this.photos.length - 1);
            }
        },
        nextPhoto() {
            this.counter++;
            if (this.counter == this.photos.length) {
                this.counter = 0;
            }
        }
    }
});