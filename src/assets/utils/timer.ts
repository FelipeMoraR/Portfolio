

const timerPromise = async (seconds: number) => {
    await new Promise((resolve) => setInterval(resolve, seconds * 1000));
    return;
} 

export default timerPromise