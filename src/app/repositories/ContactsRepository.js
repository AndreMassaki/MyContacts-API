const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'André',
    email: 'andremassaki2004@gmail.com',
    phone: '+55 41 99655-1430',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
