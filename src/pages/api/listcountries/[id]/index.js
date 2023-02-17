// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "@/data"

export default function handler(req, res) {
    const { id } = req.query
    const specificData = data.find(item => item.alpha3Code === id);
    res.status(200).json(specificData)
}