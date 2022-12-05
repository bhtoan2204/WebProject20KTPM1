const db = require('../../db');

exports.getAll = async () => {
    const result = await db.connection.execute('select * from books');
    return result[0];
}

exports.getNewest = async () => {
    const result = await db.connection.execute('SELECT * FROM books ORDER BY release_year asc limit 4');
    return result[0];
}

exports.filter = async (name, cat, sort) => {
    if (cat!='All'){
        const result = await db.connection.execute("select * from books b, book_type bt, categories c where b.id_books = bt.id_books and bt.id_categories = c.id_categories and b.name like ? and c.name_categories = ?", [`%${name}%`, `${cat}`]);
        return result[0];
    }
}

exports.get = async (id) => {
    const result =  await db.connection.execute('select * from books where id_books = ?', [id]);
    return result[0][0];
  }

