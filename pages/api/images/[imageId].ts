import nc from "next-connect";
import {NextApiRequest, NextApiResponse} from "next";
import {ncOptions} from "../../../app/common/utils/middleware/ncOptions";
import Joi from 'joi'
import validate from "../../../app/common/utils/middleware/validation"
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const deleteSchema = Joi.object({
  imageId: Joi.number().required()
})

export default  nc<NextApiRequest, NextApiResponse>(ncOptions)
  .delete(validate({query: deleteSchema}), async (req, res) => {
    const imageId = parseInt(req.query.imageId as string, 10)

    const image = await prisma.image.findUnique({
      where: {
        id: imageId
      }
    })

    if (image == null) {
      return res.status(404).end()
    }

    await prisma.image.delete({
      where: {
        id: image.id
      }
    })

    return res.status(204).end()
  })