export default {
    paddy(n, p, c) { // 补零, 补齐, n: 需要操作的字符, p: 需要补齐的位数, c: 默认0, 填充的内容
        let padChar = typeof c !== 'undefined' ? c : '0';
        let pad = new Array(1 + p).join(padChar);
        return (pad + n).slice(-pad.length);
    }
};
