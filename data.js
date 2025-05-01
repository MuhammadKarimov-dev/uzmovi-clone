const siteData = {
  // Navigatsiya menyu ma'lumotlari
  menu: {
    mainMenu: [
      { title: "Bosh sahifa", link: "/" },
      { 
        title: "Kinolar", 
        link: "#",
        submenu: [
          { title: "Tarjima kinolar", link: "/tarjima-kinolarri" },
          { title: "Premyeralar", link: "/lastnews" },
          { title: "Hind kinolari", link: "/hind-kinolar" },
          { title: "Multfilm", link: "/multfilmlari" },
          { title: "Kino yangiliklar", link: "http://kinochi.net/" }
        ]
      },
      { title: "Seriallar", link: "/serialar" }
    ]
  },
  
  // Kategoriyalar
  categories: {
    seriallar: {
      title: "Seriallar",
      films: [
        {
          id: 1,
          title: "Kurtlar vadiysi",
          image: "https://uzmovi.tv/uploads/posts/2023-11/1700985695_maxresdefault.jpg",
          link: "/player.html?id=1"
        },
        {
          id: 2,
          title: "Qodirxon",
          image: "https://uzmovi.tv/uploads/posts/2023-09/qodirxon.jpg",
          link: "/player.html?id=2"
        },
        {
          id: 3,
          title: "Jumong",
          image: "https://uzmovi.tv/uploads/posts/2023-09/jumong.jpg",
          link: "/player.html?id=3"
        },
        {
          id: 4,
          title: "Yovuzlar mamlakati",
          image: "https://uzmovi.tv/uploads/posts/2019-09/medium_1567423746_1493842.jpg",
          link: "/player.html?id=4"
        },
        {
          id: 5,
          title: "Mehrobdan chayon",
          image: "https://uzmovi.tv/uploads/posts/2019-09/mehrobdan-chayon.jpg",
          link: "/player.html?id=5"
        },
        {
          id: 6,
          title: "Jasur va go'zal",
          image: "https://uzmovi.tv/uploads/posts/2019-09/jasur.jpg",
          link: "/player.html?id=6"
        }
      ]
    }
  }
};

// Eksport qilish (agar backend bilan ishlansa)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteData };
} 