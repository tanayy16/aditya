var slider = {

    slideIndex: 0,
    slides: document.getElementsByClassName("mySlides"),
    dots: document.getElementsByClassName("dot"),

    init: function () {
        var i = 0;

        // check if it is really require to run method.
        if (typeof this.slides === "undefined" || this.slides === null) return;

        // Hide all the sldies
        for (i = 0; i < this.slides.length; i++) this.slides[i].style.display = "none";

        // Increase the index of slide.
        this.slideIndex++;

        // if slide index is greater than total than go to first slide
        if (this.slideIndex > this.slides.length) this.slideIndex = 1;

        // remove the activeness of current dot.
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }

        // display the next slide (as array start from zero hence n-1)
        this.slides[this.slideIndex - 1].style.display = "block";

        // make next slide dot active
        this.dots[this.slideIndex - 1].className += " active";

        // Call self on every 4 sec.
        setTimeout((_this) => _this.init(), 4000, this);
    },

};

var lighBox = {
    lightImg: document.querySelector("#lightImg"),
    viewBtn: document.querySelectorAll(".lightboxpusher"),

    init: function () {

        // check if it is really require to run method.
        if (typeof this.lightImg === "undefined" || this.lightImg === null) return;

        // for each btn add eventlistner which will add image to box.
        this.viewBtn.forEach(el => {
            el.addEventListener("click", () => {
                // add overley effect in body
                document.body.classList.add("effect");

                //get the image src
                let imgSrc = el.getAttribute("data-src");

                // put image source in light box
                this.lightImg.src = imgSrc;
            });
        });
    },

    closeOnWindowClick: function (event) {
        // check if lightbox is open, mean if clicked target is lightbox wrapper then hide the lightbox.
        if (event.target.className == "light-box-wrapper" || event.target.className == "close-btn") {
            document.body.classList.remove("effect");
        }
    },

    gallerTabOnHash: function () {
        var hash = window.location.hash.substr(1, window.location.hash.length) || "all";
        var all = document.querySelectorAll(".gallery-card");
        var ele = document.querySelectorAll("." + hash);

        // check is it a gallery page then ony run.
        if (document.querySelector("#tabContainer") === null) return;

        var links = document.querySelectorAll(".gallery-tab-link");
        for (let index = 0; index < links.length; index++) {
            const element = links[index];
            element.classList.remove("active");
        }


        document.querySelector(".gallery-tab-links-" + hash).classList.add("active");

        if (hash != "all") {
            for (let index = 0; index < all.length; index++) {
                all[index].style.display = 'none';
            }

            for (let index = 0; index < ele.length; index++) {
                ele[index].style.display = 'block';
            }
        } else {
            for (let index = 0; index < all.length; index++) {
                all[index].style.display = 'block';
            }
        }
    }
};

window.onload = () => {
    lighBox.init();
    lighBox.gallerTabOnHash();
}

window.onhashchange = () => {
    lighBox.gallerTabOnHash();
}


window.addEventListener("click", event => lighBox.closeOnWindowClick(event));