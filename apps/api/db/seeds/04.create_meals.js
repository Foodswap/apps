const fs = require('fs');

const seedMeals = [
  {
    id: 1, name: 'Tartare de saumon', description: 'Saumon cru', created_date: '2021-03-21T15:49:31.39882+00:00', portion: 1, city_id: 30438, online: true, author_id: 1, picture_path: '1616341771254.jpg',
  },
  {
    id: 2, name: 'Oeufs mimosa et concombre à la crème', description: 'Oeufs mimosa avec sa mayonnaise et ses concombres à la crème', created_date: '2021-03-21T16:12:27.105717+00:00', portion: 2, city_id: 30438, online: true, author_id: 1, picture_path: '1616343147022.jpg',
  },
  {
    id: 3, name: 'Number cake', description: 'Oart de gâteau qui contient une ganache monté au chocolat blanc, des fraises et de la crème chantilly ', created_date: '2021-03-21T14:31:08.512436+00:00', portion: 4, city_id: 30438, online: false, author_id: 1, picture_path: '1616337068421.jpg',
  },
  {
    id: 4, name: 'Gyoza au porc', description: 'Raviolis fait maison', created_date: '2021-03-21T17:03:13.489139+00:00', portion: 2, city_id: 30438, online: true, author_id: 1, picture_path: '1616346193464.jpg',
  },
  {
    id: 5, name: 'Roulés au saumon', description: 'Jolis roulés au saumon', created_date: '2021-03-21T18:41:30.539909+00:00', portion: 2, city_id: 30438, online: false, author_id: 2, picture_path: '1616352089559.jpg',
  },
  {
    id: 6, name: 'Risotto aux fruits de mer', description: 'Fruits de mer sur une basse de riz a la crème', created_date: '2021-03-21T15:24:47.148325+00:00', portion: 1, city_id: 30438, online: true, author_id: 2, picture_path: '1616340287152.jpg',
  },
  {
    id: 7, name: 'Pâtes carbonara', description: 'Pâtes carbonara avec oeuf coulant', created_date: '2021-03-21T15:45:24.53317+00:00', portion: 1, city_id: 30438, online: true, author_id: 2, picture_path: '1616341523850.jpg',
  },
  {
    id: 8, name: 'Quiche aux légumes', description: 'Une jolie quiche', created_date: '2021-03-22T16:37:32.531891+00:00', portion: 2, city_id: 30438, online: true, author_id: 2, picture_path: '1616431051769.jpg',
  },
  {
    id: 9, name: 'Pizza ', description: 'Pizza aux 4 fromages et basilic', created_date: '2021-03-21T14:28:51.349135+00:00', portion: 8, city_id: 30438, online: false, author_id: 3, picture_path: '1616336929554.jpg',
  },
  {
    id: 10, name: 'Cassolette de la mer', description: 'Poissons et fruits de mer à la crème fraîche', created_date: '2021-03-21T14:04:38.821835+00:00', portion: 2, city_id: 30438, online: false, author_id: 3, picture_path: '1616335472406.jpg',
  },
  {
    id: 11, name: 'Sushi', description: 'Assortiment de sushi faits maison', created_date: '2021-03-21T14:06:30.567102+00:00', portion: 2, city_id: 30438, online: true, author_id: 3, picture_path: '1616335588394.jpg',
  },
  {
    id: 12, name: 'Saumon grillé', description: 'Saumon grillé et petits légumes du soleil', created_date: '2021-03-21T14:09:42.984639+00:00', portion: 1, city_id: 30438, online: true, author_id: 3, picture_path: '1616335778834.jpg',
  },
  {
    id: 13, name: 'Cookie chocolat', description: 'Des bons petits cookies au chocolat', created_date: '2021-03-21T14:11:10.099527+00:00', portion: 5, city_id: 30438, online: true, author_id: 4, picture_path: '1616335866150.jpg',
  },
  {
    id: 14, name: 'Burger boeuf', description: 'Burger boeuf et frites maison', created_date: '2021-03-21T14:15:24.592161+00:00', portion: 1, city_id: 30438, online: true, author_id: 4, picture_path: '1616336124072.jpg',
  },
  {
    id: 15, name: 'Gateau triple chocolat', description: 'Part de gâteau triple chocolat ', created_date: '2021-03-21T14:23:27.527926+00:00', portion: 1, city_id: 30438, online: true, author_id: 4, picture_path: '1616336606713.jpg',
  },
  {
    id: 16, name: 'Lasagnes', description: 'La recette de ma grand mère ', created_date: '2021-03-21T14:31:53.143342+00:00', portion: 2, city_id: 30438, online: true, author_id: 4, picture_path: '1616337110205.jpg',
  },
  {
    id: 17, name: 'Spaghetti aux crevettes', description: 'Crevettes sautées et petits légumes', created_date: '2021-03-21T14:41:13.883937+00:00', portion: 1, city_id: 30438, online: true, author_id: 5, picture_path: '1616337669356.jpg',
  },
  {
    id: 18, name: 'Soupe Thaï au curry rouge', description: 'Soupe Thaï au lait de coco et curry rouge. Elle contient des nouilles, des raviolis frits au porc, des crevettes et des champignons shiitake', created_date: '2021-03-21T14:45:25.5597+00:00', portion: 1, city_id: 30438, online: true, author_id: 5, picture_path: '1616337925546.jpg',
  },
  {
    id: 19, name: 'Nouilles sautées au poulet', description: 'Attention, Plat hautement épicé !', created_date: '2021-03-21T14:45:26.366665+00:00', portion: 1, city_id: 30438, online: true, author_id: 5, picture_path: '1616337925584.jpg',
  },
  {
    id: 20, name: 'Curry thai', description: 'Un curry végétarien au lait de coco', created_date: '2021-03-21T14:49:01.243148+00:00', portion: 2, city_id: 30438, online: true, author_id: 5, picture_path: '1616338140016.jpg',
  },
  {
    id: 21, name: 'Raviolis vapeur au porc', description: 'Raviolis au porc fait maison', created_date: '2021-03-21T14:52:03.755723+00:00', portion: 2, city_id: 30438, online: true, author_id: 6, picture_path: '1616338323738.jpg',
  },
  {
    id: 22, name: 'Brochettes de poulet teriyaki ', description: 'Deux brochettes avec du riz', created_date: '2021-03-21T14:52:31.734658+00:00', portion: 1, city_id: 30438, online: true, author_id: 6, picture_path: '1616338350496.jpg',
  },
  {
    id: 23, name: 'Couscous ', description: 'Couscous à la merguez', created_date: '2021-03-21T08:55:41.777988+00:00', portion: 2, city_id: 30438, online: true, author_id: 6, picture_path: '1616318049356.jpg',
  },
  {
    id: 24, name: 'Burger italien', description: "Burger à l'italienne", created_date: '2021-03-21T15:14:01.463847+00:00', portion: 1, city_id: 30438, online: true, author_id: 6, picture_path: '1616339640119.jpg',
  },
  {
    id: 25, name: 'Bibimbap', description: 'Sur une base de riz on retrouve du bœuf hachée accompagné de ses légumes', created_date: '2021-03-21T14:20:27.547235+00:00', portion: 2, city_id: 30438, online: true, author_id: 7, picture_path: '1616336427472.jpg',
  },
  {
    id: 26, name: 'Brownie', description: 'Brownie au chocolat et pâte à tartiner', created_date: '2021-03-21T14:18:44.414701+00:00', portion: 3, city_id: 30438, online: true, author_id: 7, picture_path: '1616336323688.jpg',
  },
  {
    id: 27, name: 'Nems au porc', description: 'Nems croustillants fait maison', created_date: '2021-03-21T15:28:07.637254+00:00', portion: 2, city_id: 30438, online: true, author_id: 7, picture_path: '1616340487683.jpg',
  },
  {
    id: 28, name: 'Tartelette aux fraises', description: 'Petite tartelette à la fraise', created_date: '2021-03-21T15:29:21.70611+00:00', portion: 1, city_id: 30438, online: true, author_id: 7, picture_path: '1616340560011.jpg',
  },
  {
    id: 29, name: 'Riz cantonais', description: 'Un bon riz sauté Asiatique', created_date: '2021-03-21T15:32:37.953495+00:00', portion: 2, city_id: 30438, online: true, author_id: 8, picture_path: '1616340757967.jpg',
  },
  {
    id: 30, name: 'Buddha bowl', description: 'Sur une base de riz, du saumon accompagné de légumes', created_date: '2021-03-21T14:16:27.57632+00:00', portion: 1, city_id: 30438, online: true, author_id: 8, picture_path: '1616336187554.jpg',
  },
  {
    id: 31, name: 'Crêpes à la cannelle', description: 'Des crêpes à la cannelle ', created_date: '2021-03-21T15:37:41.273634+00:00', portion: 5, city_id: 30438, online: true, author_id: 8, picture_path: '1616341060226.jpg',
  },
  {
    id: 32, name: 'Sushi', description: "Sur une feuille d'algue roulée, saumon/thon, avocat, concombre et riz", created_date: '2021-03-21T15:45:05.813682+00:00', portion: 2, city_id: 30438, online: true, author_id: 8, picture_path: '1616341505813.jpg',
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('meal', seedMeals);

  if (process.env.NODE_ENV !== 'test') {
    await queryInterface.sequelize.query(`ALTER SEQUENCE meal_id_seq RESTART WITH ${seedMeals.length + 1}`);
  }

  seedMeals.forEach((meal) => {
    fs.copyFile(`${__dirname}/assets/${meal.picture_path}`, `${__dirname}/../../assets/${meal.picture_path}`, (err) => {
      if (err) throw err;
      console.log(`${meal.picture_path} was copied for meal ${meal.name}`);
    });
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('meal', { id: seedMeals.map((u) => u.id) });
}

module.exports = { up, down };
