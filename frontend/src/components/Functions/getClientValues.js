const  assetAssociatedRiskFunc = (assets) => {
    let portfolioAssociatedRisk = 0;
    assets.map((asset) => {
        portfolioAssociatedRisk += (asset.quantity * asset.associatedRiskPerAsset);
        return (asset.quantity * asset.associatedRiskPerAsset);
    })
    //console.log('sum of all risk',portfolioAssociatedRisk )
    return portfolioAssociatedRisk;
}

const assetCapitalGainFunc = (assets, string) => {
    let capitalGain = 0;
    let portfolioCapitalGain = 0;
    assets.map((asset) => {  
        portfolioCapitalGain += (asset.quantity * asset.capitalGainPerAsset);
        return capitalGain = (asset.quantity * asset.capitalGainPerAsset);
    })
    //console.log('total portfolio capital gain', portfolioCapitalGain)
    return string == 'networth' ? assetTotalValueFunc(assets, portfolioCapitalGain, capitalGain) : portfolioCapitalGain;
}

const assetTotalValueFunc = (assets, portfolioCapitalGain, capitalGain) => {
    let sumAssetTotalVal = 0;
    let portTotalVal = 0;
    assets.map((asset) => {
        sumAssetTotalVal += ((asset.quantity * asset.valuePerAsset) + capitalGain)
       return ((asset.quantity * asset.valuePerAsset) + capitalGain);
    })

    //console.log('total portfolio asset val', sumAssetTotalVal)
    return portTotalVal = (portfolioCapitalGain + sumAssetTotalVal);  

}

export default assetCapitalGainFunc;
