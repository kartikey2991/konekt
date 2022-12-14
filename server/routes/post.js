import express from 'express';
import formidable from 'express-formidable';

const router = express.Router();

// MIDDLEWARE
// import { requireSignin } from '../middlewares/auth';
import {
  createPost,
  uploadImage,
  postByUser,
  userPost,
  updatePost,
  deletePost,
  fashionFeed,
  likePost,
  unlikePost,
  addComment,
  removeComment,
  totalPosts,
  posts,
} from '../controllers/post';
import {
  requireSignin,
  canEditDeletePost,
  isAdmin,
} from '../middlewares/ss.js';

router.post('/create-post', requireSignin, createPost);
router.post(
  '/upload-image',
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

router.get('/user-posts', requireSignin, postByUser);
router.get('/user-post/:_id', requireSignin, userPost);
router.put('/update-post/:_id', requireSignin, canEditDeletePost, updatePost);
router.delete(
  '/delete-post/:_id',
  requireSignin,
  canEditDeletePost,
  deletePost
);

router.get('/fashion-feed/:page', requireSignin, fashionFeed);

router.put('/like-post', requireSignin, likePost);
router.put('/unlike-post', requireSignin, unlikePost);

router.put('/add-comment', requireSignin, addComment);
router.put('/remove-comment', requireSignin, removeComment);

router.get('/total-posts', totalPosts);

router.get('/posts', posts);

//admin
router.delete('/admin/delete-post/:_id', requireSignin, isAdmin, deletePost);
module.exports = router;
