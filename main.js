 const Cakes = {
  "chocolate": [
    { "id": 1,  "tags": ["eggless", "premium"], "title": "Classic Chocolate Fudge Cake", "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOrhv5O07M9sDIDBNobfvx6Qi-OQ2q8D674Q42pzHVlx1AjQxZcwUb6sre-nnc8XG1WH2xys9d8_HrqFZzQP5dgxGgmdvQ9pBdgtPlYj4eBn1dH2Kbvrnfdg", "description": "Moist chocolate layers with rich, creamy fudge frosting.", "price": 350, "discount": 10 },
    { "id": 2, "tags": ["veg"], "title": "Devil’s Food Cake", "image": "https://www.allrecipes.com/thmb/a1qvEaJAkqzTiLWc9dm6NYfJfVw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7736_DarkChocolate-Cake1_MFS50-2000-9df22a031112480a81c54898140efb13.jpg", "description": "Dark, airy chocolate cake with intense cocoa flavor.", "price": 360, "discount": 5 },
    { "id": 3,  "tags": ["premium", "veg"], "title": "Chocolate Lava Cake", "image": "https://inbloombakery.com/wp-content/uploads/2022/04/chocolate-drip-cake-featured-image.jpg", "description": "Individual cake with a gooey molten chocolate center.", "price": 370, "discount": 8 },
    { "id": 4, "tags": ["veg", "eggless"], "title": "Black Forest Cake", "image": "https://theovenchef.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-11-01-at-5.39.28-PM-1-scaled-e1698841246352.jpeg", "description": "Chocolate sponge layered with whipped cream and cherries.", "price": 340, "discount": 12 },
    { "id": 5, "tags": ["premium"], "title": "Chocolate Truffle Cake", "image": "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png", "description": "Dense cake filled with smooth chocolate truffle ganache.", "price": 390, "discount": 7 },
    { "id": 6,  "tags": ["veg"], "title": "German Chocolate Cake", "image": "https://bluebowlrecipes.com/wp-content/uploads/2023/08/chocolate-truffle-cake-8844.jpg", "description": "Chocolate cake topped with coconut-pecan frosting.", "price": 355, "discount": 6 },
    { "id": 7,  "tags": ["premium", "eggless"], "title": "Chocolate Mousse Cake", "image": "https://www.warmoven.in/cdn/shop/files/duel-delight-chocolate_-cake.jpg?v=1749833568&width=1080", "description": "Soft cake layered with light chocolate mousse.", "price": 365, "discount": 4 },
    { "id": 8,  "tags": ["premium"], "title": "Chocolate Espresso Cake", "image": "https://assets.winni.in/product/primary/2023/4/84499.jpeg?dpr=2&w=220", "description": "Chocolate cake infused with espresso for a bold taste.", "price": 380, "discount": 9 },
    { "id": 9,  "tags": ["veg"], "title": "Chocolate Peanut Butter Cake", "image": "https://cakelinks.in/cdn/shop/files/DarkChocolteCake.jpg?v=1723188537", "description": "Chocolate layers paired with creamy peanut butter frosting.", "price": 345, "discount": 11 },
    { "id": 10, "tags": ["premium", "eggless"], "title": "Chocolate Raspberry Cake", "image": "https://ocakes.in/storage/app/public/images/item/item-642f49f6dd33d.jpg", "description": "Chocolate sponge layered with raspberry jam and frosting.", "price": 395, "discount": 10 },
    { "id": 11, "tags": ["veg"], "title": "Chocolate Caramel Cake", "image": "https://www.gogift.in/images/thumbnails/275/275/product/28/7969.jpg", "description": "Chocolate cake drizzled with caramel sauce.", "price": 360, "discount": 5 },
    { "id": 12, "tags": ["premium", "eggless"], "title": "Flourless Chocolate Cake", "image": "https://cruff.in/cdn/shop/collections/Birthday_Chocolate_Dripping_cake.jpg?v=1731662177", "description": "Dense, fudgy chocolate cake without flour.", "price": 400, "discount": 12 },
    { "id": 13, "tags": ["veg", "eggless"], "title": "Chocolate Almond Cake", "image": "https://www.cakesify.com/wp-content/uploads/cakesify-uploads/products/2023/10/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq-1.jpeg", "description": "Chocolate cake flavored with almond extract and topped with almonds.", "price": 375, "discount": 7 },
    { "id": 14, "tags": ["veg", "eggless"], "title": "Chocolate Hazelnut Cake", "image": "https://crumbsandcaramel.com/wp-content/uploads/2020/10/WS-Skull-Cake-Hero-Blog.jpg", "description": "Chocolate layers with hazelnut cream filling.", "price": 390, "discount": 9 },
    { "id": 15,  "tags": ["veg"], "title": "Chocolate Orange Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOrKbPCckKw9VTwyteYJ5f15_xxVlMSyXrw&s", "description": "Chocolate cake infused with orange zest and glazed with chocolate.", "price": 385, "discount": 6 }
  ],
  "vanilla": [
    { "id": 1, "tags": ["eggless", "veg"], "title": "Classic Vanilla Sponge Cake", "image": "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/31158_vanilla-cake.jpeg", "description": "Light, airy vanilla layers with a delicate crumb.", "price": 320, "discount": 5 },
    { "id": 2, "tags": ["veg"], "title": "Old-Fashioned Vanilla Butter Cake", "image": "https://www.flowersacrossindia.com/cdn/shop/products/MGDCAK2017012.jpg?v=1533113265&width=533", "description": "Rich, buttery vanilla cake with a tender texture.", "price": 330, "discount": 7 },
    { "id": 3,  "tags": ["eggless", "veg", "premium"], "title": "Vanilla Bean Pound Cake", "image": "https://dy9wzeeht8myy.cloudfront.net/images/catalog/flowers/CH426-350x350.jpg", "description": "Dense, moist cake made with real vanilla bean specks.", "price": 310, "discount": 9 },
    { "id": 4, "tags": ["veg"], "title": "French Vanilla Layer Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x6786VLvfSL2E7XqCKdbO6W844Acv2y5aA&s", "description": "Soft layers infused with creamy French vanilla.", "price": 315, "discount": 6 },
    { "id": 5, "tags": ["eggless", "veg"], "title": "Vanilla Chiffon Cake", "image": "https://assets.winni.in/product/primary/2025/4/102706.jpeg?dpr=2&w=220", "description": "Fluffy, cloud-light vanilla cake with a subtle sweetness.", "price": 345, "discount": 10 },
    { "id": 6, "tags": ["premium", "veg"], "title": "Vanilla Almond Cake", "image": "https://natashaskitchen.com/wp-content/uploads/2020/07/Vanilla-Cake-SQ-500x500.jpg", "description": "Classic vanilla cake enhanced with almond flavor and crunch.", "price": 350, "discount": 5 },
    { "id": 7, "tags": ["eggless", "veg"], "title": "Vanilla Coconut Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhp7mgqfbD3R4a3EN1fDSDh_HyMtUHo5s5g&s", "description": "Moist vanilla cake paired with sweet shredded coconut.", "price": 335, "discount": 8 },
    { "id": 8, "tags": ["veg"], "title": "Vanilla Birthday Celebration Cake", "image": "https://swastikflower.com/wp-content/uploads/2024/05/Premium-Vanilla-Cake.jpg", "description": "Tall vanilla layers with colorful sprinkles and frosting.", "price": 360, "discount": 6 },
    { "id": 9, "tags": ["eggless", "veg"], "title": "Vanilla Lemon Cake", "image": "https://assets.winni.in/product/primary/2023/8/88014.jpeg?dpr=2&w=220", "description": "Bright, citrus-kissed vanilla cake with a zesty finish.", "price": 340, "discount": 7 },
    { "id": 10, "tags": ["premium", "veg"], "title": "Vanilla Caramel Drip Cake", "image": "https://beyondfrosting.com/wp-content/uploads/2017/09/Easy-Moist-Vanilla-Cake-8270-2.jpg", "description": "Vanilla sponge topped with rich caramel drip and frosting.", "price": 355, "discount": 10 },
    { "id": 11, "tags": ["veg"], "title": "Vanilla Strawberry Cake", "image": "https://assets.winni.in/product/primary/2025/2/102017.jpeg?dpr=1&w=1000", "description": "Vanilla layers filled with fresh strawberries and cream.", "price": 325, "discount": 4 },
    { "id": 12, "tags": ["premium", "veg"], "title": "Vanilla Mascarpone Cake", "image": "https://assets.winni.in/product/primary/2025/4/102706.jpeg?dpr=2&w=220", "description": "Silky mascarpone frosting layered on soft vanilla cake.", "price": 345, "discount": 5 },
    { "id": 13, "tags": ["eggless", "veg"], "title": "Vanilla Honey Cake", "image": "https://sugarandsparrow.s3.us-west-2.amazonaws.com/flour/wp-content/uploads/2022/02/16214527/Best-Vanilla-Cake-Recipe-6.jpeg", "description": "Tender vanilla cake sweetened with natural honey.", "price": 330, "discount": 8 },
    { "id": 14, "tags": ["veg", "premium"], "title": "Vanilla Rose Cake", "image": "https://img.taste.com.au/BYEcPquu/taste/2010/01/easy-vanilla-butter-cake_1980x1320-118393-1.jpg", "description": "Elegant vanilla cake scented with a hint of rosewater.", "price": 365, "discount": 9 },
    { "id": 15,  "tags": ["veg"], "title": "Vanilla Custard Cake", "image": "https://oogio.net/wp-content/uploads/2014/09/vanilla_apple_and_cashew_crumble_cake-s.jpg", "description": "Vanilla layers filled with smooth, creamy custard.", "price": 350, "discount": 6 }
  ],
  "red_velvet": [
    { "id": 1, "tags": ["veg"], "title": "Classic Red Velvet Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQfVfEnPh5y7baqCBqlgh4CHUcDyLGqOhqA&s", "description": "Soft, tangy cocoa-kissed layers with smooth cream cheese frosting.", "price": 420, "discount": 10 },
    { "id": 2, "tags": ["veg"], "title": "Southern Red Velvet Layer Cake", "image": "https://bhaibhenkakitchen.com/wp-content/uploads/2025/03/Screenshot2024-06-13at12.48.05AM-1.webp", "description": "Traditional buttermilk red velvet with rich, fluffy frosting.", "price": 430, "discount": 8 },
    { "id": 3, "tags": ["premium", "veg"], "title": "Red Velvet Cheesecake Cake", "image": "https://www.gracebakery.in/images/chocolate-red-velvet-cake.webp", "description": "Red velvet layers wrapped around a creamy cheesecake center.", "price": 440, "discount": 12 },
    { "id": 4, "tags": ["veg"], "title": "Red Velvet Buttercream Cake", "image": "https://www.dpsainiflorist.com/wp-content/uploads/2025/01/DP900130096.jpeg", "description": "Velvety red cake paired with silky vanilla buttercream.", "price": 415, "discount": 6 },
    { "id": 5, "tags": ["veg"], "title": "Red Velvet Chocolate Chip Cake", "image": "https://bakewithzoha.com/wp-content/uploads/2024/09/red-velvet-cake-featured-1.jpg", "description": "Red velvet sponge dotted with mini chocolate chips.", "price": 445, "discount": 9 },
    { "id": 6, "tags": ["eggless", "veg"], "title": "Red Velvet Oreo Cake", "image": "https://assets.winni.in/product/primary/2024/3/94572.jpeg?dpr=1&w=500", "description": "Red velvet layers filled with cookies-and-cream frosting.", "price": 430, "discount": 7 },
    { "id": 7, "tags": ["premium", "veg"], "title": "Red Velvet Marble Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42aOElXztklBaHnMNbBGY0f0BY3ksnCEyGg&s", "description": "Swirled red velvet and vanilla cake with a creamy finish.", "price": 460, "discount": 10 },
    { "id": 8, "tags": ["eggless", "veg"], "title": "Red Velvet Truffle Cake", "image": "https://bakeitwithlove.com/wp-content/uploads/2022/09/red-velvet-cake-h.jpg", "description": "Dense red velvet cake topped with decadent chocolate truffle ganache.", "price": 425, "discount": 5 },
    { "id": 9, "tags": ["premium", "veg"], "title": "Red Velvet Raspberry Cake", "image": "https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/plant/172751575530-350x350.jpg", "description": "Red velvet cake layered with fresh raspberries and cream cheese frosting.", "price": 455, "discount": 11 },
    { "id": 10,  "tags": ["veg"], "title": "Red Velvet Almond Cake", "image": "https://assets.winni.in/product/primary/2022/9/74677.jpeg?dpr=2&w=220", "description": "Classic red velvet enriched with a subtle almond aroma.", "price": 470, "discount": 9 },
    { "id": 11, "tags": ["eggless", "veg"], "title": "Red Velvet Coconut Cream Cake", "image": "https://assets.winni.in/product/primary/2022/9/73507.jpeg?dpr=2&w=220", "description": "Red velvet layers paired with light coconut frosting.", "price": 440, "discount": 6 },
    { "id": 12, "tags": ["veg"], "title": "Red Velvet Strawberry Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M6865pAetc9upQSk-ZDP7FAOfyUF66elaw&s", "description": "Filled with strawberry compote and cream cheese icing.", "price": 465, "discount": 8 },
    { "id": 13, "tags": ["veg"], "title": "Red Velvet Cinnamon Cake", "image": "https://www.kabhi-b.com/cdn/shop/files/red_velvet_chiffon_cake_1_c8b7884e-6546-4229-b443-ed63fa8624ea.jpg?v=1728979802&width=3840", "description": "Fluffy and moist red velvet delight.", "price": 450, "discount": 6 },
    { "id": 14,  "tags": ["premium", "veg"], "title": "Red Velvet Caramel Drip Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCkeLohD3dRlh-pwSXjMoHqsPmVDanxqgKw&s", "description": "Velvet cake topped with sweet cream.", "price": 475, "discount": 12 },
    { "id": 15, "tags": ["eggless", "veg"], "title": "Red Velvet Mousse Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxg6uBipgc7tKTKm9G-vXu1vF89wxu20jwdA&s", "description": "Red velvet infused with warm cinnamon spice.", "price": 460, "discount": 7 }
  ],
  "banana": [
    { "id": 1, "tags": ["veg"], "title": "Classic Banana Cake", "image": "https://hips.hearstapps.com/hmg-prod/images/banana-cake-lead-668d5778a02cb.jpg?crop=1xw:1xh;center,top&resize=640:*", "description": "Soft, moist cake made with ripe bananas and light frosting.", "price": 300, "discount": 10 },
    { "id": 2, "tags": ["eggless"], "title": "Banana Walnut Cake", "image": "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-banana-date-walnut-cake.jpg", "description": "Banana sponge blended with crunchy toasted walnuts.", "price": 310, "discount": 8 },
    { "id": 3, "tags": ["premium"], "title": "Banana Caramel Cake", "image": "https://grandbaby-cakes.com/wp-content/uploads/2021/06/Banana-Cake-9.jpg", "description": "Sweet banana cake topped with a rich caramel glaze.", "price": 320, "discount": 6 },
    { "id": 4, "tags": ["veg"], "title": "Banana Chocolate Chip Cake", "image": "https://www.lifeloveandsugar.com/wp-content/uploads/2025/07/Caramel-Banana-Layer-Cake1-E.jpg", "description": "Banana cake dotted with melty chocolate chips.", "price": 330, "discount": 7 },
    { "id": 5, "tags": ["eggless"] , "title": "Banana Coconut Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQeYF31R4uhLgZh6Sl4l6FMsvjVpr7iC7ig&s", "description": "Tropical-style banana cake layered with coconut cream.", "price": 315, "discount": 5 },
    { "id": 6, "tags": ["veg","premium"], "title": "Banana Cinnamon Spice Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnnxKYCCgfdmRAruFJy7ATQ3yM1IPqwGFFg&s", "description": "Warm, fragrant banana cake infused with cinnamon.", "price": 340, "discount": 9 },
    { "id": 7, "tags": ["veg"], "title": "Banana Cream Cheese Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tlzIX9njlhcjq2riqJTl-bxRRYtiwH9YMQ&s", "description": "Moist banana cake paired with tangy cream cheese frosting.", "price": 305, "discount": 6 },
    { "id": 8, "tags": ["premium"], "title": "Banana Toffee Crunch Cake", "image": "https://www.foodelicacy.com/wp-content/uploads/2022/06/banana-honey-loaf-cake-cooled.jpg", "description": "Banana cake filled with crunchy toffee bits.", "price": 325, "discount": 10 },
    { "id": 9, "tags": ["veg"], "title": "Banana Pineapple Cake", "image": "https://thenovicechefblog.com/wp-content/uploads/2021/05/Best-Banana-Cake-18.jpg", "description": "A fruity blend of banana and pineapple for extra moisture.", "price": 345, "discount": 12 },
    { "id": 10,  "tags": ["eggless"], "title": "Banana Almond Cake", "image": "https://www.africanbites.com/wp-content/uploads/2022/03/IMG_7670-scaled.jpg", "description": "Banana layers enriched with a soft almond flavor.", "price": 350, "discount": 8 },
    { "id": 11, "tags": ["veg"] , "title": "Banana Honey Cake", "image": "https://www.allrecipes.com/thmb/qCdRLpeaU8sV-dGFVu3HSzI6vqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8091238-7460a5f9fbf64cf490ba7941dbd1f284.jpg", "description": "Naturally sweet banana cake drizzled with honey..", "price": 330, "discount": 7 },
    { "id": 12, "tags": ["premium"],  "title": "Banana Espresso Cake", "image": "https://cookefast.com/wp-content/uploads/2024/09/Heavenly-Banana-Walnut-Cream-Cake-min.png", "description": "Banana cake infused with a bold hint of coffee.", "price": 360, "discount": 11 },
    { "id": 13, "tags": ["veg"], "title": "Banana Oat Crumble Cake", "image": "https://i.ytimg.com/vi/azN9xN12mXM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgIcSoZ--dpkhiPo-_pWucyVtyEg", "description": "Banana cake topped with a crunchy oat streusel.", "price": 315, "discount": 6 },
    { "id": 14,  "tags": ["premium"], "title": "Banana Maple Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOXFHKgV51VgGTvdk2QijTLBzzgNGeqpawg&s", "description": "Tender banana cake sweetened with pure maple syrup.", "price": 365, "discount": 9 },
    { "id": 15, "tags": ["eggless"], "title": "Banana Strawberry Delight Cake", "image": "https://www.allrecipes.com/thmb/9FYHw2T8IPA27C83PfB64y9aVuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7946sour-cream-banana-cakeKim4x3-92fffbac53af455fb9c56204d1293048.jpg", "description": "Banana cake layered with fresh strawberries and cream.", "price": 355, "discount": 8 }
  ],
  "carrot": [
    { "id": 1, "tags": ["veg"], "title": "Classic Carrot Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNRFi1LH9dky257S_m9BLVbEDwwY5M6yKBw&s", "description": "Moist spiced cake loaded with grated carrots and topped with cream cheese frosting.", "price": 380, "discount": 10 },
    { "id": 2, "tags": ["eggless"], "title": "Carrot Walnut Cake", "image": "https://cakesbymk.com/wp-content/uploads/2024/03/Template-Size-for-Blog-Photos-73.jpg", "description": "Carrot cake enhanced with crunchy toasted walnuts.", "price": 390, "discount": 8 },
    { "id": 3, "tags": ["premium"],"title": "Carrot Pineapple Cake", "image": "https://cdn.sprinklebakes.com/media/2024/03/carrot-cake-beauty-4.jpg", "description": "Extra-moist carrot cake blended with crushed pineapple.", "price": 395, "discount": 6 },
    { "id": 4, "tags": ["veg"],"title": "Carrot Orange Zest Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynmIZQMERoFIdQFyBdyOMIcvJZHRbUnQBDw&s", "description": "Carrot cake brightened with fresh orange zest.", "price": 400, "discount": 9 },
    { "id": 5, "tags": ["veg", "premium"],"title": "Carrot Ginger Spice Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rF-ZhI0e_XWAVuftthTqpPLnGF0ta3ZWaQ&s", "description": "Warm spiced carrot cake infused with fresh ginger.", "price": 375, "discount": 5 },
    { "id": 6, "tags": ["eggless"],"title": "Carrot Coconut Cake", "image": "https://www.thepancakeprincess.com/wp-content/uploads/2025/03/IMG_6046-500x500.jpg", "description": "Soft carrot cake paired with coconut flakes and cream cheese frosting.", "price": 410, "discount": 7 },
    { "id": 7, "tags": ["premium"],"title": "Carrot Pecan Layer Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiILdcPjwfZPn32cwTIp_tOPy1DAdvuXj1rVWbUjRLoc3_7Caws2rsxuxSTQp6R6en4is&usqp=CAU", "description": "Carrot cake stacked with layers of pecan-filled frosting.", "price": 385, "discount": 6 },
    { "id": 8, "tags": ["veg"],"title": "Carrot Raisin Cake", "image": "https://thumbs.dreamstime.com/b/moist-fluffy-carrot-cake-exquisite-cream-cheese-frosting-visual-delight-your-instagram-feed-indulge-senses-350038182.jpg", "description": "Classic carrot cake enriched with sweet raisins.", "price": 405, "discount": 10 },
    { "id": 9, "tags": ["eggless"],"title": "Carrot Almond Cake", "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg?quality=90&resize=440,400", "description": "Nutty carrot cake with subtle almond flavor.", "price": 420, "discount": 12 },
    { "id": 10, "tags": ["premium"],"title": "Carrot Maple Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTC3f7K5XWA7fEYpFf8ComI8nn30eW4OV_Hg&s", "description": "Carrot cake sweetened with pure maple syrup.", "price": 435, "discount": 9 },
    { "id": 11, "tags": ["veg"],"title": "Carrot Apple Cake", "image": "https://www.piesandtacos.com/wp-content/uploads/2025/01/Carrot-Cake-7-scaled.jpg", "description": "Moist carrot cake blended with shredded apple for extra softness.", "price": 390, "discount": 7 },
    { "id": 12, "tags": ["eggless"],"title": "Carrot Banana Fusion Cake", "image": "https://www.biggerbolderbaking.com/wp-content/uploads/2020/03/UntitledCapture7922-scaled.jpg", "description": "A hybrid of carrot cake and banana bread flavors.", "price": 415, "discount": 11 },
    { "id": 13, "tags": ["veg"],"title": "Carrot Chai Spice Cake", "image": "https://images.squarespace-cdn.com/content/v1/6183c962a132993153523f41/d324e9f9-626c-4156-a828-2457ba4c78d1/Cinnamon+Carrot+Cake.jpg", "description": "Carrot cake infused with chai spices like cardamom and cloves.", "price": 395, "discount": 6 },
    { "id": 14, "tags": ["premium"],"title": "Carrot Caramel Drip Cake", "image": "https://www.generalmillsindiabfs.in/wp-content/uploads/2020/10/Pillsbury-India-CarrotWalnutCakeRecipe-770x513-1.jpg", "description": "Carrot cake topped with a rich, buttery caramel drip.", "price": 430, "discount": 10 },
    { "id": 15, "tags": ["eggless"],"title": "Carrot White Chocolate Cake", "image": "https://www.spatuladesserts.com/wp-content/uploads/2022/03/Carrot-cake-with-cream-cheese-1.1.jpg", "description": "Carrot cake paired with creamy white chocolate frosting.", "price": 425, "discount": 8 }
  ],
  "strawberry": [
    { "id": 1, "tags": ["veg"],"title": "Classic Strawberry Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95N6mUNt1DLfVPj220QT11z8M1GGQf8r4vw&s", "description": "Soft pink cake made with real strawberries and light frosting.", "price": 380, "discount": 10 },
    { "id": 2, "tags": ["eggless"],"title": "Strawberries & Cream Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJQMvD9aRpD1OqMBMZaAbl-Luvaj2P0zXMA&s", "description": "Moist strawberry layers filled with fresh whipped cream.", "price": 390, "discount": 7 },
    { "id": 3, "tags": ["premium"],"title": "Fresh Strawberry Shortcake Cake", "image": "https://www.gracebakery.in/images/strawberry-freshcream-cake.webp", "description": "Cake version of the classic shortcake with juicy strawberries.", "price": 395, "discount": 8 },
    { "id": 4, "tags": ["veg"],"title": "Strawberry Vanilla Swirl Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQEtdhUVX22dRn0mz4YxrD2WAU0G0zHjBsA&s", "description": "Vanilla and strawberry batters swirled into one beautiful cake.", "price": 410, "discount": 9 },
    { "id": 5, "tags": ["premium"],"title": "Strawberry Cheesecake Cake", "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/10/0/FNK_Strawberry-Cake-Cream-Cheese-Frosting_H1_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1591824771761.webp", "description": "Strawberry cake layered with creamy cheesecake inside.", "price": 370, "discount": 6 },
    { "id": 6, "tags": ["eggless"],"title": "Strawberry Rose Cake", "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/3/0/SD1C25_18264_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371589425929.webp", "description": "Strawberry cake delicately scented with rosewater.", "price": 420, "discount": 10 },
    { "id": 7, "tags": ["veg"],"title": "Strawberry Lemonade Cake", "image": "https://i.ytimg.com/vi/8ZtfVYgpjd4/maxresdefault.jpg", "description": "Sweet strawberry cake brightened with tangy lemon flavors.", "price": 400, "discount": 8 },
    { "id": 8, "tags": ["premium"],"title": "Strawberry Chocolate Drip Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjpyeohwVjX2Pnf8NOWUNSErp3Rn9H0STTA&s", "description": "Strawberry cake topped with a silky chocolate drip..", "price": 360, "discount": 5 },
    { "id": 9, "tags": ["veg"],"title": "Strawberry Coconut Cake", "image": "https://www.indiacakes.com/media/catalog/product/cache/a4577f844569f68fd14659d95bb20f68/c/l/classic-strawberry-cake-half-kgs_2.png", "description": "Tropical strawberry cake paired with fluffy coconut frosting.", "price": 435, "discount": 11 },
    { "id": 10, "tags": ["premium"],"title": "Strawberry Almond Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdFyUKz-0caVd8LRuiorkZnvxnOimn5Z2OQ&s", "description": "Strawberry sponge blended with almond flavor and topped with nuts.", "price": 445, "discount": 9 },
    { "id": 11, "tags": ["eggless"],"title": "Strawberry Cream Cheese Cake", "image": "https://berryworld.imgix.net/assets/BerryWorld-strawberry-Victoria-Sandwich-with-icing-sugar-dusting.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1500&ixlib=php-3.1.0&q=60&v=1535098731&w=2300", "description": "Soft strawberry cake layered with cream cheese frosting.", "price": 415, "discount": 7 },
    { "id": 12, "tags": ["premium"],"title": "Strawberry Yogurt Cake", "image": "https://i1.wp.com/mariasmixingbowl.com/wp-content/uploads/2025/02/strawberry-cream-cake-1.jpg", "description": "Moist cake made with fresh strawberry purée and yogurt.", "price": 455, "discount": 12 },
    { "id": 13, "tags": ["veg"],"title": "Strawberry Pistachio Cake", "image": "https://www.southernliving.com/thmb/mTaXLbKJRVgvsX_0Np1e2STyiLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/StrawberryVanillaCake_132-c2776ede941c419a8e47d1048ea88a3c.jpg", "description": "Strawberry layers combined with creamy pistachio frosting.", "price": 385, "discount": 6 },
    { "id": 14, "tags": ["premium"],"title": "Strawberry Basil Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnS0X3mx29fN8qD6tfJRUxwqolavJP7-aidg&s", "description": "Unique strawberry cake infused with fresh basil for a refreshing twist.", "price": 460, "discount": 10 },
    { "id": 15, "tags": ["veg"],"title": "Strawberry White Chocolate Cake", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtzUxPipVhB-qyTbUqWspV3xKXLR-PGCMkJ6WLF1d5L-c1LKpEM2svRvhwy6TrIENX_AxMU-u1kJHk8BGTNL8zzfuIgNeJSIj5P3RGzUgk52Gy1K_Iaft3aWxRWsejalTNGWSZwsB480A/s1600/IMG_5713.JPG", "description": "Strawberry sponge paired with sweet white chocolate frosting.", "price": 450, "discount": 8 }
  ],
  "blueberry": [
    { "id": 1, "tags": ["veg"],"title": "Classic Blueberry Cake", "image": "https://i.ytimg.com/vi/vXp_JZOR0RY/maxresdefault.jpg", "description": "Soft vanilla cake filled with juicy fresh blueberries.", "price": 420, "discount": 10 },
    { "id": 2, "tags": ["veg"],"title": "Blueberry Lemon Cake", "image": "https://www.piesandtacos.com/wp-content/uploads/2024/06/Blueberry-Cake-7-scaled.jpg", "description": "Bright lemon cake folded with sweet blueberries throughout.", "price": 430, "discount": 8 },
    { "id": 3, "tags": ["eggless"],"title": "Blueberry Cream Cheese Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3isXuYQfjBaBPwZeJmpLLIU7WtLHQnlnfw&s", "description": "Moist blueberry cake paired with tangy cream cheese frosting.", "price": 440, "discount": 6 },
    { "id": 4, "tags": ["veg"],"title": "Blueberry Crumble Cake", "image": "https://amycakesbakes.com/wp-content/uploads/2023/06/Blueberry-Cake-Recipe-scaled.jpg", "description": "Blueberry-studded cake topped with a buttery crumble layer.", "price": 410, "discount": 9 },
    { "id": 5, "tags": ["premium"],"title": "Blueberry Almond Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWN-mOs0DaG5GCNyBb_2pJivKvdi0fee27Q&s", "description": "Blueberry cake enriched with almond flavor and sliced almonds.", "price": 450, "discount": 7 },
    { "id": 6, "tags": ["veg"],"title": "Blueberry Vanilla Layer Cake", "image": "https://sahnibakery.com/cdn/shop/products/BLUEBERRYGLAZECAKE699@2x.jpg?v=1609338531", "description": "Fluffy vanilla layers loaded with blueberries and light frosting.", "price": 445, "discount": 10 },
    { "id": 7, "tags": ["premium"], "title": "Blueberry Coconut Cake", "image": "https://i.ytimg.com/vi/Mz-GSOvfVMM/sddefault.jpg", "description": "Tropical-style cake combining blueberries with creamy coconut.", "price": 460, "discount": 12 },
    { "id": 8, "tags": ["eggless"],"title": "Blueberry Yogurt Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lvwZFqOpDx1kz7jTaq6CeT8ZdoGdYLEnRw&s", "description": "Extra-moist cake made with yogurt and fresh blueberry purée.", "price": 405, "discount": 6 },
    { "id": 9, "tags": ["premium"],"title": "Blueberry Marble Cake", "image": "https://www.cakesworld.in/images/web/blueberry_22104.jpg", "description": "Swirls of blueberry and vanilla batter baked into a beautiful pattern.", "price": 470, "discount": 11 },
    { "id": 10, "tags": ["premium"],"title": "Blueberry Cheesecake Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojSocekFEED1KtQ91dGBx236vMkYaH3MHlA&s", "description": "Blueberry cake layered with creamy cheesecake in the center.", "price": 475, "discount": 9 },
    { "id": 11, "tags": ["veg"],"title": "Blueberry Maple Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOJLUPPNHMPj37FDDccsPs1664F8t9AzrMw&s", "description": "Sweet blueberry cake drizzled with warm maple syrup.", "price": 455, "discount": 7 },
    { "id": 12, "tags": ["premium"],"title": "Blueberry Oat Cake", "image": "https://www.piesandtacos.com/wp-content/uploads/2024/06/Blueberry-Cake-12-683x1024.jpg", "description": "A hearty cake filled with blueberries and topped with an oat crumble.", "price": 480, "discount": 12 },
    { "id": 13, "tags": ["premium"],"title": "Blueberry Lavender Cake", "image": "https://i0.wp.com/youthsweets.com/wp-content/uploads/2022/04/BluebCake_Vert6-scaled.jpeg?fit=1707%2C2560&ssl=1", "description": "Delicate cake infused with lavender and fresh blueberries.", "price": 440, "discount": 6 },
    { "id": 14, "tags": ["premium"],"title": "Blueberry White Chocolate Cake", "image": "https://www.homecookingadventure.com/wp-content/uploads/2023/05/Poppy-Seed-Blueberry-Cake-main2.webp", "description": "Blueberry sponge paired with silky white chocolate frosting.", "price": 495, "discount": 10 },
    { "id": 15, "tags": ["veg"],"title": "Blueberry Banana Cake", "image": "https://i.ytimg.com/vi/ABUnvdT6LtM/sddefault.jpg?v=61574041", "description": "A moist blend of banana cake and bursts of fresh blueberries.", "price": 465, "discount": 8 }
  ],
  "cheese_cakes": [
    { "id": 1, "tags": ["premium"],"title": "Classic New York Cheesecake", "image": "https://bakerbynature.com/wp-content/uploads/2018/05/extrathickandcreamycheesecake123456-1-of-1.jpg", "description": "Rich, dense, and creamy cheesecake with a buttery graham crust.", "price": 500, "discount": 10 },
    { "id": 2, "tags": ["premium", "strawberry"],"title": "Strawberry Swirl Cheesecake", "image": "https://fitwafflekitchen.com/wp-content/uploads/2024/12/Lotus-Biscoff-Cheesecake-Fitwaffle-Kitchen.jpg", "description": "Velvety cheesecake marbled with fresh strawberry purée.", "price": 520, "discount": 8 },
    { "id": 3, "tags": ["premium", "blueberry"],"title": "Blueberry Topped Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUI3Re8CRlB7Q-WX_ekIJhhzTD4U9O74wkg&s", "description": "Classic cheesecake finished with sweet blueberry compote.", "price": 540, "discount": 6 },
    { "id": 4, "tags": ["premium", "chocolate"],"title": "Chocolate Marble Cheesecake", "image": "https://www.marthastewart.com/thmb/m6R1D2iuHvVxM8u7RJz7c-Us8Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-865202-new-york-cheesecake-hero-horiz-0723-84e3c796119d408581d1ef4d02d801cd.jpg", "description": "Creamy vanilla cheesecake swirled with smooth chocolate.", "price": 560, "discount": 9 },
    { "id": 5, "tags": ["premium", "chocolate"],"title": "Oreo Cookies & Cream Cheesecake", "image": "https://bakerbynature.com/wp-content/uploads/2018/05/extrathickandcreamycheesecake1-1-of-1.jpg", "description": "Cheesecake packed with crushed Oreos and an Oreo crust.", "price": 515, "discount": 5 },
    { "id": 6, "tags": ["premium", "caramel"],"title": "Salted Caramel Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdrgVAscGOOEf5P5NNBiqsYldhoU4WzXwgQ&s", "description": "Silky cheesecake drizzled with rich salted caramel sauce.", "price": 575, "discount": 12 },
    { "id": 7, "tags": ["premium", "lemon"],"title": "Lemon Ricotta Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gp48uIr68c0wCRLT_pNsQMIPgR-SfZnCCQ&s", "description": "Light, fluffy cheesecake with bright lemon flavor.", "price": 550, "discount": 7 },
    { "id": 8, "tags": ["premium", "red_velvet"],"title": "Red Velvet Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaLOKo2HJ1ax-wwwy5WD-5bvbEhs_4L_oNg&s", "description": "Layers of red velvet cake and creamy cheesecake combined.", "price": 580, "discount": 10 },
    { "id": 9, "tags": ["premium", "chocolate"],"title": "Triple Chocolate Cheesecake", "image": "https://www.allrecipes.com/thmb/nJyiobj0hf4sGHrb6emFyBnEAic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5303290-philadelphia-new-york-cheesecake-iii-MPerry-4x3-1-dd0f7433d8964305b0d10ff0166327b9.jpg", "description": "Chocolate crust, chocolate cheesecake, and chocolate ganache.", "price": 545, "discount": 6 },
    { "id": 10, "tags": ["premium", "mango"],"title": "Mango Cheesecake", "image": "https://loveandcheesecake.com/cdn/shop/files/FreshFruitCheescake.jpg?v=1735633818", "description": "Tropical cheesecake infused with mango purée.", "price": 590, "discount": 11 },
    { "id": 11, "tags": ["premium", "raspberry", "white_chocolate"],"title": "Raspberry White Chocolate Cheesecake", "image": "https://www.modernhoney.com/wp-content/uploads/2020/12/Vanilla-Cheesecake-Recipe-3-scaled.jpg", "description": "Smooth cheesecake with raspberry swirls and white chocolate.", "price": 530, "discount": 7 },
    { "id": 12, "tags": ["premium", "pumpkin", "spice"],"title": "Pumpkin Spice Cheesecake", "image": "https://iambaker.net/wp-content/uploads/2024/04/Easy-Cheesecake-Mousse-1.jpg", "description": "Creamy spiced pumpkin blended into a classic cheesecake base.", "price": 600, "discount": 12 },
    { "id": 13, "tags": ["premium", "matcha", "green_tea"],"title": "Matcha Green Tea Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEzc0Za1zXaP9nJveUCnyxuGB2R4I7nBt_w&s", "description": "Japanese-style cheesecake infused with earthy matcha.", "price": 565, "discount": 8 },
    { "id": 14, "tags": ["premium", "banana"],"title": "Banana Cream Cheesecake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxS-Mj1o5kSYIaaqDsRWaxV1hzZXvXaoYgSg&s", "description": "Sweet banana cheesecake topped with whipped cream.", "price": 610, "discount": 10 },
    { "id": 15, "tags": ["premium", "peanut_butter", "chocolate"],"title": "Peanut Butter Chocolate Cheesecake", "image": "https://img.delicious.com.au/PQFUYFo9/del/2024/10/turkish-delight-cheesecake-219457-2.jpg", "description": "Rich peanut butter cheesecake layered with chocolate ganache..", "price": 595, "discount": 9 }
  ],
  "coconut_cakes": [
    { "id": 1, "tags": ["coconut"],"title": "Classic Coconut Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoqXZpbYHNCngwDOhvch5SIbPRZ8x9kI0Hg&s", "description": "Soft vanilla coconut layers covered in fluffy coconut frosting.", "price": 320, "discount": 8 },
    { "id": 2, "tags": ["coconut", "cream"],"title": "Coconut Cream Cake", "image": "https://domesticgothess.com/wp-content/uploads/2019/06/coconut-layer-cake-side.jpg", "description": "Moist coconut cake filled with rich coconut pastry cream.", "price": 330, "discount": 10 },
    { "id": 3, "tags": ["coconut", "pineapple"],"title": "Coconut Pineapple Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e61Dihr6GuP2D8PLHlomO5FD7G_Q7zETdw&s", "description": "A tropical mix of coconut cake and sweet pineapple filling.", "price": 345, "discount": 6 },
    { "id": 4, "tags": ["coconut", "lime"],"title": "Coconut Lime Cake", "image": "https://i.ytimg.com/vi/vcAS05UVGT4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4mVybectSfMFhHuHN2qjEtW_brA", "description": "Zesty lime-infused coconut cake with a bright citrus finish.", "price": 350, "discount": 9 },
    { "id": 5, "tags": ["coconut", "almond"],"title": "Coconut Almond Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOQMQNQH3zt6IHSNcVdvWyeYRAoJUnfqtFg&s", "description": "Coconut sponge enriched with almond flavor and toasted almonds.", "price": 360, "discount": 5 },
    { "id": 6, "tags": ["coconut", "mango"],"title": "Coconut Mango Cake", "image": "https://veenaazmanov.com/wp-content/uploads/2020/08/Coconut-Cake-with-Coconut-Cream-Filling-900x900.jpg", "description": "Tropical coconut layers paired with smooth mango cream.", "price": 365, "discount": 7 },
    { "id": 7, "tags": ["coconut", "chocolate"],"title": "Coconut Chocolate Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzh6UjkrSX2iCYSUh_U-oucZhO0lLaa8kQHQ&s", "description": "Moist chocolate cake complemented by coconut frosting.", "price": 340, "discount": 4 },
    { "id": 8, "tags": ["coconut", "raspberry"],"title": "Coconut Raspberry Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQpXFMq0-3ed9Mu43pmnnpnhH_2Kw4xLdew&s", "description": "Coconut cake filled with tangy raspberry preserves.", "price": 370, "discount": 8 },
    { "id": 9, "tags": ["coconut", "banana"],"title": "Coconut Banana Cake", "image": "https://www.allrecipes.com/thmb/Ykz3_9PmcuQgHG5PZKqS7I4LnVM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-15303-coconut-cake-iv-VAT-2x1-c82d0dd14a824808a391a9ea5f92f1ef.jpg", "description": "Soft coconut cake blended with ripe mashed bananas.", "price": 355, "discount": 10 },
    { "id": 10, "tags": ["coconut", "caramel"],"title": "Coconut Caramel Cake", "image": "https://i.ytimg.com/vi/R588VfGzo6M/mqdefault.jpg", "description": "Coconut cake topped with buttery caramel sauce.", "price": 380, "discount": 6 },
    { "id": 11, "tags": ["coconut", "strawberry"],"title": "Coconut Strawberry Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15ebNnCLXVYJGlbQO8xnn9B-IN4tyOqzhKw&s", "description": "Coconut sponge paired with fresh strawberries and cream.", "price": 390, "discount": 9 },
    { "id": 12, "tags": ["coconut", "blueberry"],"title": "Coconut Blueberry Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdTeI-c2n77DsdhRXT3XFQvCklbYDx02pxw&s", "description": "Coconut cake mixed with juicy blueberries for added sweetness.", "price": 395, "discount": 5 },
    { "id": 13, "tags": ["coconut", "rose"],"title": "Coconut Rose Cake", "image": "https://assets.winni.in/product/primary/2024/4/95085.jpeg?dpr=1&w=500", "description": "Delicate coconut cake scented lightly with rosewater.", "price": 365, "discount": 7 },
    { "id": 14, "tags": ["coconut", "lemon"],"title": "Coconut Lemon Cake", "image": "https://leitesculinaria.com/wp-content/uploads/2023/07/old-fashioned-coconut-cake-1-480x270.jpg", "description": "Coconut cake brightened with fresh lemon zest and frosting.", "price": 375, "discount": 8 },
    { "id": 15, "tags": ["coconut", "macadamia"],"title": "Coconut Macadamia Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhesNWQIvs08a4f1okeR6wRChMPjbWo6LOA&s", "description": "Coconut layers packed with crunchy macadamia nuts.", "price": 405, "discount": 12 }
  ],
  "coffee_cakes": [
    { "id": 1, "tags": ["coffee", "cinnamon", "crumb"] ,"title": "Classic Coffee Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHL3nAdVUtXXqiJcox2dODo23SoOi2I7glg&s", "description": "Soft vanilla cake topped with a buttery cinnamon crumble.", "price": 360, "discount": 8 },
    { "id": 2,  "tags": ["cinnamon", "streusel", "coffee"],"title": "Cinnamon Streusel Coffee Cake", "image": "https://sallysbakingaddiction.com/wp-content/uploads/2022/02/espresso-chip-cake.jpg", "description": "Tender cake layered with rich cinnamon-brown sugar streusel.", "price": 370, "discount": 5 },
    { "id": 3,  "tags": ["sour cream", "cinnamon", "coffee"],"title": "Sour Cream Coffee Cake", "image": "https://i.ytimg.com/vi/4obMWhe9dhg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuJjGpXS8vraKZn-PVt9vQDy27kQ", "description": "Moist, tangy cake with a thick cinnamon-sugar swirl.", "price": 380, "discount": 7 },
    { "id": 4,  "tags": ["coffee", "walnut", "nuts"],"title": "Coffee Walnut Cake", "image": "https://theobroma.in/cdn/shop/files/CappuccinoCake3Large.jpg?v=1702989453", "description": "Coffee-infused sponge paired with crunchy toasted walnuts.", "price": 365, "discount": 10 },
    { "id": 5, "tags": ["mocha", "chocolate", "coffee"],"title": "Mocha Coffee Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhiY0q2BWxK76yj3iQXbRNmTIYcm2GHMkQw&s", "description": "A blend of chocolate and coffee flavors in a rich, soft cake.", "price": 390, "discount": 8 },
    { "id": 6,  "tags": ["coffee", "almond", "streusel"],"title": "Coffee Almond Crumble Cake", "image": "https://beyondfrosting.com/wp-content/uploads/2019/03/Chocolate-Mocha-Cake-036-2.jpg", "description": "Coffee cake topped with a sweet almond-streusel layer.", "price": 395, "discount": 6 },
    { "id": 7,  "tags": ["coffee", "caramel"] ,"title": "Coffee Caramel Cake", "image": "https://cake-lab.org/wp-content/uploads/2018/07/Mousse-1.jpg", "description": "Coffee-flavored cake drizzled with smooth caramel sauce.", "price": 355, "discount": 9 },
    { "id": 8, "tags": ["coffee", "hazelnut", "nuts"],"title": "Coffee Hazelnut Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzlT9mP6l7SOg7VWZsGHVaohwMO8TkMEIVg&s", "description": "Nutty hazelnut and bold coffee baked into a moist crumble cake.", "price": 375, "discount": 7 },
    { "id": 9, "tags": ["coffee", "pecan", "crumb"],"title": "Coffee Pecan Crumb Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcdc7vPpfs1xKna_6noapW8ZoA8mf7PtLUA&s", "description": "Coffee sponge topped with a thick pecan crumb topping.", "price": 385, "discount": 5 },
    { "id": 10, "tags": ["espresso", "coffee", "aromatic"],"title": "Espresso Coffee Cake", "image": "https://bakewithshivesh.com/wp-content/uploads/2021/06/IMG_9778-scaled.jpg", "description": "Strong espresso-infused cake with a deep, aromatic flavor.", "price": 400, "discount": 12 },
    { "id": 11,  "tags": ["coffee", "maple", "crumb"] ,"title": "Maple Coffee Cake", "image": "https://i.ytimg.com/vi/pbdXsfzZjV8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvoC_QfSp10RnZr3Z7vu0YjbQUug", "description": "Coffee cake sweetened with warm maple syrup and a crumb topping.", "price": 390, "discount": 6 },
    { "id": 12, "tags": ["blueberry", "coffee", "crumb"],"title": "Blueberry Coffee Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle0Vof9ro_MXBAMS0RCKYG7Q5ZiWX4Qbt4A&s", "description": "Soft cake dotted with blueberries and topped with cinnamon crumble.", "price": 410, "discount": 9 },
    { "id": 13, "tags": ["apple", "cinnamon", "coffee"],"title": "Apple Cinnamon Coffee Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o-1uGUv1TVbIWEPysJgy_mB-Wv6U25C7yA&s", "description": "Coffee cake mixed with juicy apples and cinnamon swirl.", "price": 365, "discount": 4 },
    { "id": 14, "tags": ["chocolate", "chip", "coffee", "streusel"],"title": "Chocolate Chip Coffee Cake", "image": "https://bakewithzoha.com/wp-content/uploads/2024/10/espresso-cake-featured.jpg", "description": "Soft cake filled with chocolate chips and topped with streusel.", "price": 420, "discount": 15 },
    { "id": 15, "tags": ["vanilla", "latte", "coffee"],"title": "Vanilla Latte Coffee Cake", "image": "https://cdn.bloomsflora.com/uploads/product/bloomsflora/13220_35_13220.webp", "description": "Gentle vanilla flavor paired with creamy latte notes.", "price": 395, "discount": 7 }
  ],
  "butter_cakes": [
    { "id": 1, "tags": ["butter", "egg", "vanilla"] ,"title": "Classic Butter Cake", "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/butter-cake.webp", "description": "Rich, tender cake with a deep buttery flavor and soft crumb.", "price": 320, "discount": 5 },
    { "id": 2, "tags": ["butter", "vanilla", "egg"],"title": "Vanilla Butter Cake", "image": "https://tiimg.tistatic.com/fp/3/009/277/butterscotch-cake-679.jpg", "description": "Buttery cake infused with pure vanilla for a smooth, warm taste.", "price": 330, "discount": 6 },
    { "id": 3, "tags": ["butter", "egg", "pound"],"title": "Golden Butter Pound Cake", "image": "https://www.ruchikrandhap.com/wp-content/uploads/2012/02/Butter-Cake-7-1.jpg", "description": "Dense, moist pound cake made with generous butter.", "price": 340, "discount": 8 },
    { "id": 4, "tags": ["butter", "buttermilk", "egg"],"title": "Buttermilk Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpUxDXpz2U9EGY18cEt9Kwk7QcbQZ8ibUrg&s", "description": "Soft, moist butter cake enriched with tangy buttermilk.", "price": 310, "discount": 10 },
    { "id": 5, "tags": ["butter", "almond", "egg"] ,"title": "Almond Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A3wb6C4chq5xlTRfQ_xlVjLPcJuf6m2FeA&s", "description": "Classic butter cake enhanced with delicate almond notes.", "price": 350, "discount": 7 },
    { "id": 6, "tags": ["butter", "lemon", "egg"],"title": "Lemon Butter Cake", "image": "https://thescranline.com/wp-content/uploads/2025/02/VANILLA-CAKE-25-S-01.jpg", "description": "Bright, zesty lemon flavor blended into a rich buttery base.", "price": 345, "discount": 6 },
    { "id": 7, "tags": ["butter", "cinnamon", "egg"] ,"title": "Cinnamon Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoTeqmQqlnk4P2iEWuQtIo7fWKjabowh01A&s", "description": "Warm cinnamon swirled into a tender butter sponge.", "price": 355, "discount": 5 },
    { "id": 8, "tags": ["butter", "caramel", "egg"],"title": "Caramel Butter Cake", "image": "https://myloveofbaking.com/wp-content/uploads/2022/06/IMG_7584.jpg", "description": "Sweet butter cake topped with silky caramel glaze.", "price": 365, "discount": 9 },
    { "id": 9, "tags": ["butter", "brown", "egg"],"title": "Brown Butter Cake", "image": "https://i.ytimg.com/vi/qIh6ia4jeOc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_nwhzHHBaWVWr1Ktn7qc1JNE64A", "description": "Nutty, aromatic cake made with browned butter for extra richness.", "price": 325, "discount": 10 },
    { "id": 10, "tags": ["butter", "orange", "egg"],"title": "Orange Butter Cake", "image": "https://i.ytimg.com/vi/fzbpKfQun90/hqdefault.jpg", "description": "Fresh orange zest and butter combined for a vibrant, moist cake.", "price": 370, "discount": 12 },
    { "id": 11, "tags": ["butter", "chocolate", "egg"],"title": "Chocolate Marble Butter Cake", "image": "https://i.ytimg.com/vi/b5v67ZAaes4/hqdefault.jpg", "description": "Vanilla butter cake marbled with rich chocolate batter.", "price": 345, "discount": 4 },
    { "id": 12, "tags": ["butter", "strawberry", "egg"],"title": "Strawberry Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcYiMgG8gpAIG9TbUWaq9rJo9Wdj5Ro_Ppw&s", "description": "Buttery sponge mixed with fresh strawberries.", "price": 335, "discount": 7 },
    { "id": 13, "tags": ["butter", "coconut", "egg"] ,"title": "Coconut Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1ENh2FDjdGXHQSwFzaSIj0qQjbl1mJx77Q&s", "description": "Soft, buttery cake with a hint of coconut throughout.", "price": 360, "discount": 7 },
    { "id": 14, "tags": ["butter", "maple", "egg"],"title": "Maple Butter Cake", "image": "https://sugargeekshow.com/wp-content/uploads/2019/09/brown-butter-cake-featured.jpg", "description": "Butter cake sweetened naturally with warm maple syrup.", "price": 380, "discount": 9 },
    { "id": 15, "tags": ["butter", "honey", "egg"],"title": "Honey Butter Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMgdROA9ehN5LFmvokEHz3Iuy3dEgYzWXww&s", "description": "Smooth butter cake infused with fragrant natural honey.", "price": 365, "discount": 6 }
  ],
  "black_forest_cakes": [
    { "id": 1, "tags": ["chocolate", "cherry", "cream", "egg"],"title": "Classic Black Forest Cake", "image": "https://i.ytimg.com/vi/4g0WUw_dCvQ/maxresdefault.jpg", "description": "Rich chocolate sponge layered with whipped cream and cherries.", "price": 380, "discount": 10 },
    { "id": 2, "tags": ["chocolate", "cherry", "cream", "egg"],"title": "Traditional Black Forest Gateau", "image": "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-fcd1e37/yummycake.in/wp-content/uploads/2022/06/black-forest-cherry-cake.jpg", "description": "Moist chocolate cake soaked in cherry syrup with cream layers.", "price": 390, "discount": 8 },
    { "id": 3, "tags": ["chocolate", "cherry", "cream", "egg"],"title": "Black Forest Deluxe Cake", "image": "https://houseofnasheats.com/wp-content/uploads/2021/11/Black-Forest-Cake-6.jpg", "description": "Extra chocolatey sponge with thick cherry filling and dark chocolate curls.", "price": 395, "discount": 7 },
    { "id": 4, "tags": ["chocolate", "cherry", "cream", "egg"],"title": "Black Forest Cherry Burst Cake", "image": "https://natashaskitchen.com/wp-content/uploads/2015/06/Black-Forest-Cake-5-600x900.jpg", "description": "Loaded with whole cherries and fluffy whipped cream.", "price": 360, "discount": 12 },
    { "id": 5, "tags": ["chocolate", "truffle", "cherry", "cream", "egg"],"title": "Black Forest Truffle Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhel8Nlxf2vRQaqKieqqNq5C_RpL-HEqW8NA&s", "description": "Chocolate truffle layers combined with cherry compote and cream.", "price": 400, "discount": 9 },
    { "id": 6, "tags": ["chocolate", "mousse", "cherry", "cream", "egg"],"title": "Black Forest Mousse Cake", "image": "https://imgcdn.floweraura.com/UKC019.jpg", "description": "Light chocolate mousse paired with cherries and soft sponge.", "price": 385, "discount": 6 },
    { "id": 7, "tags": ["chocolate", "cheesecake", "cherry", "cream", "egg"],"title": "Black Forest Cheesecake Cake", "image": "https://www.hadiyahgifting.com/cdn/shop/files/black_forest_cake.webp?v=1739825114", "description": "Chocolate cake fused with creamy cheesecake and cherry layers.", "price": 375, "discount": 8 },
    { "id": 8, "tags": ["chocolate", "fudge", "cherry", "cream", "egg"],"title": "Black Forest Fudge Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8fQd9Fd1A3ocdmuZPxGaZhby1TKBizCAFA&s", "description": "Dense fudge-like chocolate cake enriched with cherry cream.", "price": 405, "discount": 10 },
    { "id": 9, "tags": ["chocolate", "cherry", "cream", "crunch", "egg"],"title": "Black Forest Crunch Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePrH9T0nKjTQHnG1duCovIm90SSkp79vCXg&s", "description": "Chocolate layers with crunchy chocolate shards and sweet cherries.", "price": 390, "discount": 5 },
    { "id": 10, "tags": ["chocolate", "cherry", "cream", "roll", "egg"],"title": "Black Forest Swiss Roll Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74CXRvhQOn-LJCEm1q8O6wL4eO3Yh3RNJRw&s", "description": "Rolled chocolate sponge filled with cream and cherry jam.", "price": 420, "discount": 12 },
    { "id": 11, "tags": ["chocolate", "cherry", "cream", "velvet", "egg"],"title": "Black Forest Velvet Cake", "image": "https://assets.winni.in/product/primary/2024/3/94566.jpeg?dpr=2&w=220", "description": "Ultra-soft chocolate sponge with velvety cream and cherries.", "price": 380, "discount": 7 },
    { "id": 12, "tags": ["chocolate", "cherry", "almond", "cream", "egg"],"title": "Black Forest Almond Cake", "image": "https://iambaker.net/wp-content/uploads/2023/07/blackforest-bundt-3.jpg", "description": "Chocolate cake enhanced with almond flavor and cherry filling.", "price": 410, "discount": 9 },
    { "id": 13, "tags": ["chocolate", "cherry", "cream", "ice cream", "egg"],"title": "Black Forest Ice Cream Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhTRDTUeQcBF2zGAoTO72tPs2KZ-1GBUkCA&s", "description": "Frozen chocolate, cream, and cherry layers for a chilled twist.", "price": 395, "discount": 6 },
    { "id": 14,  "tags": ["chocolate", "cherry", "cream", "caramel", "egg"] ,"title": "Black Forest Caramel Drip Cake", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NHPoRMElMpnE6j_VX6Jl_Lx-bnLJF4DdYg&s", "description": "Classic black forest flavors topped with a caramel drip finish.", "price": 430, "discount": 14 },
    { "id": 15, "tags": ["chocolate", "cherry", "cream"],"title": "Black Forest Chocolate Chip Cake", "image": "https://trufflenation.com/wp-content/uploads/2023/08/Eggless-Black-Forest-Cake.jpg", "description": "Chocolate chip–packed sponge with cherries and whipped cream.", "price": 400, "discount": 8 }
  ]
}
        


 
        const loginBtnFinal = document.querySelector("#registerForm button");

        loginBtnFinal.addEventListener("click", function (e) {
            e.preventDefault();

            const loginEmail = document.querySelector("#registerForm input[type='email']").value;
            const loginPassword = document.querySelector("#registerForm input[type='password']").value;

            //JSON.parse -> Converts stored text into an array
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check user exists
            let validUser = users.find(       //the stored email equals the entered email
                u => u.email === loginEmail && u.password === loginPassword
            );

            if (!validUser) {
                alert("Invalid email or password!");
                return;
            }

            // Save loggeduser   ---  If login is successful
            localStorage.setItem("loggedUser", JSON.stringify(validUser));
            alert("Login successful!");

            //redirected to home page
            window.location.href = "home.html";
        });

  




        const inputForm = document.getElementById("inputForm");   
        const registerForm = document.getElementById("registerForm");    
        const loginBtn = document.getElementById("loginBtn");


            inputForm.style.display = "block";
            registerForm.style.display = "none";

        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();  //stops the page from reloading when form is submitted

            // Get values from input fields
            const name = document.getElementById("name").value.trim();
            const number = document.getElementById("number").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const cmpassword = document.getElementById("cmpassword").value;

            // Validation
            if (!name || !number || !email || !password || !cmpassword) {
              alert("Please fill all fields");
            return;
           }
            if (password !== cmpassword) {
              alert("Passwords do not match");
             return;
            }
            if(number.length != 10) {
              alert("phone number must be 10 digits");
              return;
            }

 
            // Retrieves the value stored in localStorage with the key 'users'
            let users = JSON.parse(localStorage.getItem("users")) || [];

             // Check if email already exists
            let exists = users.find(u => u.email === email);
            if (exists) {
               alert("User with this email already exists!");
               return;
              }

            //save new user --> Add the new user to the array.
            users.push({ name, number, email, password });


            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful!");

            registerForm.style.display = "block";
            inputForm.style.display = "none";
        });
