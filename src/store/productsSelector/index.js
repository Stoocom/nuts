export function getAllProducts(state) {
  console.log("getAllProducts");
  console.log(state.products);
  console.log(typeof state.products.lastType);

  if (state.products.products) {
  console.log(state.products.products.length);
  console.log(state.products.lastType);
    switch (state.products.lastType) {
      case 'all':
        console.log('lastTypeAll');
        return state.products.products;
      case 1:
        console.log('lastType1');
        return state.products.products.filter((item) => item.type === 1);
      case 2:
        console.log('lastType2');
        return state.products.products.filter((item) => item.type === 2);
      case 3:
        console.log('lastType3');
        return state.products.products.filter((item) => item.type === 3);
      default:
        console.log("Нет таких значений");
    }
  }

};