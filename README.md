# reddit-simple
Simple Wrapper Over Reddit Public API for node js No Overhead No Auth Token 

### Get it from npm

`npm i reddit-simple --save`

or Clone this repo

## Import

```js
const { RedditSimple } = require("reddit-simple");
```

## Usage

### Get top post from r/ProgrammerHumor
```js 
RedditSimple.TopPost("programmerHumor").then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
```

### Get Random Post from r/freefolk

```js
RedditSimple.RandomPost("freefolk").then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
```

### Get List of Subreddits

```js
RedditSimple.SubReddit().then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
```

### Spy on Redditor 
```js
RedditSimple.SpyRedditor("dashuser").then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
```