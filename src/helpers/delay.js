const delay = (ms, data) =>
  new Promise((res) => setTimeout(() => (data ? res(data) : res()), ms));

export default delay;
