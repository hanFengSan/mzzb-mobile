import DiscRank from 'light/src/bean/DiscRank';
import JSONReqService from './request/JSONReqService';

export default {
    getAmazonRank() {
        return new Promise((resolve, reject) => {
            new JSONReqService('http://anime-discs.com/sakura.do')
                .request()
                .then(res => {
                    res.forEach((rank) => {
                        let discs = [];
                        let i = 0;
                        rank.discs.forEach(disc => {
                            disc.index = i;
                            discs.push(new DiscRank(disc));
                            i++;
                        });
                        rank.discs = discs;
                    })
                    resolve(res);
                }, err => reject(err));
            // let res = JSON.parse(test);
            // console.log(res);
            // res.forEach((rank) => {
            //     let discs = [];
            //     rank.discs.forEach(disc => {
            //         discs.push(new DiscRank(disc));
            //     });
            //     rank.discs = discs;
            // })
            // console.log(res);
            // resolve(res);
        });
    },

    getDailyRank(id) {
        return new Promise((resolve, reject) => {
            new JSONReqService('http://anime-sales.com/sales/daily?flag=' + id)
                .request()
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }
};
