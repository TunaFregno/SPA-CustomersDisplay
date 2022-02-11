const getPortfoliosFunc = (customer) => {
    const portfolioArr = [];
    customer.portfolios.forEach((portfolio) => portfolioArr.push(portfolio));
    return portfolioArr;
}

export default getPortfoliosFunc;

