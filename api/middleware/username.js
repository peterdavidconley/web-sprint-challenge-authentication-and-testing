
const User = require('../auth/users-model')

const checkUsernameExists = async (req, res, next) => {
    
      try {
  
        const [user] = await User.findBy({ username: req.body.username })
        if (user) {
          next({
            status: 401,
            message: 'username taken'
          })
        } 
      } catch (err) {
        next(err)
      }
  
    }
    
    module.exports = {
        checkUsernameExists,
      }