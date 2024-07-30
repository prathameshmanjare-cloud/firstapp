import db from '../../../app/lib/db';

export default async (req, res) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const task = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [id]);
    res.status(200).json(task);
  } else if (req.method === 'PUT') {
    const { completed } = req.body;
    try {
      const task = await db.one('UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *', [completed, id]);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await db.none('DELETE FROM tasks WHERE id = $1', [id]);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
