export const search = function (data, query) {
  return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
};
