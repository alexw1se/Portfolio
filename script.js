function scrollToElement(elementSelector, instance = 0) {
    const elements = documennt.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }
}
