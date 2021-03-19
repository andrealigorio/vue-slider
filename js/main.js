var root = new Vue({
    el: "#root",
    data: {
        counter: 0,
        play: true,
        playView: true,
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
        },
        autoPlay() {
            var playerStart = setInterval(() => {
                this.nextPhoto();
                if(!this.play) {
                    clearInterval(playerStart);
                }
            }, 3000);
        },
        photoPlay() {
            this.playView = false;
            this.play = true;
            this.autoPlay();        
        },
        photoPause() {
            this.playView = true;
            this.play = false;
        }
    }
});