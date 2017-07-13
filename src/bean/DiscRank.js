export default class DiscRank {
    static TYPE_BD = 0; // 非尼限BD
    static TYPE_NYD = 1; // 尼限非DVD, 继承与原light项目, 至于和第二个有什么区别,有待研究
    static TYPE_N = 2; // 尼限
    static TYPE_D = 3; // DVD
    static TYPE_ND = 4; // 尼限&&DVD

    constructor(obj) {
        this.index = obj.index;
        this.id = obj.id;
        this.name = obj.title;
        this.sName = obj.sname;
        this.updateDate = obj.stot;
        this.discType = obj.type; // 暂不知作用
        this.releaseDate = obj.release;
        this.amazonRank = obj.arnk || -1;
        this.currentRank = obj.curk || -1;
        this.prevRank = obj.prrk || -1;
        this.prevRank1 = obj.rank1 || -1;
        this.prevRank2 = obj.rank2 || -1;
        this.prevRank3 = obj.rank3 || -1;
        this.prevRank4 = obj.rank4 || -1;
        this.prevRank5 = obj.rank5 || -1;
        this.pt = obj.cupt || 0;
        this.latestPullDate = obj.atot;
        this.nicoOrder = obj.cubk || 0; // nico预约
        this.saleDay = obj.sday; // 距离销售天数
        this.initType();
    }

    initType() {
        let name = this.name;
        this.type = 0;
        if (!name.includes('尼限定') && !name.includes('[DVD]')) {
            this.type = DiscRank.TYPE_BD;
        }
        if (name.includes('尼限定')) {
            this.type = DiscRank.TYPE_N;
        }
        if (name.includes('[DVD]')) {
            this.type = DiscRank.TYPE_D;
        }
        if (name.includes('尼限定') && name.includes('[DVD]')) {
            this.type = DiscRank.TYPE_ND;
        }
    }
}
