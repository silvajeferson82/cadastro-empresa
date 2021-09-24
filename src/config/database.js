require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
}


// module.exports = {
//   dialect: 'postgres',
//   host: process.env.DB_PG_HOST,
//   username: process.env.DB_PG_USER,
//   password: process.env.DB_PG_PASSWORD,
//   database: process.env.DB_PG_NAME,
//   define: {
//     timestamps: true,
//     underscored: true,
//   },
// }