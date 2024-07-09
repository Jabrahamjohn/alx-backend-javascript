/**
 * Contains the miscellaneous route handlers.
 * @author Abraham john <https://github.com/jabrahamjohn>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;