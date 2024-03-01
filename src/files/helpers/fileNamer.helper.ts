/* eslint-disable @typescript-eslint/ban-types */
import { Request } from 'express';
import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  return callback(null, fileName);
};
