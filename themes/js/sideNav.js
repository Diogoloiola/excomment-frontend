export let sideNav = {
    btnClose: document.querySelector('.closebtn'),
    btnOpen: document.querySelector('#openNav'),
    nav: document.querySelector('#mySidenav'),
    openNav(){
        this.nav.style.width = "250px";
    },
    closeNav(){
        this.nav.style.width = "0";
    },
    load(){
        this.btnClose.addEventListener('click', this.closeNav.bind(this))
        this.btnOpen.addEventListener('click', this.openNav.bind(this))
    }
}