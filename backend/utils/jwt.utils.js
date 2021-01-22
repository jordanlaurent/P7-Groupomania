var jwt = require('jsonwebtoken');

 const JWT_SIGN_SECRET = '937lFnkOtWe5E9jBfDkLm764kgdp'

module.exports = {
    generateTokenForUser: function(userData){
      return jwt.sign({
          userId: userData.id,
          isAdmin: userData.isAdmin
      },
      JWT_SIGN_SECRET,
      {
          expiresIn: '1h'
      })  
    }
}