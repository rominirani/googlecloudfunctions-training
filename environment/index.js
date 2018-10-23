/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloVersion = (req, res) => {
  let minVer = process.env.MIN_VER;
  let maxVer = process.env.MAX_VER;
  res.status(200).send("Function version:" + maxVer + "." + minVer);
};
