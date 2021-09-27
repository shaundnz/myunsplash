import {NextApiRequest, NextApiResponse} from "next";

export const ncOptions = {
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => res.status(405).send({
    message: `Method ${req.method} Not Allowed`,
  }),

  onError: (err: any, req: NextApiRequest, res:NextApiResponse) => res.status(500).send({
    message: `Unexpected error.`,
    error: err.toString()
  })
}