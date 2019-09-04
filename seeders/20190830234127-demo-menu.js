'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('menus', [
      {

        name: 'Bala-bala',
        image: 'https://img-global.cpcdn.com/003_recipes/4b3c43174cf1399d/751x532cq70/bakwan-sayur-rumahan-bala-bala-foto-resep-utama.jpg',
        categoryId: 1,
        price: 1000
      },
      {

        name: 'Cireng',
        image: 'https://cdn0-production-images-kly.akamaized.net/nt1SMK0h_B-gAW9a5KVzlD5YVsQ=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2551950/original/069517500_1545214506-cara-membuat-cireng.jpg',
        categoryId: 1,
        price: 5000
      },
      {

        name: 'Bakso',
        image: 'https://cdns.klimg.com/dream.co.id/resized/640x320/news/2019/08/12/114631/resep-kuah-bakso-mulai-dari-bakso-daging-hingga-ikan-190812e-rev190813.jpg',
        categoryId: 2,
        price: 10000
      },
      {
        name: 'Mie Ayam',
        image: 'https://cdn0-production-images-kly.akamaized.net/NKIRDU1GXjLIhYGUyhiQPVfg3zU=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2551953/original/026155800_1545214543-cara-membuat-mie-ayam.jpg',
        categoryId: 2,
        price: 8000
      },
      {

        name: 'Es Krim',
        image: 'https://cdn0-production-images-kly.akamaized.net/dmij2zgiikhnRkOHH-lVhHyzYa0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1527809/original/057949200_1488785693-es_krim_cokelat.jpg',
        categoryId: 3,
        price: 5000
      },
      {

        name: 'Bolu Kukus',
        image: 'https://cdn0-production-images-kly.akamaized.net/PeqGXqXy-QmEGaBoctSO8j90keA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1319780/original/075992800_1471370910-resepraktis.jpg',
        categoryId: 3,
        price: 5000
      },
      {

        name: 'Es Teh',
        image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/26/0/0_05966ea8-d50e-4cb4-a6c2-8c9dc84831a0_700_834.jpg',
        categoryId: 4,
        price: 3000
      },
      {

        name: 'Air Putih',
        image: 'https://i0.wp.com/tokopuas.com/wp-content/uploads/2017/12/glass-2875091_1280.jpg',
        categoryId: 4,
        price: 10000
      },
      {
        name: 'Nasi Goreng',
        image: 'https://i2.wp.com/eatwellabi.com/wp-content/uploads/2019/01/IMG_5172.jpg',
        categoryId: 2,
        price: 7000
      },
      {
        name: 'Ayam Bakar',
        image: 'https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-ayam-bakar-kecap.jpg',
        categoryId: 2,
        price: 10000
      },
      {
        name: 'Ayam Goreng',
        image: 'http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-terasi.jpg',
        categoryId: 2,
        price: 9000
      },
    ], {});

  },

  down: (queryInterface) => {

    return queryInterface.bulkDelete('menus', null, {});
  }
};
