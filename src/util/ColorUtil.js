export default {
    setAlpha(color, alpha) {
        if (alpha > 255) {
            alpha = 255;
        }
        alpha = alpha.toString(16);
        if (color.length === 7) {
            return color + (alpha.length === 2 ? alpha : `0${alpha}`);
        } else {
            return color.slice(0, 7) + (alpha.length === 2 ? alpha : `0${alpha}`);
        }
    },

    getAlpha(color) {
        parseInt(color.slice(6, 2), 16);
    }
};
