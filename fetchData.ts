const axios = require('axios').default;
const fs = require('fs');

let pageNum = 1;
let success = true;
setInterval(async () => {
    const response = await axios.get('https://api.tracksino.com/crazytime_history', {
        headers: { 
            Authorization: `Bearer 35423482-f852-453c-97a4-4f5763f4796f`
        },
        params: {
            page_num: pageNum,
            per_page: 100,
            sort_desc: false,
            period: '1month'
        }
    })
    if (response.status === 200) {
        console.log(pageNum);
        fs.appendFileSync('./data.json', JSON.stringify(response.data.data) + "\n");
        pageNum += 1;
    }
    else {
        success = false;
    }
}, 1000);