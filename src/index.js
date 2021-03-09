const { request } = require("./request");

module.exports = {
    TopPost: async function TopPost(name) {
        const res = await request(`https://www.reddit.com/r/${name}.json`);
        if (res.length == 0) {
            return false;
        } else {            
            const max = Math.max.apply(Math, res.data.children.map(i => i.data.ups));
            const tosubmit = res.data.children.filter(i => i.data.ups == max);
            return tosubmit;
        }
    },
    TopPosts: async function TopPosts(name) {
        const res = await axios.get(`https://www.reddit.com/r/${name}.json`);
        if (res.length == 0) {
            return false;
        } else {
            const posts = []

            res.data.data.children.forEach(post => {
                posts.push(post.data)
            })
            return posts
        }
    },
    RandomPost: async function RandomPost(name) {
        const res = await request(`https://www.reddit.com/r/${name}.json?limit=100`);
        if (res.length == 0) {
            return false;
        } else {
            let max = [];
            max = res.data.children.map(i => i.data.ups);
            const rand = Math.floor(Math.random() * max.length);
            const tosubmit = res.data.children.filter(i => i.data.ups == max[rand]);
            return tosubmit;
        }
    },
    SubReddit: async function SubReddit() {
        const res = await request(`https://www.reddit.com/reddits.json?limit=100`);
        const subs = res.data.children.map(i => i.data.display_name);
        const rand = Math.floor(Math.random() * subs.length);
        const recommend = subs[rand];
        return recommend;
    },
    SpyRedditor: async function SpyRedditor(name) {
        const res = await request(`https://www.reddit.com/user/${name}.json`);
        return res.data.children.map(i => i.data);
    },
    AllSubReddit: async function AllSubReddit() {
        const res = await request(`https://www.reddit.com/reddits.json?limit=100`);
        const subs = res.data.children.map(i => i.data.display_name);
        return subs;
    }
}
