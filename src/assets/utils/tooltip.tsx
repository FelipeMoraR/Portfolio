
const useTooltip = () => {
    const handlerMouseEnter = (tooltip: HTMLParagraphElement) => {
        tooltip.classList.remove('animation-fadeOut-opacity');
        tooltip.classList.add('animation-fadeIn-opacity');
    }

    const handlerMouseLeave = (tooltip: HTMLParagraphElement) => {
        tooltip.classList.remove('animation-fadeIn-opacity');
        tooltip.classList.add('animation-fadeOut-opacity');

        setTimeout(() => {
            tooltip.classList.remove('animation-fadeOut-opacity');
        });
    }

    return {handlerMouseEnter, handlerMouseLeave}
}

export default useTooltip;