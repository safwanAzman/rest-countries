// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "@/data"

export default function handler(req, res) {
    const { id } = req.query
    const specificData = data.find(da => da.name === id);
    res.status(200).json(specificData)
}