document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {
        //The entries result is an array of one element
        if(entries[0].isIntersecting){
            console.log('Its visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
});
