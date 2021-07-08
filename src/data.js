const data = {
  users: [
    {
      username: 'admin',
      password: '1',
      fullname: 'Admin shoeshop',
      email: 'admin@shoeshop.com',
      isAdmin: true,
      phoneNumber: 0123456789,
      address: 'Ho Chi Minh',
    },
    {
      username: 'user',
      password: '1',
      fullname: 'User shoeshop',
      email: 'user@shoeshop.com',
      isAdmin: true,
      phoneNumber: 0123965874,
      address: 'Ho Chi Minh',
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
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Nike Dunk High Game Royal',
      image:
        'https://images.stockx.com/360/Nike-Dunk-High-Game-Royal/Images/Nike-Dunk-High-Game-Royal/Lv2/img01.jpg?auto=compress&dpr=1&updated_at=1624468016&fit=clip&fm=webp&ixlib=react-9.1.5&q=90&w=1140',
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
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Jordan 6 Retro Travis Scott British Khaki',
      image:
        'https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott-British-Khaki/Images/Air-Jordan-6-Retro-Travis-Scott-British-Khaki/Lv2/img01.jpg?auto=compress&dpr=1&updated_at=1620406101&fit=clip&fm=webp&ixlib=react-9.1.5&q=90&w=1140',
      brand: 'Jordan',
      category: 'Women',
      description:
        'Travis Scott and Jordan Brand teamed up to deliver the Air Jordan 6 Retro Travis Scott British Khaki. The British Khaki marks the second time that Travis has added his touch to the Jordan 6 silhouette, the first being the 2019 Air Jordan 6 Travis Scott. The upper of the Air Jordan 6 Retro Travis Scott British Khaki is made of British Khaki suede. From there, hits of Bright Crimson appear on the heel and tongue embroidered logos. The upper also has two cargo pockets: one with a snap enclosure on the lateral ankle and one with a zip enclosure on the medial ankle. A translucent tongue, heel tab, and outsole that glows in the dark adds the finishing touches to this latest Travis Scott Jordan.',
      price: 583,
      oldPrice: 629,
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
      numReviews: 3,
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
      rating: 0,
      numReviews: 0,
    },
    {
      name: "Nike Blazer Low '77",
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f385aae2-652c-481d-a947-996b7167f4c2/blazer-low-77-younger-shoe-S3fkLP.png',
      brand: 'Adidas',
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
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
      rating: 0,
      numReviews: 0,
    },
  ],
};

module.exports = data;
