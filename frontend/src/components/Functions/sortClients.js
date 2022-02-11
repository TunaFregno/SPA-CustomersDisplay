import {matchSorter} from 'match-sorter';
//import getPortfoliosFunc from './getPortfoliosFunc';
//import getAssetsFunc from './getAssetsFunc';


const sortedByRisk = (key, data) => {

    let sortedData = [];
    switch (key) {
      case 'risk' :
        sortedData = data.sort((a, b)=> {
          return (b.riskProfile - a.riskProfile)})
        console.log('in the risk case', sortedData);

      break;
      case 'restriction':
        return sortedData = matchSorter(data, 'breached', {keys: ['portfolios.*.restrictionStatus'], threshold: matchSorter.rankings.NO_MATCH})
        //console.log('in the restriction status', sortedData);
      break;
      case 'capital':
        
        sortedData = matchSorter(data, '900000', {keys: ['portfolios.*.assets.*.capitalGainPerAsset'], threshold: matchSorter.rankings.NO_MATCH})
        
        console.log('in the capital gain', sortedData);
      break;
      case 'worth':
        console.log('in the net worth case', sortedData);
      break;

      case 'data':
        console.log('in the name case', sortedData);
        return data;
      break;
   }
    
    // 
    
}

export default sortedByRisk;