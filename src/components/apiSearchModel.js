const Axios = require('axios');

const searchIng = (search, cb) => {
  Axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=54bc6595&app_key=b6f3657e19180bce0e858384a4ea8858&ingr=${search}`
  ).then((res) => {
    cb(res.data.hints);
  });
};

export { searchIng };
