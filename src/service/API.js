import JSONReqService from './request/JSONReqService';

export default {
    getAmazonRank() {
        return new Promise((resolve, reject) => {
            new JSONReqService('http://anime-discs.com/sakura.do')
                .request()
                .then(res => {
                    // console.log(res);
                    // let result = [];
                    // res.forEach((rank) => {
                    //     rank.discs.forEach(disc => {
                    //         disc.key = disc.id;
                    //     });
                    // })
                    resolve(res);
                }, err => reject(err));
        });
    }
};
