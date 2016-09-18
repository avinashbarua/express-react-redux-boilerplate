import express from 'express';
import HashTags from '../models/hashTags';
import returnObj from './mock_api';

const router = express.Router();

router.get('/fuck',(req, res) => {
  res.json(returnObj);
});

export default router;
