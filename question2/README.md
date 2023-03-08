# moovup Assessment - Question 2

## Requirements

`Node v18.13`

## Scripts

In the project directory, first run:

```
npm install
```

Development Mode - Open [http://localhost:3000](http://localhost:3000) to view it in your browser:

```
npm start
```

Test Mode:

```
npm test
```

Production Mode :

```
npm run build
serve -s build
```

## Assumptions Made

1. Provided api only has `GET` method to full data set and not by id. Thus `FriendsDetails` page info is passed by `props`
2. Pagination done as `array slice` compared to `query params`
3. `null` in location handled as displaying error image. Usually would assume backend would not allow for `null` in location
