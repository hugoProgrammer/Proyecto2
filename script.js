function RevelarMensaje(){
    const message = document.querySelector('.Revelacion');
    // use a class to trigger the CSS transition (allows smooth height change)
    message.classList.toggle('show');
}