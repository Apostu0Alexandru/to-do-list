import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
    if (req.method === 'GET') {
        const tasks = await prisma.task.findMany();
        return res.json(tasks);
    }

    res.status(405).end();
}

