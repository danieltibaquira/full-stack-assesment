module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3f8baab47a9d87c182b25df594da399'),
  },
});
