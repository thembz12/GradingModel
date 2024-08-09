const express = require(`express`)
const { studentSignUp } = require("../controller/studentController")
const upload = require("../utils/multer")
const { signUp, loginUser, verifyEmail, resendVerificationEmail, forgotPassword, changePassword, resetPassword, getOne, getAll, makeAdmin, deleteUser, updateScore, deleteStudent, logOut } = require("../controller/userController")
const { authorize, isAdmin } = require("../middleware/auth")
const router = express.Router()


router.post(`/user-signup`, upload.single('profilePicture'), signUp)

router.post(`/log-in`, loginUser)

router.get(`/verify/:token`, verifyEmail)

router.post(`/resend-verification`, resendVerificationEmail)

router.post(`/forgot-password`, forgotPassword)

router.post(`/change-password/:token`, changePassword)

router.post(`/reset-password/:token`, resetPassword)

router.put(`/update-score/:studentID`, authorize, updateScore)

router.get(`/getone/:studentID`, authorize, getOne)

router.get(`/getall`, authorize, getAll)

router.get(`/make-admin/:userId`, isAdmin, makeAdmin)

router.delete(`/delete-user/:userId`, isAdmin, deleteUser)

router.delete(`/delete-student/:userId`, isAdmin, deleteStudent)

router.post(`/log-out`, logOut)

module.exports = router