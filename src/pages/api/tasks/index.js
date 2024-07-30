// pages/api/tasks/index.js
import db from '../../../app/lib/db';


export default async (req, res) => {
  if (req.method === 'GET') {
    const tasks = await db.any('SELECT * FROM tasks');
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { title } = req.body;
    const task = await db.one('INSERT INTO tasks(title) VALUES($1) RETURNING *', [title]);
    res.status(201).json(task);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
