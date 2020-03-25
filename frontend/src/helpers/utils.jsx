export const isServerSideRendering = () => typeof window === "undefined";

export const detectMob = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ];
    if (isServerSideRendering()) return false;
    return toMatch.some(toMatchItem => {
        return navigator.userAgent.match(toMatchItem);
    });
};

export const shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    const temp = array;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        temp[currentIndex] = array[randomIndex];
        temp[randomIndex] = temporaryValue;
    }
    return temp;
};
