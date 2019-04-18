
function randonId() {
  return Math.random().toString(36).substr(2)
}

export default {
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
        username: "TMC-庆子",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我今天就是不讲理了！你现在打110也好，打工商局也好，把我带走，把我曝光！我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-1.jpg', w: 1080, h: 6752 },
        { id: 'i-002', url: '/assets/tmp-img-2.jpg', w: 1078, h: 1388 },
        { id: 'i-003', url: '/assets/tmp-img-3.jpg', w: 1400, h: 100 },
        { id: 'i-004', url: '/assets/tmp-img-4.jpg', w: 100, h: 1400 },
        { id: 'i-005', url: '/assets/tmp-img-5.jpg', w: 100, h: 2400 },
        { id: 'i-006', url: '/assets/tmp-img-6.jpg', w: 30, h: 720 },
        { id: 'i-007', url: '/assets/avatar-normal.jpg', w: 400, h: 400 },
        { id: 'i-008', url: '/assets/avatar-normal.jpg', w: 400, h: 400 },
        { id: 'i-009', url: '/assets/avatar-normal.jpg', w: 400, h: 400 }
      ],
      address: { locname: 'Beijing · 故宫' },
      createdAt: Date.now()- 42*1000,
      likeList: [{
        id: randonId(),
        createdAt: Date.now(),
        user: {
          id: randonId(),
          name: '王老五',
          avatar: null
        }
      }],
      liked: false,
      comments: [
        {
          id: randonId(),
          createdAt: Date.now(),
          content: '你好王老吉, 你好王老吉你好王老吉',
          user: {
            id: randonId(),
            name: '王老五',
            avatar: null
          }
        },
        {
          id: randonId(),
          createdAt: Date.now(),
          content: '你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉你好王老吉, 你好王老吉',
          user: {
            id: randonId(),
            name: '王老五',
            avatar: null
          },
          reply: {
            id: randonId(),
            name: '王老吉',
            avatar: null
          }
        }
      ]
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "TMC-庆子",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我今天就是不讲理了！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-1.jpg', w: 1080, h: 6752 },
        { id: 'i-002', url: '/assets/tmp-img-2.jpg', w: 1078, h: 1388 },
        { id: 'i-003', url: '/assets/tmp-img-3.jpg', w: 1400, h: 100 },
        { id: 'i-004', url: '/assets/tmp-img-4.jpg', w: 100, h: 1400 }
      ],
      createdAt: Date.now() - 1234876543,
    },
    {
      id: "p-002",
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/avatar-normal.jpg', w: 400, h: 400 }
      ],
      createdAt: Date.now() - 876543223
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-1.jpg', w: 1080, h: 6752 }
      ],
      createdAt: Date.now() - 21345678
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-2.jpg', w: 1078, h: 1388 }
      ],
      createdAt: Date.now() - 14223456378
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-3.jpg', w: 1400, h: 100 }
      ],
      createdAt: Date.now() - 456723451,
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-4.jpg', w: 100, h: 1400 }
      ],
      createdAt: Date.now() - 131434521,
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-5.jpg', w: 100, h: 2400 }
      ],
      createdAt: Date.now() - 5687
    },
    {
      id: randonId(),
      user: {
        id: 'u-001',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-1.jpg'
      },
      content: "我没开出门啊，大哥！",
      images: [
        { id: 'i-001', url: '/assets/tmp-img-6.jpg', w: 30, h: 720 }
      ],
      createdAt: Date.now() - 45622
    },
    {
      id: "p-003",
      user: {
        id: 'u-002',
        username: "Boldoo",
        avatar: process.env.PUBLIC_URL + '/assets/avatar-2.jpg'
      },
      content: "我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
      createdAt: Date.now() - 34552342,
    }
  ]
}
