import { handleErrors } from "./handleErrors.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyId } from "./verifyId.middlewares";

export default { handleErrors, validateBody, verifyId };