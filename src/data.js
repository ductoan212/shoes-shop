const data = {
  users: [
    {
      username: 'admin',
      password: '1',
      fullname: 'Admin shoeshop',
      email: 'admin@shoeshop.com',
      isAdmin: true,
      phoneNumber: "0123456789",
      address: 'Ho Chi Minh',
    },
    {
      username: 'user',
      password: '1',
      fullname: 'User shoeshop',
      email: 'user@shoeshop.com',
      isAdmin: false,
      phoneNumber: "0123965874",
      address: 'Ho Chi Minh',
    },
    {
      username: 'toan',
      password: '1',
      fullname: 'Toan shoeshop',
      email: 'toan@shoeshop.com',
      isAdmin: true,
      phoneNumber: "0147852369",
      address: 'Phu Yen',
    },
    {
      username: 'vinh',
      password: '1',
      fullname: 'Vinh shoeshop',
      email: 'vinh@shoeshop.com',
      isAdmin: true,
      phoneNumber: "0159632478",
      address: 'Khanh Hoa',
    },
    {
      username: 'thang',
      password: '1',
      fullname: 'Thang shoeshop',
      email: 'thang@shoeshop.com',
      isAdmin: true,
      phoneNumber: "0258963741",
      address: 'Long An',
    },
  ],
  products: [
    {
      name: 'YEEZY BOOST 700 MNVN BLUE TINT',
      image:
        'https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/ab840828e1a8456789cbad5500ffa17e_9366/GZ0711_01_standard.jpg',
      brand: 'Adidas',
      category: 'Men',
      description:
        'The adidas Yeezy Boost 700 MNVN Blue Tint features a Blue Tint nylon upper with reflective graphics and details throughout the design. A thick black Boost sole and tongue adds the finishing touches to the hiking-inspired design.',
      price: 284,
      oldPrice: 399,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 5,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
      ],
      numSold: 1,
      rating: 5,
      numReviews: 1,
    },
    {
      name: 'Nike Dynamo Free',
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/62713c24-def5-49ac-ba13-47d38c76961f/dynamo-free-younger-shoe-1qTb00bp.png',
      brand: 'Nike',
      category: 'Kids',
      description:
        'Easy on/off, flexible AND no laces required? Yes, please. The Nike Dynamo Free for kiddos slips on and off quickly, plus helps keep little feet cushioned and stable. Play time is now any time.',
      price: 43,
      oldPrice: 55,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 10,
        },
        {
          numSize: 29,
          countInStock: 10,
        },
        {
          numSize: 30,
          countInStock: 35,
        },
        {
          numSize: 31,
          countInStock: 45,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Nike Dunk High Game Royal',
      image:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bfbf66e6-79ea-48e5-9e17-7cc1128c13df/dunk-high-game-royal-release-date.jpg',
      brand: 'Nike',
      category: 'Men',
      description:
        'The Nike Dunk High Game Royal pays homage to the original 1985 University of Kentucky colorway of the Nike Dunk. It features a white leather upper with Game Royal overlays and Swooshes. A matching sole and woven tongue label add the finishing touches.',
      price: 159,
      oldPrice: 199,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 40,
        },
      ],
      numSold: 1,
      rating: 5,
      numReviews: 2,
    },
    {
      name: 'Nike Sunray Protect 2',
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5edb2bc5-5ee0-471d-a553-c144a66c591b/sunray-protect-2-younger-sandal-kxrqx3.png',
      brand: 'Nike',
      category: 'Kids',
      description:
        "The Nike Sunray Protect 2 has a quick-drying design, so kids are free to jump, skip and splash. It has a thin, soft sole with rubber on the bottom for traction when it's wet. A strap on either side gives it a secure fit and makes it easy and fast to get it on and off.",
      price: 39,
      oldPrice: 49,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 10,
        },
        {
          numSize: 29,
          countInStock: 50,
        },
        {
          numSize: 30,
          countInStock: 25,
        },
        {
          numSize: 31,
          countInStock: 100,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Nike Air Zoom Pegasus 38',
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea8c795b-5dd6-474a-a67c-d98c29623dcb/air-zoom-pegasus-38-running-shoe-Sr07Xf.png',
      brand: 'Nike',
      category: 'Women',
      description:
        'A workhorse built to help power you through every mile of the race, the Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor.Mesh in the upper combines the comfort and durability you want with a fit that nods back to the classic Peg, now updated in a bright, summer-ready hue.',
      price: 153,
      oldPrice: 160,
      sizeAndStock: [
        {
          numSize: 37,
          countInStock: 10,
        },
        {
          numSize: 38,
          countInStock: 50,
        },
        {
          numSize: 39,
          countInStock: 25,
        },
        {
          numSize: 40,
          countInStock: 100,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Nike Blazer Low '77",
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f385aae2-652c-481d-a947-996b7167f4c2/blazer-low-77-younger-shoe-S3fkLP.png',
      brand: 'Nike',
      category: 'Men',
      description:
        "The Nike Blazer Low '77 has transcended the basketball court to streetwear and is ready to land on your kiddo's feet. Tuck their toes into this icon for an old-school look that keeps little feet comfy on all their adventures.",
      price: 61,
      oldPrice: 99,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 10,
        },
        {
          numSize: 29,
          countInStock: 5,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 5,
      rating: 5,
      numReviews: 4,
    },
    {
      name: 'Nike Air Max Excee',
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d49bb47d-d651-49f8-be66-fa01995546b3/air-max-excee-shoe-MxgpKq.png',
      brand: 'Nike',
      category: 'Women',
      description:
        'Inspired by the Nike Air Max 90, the Nike Air Max Excee celebrates a classic through a new lens. Elongated design lines and distorted proportions on the upper elevate an icon into a modern space.',
      price: 115,
      oldPrice: 132,
      sizeAndStock: [
        {
          numSize: 37,
          countInStock: 10,
        },
        {
          numSize: 38,
          countInStock: 5,
        },
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Nike Air Force 1 '07 LV8",
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ff821cd-5de5-49dc-ba37-b40336b07bc7/air-force-1-07-lv8-shoe-27Bnvv.png',
      brand: 'Nike',
      category: 'Men',
      description:
        "The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that celebrates 50 years of the Swoosh.Keeping what you know best: stitched overlays, bold colours and the perfect amount of flash to make you shine, it now features the original Swoosh design, removable lace dubrae and other heritage details.",
      price: 127,
      oldPrice: 150,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 5,
        },
        {
          numSize: 42,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Nizza platform mid shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cbf213ac23574661bbc8acb8011dd6e0_9366/Nizza_Platform_Mid_Shoes_White_GY5465_01_standard.jpg',
      brand: 'Adidas',
      category: 'Women',
      description:
        'Spread nothing but good vibes and positive energy with this silhouette. The Nizza adorns a colorful canvas upper with floral patterns to get you in the groove this season. The raised platform outsole allows you to elevate your style game for all you funky ones out there. This model is likely to receive rave reviews at barbecues, on a hunt for matcha latte or a dash to the supermarket. Exclusively available through adidas.',
      price: 82,
      oldPrice: 99,
      sizeAndStock: [
        {
          numSize: 37,
          countInStock: 10,
        },
        {
          numSize: 38,
          countInStock: 5,
        },
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Nike Blazer Low '77 PRM",
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9908d77e-d988-487e-a499-cc20bd910e14/blazer-low-77-prm-shoe-pnHzBj.png',
      brand: 'Nike',
      category: 'Men',
      description:
        "From b-ball history to fashion staple, the Nike Blazer Low '77 Premium celebrates the 50th anniversary of the Swoosh.The original Swoosh design and removable lace dubrae with gem stone add a lesson in sport to the A+ look.",
      price: 127,
      oldPrice: 150,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 5,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Tech response 2.0 golf shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fa057cb7dd5640b29792acb601154652_9366/Tech_Response_2.0_Golf_Shoes_White_FW6323_01_standard.jpg',
      brand: 'Adidas',
      category: 'Women',
      description:
        'Lightweight comfort and confident grip to get you through the back nine. The responsive fit and feel of a running shoe blends with the dependable footing and stability of golf spikes. Their lightweight, breathable feel helps you focus on shaving strokes.',
      price: 113,
      oldPrice: 125,
      sizeAndStock: [
        {
          numSize: 37,
          countInStock: 10,
        },
        {
          numSize: 38,
          countInStock: 5,
        },
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Nike Air Force 1 '07 Premium",
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/358b5550-fd69-4096-a83e-73ce86d0cf99/air-force-1-07-shoe-lwfkjL.png',
      brand: 'Nike',
      category: 'Men',
      description:
        "Distinct: a Swoosh logo and heel crafted from richly textured plant material that comes from pineapple leaf fibre.Rare: a cork upper that delivers a singular look with golden undertones.You lacing up the Nike Air Force 1 '07 Premium: exquisitely unconventional.Why: because conventional never made the history books.",
      price: 166,
      oldPrice: 192,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 5,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'NikeCourt Royale 2',
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5f7bea3-b465-48db-a189-16727b61e99a/nikecourt-royale-2-shoe-bNGzCc.png',
      brand: 'Nike',
      category: 'Women',
      description:
        "The NikeCourt Royale 2 features the same design that has rocked the streets since the late '70s. The leather on the upper feels soft, smooth and easy to wear. The large retro Swoosh graphic adds throwback appeal. To top it off, the modernised herringbone sole puts a modern twist on the classic look.",
      price: 70,
      oldPrice: 90,
      sizeAndStock: [
        {
          numSize: 37,
          countInStock: 10,
        },
        {
          numSize: 38,
          countInStock: 5,
        },
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Adizero boston 10 shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c9732c5d30a74958a48dacc40114ea54_9366/Adizero_Boston_10_Shoes_White_FY4079_01_standard.jpg',
      brand: 'Adidas',
      category: 'Sports',
      description:
        "Imagine if every run could feel like race day. The new Boston 10 is the ideal companion in your personal best pursuit, where every training session counts. Lightstrike's super light, responsive cushioning has you covered on the comfort side so that nothing takes away from your time hitting the pavement. Speaking of pavement, Continental™ Rubber under the forefoot makes sure you stick it.",
      price: 165,
      oldPrice: 192,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 10,
        },
        {
          numSize: 40,
          countInStock: 5,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Climacool vento shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/31795f2015b74f09981aacbf00e4aaba_9366/Climacool_Vento_Shoes_Black_FZ4101_01_standard.jpg',
      brand: 'Adidas',
      category: 'Men',
      description:
        "Running isn't without its challenges, no matter where you're at. That's what makes the little victories so much sweeter. Whatever comes up, push through in these adidas Vento Shoes with HEAT.RDY. The highly breathable mesh upper and vents in the midsole circulate airflow to balance the building heat. Boost cushioning energises your stride and takes comfort to the next level. Something you know all about.",
      price: 165,
      oldPrice: 180,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Adizero Takumi Sen 7 Tokyo Shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d7b890cd4158476e8234ad0c00bce39e_9366/Adizero_Takumi_Sen_7_Tokyo_Shoes_White_FZ2499_01_standard.jpg',
      brand: 'Adidas',
      category: 'Sports',
      description:
        'Test your limits. Play with speed. Charge towards the finish line. Made with featherlight yet supportive mesh, these adidas running shoes help you face your most challenging runs with confidence. Lightstrike cushioning returns energy, propelling you toward your goals.',
      price: 174,
      oldPrice: 190,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Ultraboost 21 shoes',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0fca47a779cb41809a63ad2101678c9a_9366/Ultraboost_21_Shoes_White_S23869_01_standard.jpg',
      brand: 'Adidas',
      category: 'Men',
      description:
        'Show up for yourself. These adidas Ultraboost 21 running shoes make it easier. Lightweight but without sacrificing an ounce of support, the adidas Primeknit+ upper adapts to the changing shape of your foot as you push forward. Responsive Boost cushioning gives you an energised feeling that reminds you that you can always go one more step, maybe one more block or perhaps another mile. (Throw a few extra songs on your playlist. You never know.)',
      price: 217,
      oldPrice: 250,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Texture Chuck 70',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3fd89631/images/a_107/171349C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Men',
      description:
        'Luxe textures cozy up to cooler weather this season in our Chuck 70 Hybrid Texture sneaker. A mix of recycled polyester and cotton gives this style its distinct textured look and feel, contrasting the clean, white midsole. Premium Chuck 70 details, like an OrthoLite sockliner, winged tongue stitching, and vintage license plate keep this style true to our heritage.',
      price: 85,
      oldPrice: 95,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Function Chuck Taylor All Star CX',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dweaf216e6/images/a_107/171400C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Men',
      description:
        'The Chuck Taylor All Star CX makes use of our revolutionary CX foam, part of our groundbreaking toolkit of comfort technology, to deliver one of our lightest, most comfortable Chuck Taylor All Star sneakers ever. The comfort midsole comes out strong under translucent rubber. Featuring the same iconic profile, rubber toe box, midsole stripes, and lace-up front, and a new color for fall.',
      price: 75,
      oldPrice: 80,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Texture Chuck 70 Varsity',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw814aed6d/images/a_107/171409C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Men',
      description:
        'Inspired by our sport heritage, the Chuck 70 gets a sustainable makeover this season with a 100% recycled polyester build and 100% recycled polyester, giving new life to old sport materials. An exposed foam tongue, pop colors, and a vintage varsity color palette plays on the throwback theme. while heritage design elements like a rubber toe bumper and toe cap, and vintage All Star ankle patch keep it classic.',
      price: 90,
      oldPrice: 110,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Texture Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw73ac2e6c/images/a_107/171368C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Men',
      description:
        'A woven, multicolored cotton build contrasts the clean white midsole of this essential high top. Subtle chunky woven slub effect pops against flat black laces. Complete with Chuck Taylor All Star classics, like a rubber toe bumper, toe cap, and contrast midsole stripes. With an OrthoLite sockliner to help keep it comfortable.',
      price: 60,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Floral Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb69c3d0d/images/a_107/571402C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Women',
      description:
        "Inspired by the healing and grounding colors found in nature, we've infused our classic Chucks with optimistic tones and dried wildflower prints.",
      price: 65,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Floral Platform Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw0eff2f8d/images/a_107/571583C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Women',
      description:
        'Inspired by real dried and pressed wildflowers, a floral screenprint blooms up from the sole of our platform low top. The grounded, healing tone of the sneaker comes through its egret-colored midsole and tonal laces, tying the look together. With heritage Chuck Taylor All Star design elements, like a diamond pattern toe bumper and rubber toe cap.',
      price: 65,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Hybrid Floral Chuck 70',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw907225b2/images/a_107/571386C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Women',
      description:
        "Inspired by real dried and pressed wildflowers, a floral screenprint blooms up the Chuck 70's premium cotton canvas build. A black pinstripe makes its way around the midsole. With signature Chuck 70 detailing, like a glossy, rubber sidewall, winged tongue stitching for reinforcement, and extra cushioning.",
      price: 80,
      oldPrice: 92,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Archive Prints Chuck 70',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw79ac1a46/images/a_107/371502C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Kids',
      description:
        "Now available in kids' sizes, the premium Chuck 70 returns in bold archival prints. Designed for kids with big style, we’ve updated the legendary high top with comfortable SmartFOAM cushioning and timeless graphics.",
      price: 65,
      oldPrice: 70,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Jungle Cats Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw4c11d8b3/images/a_107/671613C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Kids',
      description:
        'The high top, court favorite gets redesigned for kids, with a SmartFOAM sockliner and softened stitches and linings for comfort. Wild cats lunge up from the classic midsole and across the canvas, catching Chuck Taylor classics like the star ankle patch as they go.',
      price: 40,
      oldPrice: 45,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Dino Daze Easy-On Jack Purcell',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw35f36034/images/a_107/371652C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Kids',
      description:
        "Meet your little dino-lover's new favorite shoes. Designed with comfort and style in mind, they've got cushy SmartFOAM for all-day support and adorable dinosaur prints, just for fun.",
      price: 45,
      oldPrice: 50,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Dino Daze Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw4c49f4a8/images/a_107/671598C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Kids',
      description:
        "If your little one likes dinosaurs, they'll love these printed Chucks. Designed for comfortable all-day play, they've got supportive SmartFOAM cushioning and a breathable recycled mesh lining. All-over dino prints show off your kid's style.",
      price: 40,
      oldPrice: 45,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Archive Foil Chuck Taylor All Star',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb55f4ba4/images/a_107/670690C_A_107X1.jpg?sw=964',
      brand: 'Converse',
      category: 'Kids',
      description:
        "Dress up your little one's Chucks with colorful, shining stars. All the classic features they know and love are there – plus softened stitching and lining for all-day comfort.",
      price: 35,
      oldPrice: 42,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Twill sk8-hi platform 2.0',
      image: 'https://images.vans.com/is/image/Vans/TKN9MK-HERO?$583x583$',
      brand: 'Vans',
      category: 'Women',
      description:
        'The Twill Sk8-Hi Platform 2.0 pushes our legendary sidestripe high top to new heights. Constructed with higher sidewalls and uppers made from colorful textiles, this platform shoe elevates an iconic favorite while staying true to the original style. The Twill Sk8-Hi Platform 2.0 also features supportive padded collars and signature rubber waffle outsoles.',
      price: 85,
      oldPrice: 90,
      sizeAndStock: [
        {
          numSize: 36,
          countInStock: 20,
        },
        {
          numSize: 37,
          countInStock: 15,
        },
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Tartan daze authentic',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/TARTAN%20DAZE%20AUTHENTIC.png?alt=media&token=9269212e-d151-4dd3-bde3-a5da158fdf4b',
      brand: 'Vans',
      category: 'Women',
      description:
        'Born in Anaheim, California in 1966, the Authentic is the original Vans heritage style. Originally known as Vans #44 Deck Shoes, the Authentic became an immediate cult icon, and has embodied our "Off The Wall" attitude ever since. Constructed with a simple lace-up profile, the Tartan Daze Authentic combines our classic low top shoe with mixed leather, denim, and acid-dyed textile uppers. This time-honored silhouette also includes contrast stitching, stud details across the front of the foot, metal eyelets, and signature rubber waffle outsoles.',
      price: 70,
      oldPrice: 80,
      sizeAndStock: [
        {
          numSize: 36,
          countInStock: 20,
        },
        {
          numSize: 37,
          countInStock: 15,
        },
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Tartan daze sk8-hi',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/TARTAN%20DAZE%20SK8-HI.png?alt=media&token=420832ec-1a0c-4172-b9ee-492e13860b67',
      brand: 'Vans',
      category: 'Women',
      description:
        'The Sk8-Hi was introduced in 1978 as Style 38, and showcased the now-iconic Vans Sidestripe on a new, innovative high top silhouette. As only the second model featuring the recognizable marker formerly known as the "jazz stripe," the Sk8-Hi brought a whole new look to the Vans family. Building on that first legendary high top, the Tartan Daze Sk8-Hi features mixed leather, denim, and acid-dyed textile uppers. This lace-up shoe also includes contrast stitching, stud details, supportive padded collars, and signature rubber waffle outsoles.',
      price: 90,
      oldPrice: 95,
      sizeAndStock: [
        {
          numSize: 36,
          countInStock: 20,
        },
        {
          numSize: 37,
          countInStock: 15,
        },
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Chukka low sidestripe',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/chukka%20low%20sidestripe.png?alt=media&token=31894354-93ae-447d-9785-485be56c8c08',
      brand: 'Vans',
      category: 'Men',
      description:
        'Now featuring our iconic Vans sidestripe for an even more heritage look, the Chukka Low Sidestripe was designed by the Vans skate team and inspired by classics like the Authentic and the Chukka Boot. Made with sturdy suede and 10 oz canvas uppers, this classic skate shoe also includes enhanced sockliners for superior cushioning and impact protection, Vans original waffle outsoles made of a rubber that offers grip and support, and Pro Vulc Lite construction for lightweight comfort and flexibility. The Chukka Low Sidestripe provides a recognizable look while delivering the best in boardfeel, flex, and traction.',
      price: 70,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Vans x spongebob old skool',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/vans%20x%20spongebob%20old%20skool.png?alt=media&token=798113bb-e327-4eeb-b087-07c3adb4ae79',
      brand: 'Vans',
      category: 'Men',
      description:
        'Dive undersea for a F.U.N. collaboration with Vans and SpongeBob SquarePants, the world’s most memorable sponge. To help you show your love for the coolest creatures under the sea, the Vans x SpongeBob Old Skool combines our iconic sidestripe shoe with a checkerboard pattern featuring silly cameos from SpongeBob himself, along with yellow sidestripes that tie into his recognizable look.',
      price: 85,
      oldPrice: 95,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Evdnt ultimatewaffle',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/evdnt%20ultimatewaffle.png?alt=media&token=6d79065c-5929-44fa-ab1c-d219ab48fbb3',
      brand: 'Vans',
      category: 'Men',
      description:
        'Introducing the EVDNT UltimateWaffle, Vans’ greatest innovation in lifestyle footwear featuring UltimateWaffle construction. We’ve taken from our foundation in skateboarding to inform and validate a revolutionary lifestyle silhouette that is sure to be loud and clear in both style and function for everyday use.',
      price: 100,
      oldPrice: 105,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Heavy textures old skool',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/heavy%20textures%20old%20skool.png?alt=media&token=4644bac4-6e38-4958-885b-5202a01b56ed',
      brand: 'Vans',
      category: 'Men',
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand.',
      price: 65,
      oldPrice: 70,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Kids fun floral classic slip-on',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/Kids%20fun%20floral%20classic%20slip-on.png?alt=media&token=84c8d195-93d6-4296-b1ad-6793bf73a84a',
      brand: 'Vans',
      category: 'Kids',
      description:
        'First introduced in 1977, the Vans #98—now known as the Classic Slip-On—instantly became an icon in Southern California. Fast forward to today, and the Classic Slip-On is known worldwide for its comfortable silhouette, easy wearability, and beloved design. Featuring a vibrant allover floral print, the Kids Fun Floral Classic Slip-On is an everyday essential with true "Off The Wall" style. This iconic slip-on shoe also includes low profile canvas uppers, supportive padded collars, elastic side accents, and signature rubber waffle outsoles.',
      price: 37,
      oldPrice: 42,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Kids spiral tie dye old skool',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/Kids%20spiral%20tie%20dye%20old%20skool.png?alt=media&token=6ed9cfe3-b805-4e4a-88e5-80e2b3a2e9db',
      brand: 'Vans',
      category: 'Kids',
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the "jazz stripe." Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Featuring a groovy neon tie-dyed print, the Kids Spiral Tie Dye Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. Made with durable suede and textile uppers, it also includes re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      price: 45,
      oldPrice: 49,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: '2-tone comfycush new skool v',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/2-tone%20comfycush%20new%20skool%20v.png?alt=media&token=be889098-16da-452f-84bd-867cf0528feb',
      brand: 'Vans',
      category: 'Kids',
      description:
        'The Kids 2-Tone ComfyCush New Skool V is a fresh take on the classic Old Skool V. Special features include a rubber toe cap and an additional vamp overlay for durability, a single-strap hook-and-loop closure for equal tightness and a consistent fit, and a comfort collar with additional foam padding. It also includes sturdy canvas and suede uppers, heel pulls for an easy on-and-off fit, and a ComfyCush bottom unit.',
      price: 50,
      oldPrice: 58,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Glow uni rex classic slip-on',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/Glow%20uni%20rex%20classic%20slip-on.png?alt=media&token=943fd5f1-aba9-45d4-9e9d-21b1303acfc4',
      brand: 'Vans',
      category: 'Kids',
      description:
        'First introduced in 1977, the Vans #98—now known as the Classic Slip-On—instantly became an icon in Southern California. Fast forward to today, and the Classic Slip-On is known worldwide for its comfortable silhouette, easy wearability, and beloved design. Featuring a partial dinosaur print offset by a neon pink checkerboard pattern, the Kids Glow Uni Rex Classic Slip-On is an everyday essential with true “Off The Wall” style. This iconic slip-on shoe also includes low profile canvas uppers, supportive padded collars, elastic side accents, and signature rubber wa',
      price: 37,
      oldPrice: 45,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Cloud wash tri-lock',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/Cloud%20wash%20tri-lock.png?alt=media&token=2307ed7b-6673-4214-8bdb-8b614c7040ba',
      brand: 'Vans',
      category: 'Kids',
      description:
        'The Kids Cloud Wash Tri-Lock features premium textile and synthetic straps with graphic details and hook-and-loop adjustability, so you can find your perfect fit. Built on an UltraCush Lite footbed for all day comfort, this retro sandal also includes lateral synthetic leather overlays for protection and support, durable rubber outsoles with sawtooth tread, and water-based inks and glues.',
      price: 35,
      oldPrice: 42,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Primary camo tri-lock',
      image:
        'https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/Primary%20camo%20tri-lock.png?alt=media&token=8c60b90f-c710-4ce1-9de0-879485f197e9',
      brand: 'Vans',
      category: 'Kids',
      description:
        'The Kids Primary Camo Tri-Lock features premium textile and synthetic straps with a camouflage print and hook-and-loop adjustability, so you can find your perfect fit. Built on an UltraCush Lite footbed for all day comfort, this retro sandal also includes lateral synthetic leather overlays for protection and support, durable rubber outsoles with sawtooth tread, and water-based inks and glues.',
      price: 40,
      oldPrice: 45,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'RS-DREAMER Basketball Shoes',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/193990/02/sv01/fnd/PNA/fmt/png/RS-DREAMER-Basketball-Shoes',
      brand: 'Puma',
      category: 'Men',
      description:
        'Don’t sleep on your dreams. They keep us grinding and thriving. To celebrate J. Cole and others’ drive to chase their dreams, we’re releasing new colorways of the RS-DREAMER. The bold elements of the RS series meet street and court ready design for a fully playable pair of kicks. As the DREAMER franchise continues to make strides as a service company for athletes and dreamers everywhere, we’re releasing this drop as a reminder to never stop striving for your highest potential.',
      price: 125,
      oldPrice: 130,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Suede Classic XXI Men's Sneakers",
      image:
        'https://i.pinimg.com/736x/e9/27/b0/e927b0c7c21c58718b2bf6f4d04a26d7.jpg',
      brand: 'Puma',
      category: 'Men',
      description:
        'The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation and it’s stayed classic through it all. This year, we relaunch the Suede with fresh colorways and subtle design updates. Classic as ever, for all-time.',
      price: 70,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'GV Special+ Sneakers',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/366613/06/sv01/fnd/PNA/fmt/png/GV-Special+-Sneakers',
      brand: 'Puma',
      category: 'Men',
      description:
        'In the late 1970s, Argentinean tennis player Guillermo Vilas went on a title-winning rampage. Known for his one-handed backhand and off-the-court charm, he paired with PUMA to create a line of tennis shoes that matched his winning style. Among them? The GV Special. And much like the man behind the legend, it quickly secured its rank: Icon.',
      price: 70,
      oldPrice: 75,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'SpeedCat Sparco Trainers',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/339844/05/sv01/fnd/PNA/fmt/png/SpeedCat-Sparco-Trainers',
      brand: 'Puma',
      category: 'Men',
      description:
        'Motorsport maniacs, rejoice. The iconic motorsport-inspired lifestyle shoe that first hit the streets in 2000 is back: the SpeedCat Sparco.',
      price: 100,
      oldPrice: 107,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'RS-X³ Puzzle Sneakers',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/05/sv01/fnd/PNA/fmt/png/RS-X%C2%B3-Puzzle-Sneakers',
      brand: 'Puma',
      category: 'Men',
      description:
        'X marks extreme. Exaggerated. Remixed.X³ takes things to a new level: cubed, enhanced, extra. We’ve taken the signature RS design and dialed it up to the third power. With amplified detailing on the upper, stronger material mixes, and bold color combinations, this kick is ready to step into a new dimension.',
      price: 110,
      oldPrice: 120,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 43,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "RS-Fast Tie Dye Women's Sneakers",
      image:
        'https://assets.ajio.com/medias/sys_master/root/20210208/YGmI/60213a1faeb26969815f4611/-473Wx593H-460835786-pink-MODEL2.jpg',
      brand: 'Puma',
      category: 'Women',
      description:
        'Faster and fresher than any of our RS kicks yet. The RS-Fast is reinventing street style with a progressive design that combines early 2000s cues and futuristic vibes. This version packs on the retro vibes with a vibrant tie dye print and fresh pops of color.',
      price: 110,
      oldPrice: 120,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Suede Classic XXI Women's Sneakers",
      image:
        'https://kickz.akamaized.net/en/media/images/p/600/puma-Suede_Classic_XXI-Gray_Violet_Puma_White-1.jpg',
      brand: 'Puma',
      category: 'Women',
      description:
        'The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation and it’s stayed classic through it all. This year, we relaunch the Suede with fresh colorways and subtle design updates. Classic as ever, for all-time.',
      price: 70,
      oldPrice: 78,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Fierce 2 Women's Training Shoes",
      image:
        'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333484984_01_a?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520',
      brand: 'Puma',
      category: 'Women',
      description:
        "An eye-catching archival aesthetic but with a trend-setting 2021 update, the Fierce franchise is back and better than ever. Propelled to fame for its clean design and iconically extended collar, it's sure to be a striking addition to any sneakerhead’s wardrobe. Attention-seeking by nature, with a stretchy midfoot strap, bold branding and fresh feminine flair, plus comfortable cushioning for a relaxed ride, they're perfect for light training, dancing and casual cruising. Modern and monochromatic, these sleek training shoes will be your new go-to pair.",
      price: 90,
      oldPrice: 98,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Suede Classic Mono Iced Women's Sneakers",
      image: 'https://www.thenextsole.com/storage/images/381588-01.png',
      brand: 'Puma',
      category: 'Women',
      description:
        'The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation – and it’s stayed classic through it all. Suede Classic Mono Iced doubles down on the monochromatic vibes with a tonal color palette, iced-out rubber sole and debossed detailing for a sleek addition.',
      price: 40,
      oldPrice: 45,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "RS-X Airbrush Women's Sneakers",
      image: 'https://www.thenextsole.com/storage/images/382762-01.png',
      brand: 'Puma',
      category: 'Women',
      description:
        'The RS family is getting wider with the new update with the RS-X. RS-X family stands for RE-IMAGINATION. AIRBRUSH is inspired by the t-shirt designs popularized on the boardwalks during summertime. Designs cues are illustrated on the formstripe with airbrush branding.',
      price: 110,
      oldPrice: 120,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'PUMA x HARIBO RS-X³ Sneakers',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/383415/01/sv01/fnd/PNA/fmt/png/PUMA-x-HARIBO-RS-X%C2%B3-Sneakers',
      brand: 'Puma',
      category: 'Women',
      description:
        "Step into the shoe that launched a sportswear dynasty with the latest additions to our RS, or Running System, family. Our RS-X³ HARIBO melds the sweet world of Haribo gummy bears with PUMA's edgy, street-savvy style to deliver a shoe that is pure performance wrapped in whimsical details, including a gummy bear chain detail and gold accent overlays to pay homage to the legendary confectionary brand.",
      price: 120,
      oldPrice: 130,
      sizeAndStock: [
        {
          numSize: 38,
          countInStock: 20,
        },
        {
          numSize: 39,
          countInStock: 15,
        },
        {
          numSize: 40,
          countInStock: 20,
        },
        {
          numSize: 41,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Cali Sport Roar Little Kids' Sneakers",
      image:
        'https://d2ob0iztsaxy5v.cloudfront.net/product/875005/8750051150_zm.jpg',
      brand: 'Puma',
      category: 'Kids',
      description:
        "Your little animal-loving warrior will love the Cali Sport Roar. We've taken the laid-back West Coast vibes of the California classic and added a rich mix of materials in animal prints and colours that reflect the beauty of the zebra or the leopard. We've used a hint of metallic in the iconic branding and stacked the sole for a fiercer look.",
      price: 60,
      oldPrice: 70,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'PUMA x HARIBO CA Pro Sneakers JR',
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/383247/01/sv01/fnd/PNA/fmt/png/PUMA-x-HARIBO-CA-Pro-Sneakers-JR',
      brand: 'Puma',
      category: 'Kids',
      description:
        "Make a splash on the streets in the CA Pro Haribo, one of the latest members of the iconic '80s-inspired California family. Original detailing mixed with basketball elements is combined with a stacked midsole with rubber plugs, resulting in a progressive look inspired by the PUMA archives. The gold detailing reflects the original Haribo Goldbear, which kids and adults alike have loved since 1922.",
      price: 65,
      oldPrice: 70,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "PUMA x RUGRATS Suede Little Kids' Sneakers",
      image:
        'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best,w_681/v1575961299/uploads/assets/c6f-PUMA-x-Rugrats-Suede-Toddler-38306601-side-7ad.jpg',
      brand: 'Puma',
      category: 'Kids',
      description:
        "Let your kids fall in love with classic PUMA and classic '90s TV. The Suede is one of our best-loved Sneakers and has been worn by icons of every generation over the decades. For this version, we've added branding depicting characters from Rugrats, one of our favourite TV shows.",
      price: 50,
      oldPrice: 55,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "RS-X Airbrush Little Kids' Shoes",
      image:
        'https://cdn.laredoute.com/products/1200by1200/7/8/8/788c6f85c49152b48681595e7a8eb008.jpg',
      brand: 'Puma',
      category: 'Kids',
      description:
        'The RS family is getting wider with the new update with the RS-X. RS-X family stands for RE-IMAGINATION. AIRBRUSH is inspired by the t-shirt designs popularized on the boardwalks during summertime. Designs cues are illustrated on the formstripe with airbrush branding.',
      price: 75,
      oldPrice: 85,
      sizeAndStock: [
        {
          numSize: 28,
          countInStock: 20,
        },
        {
          numSize: 29,
          countInStock: 15,
        },
        {
          numSize: 30,
          countInStock: 20,
        },
        {
          numSize: 31,
          countInStock: 25,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'King Top FG Soccer Cleats',
      image: 'https://www.thenextsole.com/storage/images/105607-01.png',
      brand: 'Puma',
      category: 'Sports',
      description:
        'The PUMA King is soccer royalty. It’s been in the game since 1968 and has been worn by soccer legends from Pele to Matthaus. Originally engineered in Italy, the King Top features a sleek leather upper and soft padded collar with a fold-over tongue. The lightweight studded outsole allows agile, versatile movement and optimal traction on the field.',
      price: 140,
      oldPrice: 160,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "King Top TT Men's Soccer Shoes",
      image: 'https://www.thenextsole.com/storage/images/105734-02.png',
      brand: 'Puma',
      category: 'Sports',
      description:
        'The PUMA King is soccer royalty. It’s been in the game since 1968 and has been worn by soccer legends from Pele to Matthaus. Originally engineered in Italy, the King Top features a sleek leather upper and soft padded collar with a fold-over tongue. The low-profile rubber outsole features strategically placed studs for versatile movement and traction on the field.',
      price: 140,
      oldPrice: 160,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "BMW M Motorsport RS-Connect Men's Sneakers",
      image: 'https://www.thenextsole.com/storage/images/306536-02.png',
      brand: 'Puma',
      category: 'Sports',
      description:
        'The energy of the track meets the future-retro style of RS in RS-Connect from BMW M Motorsport. Fusing art, streetwear and high-octane influence, this kick features a fluid, dynamic design with signature BMW M Motorsport colors and branding.',
      price: 120,
      oldPrice: 125,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Ferrari IONF Men's Motorsport Shoes",
      image: 'https://www.thenextsole.com/storage/images/306539-02.png',
      brand: 'Puma',
      category: 'Sports',
      description:
        'Embedded in our blood, the need to compete, to shift to the 12th dimension, to RACE. Introducing the FERRARI IONF, inspired by the components that make the fastest GT cars in the world. ​No compromises, no restraints, pure race.',
      price: 630,
      oldPrice: 650,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "Liberate NITRO Men's Running Shoes",
      image:
        'https://phabulus.com/wp-content/uploads/2021/03/Liberate-Nitro-Mens-Running-Shoes-6-800x800.jpg',
      brand: 'Puma',
      category: 'Sports',
      description:
        "Liberate NITRO keeps you light on your feet with an effortless ride. Form fit around PUMA's new performance last, Liberate NITRO offers a great fit executed in a sturdy mono-mesh. A one-piece, NITRO midsole delivers just-right cushioning with great responsiveness for tempo runs and competition. To keep you steady and seen, Liberate NITRO has a TPU heel piece providing proprioception, and strategically placed PUMAGRIP for all-surface traction.",
      price: 110,
      oldPrice: 120,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: "UltraRide Men's Running Shoes",
      image:
        'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202007/31/00166969615211____6__640x640.jpg',
      brand: 'Puma',
      category: 'Sports',
      description:
        'Sometimes to reach extraordinary places, you have to remove excess boundaries. Built on the foundation of Reductionist Theory, UltraRide removes the limits with outsole cutaways to leave you with one basic running essential: cushioning and responsiveness for limitless potential. A light, airy upper and supportive midsole plate merge through a dynamic bridge design. Combined with PROFOAMLITE for cushioning and rubber surface area for power transfer at toe-off, UltraRide carries you to great. It’s that radically simple.',
      price: 55,
      oldPrice: 60,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Court Rider Basketball Shoes',
      image:
        'https://img01.ztat.net/article/spp-media-p1/86ae9ec9d773484f934412c66116a20a/c03e8ba81d6c4266a7151b02503566d6.jpg?imwidth=762',
      brand: 'Puma',
      category: 'Sports',
      description:
        'Sometimes to reach extraordinary places, you have to remove excess boundaries. Built on the foundation of Reductionist Theory, UltraRide removes the limits with outsole cutaways to leave you with one basic running essential: cushioning and responsiveness for limitless potential. A light, airy upper and supportive midsole plate merge through a dynamic bridge design. Combined with PROFOAMLITE for cushioning and rubber surface area for power transfer at toe-off, UltraRide carries you to great. It’s that radically simple.',
      price: 100,
      oldPrice: 120,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'DISC Rebirth Basketball Shoes',
      image:
        'https://product.hstatic.net/1000284478/product/02_194812_2_6c1c80c5d0ef4948acd3c9cb1b162ac8_1024x1024.jpg',
      brand: 'Puma',
      category: 'Sports',
      description:
        'Lose the laces because PUMA Hoops is giving DISC a sleek redesign. Please welcome to the court, DISC Rebirth. DISC Rebirth isn’t just a fully playable basketball shoe, it’s a triple-double ready statement piece. Laceless style and performance click together for a pair of kicks that look and play like nothing else out there.',
      price: 145,
      oldPrice: 155,
      sizeAndStock: [
        {
          numSize: 39,
          countInStock: 20,
        },
        {
          numSize: 40,
          countInStock: 15,
        },
        {
          numSize: 41,
          countInStock: 20,
        },
        {
          numSize: 42,
          countInStock: 25,
        },
        {
          numSize: 43,
          countInStock: 35,
        },
      ],
      numSold: 0,
      rating: 4,
      numReviews: 0,
    },
  ],
};

module.exports = data;
