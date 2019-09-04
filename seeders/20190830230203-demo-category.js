'use strict';

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('categories', [ {
   
    name : 'Cemilan'
},
{
 
    name : 'Makanan Utama'
},
{
    name : 'Makanan Penutup'
},
{
    name : 'Minuman'
},], {});
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('categories', null, {});
  
  }
};
