export const assetAssociatedRiskFunc = (assets) => {
    assets.map((asset) => {
        console.log('in the asset func')
       return (asset.quantity * asset.associatedRiskPerAsset)
    })
}

export const assetCapitalGainFunc = (assets) => {
    assets.map((asset) => {
       return (asset.quantity * asset.capitalGainPerAsset)
    })
}

export const assetTotalValueFunc = (assets) => {
    assets.map((asset) => {
       return (asset.quantity * asset.valuePerAsset) + assetCapitalGainFunc()
    })
}

export const portAssociatedRiskFunc = (assets) => {
    assets.map((asset) => {
        
    })
}
