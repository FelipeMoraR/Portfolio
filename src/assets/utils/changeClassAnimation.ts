import timerPromise from "./timer";

const changeClassAnimation = async (containerStepOne:Element) => {
    await timerPromise(3);
    containerStepOne.classList.add('animation-fadeOut-opacity');
}

export default changeClassAnimation;