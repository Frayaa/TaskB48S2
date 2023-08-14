import { NextFunction, Request, Response } from "express"
import * as multer from "multer"

export const upload = (fieldName: string) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/")
    },
    filename: (req, file, cb) => {
      const uniqeSuffix = Date.now()
      cb(null, file.fieldname + "-" + uniqeSuffix + ".png")
    },
  })

  const uploadFile = multer({ storage: storage })

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(fieldName)(req, res, function (err) {
      if (err) {
        return res.status(400).json(err)
      }
      res.locals.filename = req.file.filename
      next()
    })
  }
}
