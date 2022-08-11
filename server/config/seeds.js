const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Originals' },
    { name: 'Giclee Canvas Prints' },
    { name: 'Prints' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '‘The Fire Within’ Giclee Canvas Print',
      description:
        'All Giclee canvas prints are wrapped on 1.5” bars, gloss varnished, signed, and ready to hang!',
      image: '/GicleeCanvasPrints/TheFireWithinGicleeCanvasPrint.jpg',
      category: categories[0]._id,
      price: 450.00,
      quantity: 500
    },
    {
      name: '“The Long Strange Trip” Jerry Garcia',
      description:
        'giclee canvas print. Hand signed, varnished, and ready to hang.',
      image: '/GicleeCanvasPrints/TheLongStrangeTripJerryGarciaCanvasPrint.jpeg',
      category: categories[0]._id,
      price: 350.00,
      quantity: 500
    },
    {
      name: 'Need a Buzz',
      category: categories[0]._id,
      description:
        'giclee canvas print. Hand signed, varnished, and ready to hang.',
      image: '/GicleeCanvasPrints/NeedABuzzGicleeCanvas1-10Print.jpg',
      price: 250.00,
      quantity: 20
    },
    {
      name: 'HAM',
      category: categories[0]._id,
      description:
        'All Giclee canvas prints are varnished, signed, and ready to hang. The canvas pictured is a 30x40 for size reference. ',
      image: '/GicleeCanvasPrints/HAM-GicleeCanvasPrint.jpg',
      price: 200.00,
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
