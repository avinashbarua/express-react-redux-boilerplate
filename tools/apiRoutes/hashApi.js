import express from 'express';
import HashTags from '../models/hashTags';

const router = express.Router();
const returnObj = [
  {
    hashTag: "KillThrump",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "fun",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "makevishalgreat",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "Rio2016",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "MTVHottest",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "gameinsight",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "android",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "iphone7",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "makeandroids",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  },
  {
    hashTag: "PushAwardsKathNiels",
    tweetNo: "234876",
    tweets: [
      "yes kill that nigga",
      "fuk me right",
      "fuck that guy"
    ]
  }

];

router.get('/fuck',(req, res) => {
  res.json(returnObj);
});

export default router;
