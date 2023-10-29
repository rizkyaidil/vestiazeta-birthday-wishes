// Assuming you have the tweet data in a variable called tweetData
const tweetData = [
  { // Clarence_Kiva
    "id": 1,
    "img": "Clarence_Kiva.png",
    "name": "Kiva",
    "username": "@Clarence_Kiva",
    "tweet": "HappyBirthday, Zeta! Wishing you all the best and good health for the future come. Hope everything you want to achive will come to you"
  },
  { // Cams 📜⏳
    "id": 2,
    "img": "kroniecams.png",
    "name": "Cams 📜⏳",
    "username": "@kroniecams",
    "tweet": "HBD to coolest agent ever! I wish that your birthday bring with it another year of success and fun times! You deserve the best, chief.",
    "tweet-img": "kroniecams-media.jpeg"
  },
  { // Yoonsehaa
    "id": 3,
    "img": "Yoonsehaaa.jpg",
    "name": "Yoonsehaa",
    "username": "@Yoonsehaa",
    "tweet": "HBD to coolest agent ever! I wish that your birthday bring with it another year of success and fun times! You deserve the best, chief."
  },
  { // Fuyu
    "id": 4,
    "img": "YukikoFuyu.jpg",
    "name": "fuyu | CF17 (E-08) Comms. open",
    "username": "@YukikoFuyu",
    "tweet": "Happy birthday Zeta!, wishing you the very best for upcoming years. Take care of yourself and always be happy! I'll draw more for you!!"
  },
  { // Mika Lien 📜
    "id": 5,
    "img": "Z_Mika_L.png",
    "name": "Mika Lien 📜",
    "username": "@Z_Mika_L",
    "tweet": "Happy birthday zeta o7!!! May your birthday be filled with Pon. Love your Pon :D"
  },  
  { // Mika Lien 📜
    "id": 6,
    "img": "zipli_.png",
    "name": "zipli",
    "username": "@zipli_",
    "tweet": "I hope that today you'll get given back hundred fold all the moments of joy and happiness you have given us. Happy birthday Zeta!"
  },
  { // Vesera Veangra
    "id": 7,
    "img": "vesera_avannu.jpg",
    "name": "Vesera Veangra",
    "username": "@@vesera_avannu",
    "tweet": "HappyBirthday Zeta!! Wish you all the best on your missions Chieg! May you stay the PON Cat we love <3"
  },
  { // EmojiBotto | LiuBei168「劉備」📜🔨☔🔻💜✝🥺
    "id": 8,
    "img": "ryubi168.jpg",
    "name": "EmojiBotto | LiuBei168「劉備」📜🔨☔🔻💜✝🥺",
    "username": "@ryubi168",
    "tweet": "Met Ultah Chief~!Aaku harap semua impianmu menjadi kenyataan~! Uwee Gambate~!"
  },
  { // Yulius🔮📜
    "id": 9,
    "img": "yuliuss_yulius.png",
    "name": "Yulius🔮📜",
    "username": "@yuliuss_yulius",
    "tweet": "Happy birthday our beloved chief. I hope all your wish can come true. I hope chief always healthy. Good luck for your future content chief.💖"
  }, 
  { // MaryLily Vgen| open for commission
    "id": 10,
    "img": "MaryLilycom.jpg",
    "name": "MaryLily Vgen| open for commission",
    "username": "@MaryLilycom",
    "tweet": "HAPPY BIRTHDAY ZETA~~ Thank yoy for the smile you showed to us everyday. Wish you all the best, Chief :3"
  },
  { // Cefilua 📜
    "id": 11,
    "img": "cefilutu.png",
    "name": "Cefilua 📜",
    "username": "@cefilutu",
    "tweet": "Selamat ulang tahun ya chief! Panjang umur sehat selalu dan makan sayur, Thank you for being an inspiration for us!"
  },
  { // uzu
    "id": 12,
    "img": "uzudark.png",
    "name": "uzu",
    "username": "@uzudark",
    "tweet": "have a great birthday, chief! wishing you a day that is as special as you are <3"
  },
  { // EnderAlto
    "id": 13,
    "img": "EnderViole.png",
    "name": "EnderAlto",
    "username": "@EnderViole",
    "tweet": "HappyBirthday to you Vestia Zeta Hopefully Zeta can continue to be happy and keep Brings Joy And please stay healty Chief - EnderViole"
  },
  { // FBC
    "id": 14,
    "img": "fbc_14.jpg",
    "name": "FBC",
    "username": "@fbc_14",
    "tweet": "Happy birthday Zeta! You always make us happy with your streams. I hope you continue to have fun with hololive and zecreataries."
  },
  { // Ryan Razrygal
    "id": 15,
    "img": "razrygal.png",
    "name": "Ryan Razrygal",
    "username": "@razrygal",
    "tweet": "HappyBirthday Zeta!! please have a nice and AMazing dAy! best wishes for our Clever and Astonishing secreT agent!(read the caps)"
  },
  { // ✧༺ZecretaryMagang༻✧
    "id": 16,
    "img": "ZecretaryMagang.jpg",
    "name": "✧༺ZecretaryMagang༻✧",
    "username": "@ZecretaryMagang",
    "tweet": "Happy birthday chief!! Thanks you for being the brightest person I know, Hope to see you shine for years on!"
  },
  { // Hiro (ヒロ)
    "id": 17,
    "img": "Hiro_1904.jpg",
    "name": "Hiro (ヒロ)",
    "username": "@Hiro_1904",
    "tweet": "HappyBirthday my boss Zeta! Semoga apa yang kamu semogakan tidak hanya menjadi sekedar semoga, tetapi secepatnya terwujudkan! Love u chief<3"
  },
  { // Rhex D
    "id": 18,
    "img": "rhex_d.png",
    "name": "Rhex D",
    "username": "@rhex_d",
    "tweet": "Selamat ulang tahun chief!!! Semoga panjang umur dan berbahagia selalu, segera tercapai semua cita-citamu, dan sehat selalu . Cie tua"
  },
  { // Vtando 📜|⏳|🌿|☄️
    "id": 19,
    "img": "vtando_.jpg",
    "name": "Vtando 📜|⏳|🌿|☄️",
    "username": "@vtando_",
    "tweet": "HappyBirthday Zeta-sama! I hope all your birthday wishes come true and you have an amazing year <3"
  },
  { // Arsène Rorin
    "id": 20,
    "img": "iamrorin_.jpg",
    "name": "Arsène Rorin",
    "username": "@iamrorin_",
    "tweet": "HappyBirthday, Chief!May you recive all the love from loved ones :D"
  },
  { // Pearlパールルルル
    "id": 21,
    "img": "PearlNotParu.jpg",
    "name": "Pearlパールルルル",
    "username": "@PearlNotParu",
    "tweet": "HappyBirthday Zeta!! Thank for bringing us happyness as always. Wish you all the best and take care of yourself"
  },
  { // UruHaru🦋「うるはる」
    "id": 22,
    "img": "UruHaru_122.jpg",
    "name": "UruHaru🦋「うるはる」",
    "username": "@UruHaru_122",
    "tweet": "Uweeee HBD Chief, Semoga di berikan kesehatan selalu. Semoga rencana ke depan nya berjalan lancar, bahagia selalu ya chief. I Love You"
  },
  { // stotlekeebs
    "id": 23,
    "img": "stotlekeebs.png",
    "name": "stotlekeebs",
    "username": "@stotlekeebs",
    "tweet": "HappyBirthday and congrats for 600k chief, cant wait for more zetamins in future and more UWEEEEEEEE o7"
  },
  { // MikeDrawArt VGen (Comms Open 0/6)
    "id": 24,
    "img": "MikeDrawArt98.jpg",
    "name": "MikeDrawArt VGen (Comms Open 0/6)",
    "username": "@MikeDrawArt98",
    "tweet": "HappyBirthday, Chief! I hope your dream can come true this year and I love u chief! o7"
  },
  { // GrumpyWumpyCat 🕸️
    "id": 25,
    "img": "GrumpyWumpyCat.jpg",
    "name": "GrumpyWumpyCat 🕸️",
    "username": "@GrumpyWumpyCat",
    "tweet": "Happy Bday Zety zet zet, i hope you have more fun memories and wishing you happyness, This day is all yours chief, have fun!"
  },
  { // Yuna
    "id": 26,
    "img": "ReyFS_.jpg",
    "name": "Yuna",
    "username": "@ReyFS_",
    "tweet": "HappyBirthday Zetaaa. So, i just want to say \"Wish you all the best chief\" May this year be a wonderful year for you!'.. 💖Terima kasih💖"
  },
  { // Agent R9
    "id": 27,
    "img": "bluesloveyou.jpg",
    "name": "Agent R9",
    "username": "@bluesloveyou",
    "tweet": "Happy birthday <del>CAT</del> Chief! I hope all your birthday wishes and dreams come true.",
    "tweet-img": "bluesloveyou-media.png"
  },
  { // SIX / Roku
    "id": 28,
    "img": "rokusketch.jpg",
    "name": "SIX / Roku",
    "username": "@rokusketch",
    "tweet": "Happy birthday to the most tensai chief in the world. Thank you for bringing smiles and laughter upon everyone's faces. You truly are the greatest. Here's to another year of the silliest secret agent activities 🥳 <br><a>#ZETANISM2022</a> <a>#Zetacrylic</a>",
    "tweet-video": "rokusketch-media.mp4"
  },
  { // 皿理満-sarariman-
    "id": 29,
    "img": "sarariman114.jpg",
    "name": "皿理満-sarariman-",
    "username": "@sarariman114",
    "tweet": "｡:*･.｡.*･.｡.*Happy Birthday  ZETA!*.｡.･*･.｡.*:｡ <br><a>#ZETANISM2022</a> <a>#Zetacrylic</a>",
    "tweet-img": "sarariman114-media.jpeg"
  },
  { // 神楽アシス📜👁‍🗨🔮☔🔱🐾🎨🦉"ZETANISM"
    "id": 30,
    "img": "asice_corone.jpg",
    "name": "神楽アシス📜👁‍🗨🔮☔🔱🐾🎨🦉\"ZETANISM\"",
    "username": "@asice_corone",
    "tweet": "日本からお先に！<br> ゼータちゃん誕生日おめでとう～～！<br><a>#ZETANISM2022</a>"
  },
  { // Zeta's Zecret Intellijen 📜
    "id": 31,
    "img": "OperationV7.png",
    "name": "Zeta's Zecret Intellijen 📜",
    "username": "@OperationV7",
    "tweet": "Happy Birthday Chief, o7 <br><br><strong>Drag the cards to move!!!</strong>",
  }
];

// Get the tweets container element
const tweetsContainer = document.querySelector('.tweets-container');

// Loop through the tweet data and generate HTML for each tweet
tweetData.forEach(tweet => {

  // Check if "tweet-img" is not empty
  const tweetImgHTML = tweet['tweet-img'] ? 
    `<img class="tweet-img" width="100%" src="images/${tweet['tweet-img']}" />` : '';

  // Check if "tweet-video" is not empty
  const tweetVideoHTML = tweet['tweet-video'] ? 
    `<video class="tweet-video" width="100%" controls>
      <source src="videos/${tweet['tweet-video']}" type="video/mp4">
    </video>` : '';

  // Check if "tweet-audio" is not empty
  const tweetAudioHTML = tweet['tweet-audio'] ? 
    `<audio class="tweet-audio" controls>
      <source src="audios/${tweet['tweet-audio']}" type="audio/mp3">
    </audio>` : '';

  const tweetHTML = `
    <div class="card-tweet">
      <div class="card">
        <div class="card-header">
          <div class="user">
            <img class="user-img" src="images/${tweet['img']}" />
            <div class="user-info">
              <span class="name">${tweet['name']}</span>
              <span class="username">${tweet['username']}</span>
            </div>
          </div>
          <div class="twitter-logo">
            <svg viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
          </div>
        </div>
        <p class="tweet">
          ${tweet['tweet']}
        </p>
        ${tweetImgHTML} <!-- Conditionally display the image -->
        ${tweetVideoHTML} <!-- Conditionally display the video -->
        ${tweetAudioHTML} <!-- Conditionally display the video -->
        <p class="tweet-time">07:00 AM · Nov 7, 2022</p>
        <hr />
        <div class="tweet-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
        </div>
      </div>
    </div>
  `;

  // Append the tweet HTML to the tweets container
  tweetsContainer.innerHTML += tweetHTML;
});