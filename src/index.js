import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './store/reducers'
import App from './App'
import './common.scss'

const globalInitialState = {
  profile: {
    id: '001',
    name: 'Boldoo',
    avatar: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg',
    banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
  },
  posts: [
    {
      id: "p-001",
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我今天就是不讲理了！你现在打110也好，打工商局也好，把我带走，把我曝光！我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-002', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-003', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-004', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-005', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-006', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-007', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-008', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' },
        { id: 'i-009', url: 'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png' }
      ],
      createdAt: 1555254569270
    }, {
      id: "p-002",
      user: {
        id: 'u-002',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-2.jpg'
      },
      content: "我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
      createdAt: 1555254569270
    }
  ]
}
const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, globalInitialState, middlewares)

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
