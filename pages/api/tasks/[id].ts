import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            const deletedTask = await prisma.task.delete({
                where: { id: Number(id) },
            });
            return res.json(deletedTask);
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete the task." });
        }
    }

    res.status(405).end(); // Method Not Allowed
}
