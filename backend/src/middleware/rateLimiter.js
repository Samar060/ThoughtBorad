import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
try {
    // when we implement authentication in this we will pass user in ratelimit in place of my-rate-limit
    // it willfix rate limit per user not for all user
     const { success } = await ratelimit.limit("my-rate-limit");

      if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
   next();

} catch (error) {
    console.log("Rate limit error", error);
    next(error); 
}

}

export default rateLimiter;