export default{
  slogan:{
    code:`
      <h2>The world need you to</h2>
      <h1 class="blue-text">Re-invent</h1>
    `,
  },
  slides:[
    {
      title:'Smart Bike',
      name:'smartbike',
      img:'bicycle.jpg',
      slogan:'Enjoy refreshing cool air in hot summer months and much needed humidity',
      follower:'1122'
    },
    {
      title:'Smart Key',
      name:'smartkey',
      img:'key.jpg',
      slogan:'Enjoy refreshing cool air in hot summer months and much needed humidity',
      follower:'2460'
    },
    {
      title:'Smart Box',
      name:'smartbox',
      img:'key.jpg',
      slogan:'Enjoy refreshing cool air in hot summer months and much needed humidity',
      follower:'3210'
    },
  ],
  menus:[
    {
      /*
        争执超久的title
        team, organization, startup
      */
      title:'Organzation',
      subtitle:'explore',
      subtitleLink:'/explore',
      menu_items:[
        {
          img:'logo.svg',
          name:'Steve Rogers',
          link:'org/steverogers',
        }
      ],
    },
    {
      title:'Projects',
      subtitle:'see all',
      subtitleLink:'/project',
      menu_items:[
        {
          img:'key.jpg',
          name:'Smart key',
          link:'project/smartkey',
        },
        {
          img:'bicycle.jpg',
          name:'Smart BIKE',
          link:'project/smartbike',
        },
      ],
    },
    {
      title:'Followed Projects',
      subtitle:'see all',
      subtitleLink:'/followedproject',
      menu_items:[
        {
          img:'user.png',
          name:'Linux',
          link:'project/linux',
        },
        {
          img:'aircooler.png',
          name:'Air cooler',
          link:'project/aircooler',
        },
      ],
    },
  ],
  cards:[
    {
      header:{
        author:'Linus Xenos',
        author_img:'user.png',
        org:'Google',
        role:'Founder of Tex Inc',
      },
      img:'bicycle.jpg',
      content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
      time:'8hrs ago',
      like:190,
      isLiked:false,
      replyuser:'',
      comments:[
        {
          img:'user.png',
          name:'Linus everland',
          reply:'',
          comment:'',
          replyuser:'',
        },
        {
          img:'user.png',
          name:'Hellow',
          reply: 'Linus everland',
          comment:'Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin'
        }
      ]
    },
    {
      header:{
        author:'Linus Xenos',
        author_img:'user.png',
        org:'Google',
        role:'Founder of Tex Inc',
      },
      content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
      time:'8hrs ago',
      isLiked:true,
      replyuser:'',
      comments:[
        {
          img:'user.png',
          name:'Linus everland',
          reply:'',
          comment:'ndrerit. Etiam dictum augue in sagittis volutpat. Integer gravida tristique quam, ut consequat lorem rhoncus in. Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin',
          replyuser:'',
        },
        {
          img:'user.png',
          name:'Hellow',
          reply: 'Linus everland',
          comment:'Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin'
        }
      ]
    },
    {
      header:{
        author:'Linus Xenos',
        author_img:'user.png',
        org:'Google',
        role:'Founder of Tex Inc',
      },
      content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
      time:'8hrs ago',
      isLiked:true,
      replyuser:'',
    },
  ]
}