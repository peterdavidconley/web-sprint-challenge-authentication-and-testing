exports.seed = function(knex, Promise) {

    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: 'Admin', password: '1234' },
        ]);
      });
  };