const ListData = [
  {
    title: "Bright",
    year: 2017,
    director: "David Ayer",
    stars: "Will Smith, Joel Edgerton, Noomi Rapace",
    genre: "Action & Adventure",
    runtime: 110,
    description:
      "In an LA rife with interspecies tensions, a human cop and his orc partner stumble on a powerful object and become embroiled in a prophesied turf war.",
    link: "https://www.netflix.com/in/title/80119234",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_.jpg",
    cover:
      "https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYLuCWdDcbGM6LBm3nVvCvNsVBw9DIe899EsH919NUOiuxjg6fqSbykOJuW5ztfgKrnOvmjcKnXmNWSYmJrnjjDhrg-y.jpg?r=d99",
  },
  // {
  //   title: "Lady Bird",
  //   director: "Greta Gerwig",
  //   stars:
  //     "Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Beanie Feldstein, Timothee Chalamet",
  //   genre: "Drama, Comedy",
  //   runtime: 93,
  //   link: "https://www.amazon.com/Lady-Bird-Saoirse-Ronan/dp/B07734STRN",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/lady-bird-movie-poster.jpg",
  // },
  // {
  //   title: "Moonlight",
  //   director: "Barry Jenkins",
  //   stars:
  //     "Alex Hibbert, Ashton Sanders, Trevante Rhodes, Mahershala Ali, Naomie Harris, Janelle Monáe",
  //   genre: "Drama",
  //   runtime: 110,
  //   link: "https://www.imdb.com/title/tt4975722/",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/moonlight-movie-poster.jpg",
  // },
  // {
  //   title: "I’m Thinking of Ending Things",
  //   director: "Charlie Kaufman",
  //   stars: "Jessie Buckley, Jesse Plemons, Toni Collette, David Thewlis",
  //   genre: "Drama",
  //   runtime: 134,
  //   link: "https://www.netflix.com/in/title/80211559",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/2020/09/11/im-thinking-of-ending.jpg",
  // },
  // {
  //   title: "Lady Bird",
  //   director: "Greta Gerwig",
  //   stars:
  //     "Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Beanie Feldstein, Timothee Chalamet",
  //   genre: "Drama, Comedy",
  //   runtime: 93,
  //   link: "https://www.amazon.com/Lady-Bird-Saoirse-Ronan/dp/B07734STRN",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/lady-bird-movie-poster.jpg",
  // },
  // {
  //   title: "Moonlight",
  //   director: "Barry Jenkins",
  //   stars:
  //     "Alex Hibbert, Ashton Sanders, Trevante Rhodes, Mahershala Ali, Naomie Harris, Janelle Monáe",
  //   genre: "Drama",
  //   runtime: 110,
  //   link: "https://www.imdb.com/title/tt4975722/",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/moonlight-movie-poster.jpg",
  // },
  // {
  //   title: "I’m Thinking of Ending Things",
  //   director: "Charlie Kaufman",
  //   stars: "Jessie Buckley, Jesse Plemons, Toni Collette, David Thewlis",
  //   genre: "Drama",
  //   runtime: 134,
  //   link: "https://www.netflix.com/in/title/80211559",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/2020/09/11/im-thinking-of-ending.jpg",
  // },
  // {
  //   title: "Lady Bird",
  //   director: "Greta Gerwig",
  //   stars:
  //     "Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Beanie Feldstein, Timothee Chalamet",
  //   genre: "Drama, Comedy",
  //   runtime: 93,
  //   link: "https://www.amazon.com/Lady-Bird-Saoirse-Ronan/dp/B07734STRN",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/lady-bird-movie-poster.jpg",
  // },
  // {
  //   title: "Moonlight",
  //   director: "Barry Jenkins",
  //   stars:
  //     "Alex Hibbert, Ashton Sanders, Trevante Rhodes, Mahershala Ali, Naomie Harris, Janelle Monáe",
  //   genre: "Drama",
  //   runtime: 110,
  //   link: "https://www.imdb.com/title/tt4975722/",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/moonlight-movie-poster.jpg",
  // },
  // {
  //   title: "I’m Thinking of Ending Things",
  //   director: "Charlie Kaufman",
  //   stars: "Jessie Buckley, Jesse Plemons, Toni Collette, David Thewlis",
  //   genre: "Drama",
  //   runtime: 134,
  //   link: "https://www.netflix.com/in/title/80211559",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/2020/09/11/im-thinking-of-ending.jpg",
  // },
  // {
  //   title: "Lady Bird",
  //   director: "Greta Gerwig",
  //   stars:
  //     "Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Beanie Feldstein, Timothee Chalamet",
  //   genre: "Drama, Comedy",
  //   runtime: 93,
  //   link: "https://www.amazon.com/Lady-Bird-Saoirse-Ronan/dp/B07734STRN",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/lady-bird-movie-poster.jpg",
  // },
  // {
  //   title: "Moonlight",
  //   director: "Barry Jenkins",
  //   stars:
  //     "Alex Hibbert, Ashton Sanders, Trevante Rhodes, Mahershala Ali, Naomie Harris, Janelle Monáe",
  //   genre: "Drama",
  //   runtime: 110,
  //   link: "https://www.imdb.com/title/tt4975722/",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/moonlight-movie-poster.jpg",
  // },
  // {
  //   title: "I’m Thinking of Ending Things",
  //   director: "Charlie Kaufman",
  //   stars: "Jessie Buckley, Jesse Plemons, Toni Collette, David Thewlis",
  //   genre: "Drama",
  //   runtime: 134,
  //   link: "https://www.netflix.com/in/title/80211559",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/2020/09/11/im-thinking-of-ending.jpg",
  // },
  // {
  //   title: "Lady Bird",
  //   director: "Greta Gerwig",
  //   stars:
  //     "Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Beanie Feldstein, Timothee Chalamet",
  //   genre: "Drama, Comedy",
  //   runtime: 93,
  //   link: "https://www.amazon.com/Lady-Bird-Saoirse-Ronan/dp/B07734STRN",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/lady-bird-movie-poster.jpg",
  // },
  // {
  //   title: "Moonlight",
  //   director: "Barry Jenkins",
  //   stars:
  //     "Alex Hibbert, Ashton Sanders, Trevante Rhodes, Mahershala Ali, Naomie Harris, Janelle Monáe",
  //   genre: "Drama",
  //   runtime: 110,
  //   link: "https://www.imdb.com/title/tt4975722/",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/moonlight-movie-poster.jpg",
  // },
  // {
  //   title: "I’m Thinking of Ending Things",
  //   director: "Charlie Kaufman",
  //   stars: "Jessie Buckley, Jesse Plemons, Toni Collette, David Thewlis",
  //   genre: "Drama",
  //   runtime: 134,
  //   link: "https://www.netflix.com/in/title/80211559",
  //   imgsrc:
  //     "https://cdn.pastemagazine.com/www/articles/2020/09/11/im-thinking-of-ending.jpg",
  // },
];

export default ListData;
