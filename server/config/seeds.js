const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Giclee Canvas Prints' },
    { name: 'Originals' },
    { name: 'Prints' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '"The Fire Within" Giclee Canvas Print',
      description:
        'All Giclee canvas prints are wrapped on 1.5” bars, gloss varnished, signed, and ready to hang!',
      image: '/GicleeCanvasPrints/TheFireWithinGicleeCanvasPrint.jpg',
      category: categories[0]._id,
      price: 450.00,
      quantity: 500
    },
    {
      name: '“The Long Strange Trip” Jerry Garcia Canvas Print',
      description:
        'giclee canvas print. Hand signed, varnished, and ready to hang.',
      image: '/GicleeCanvasPrints/TheLongStrangeTripJerryGarciaCanvasPrint.jpeg',
      category: categories[0]._id,
      price: 350.00,
      quantity: 500
    },
    {
      name: '"Need a Buzz" Giclee Canvas 1/10 Print',
      category: categories[0]._id,
      description:
        'giclee canvas print. Hand signed, varnished, and ready to hang.',
      image: '/GicleeCanvasPrints/NeedABuzzGicleeCanvas1-10Print.jpg',
      price: 250.00,
      quantity: 20
    },
    {
      name: '"HAM" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/HAM-GicleeCanvasPrint.jpg',
      price: 200.00,
      quantity: 50
    },   
     {
      name: "'Call Me When You're Sober' Giclee Canvas Print",
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: "/GicleeCanvasPrints/CallMeWhenYou'reSober.jpeg",
      price: 200.00,
      quantity: 50
    },     {
      name: '"Into the Void" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/IntoTheVoid.jpg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Ocean Eyes" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/OceanEyesCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Mercury Rising" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/MercuryRisingCanvasPrint.jpg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Blackstar" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/BlackstarCanvasPrint.jpg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"The Lizard King" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/TheLizardKingCanvasPrint.jpg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Freedom" Jimi Hendrix Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/FreedomJimiHendrixCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Amy Winehouse Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/AmyWinehouseCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Mick Jagger Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/MickJaggerGiclessCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Camila Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/CamilaCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Hecate" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/HecateGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Holocene Extinction" 24x30 Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/HoloceneExtinction24x30GicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Figure from Last Night" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/FigureFromLastNightCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: "Charlotte's Web Canvas Print",
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/CharlottesWebCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Figure from a Past Life" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/FigureFromAPastLifeGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Buried Alive" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/BuriedAliveCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Surrender" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/SurrenderCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: "'Merica Canvas Print",
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/MericaCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Leftover Makeup Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/LeftoverMakeupCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Last Rites" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/LastRitesGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Yellow Submarine" Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/YellowSubmarineCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Untitled Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/UntitledGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: 'Still Life 24x36 Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/StillLife24x36GicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Bloom and Decay" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/BloomAndDecayGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    },     {
      name: '"Redemption" Giclee Canvas Print',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/RedemptionGicleeCanvasPrint.jpeg',
      price: 200.00,
      quantity: 50
    }, {
      name: '"Into the Void" Original Acrylic 30x40',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/IntoTheVoidOriginalAcrylic.jpg',
      price: 3000.00,
      quantity: 50
    }, {
      name: '"HAM" 30x40 Original Painting',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/HAM30x40OriginalPainting.jpg',
      price: 2500.00,
      quantity: 50
    }, {
      name: "'Call Me When You're Sober' 30x40 Original",
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: "/Originals/CallMeWhenYou'reSober30x40Original.jpeg",
      price: 3000.00,
      quantity: 50
    }, {
      name: '"Holocene Extinction" 36x48 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/HoloceneExtinction36X48Original.jpeg',
      price: 4500.00,
      quantity: 50
    }, {
      name: '"Mick Jagger" 40x30 Original Acrylic on Gallery Wrapped Canvas',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/MickJagger40x30OriginalAcryliconGalleryWrappedCanvas.jpeg',
      price: 1100.00,
      quantity: 50
    }, {
      name: '"Into the Void"',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/IntoTheVoid.jpeg',
      price: 3000.00,
      quantity: 50
    }, {
      name: 'Figure From a Past Life 30x48 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/FigureFromAPastLife30x48Original.jpeg',
      price: 1750.00,
      quantity: 50
    }, {
      name: 'Figure From Last Night 30x40 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/FigureFromLastNight30x40Original.jpeg',
      price: 2400.00,
      quantity: 50
    }, {
      name: '"Tell Me What You See" 30x40 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/TellMeWhatYouSee30x40Original.jpg',
      price: 1000.00,
      quantity: 50
    }, {
      name: '"Buried Alive" Original 36x48',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/BuriedAliveOriginal36x48.jpeg',
      price: 4500.00,
      quantity: 50
    }, {
      name: '"Merica" Original 36x48 Oil and Acrylic',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/MericaOriginal36x48OilandAcrylic.jpeg',
      price: 4500.00,
      quantity: 50
    }, {
      name: "'Charlotte's Web' 30x40",
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/CharlottesWeb30x40.jpeg',
      price: 3000.00,
      quantity: 50
    }, {
      name: '"Surrender" Original 30x48',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/SurrenderOriginal30x48.jpeg',
      price: 1555.00,
      quantity: 50
    }, {
      name: '"Leftover Makeup" 30x40',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/LeftoverMakeup30x40.jpeg',
      price: 3000.00,
      quantity: 50
    }, {
      name: '"Yellow Submarine" 18x24 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/YellowSubmarine18x24Original.jpeg',
      price: 750.00,
      quantity: 50
    }, {
      name: 'Still Life Original 24x30',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/StillLifeOriginal24x30.jpeg',
      price: 700.00,
      quantity: 50
    }, {
      name: 'Untitled 24x24 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/Untitled24x24Original.jpeg',
      price: 1500.00,
      quantity: 50
    }, {
      name: '"The Long Strange Trip" Jerry Garcia 24x36 Original',
      category: categories[1]._id,
      description:
        'Original One of A Kind Art Made By Jenna Louise!',
      image: '/Originals/TheLongStrangeTripJerryGarcia24x36Original.jpeg',
      price: 1512.00,
      quantity: 50
    }, {
      name: '"Long Strange Trip" 11x14 Luster Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/LongStrangeTrip11x14LusterPrint.jpg',
      price: 35.00,
      quantity: 50
    },{
      name: '"HAM" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/HAM11x14Print.jpg',
      price: 35.00,
      quantity: 50
    },{
      name: "'Call Me When You're Sober' 11x14 Luster Print",
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/CallMeWhenYoureSober11x14LusterPrint.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Ocean Eyes" Billie Eilish Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/OceanEyesBillieEilishPrint.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Mercury Rising" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/MercuryRising11x14Print.jpg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Blackstar" 12x12 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/Blackstar12x12Print.jpg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Camila" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/Camila11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Holocene Extinction" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/HoloceneExtinction11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Mick Jagger 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/MickJagger11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Hecate" 11x14 Luster Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/Hecate11x14LusterPrint.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Figure From Last Night 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/FigureFromLastNight11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Figure From a Past Life 12x18 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/FigureFromAPastLife12x18Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Tell Me What You See 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/TellMeWhatYouSee11x14Print.jpg',
      price: 35.00,
      quantity: 50
    },{
      name: "Charlotte's Web 11x14 Print",
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/CharlottesWeb11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Leftover Makeup" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/LeftoverMakeup11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Buried Alive 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/BuriedAlive11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Yellow Submarine" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/YellowSubmarine11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Merica" 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/Merica11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Kiss the Sky" 11x14 Jimi Hendrix Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/KissTheSky11x14JimiHendrix.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Almost Free" 12x12 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/AlmostFree12x12Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Still Life 11x14 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/StillLife11x14Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Last Rites" 12x12 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/LastRites12x12Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: 'Untitled 12x12 Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/Untitled12x12Print.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"Bloom & Decay" Prints',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/BloomAndDecayPrint.jpeg',
      price: 35.00,
      quantity: 50
    },{
      name: '"The Lizard King" 12x12 Luster Paper Print',
      category: categories[2]._id,
      description:
        'Authentic and Affordable Prints Made By Jenna Louise!',
      image: '/Prints/TheLizardKing12x12LusterPaperPrint.jpeg',
      price: 35.00,
      quantity: 50
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
