import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        // Validate request body
        const { title } = req.body;

        if (!title || typeof title !== 'string') {
            return res.status(400).json({ error: 'Invalid input' });
        }

        try {
            const task = await prisma.task.create({
                data: { title }
            });
            return res.json(task);
        } catch (error) {
            console.error("Error creating task:", error);
            return res.status(500).json({ error: 'Failed to create task' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
