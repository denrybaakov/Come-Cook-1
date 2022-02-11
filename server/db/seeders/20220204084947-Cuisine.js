module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cuisines', [{
      name: 'Британская кухня',
      img: '../../../client/src/styles/img/british.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Американская кухня',
      img: '../../../client/src/images/cuisineImages/american.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Мексиканская кухня',
      img: '../../../client/src/images/cuisineImages/mexican.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Армянская кухня',
      img: '../../../client/src/simages/cuisineImages/armenian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Турецкая кухня',
      img: '../../../client/src/images/cuisineImages/turkish.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Арабская кухня',
      img: '../../../client/src/images/cuisineImages/arabic.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Греческая кухня',
      img: '../../../client/src/images/cuisineImages/greek.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Средиземноморская кухня',
      img: '../../../client/src/images/cuisineImages/mediterranean.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Итальянская кухня',
      img: '../../../client/src/images/cuisineImages/italian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Испанская кухня',
      img: '../../../client/src/images/cuisineImages/spain.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Французская кухня',
      img: '../../../client/src/images/cuisineImages/french.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Немецкая кухня',
      img: '../../../client/src/images/cuisineImages/german.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Грузинская кухня',
      img: '../../../client/src/images/cuisineImages/georgian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Кавказская кухня',
      img: '../../../client/src/images/cuisineImages/caucasus.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Корейская кухня',
      img: '../../../client/src/images/cuisineImages/korean.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Японская кухня',
      img: '../../../client/src/images/cuisineImages/japan.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Китайская кухня',
      img: '../../../client/src/images/cuisineImages/china.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Тайская кухня',
      img: '../../../client/src/images/cuisineImages/thai.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гонконгская кухня',
      img: '../../../client/src/images/cuisineImages/hongkong.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Вьетнамская кухня',
      img: '../../../client/src/images/cuisineImages/vietnam.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Азиатская кухня',
      img: '../../../client/src/images/cuisineImages/asian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Индийская кухня',
      img: '../../../client/src/images/cuisineImages/indian.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Украиснкая кухня',
      img: '../../../client/src/simages/cuisineImages/ukrain.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Белоруская кухня',
      img: '../../../client/src/images/cuisineImages/belorus.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Русская кухня',
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
