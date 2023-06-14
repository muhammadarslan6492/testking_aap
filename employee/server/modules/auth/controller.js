import { AuthService } from './services';
import { User } from '../models/user';

const service = new AuthService(User);
class Controller {
  constructor() {
    this.service = service;
  }

  test(req, res) {
    try {
      return res.status(200).json({
        message: 'this is test api for check everythings is good to go',
      });
    } catch (error) {
      return res.status(500).json({ err: error.message });
    }
  }
}

export default new Controller();
