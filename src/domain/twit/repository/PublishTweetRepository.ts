import { Tweet } from "../model/Tweet";

export interface PublishTweetRepository {
  execute(tweet: Tweet);
}
