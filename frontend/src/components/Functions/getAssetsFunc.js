const getAssetsFunc = (portfolio) => {
    const assetsoArr = [];
    portfolio.assets.forEach((asset) => assetsoArr.push(asset));
    return assetsoArr;
}

export default getAssetsFunc;