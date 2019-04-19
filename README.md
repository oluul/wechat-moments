# Wechat Moments

Wechat Moments `React` implement, Based on `Create React App`.

## Features
- Modern multiple image layout(9 grid && single)
- Image Preview, zoom, gesture
- Automatic update createdTime of post
- comment/like && ui animation
- Normalize redux state 
  - :bookmark: [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
  - :bookmark: [Dissecting Twitter’s Redux Store](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1)

## OS Requirements
- unix-like os
- nodejs >= 10
- yarn

## Dependencies
- react
- redux/react-redux
- [photoswipe](https://github.com/dimsemenov/PhotoSwipe)
- [normalizr](https://github.com/paularmstrong/normalizr)

## How to run
```
git clone https://github.com/oluul/wechat-moments --depth 1
cd wechat-moments

yarn install
yarn start
```

## Build
```
npm run build
```

## Testing
```
 // Not implemented
```

## Todos
- [x] image grid layout (1-9)
- [x] image gallery
- [x] display location
- [x] implement like
- [x] implement comment
- [x] single image layout
- [x] automatic update time
- [x] normalize user data(redux)
- [x] delete comment
- [ ] implement ActionSheet component
- [ ] support video/link
