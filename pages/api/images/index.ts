import {PrismaClient} from '@prisma/client';
import type {NextApiRequest, NextApiResponse} from 'next'
import nc, { NextHandler } from 'next-connect'
import {ncOptions} from "../../../app/common/utils/middleware/ncOptions";
import validate from "../../../app/common/utils/middleware/validation"
import Joi from "joi"
import {Image} from "../../../app/common/types/Image";


const prisma = new PrismaClient()

const schema = Joi.object({
  imageURL: Joi.string().uri().required(),
  label: Joi.string().required()
})

export default nc<NextApiRequest, NextApiResponse>(ncOptions)
  .get(async (req, res) => {
    const images = await prisma.image.findMany();
    return res.status(200).json(images)
  })
  .post(validate({body: schema}), async (req, res) => {
    const {imageURL, label} = req.body

    const newImage: Image = await prisma.image.create({
      data: {
          imageURL,
          label
        }
    })
    return res.status(201).json(newImage)
  })
