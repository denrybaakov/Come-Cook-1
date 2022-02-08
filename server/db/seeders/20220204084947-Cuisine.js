module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cuisines', [{
      name: 'britishCuisine',
      img: '../../../client/src/styles/img/british.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'americanCuisine',
      img: '../../../client/src/images/cuisineImages/american.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'mexicanCuisine',
      img: '../../../client/src/images/cuisineImages/mexican.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'armenianCuisine',
      img: '../../../client/src/simages/cuisineImages/armenian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'turkishCuisine',
      img: '../../../client/src/images/cuisineImages/turkish.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'arabicCuisine',
      img: '../../../client/src/images/cuisineImages/arabic.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'greekCuisine',
      img: '../../../client/src/images/cuisineImages/greek.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'mediterraneanCuisine',
      img: '../../../client/src/images/cuisineImages/mediterranean.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'italianCuisine',
      img: '../../../client/src/images/cuisineImages/italian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'spainCuisine',
      img: '../../../client/src/images/cuisineImages/spain.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'frenchCuisine',
      img: '../../../client/src/images/cuisineImages/french.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'germanCuisine',
      img: '../../../client/src/images/cuisineImages/german.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'georgianCuisine',
      img: '../../../client/src/images/cuisineImages/georgian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'caucasusCuisine',
      img: '../../../client/src/images/cuisineImages/caucasus.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'koreanCuisine',
      img: '../../../client/src/images/cuisineImages/korean.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'japanCuisine',
      img: '../../../client/src/images/cuisineImages/japan.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'chinaCuisine',
      img: '../../../client/src/images/cuisineImages/china.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'thaiCuisine',
      img: '../../../client/src/images/cuisineImages/thai.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'hongkongCuisine',
      img: '../../../client/src/images/cuisineImages/hongkong.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'vietnamCuisine',
      img: '../../../client/src/images/cuisineImages/vietnam.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'asianCuisine',
      img: '../../../client/src/images/cuisineImages/asian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'indianCuisine',
      img: '../../../client/src/images/cuisineImages/indian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'ukrainCuisine',
      img: '../../../client/src/simages/cuisineImages/ukrain.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'belorusCuisine',
      img: '../../../client/src/images/cuisineImages/belorus.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'russianCuisine',
      img: '../../../client/src/images/cuisineImages/russian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cuisine', null, {});
  }
};


//1 Британская
//2 Американская
//3 Мексиканская
//4 Армянская
//5 Турецкая
//6 Арабская 
//7 Греческая
//8 Средиземноморская
//9 Итальянская
//10 Испанская
//11 Французкая
//12 Немецкая
//13 грузиснкая
//14 кавказкая
//15 корейская
//16 японская
//17 китайская
//18 тайская
//19 Гонк-Конк
//20 Вьетнам
//21 Азия
//22 Индийская
//23 Русская
//24 Белоруская
//25 Украинская
