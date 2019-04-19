
function randonId() {
  return Math.random().toString(36).substr(2)
}

export default {
  entities: {
    users: {
      allIds: new Array(5).fill(0).map((d, i) => `user-00${i}`),
      byId: {
        'user-000': {
          id: 'user-000',
          name: 'Boldoo',
          avatar: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg',
          banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
        },
        'user-001': {
          id: 'user-001',
          name: 'TMC·庆子',
          avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg',
          banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
        },
        'user-002': {
          id: 'user-002',
          name: 'Hairhan',
          avatar: process.env.PUBLIC_URL + '/assets/avatar-2.jpg',
          banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
        },
        'user-003': {
          id: 'user-003',
          name: 'Gangtmur',
          avatar: process.env.PUBLIC_URL + '/assets/avatar-3.jpg',
          banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
        },
        'user-004': {
          id: 'user-004',
          name: '唐老鸭',
          avatar: process.env.PUBLIC_URL + '/assets/avatar-2.jpg',
          banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
        }
      }
    },
    posts: {
      allIds: new Array(8).fill(0).map((d, i) => `post-00${i}`),
      byId: {
        'post-000': {
          id: 'post-000',
          user: 'user-002',
          content: "我今天就是不讲理了！你现在打110也好，打工商局也好，把我带走，把我曝光！我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-002', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-003', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-004', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-005', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-006', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-007', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-008', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 },
            { id: 'i-009', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 }
          ],
          address: { locname: 'Beijing · 故宫' },
          createdAt: Date.now()- 40*1000,
          likeList: [{
            id: randonId(),
            createdAt: Date.now(),
            user: 'user-001'
          }],
          liked: false,
          comments: [
            {
              id: randonId(),
              createdAt: Date.now(),
              content: '你好王老吉, 你好王老吉你好王老吉',
              user: 'user-002'
            },
            {
              id: randonId(),
              createdAt: Date.now(),
              content: '你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉',
              user: 'user-001',
              reply: 'user-002'
            }
          ]
        },
        'post-001': {
          id: 'post-001',
          user: 'user-003',
          content: "我没开出门啊，大哥！",
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg', w: 400, h: 400 }
          ],
          likeList: [],
          createdAt: Date.now()- 43.99*(1000*60)
        },
        'post-002': {
          id: 'post-002',
          user: 'user-001',
          content: "我今天就是不讲理了！",
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/tmp-img-1.jpg', w: 1080, h: 6752 },
            { id: 'i-002', url: process.env.PUBLIC_URL + '/assets/tmp-img-2.jpg', w: 1078, h: 1388 },
            { id: 'i-003', url: process.env.PUBLIC_URL + '/assets/tmp-img-3.jpg', w: 1400, h: 100 },
            { id: 'i-004', url: process.env.PUBLIC_URL + '/assets/tmp-img-4.jpg', w: 100, h: 1400 }
          ],
          likeList: [],
          createdAt: Date.now()- 87*1000
        },
        'post-003': {
          id: 'post-003',
          user: 'user-004',
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/tmp-img-2.jpg', w: 1078, h: 1388 }
          ],
          likeList: [],
          createdAt: Date.now() - 14223456378
        },
        'post-004': {
          id: 'post-004',
          user: 'user-004',
          content: "我没开出门啊，大哥！",
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/tmp-img-1.jpg', w: 1080, h: 6752 }
          ],
          likeList: [],
          createdAt: Date.now()
        },
        'post-005': {
          id: 'post-005',
          user: 'user-003',
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/tmp-img-7.jpg', w: 148, h: 126 }
          ],
          likeList: [],
          createdAt: Date.now() - 456723451,
        },
        'post-006': {
          id: 'post-006',
          user: 'user-001',
          content: "我没开出门啊，大哥！",
          images: [
            { id: 'i-001', url: process.env.PUBLIC_URL + '/assets/tmp-img-5.jpg', w: 100, h: 2400 }
          ],
          likeList: [],
          createdAt: Date.now() - 5687
        },
        'post-007': {
          id: 'post-007',
          user: 'user-003',
          content: "我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
          likeList: [],
          createdAt: Date.now() - 34552342,
        }
      }
    }
  },
  profile: {
    id: 'user-000',
    name: 'Boldoo',
    avatar: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg',
    banner: process.env.PUBLIC_URL + '/assets/banner-normal.jpg'
  }
}
