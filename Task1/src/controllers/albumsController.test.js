const express = require("express"); // import express
const albumRoutes = require("../routes/albumRoutes"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = express(); //an instance of an express app, a 'fake' express app
app.use("/", albumRoutes); //routes

describe("Controller tests", () => {
  test("GET /fpfpf", async () => {
    const artist = "fpfpf";
    const {body} = await request(app).get(`/${artist}`);
    expect(body).toEqual({artist: artist, albums: []});
  });
});

describe("Controller tests", () => {
  test("GET /dua_lipa", async () => {
    const artist = "dua_lipa";

    const {body} = await request(app).get(`/${artist}`);
    expect(body).toEqual({
      artist: "dua lipa",
      albums: [
        {
          collectionName: "Dua Lipa (Deluxe)",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/ae/b3/c8/aeb3c82c-e2ba-4d2a-4270-8f15115776d4/source/100x100bb.jpg",
        },
        {
          collectionName: "Future Nostalgia (The Moonlight Edition)",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/51/27/9c/51279c15-552e-3885-a234-fedefd3a0082/source/100x100bb.jpg",
        },
        {
          collectionName: "Dua Lipa (Complete Edition)",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/82/1a/16/821a16d7-6f2f-28b5-a1b8-9c2baeb684e8/source/100x100bb.jpg",
        },
        {
          collectionName: "Levitating (feat. DaBaby) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/4c/54/39/4c5439cc-43c6-c470-185c-2b18e521e5a0/source/100x100bb.jpg",
        },
        {
          collectionName: "Don't Start Now - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/0a/79/9e/0a799e94-f41b-09d0-789b-96a28ef049ae/source/100x100bb.jpg",
        },
        {
          collectionName: "Dua Lipa (Deluxe)",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/1a/6e/c3/1a6ec34b-e75f-1f4a-cb8e-5ab42865ddfb/source/100x100bb.jpg",
        },
        {
          collectionName: "Dua Lipa",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/60/c5/03/60c5035d-a8df-5fda-99db-318169d28257/source/100x100bb.jpg",
        },
        {
          collectionName: "Future Nostalgia",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/51/27/52/5127529e-5ace-4701-166b-f6ad7302a7f5/source/100x100bb.jpg",
        },
        {
          collectionName: "Future Nostalgia (Bonus Edition)",
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/8a/09/7e/8a097e98-5640-abbe-6181-7a073aab8568/source/100x100bb.jpg",
        },
        {
          collectionName: "Future Nostalgia (The Moonlight Edition)",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5f/8c/43/5f8c43b4-cbf0-f0c0-2a1c-e8b87c14ca1c/source/100x100bb.jpg",
        },
        {
          collectionName: "Dua Lipa",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/7e/1d/04/7e1d049a-f012-1b1d-1e0b-018fb1dc809c/source/100x100bb.jpg",
        },
        {
          collectionName: 'Swan Song (From the Motion Picture "Alita: Battle Angel") - Single',
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/2d/39/e5/2d39e5e9-5fec-06da-4738-62a1386e6ede/source/100x100bb.jpg",
        },
        {
          collectionName: "Levitating (The Blessed Madonna Remix) [feat. Madonna and Missy Elliott] - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/46/22/e1/4622e12a-6b6f-0fc3-3e29-ade1bf21608b/source/100x100bb.jpg",
        },
        {
          collectionName: "New Rules (Remixes) - EP",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/d9/5a/de/d95ade1c-8932-5fac-e200-5c4e10058c65/source/100x100bb.jpg",
        },
        {
          collectionName: "Club Future Nostalgia",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/a6/ae/bb/a6aebb03-d3b9-2565-e034-ed026f4deafe/source/100x100bb.jpg",
        },
        {
          collectionName: "Live Acoustic - EP",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/52/b7/b7/52b7b757-2487-39e3-cdec-cd9d4a590115/source/100x100bb.jpg",
        },
        {
          collectionName: "Don't Start Now (Remixes) - EP",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/2f/20/4a/2f204a65-ef7d-b6a4-471d-3c469d9ad211/source/100x100bb.jpg",
        },
        {
          collectionName: "Future Nostalgia - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/1a/61/20/1a612057-6341-c61a-5432-31be758860e3/source/100x100bb.jpg",
        },
        {
          collectionName: "We're Good (Dillon Francis Remix) - Single",
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/9e/72/53/9e7253f4-6125-226d-5c5f-a8dfbbb52e28/source/100x100bb.jpg",
        },
        {
          collectionName: "IDGAF (Remixes II) - EP",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/95/e0/3b/95e03b89-8160-ae8f-52b6-6229a5f201fd/source/100x100bb.jpg",
        },
        {
          collectionName: "Physical (Remixes) - EP",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/fa/3e/6d/fa3e6d51-2b81-28b0-03e1-5f83de888626/source/100x100bb.jpg",
        },
        {
          collectionName: "Blow Your Mind (Mwah) [Remixes] - EP",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music62/v4/33/03/0e/33030efb-3a3c-6e83-1ea9-167422435282/source/100x100bb.jpg",
        },
        {
          collectionName: "Levitating (feat. DaBaby) [Don Diablo Remix] - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/15/d9/c0/15d9c000-ca70-191c-f3bd-62ba2dc938da/source/100x100bb.jpg",
        },
        {
          collectionName: "New Rules (Initial Talk Remix) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/0d/e3/6c/0de36cb2-ff66-175b-2917-0b010287adb8/source/100x100bb.jpg",
        },
        {
          collectionName: "Be the One (Netsky Remix) - Single",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/38/ed/b4/38edb429-9023-41b1-d047-c25089038f8c/source/100x100bb.jpg",
        },
        {
          collectionName: "Hallucinate (Paul Woolford Remix) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/24/bc/50/24bc506e-010e-2cd1-4efb-cfca4685a541/source/100x100bb.jpg",
        },
        {
          collectionName: "Levitating (feat. DaBaby) [KUU Remix] - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/63/b3/44/63b3447c-fe60-e250-0710-ca16cd7d98ab/source/100x100bb.jpg",
        },
        {
          collectionName: "Hotter Than Hell (Remixes) - EP",
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music18/v4/81/e4/14/81e4145d-a9ea-07c6-f85b-8625dd1ce495/source/100x100bb.jpg",
        },
        {
          collectionName: "Blow Your Mind (Mwah) [Acoustic] - Single",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/58/04/4b/58044b1b-3262-f131-b1f3-62bfcb190ccb/source/100x100bb.jpg",
        },
        {
          collectionName: "Break My Heart (Jax Jones Midnight Snack Remix) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/3b/8e/00/3b8e005d-c342-efc2-56f2-ffc5484d30cf/source/100x100bb.jpg",
        },
        {
          collectionName: "IDGAF (Remixes) - EP",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/54/f7/ef/54f7ef21-d217-f2c2-2c96-cfadbbe09fa8/source/100x100bb.jpg",
        },
        {
          collectionName: "Don't Start Now (Live in LA Remix) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/29/67/68/2967681f-e622-80d4-5c0b-77a2f5e36819/source/100x100bb.jpg",
        },
        {
          collectionName: "CAN THEY HEAR US (From ‘Gully’ with original Daniel Heath Score) - Single",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/f7/de/82/f7de8281-9a03-0dcb-a5b4-919b9edf213c/source/100x100bb.jpg",
        },
        {
          collectionName: "Physical (Alok Remix) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/89/3d/60/893d6062-54a3-5e5d-68f1-84d993a0fced/source/100x100bb.jpg",
        },
        {
          collectionName: "Hallucinate (Tensnake Remix) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/62/22/57/622257d4-6b6a-8f7b-4457-e977a08151b8/source/100x100bb.jpg",
        },
        {
          collectionName: 'Swan Song (From the Motion Picture "Alita: Battle Angel") [Remixes] - EP',
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/a1/57/e8/a157e83d-3288-59eb-5fc3-27beec3a8167/source/100x100bb.jpg",
        },
        {
          collectionName: "Thinking 'Bout You (DECCO Remix) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/7a/22/34/7a2234e6-7d13-f801-6d6e-231b07269ae6/source/100x100bb.jpg",
        },
        {
          collectionName: "Break My Heart (Moon Boots Remix) - Single",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/35/81/86/3581867f-de74-3078-5539-907b9a9e6e3d/source/100x100bb.jpg",
        },
        {
          collectionName: "Don't Start Now (Regard Remix) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d0/e2/13/d0e2133c-f56c-1ff4-3664-21061ff51639/source/100x100bb.jpg",
        },
        {
          collectionName: "Last Dance (Remixes) - Single",
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music69/v4/a6/86/37/a6863750-100b-18d9-63bf-81fa6ef057b8/source/100x100bb.jpg",
        },
        {
          collectionName: "We're Good (Dillon Francis Remix) [Radio Edit] - Single",
          artworkUrl100:
            "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e4/ae/a2/e4aea2b9-a7d6-ca6a-f0da-67c511694c83/source/100x100bb.jpg",
        },
        {
          collectionName: "Levitating (feat. Sukriti Kakar & Prakriti Kakar) [Amaal Mallik Remix]",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/47/b8/3b47b8dc-5db7-9b6a-1261-e528235ae602/source/100x100bb.jpg",
        },
        {
          collectionName: "New Love (Remixes) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/d0/e3/73/d0e373d0-1562-1be5-2bb4-22f969c05c50/source/100x100bb.jpg",
        },
        {
          collectionName: 'Swan Song (From the Motion Picture "Alita: Battle Angel") [Acoustic] - Single',
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/b9/4e/f0/b94ef0d2-b7ee-224d-73f6-7778fe8cac5d/source/100x100bb.jpg",
        },
        {
          collectionName: "New Rules (Acoustic) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/2f/98/7b/2f987b1c-f4dc-0b39-35f1-b1286b97de4d/source/100x100bb.jpg",
        },
        {
          collectionName: "Break My Heart (Joris Voorn Remix) - Single",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d1/13/51/d1135146-54e7-17f9-1e73-492cc32d8aad/source/100x100bb.jpg",
        },
        {
          collectionName: "New Rules (Live at the BRITs) - Single",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music62/v4/f3/f6/9b/f3f69b47-62f7-7f4a-f5fa-877de0e88696/source/100x100bb.jpg",
        },
        {
          collectionName: "Physical (feat. Hwa Sa) - Single",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/90/73/a7/9073a7ad-2277-dbca-e7cb-df802d48663e/source/100x100bb.jpg",
        },
        {
          collectionName: "Blow Your Mind (Mwah) - Single",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music117/v4/ca/e1/f8/cae1f8b8-8897-03e1-e50d-5ec8a92492b6/source/100x100bb.jpg",
        },
      ],
    });
  });
});
