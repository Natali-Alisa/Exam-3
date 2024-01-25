document.querySelector('button').addEventListener('click', () => {
    lightbox.open();
});

fsLightboxInstances['gal'].props.onOpen = () => {
    console.log(fsLightboxInstances)
};

const lightbox = new FsLightbox();

lightbox.props.sources = ['img/1.jpg', 'img/2.jpg'];


