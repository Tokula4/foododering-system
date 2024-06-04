import { NextFunction ,Request,Response} from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async(req: Request, res: Response , next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next()

}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a String"),
    body("RoomNumber").isInt().notEmpty().withMessage("RoomNumber Must be a number"),
    body("Hostel").isString().notEmpty().withMessage("Must Input Hostel "),

    handleValidationErrors,

]