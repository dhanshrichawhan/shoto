<p align="center">
  <img src="./.hero.png" height="50px"/>
  <br><br>
  <b>URL shortner built with node + express + mongo</b>
  <br>
</p>

&nbsp;

#### usage


`GET http://localhost:3000/shorten?url=https://google.com`


```json
{
  "shortenedUrl": "http://localhost:3000/8y1IYy"
}
```

Note: Visiting the returned shortened url should redirect you to google.com

&nbsp;


#### Running

```sh
git clone https://github.com/dhanshrichawhan/shoto
cd shoto
npm install
npm start # or npm run dev for development
```

&nbsp;


#### acknowledgements

Icons made by [freepik](https://www.flaticon.com/authors/freepik) from  [flaticon](https://www.flaticon.com/)

&nbsp;

#### license

MIT © [dhanshrichawhan](https://github.com/dhanshrichawhan)
