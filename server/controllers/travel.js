const axios = require('axios');

//获得搜索建议词汇
async function suggest(ctx, next) {
  let data;
  try {
    const res = await axios.get(`https://touch.go.qunar.com/suggest?query=${encodeURIComponent(ctx.query.word)}`);
    data = res.data.data.result;
    ctx.body = {
      code: 200,
      data: data
    }
  }
  catch(e){
    ctx.body = {
      code: 0,
      data: e.toString()
    }
  }
}

module.exports = {
  suggest
}