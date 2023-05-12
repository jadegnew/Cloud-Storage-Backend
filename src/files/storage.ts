import { diskStorage } from "multer";
import { v4 as uuidv4 } from 'uuid';
const generateId = () => {
  return uuidv4();
}

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExtName}`);
}

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
})