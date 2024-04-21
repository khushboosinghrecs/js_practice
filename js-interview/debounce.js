function debounce(func, delay) {
    let timer ;

    return function() {
        clearTimeout(timer);
        setTimeout(func, delay);
    }
}