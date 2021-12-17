import { Tweet } from "./model/Tweet";
import { PublishTweetRepository } from "./repository/PublishTweetRepository";
import { PublishTweetCommand } from "./PublishTweetCommand";
import { PublishCommandResponse } from "./PublishCommandResponse";

export class PublishTweetCommandHandler {
  constructor(
    private publishTweetRepository: PublishTweetRepository
  ) {}

  private readonly maxTweetTextLength = 280;

  async execute(publishTweetCommand: PublishTweetCommand): Promise<PublishCommandResponse> {

    if (this.tweetExceedsTextLength(publishTweetCommand)) {
      return Promise.reject(PublishCommandResponse.tooMuchText())
    }

    const tweet: Tweet = Tweet.builder()
      .withText(publishTweetCommand.text)
      .withUser(publishTweetCommand.user)
      .build();

    await this.publishTweetRepository.execute(tweet);

    return Promise.resolve(PublishCommandResponse.success());
  }

  private tweetExceedsTextLength(publishTweetCommand: PublishTweetCommand) {
    return publishTweetCommand.text.length > this.maxTweetTextLength;
  }
}


