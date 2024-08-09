const express = require(`express`)
const { studentSignUp, loginUser, verifyEmail, resendVerificationEmail, forgotPassword, changePassword, resetPassword, getOne, logOut } = require("../controller/studentController")
const upload = require("../utils/multer")
const router = express.Router()

router.post(`/student-signup`,upload.single("profilePicture"), studentSignUp)

router.post(`/log-in`, loginUser)

router.get(`/verify/student/:token`, verifyEmail)

router.post(`/resend-verification/student`, resendVerificationEmail)

router.post(`/forgot-password/student`, forgotPassword)

router.post(`/change-password/student/:token`, changePassword)

router.post(`/reset-password/student/:token`, resetPassword)

router.get(`/student-profile/:studentID`, getOne)

router.post(`/log-out`, logOut)

module.exports = router