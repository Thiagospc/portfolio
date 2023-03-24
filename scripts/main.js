class MobileNavbar {
constructor (mobileMenu, headerNav, headerLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.headerNav = document.querySelector(headerNav);
    this.headerLinks = document.querySelectorAll(headerLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.headerLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `headerLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.headerNav.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }

        return this;
    }
}


const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".header-nav",
    ".header-nav a",
);

mobileNavbar.init();

