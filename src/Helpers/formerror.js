module.exports = {
    errorPage: (res, error) => {
    //   let format = result.map (item => {
    //     return {
    //       id: item.id,
    //       book: item.category,
    //     };
    //   });
      let form = {
        error,
        status 
      };
      res.json (form);
    },
};
  