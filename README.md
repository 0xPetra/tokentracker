
# React Native Challenge

Xivis is looking for people who can build awesome mobile apps & products, so we created this challenge to test our candidates' overall developer skills.

Your objective is to build an incredible experience for users who want to see an up-to-date list of all their [ERC-20](https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/) tokens. 

The App is divided in 3 main parts:

1. Onboarding Walkthrough

![](challenge_assets/small/01.png?raw=true)
![](challenge_assets/small/02.png?raw=true)
![](challenge_assets/small/03.png?raw=true)

2. Setting your account - for the first and only time, users will have to input their account address into the app

![](challenge_assets/small/04.png?raw=true)

3. List all user's tokens and his/her total balance (expressed in USD)

![](challenge_assets/small/05.png?raw=true)

--------
APIs you will need:

1. Get all ERC-20 tokens for the submitted address (bear in mind that this call will return more than one row for the same Token)

http://api.etherscan.io/api?module=account&action=tokentx&address=USER-ADDRESS&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken

2. For each ERC-20 token, query the contract and get the user's balance

https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=ERC20-CONTRACT-ADDRESS&address=USER-ADDRESS&tag=latest

The value obtained will need to be converted depending token's decimals, just for the sake of this being a challenge: **divide this value by 18**

3. Get the price of each token and multiply by user's balance
https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=API-KEY

--------

For more information regarding our boilerplate: [click here!](Boilerplate.md)

**Happy Coding!**