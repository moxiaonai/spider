# spider一个基于nodejs的简单爬虫
### 利用superagent,cheerio和mysql
> superagent(http://visionmedia.github.io/superagent/ ) 是个 http 方面的库，可以发起 get 或 post 请求。

> cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据。 

> mysql主要主要负责连接mysql数据库，讲爬取到的数据存入数据库中 
 
 --- 
 基本实现了功能，但是还有有缺陷，所有请求都是并发，尝试一次爬一万条，网站直接爬挂了，所有还有待优化，还有问题就是，所有的请求都是并发，
 因为是爬取小说，所以希望爬到的数据是有序的，而现在是无序的，后期深入学习再优化吧
 
 爬取结果
![数据库存储](http://ww1.sinaimg.cn/large/e01d8d94ly1fdfjr9319tj20rg0d0wfg)
