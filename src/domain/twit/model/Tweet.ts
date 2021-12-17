class TweetBuilder {
  private readonly _tweet: Tweet;

  constructor() {
    this._tweet = {
      text: "",
      user: "",
    }
  }

  withText(text: string): TweetBuilder {
    this._tweet.text = text;
    return this;
  }

  withUser(user: string): TweetBuilder {
    this._tweet.user = user;
    return this;
  }

  build(): Tweet {
    return this._tweet;
  }
}

export class Tweet {
  text: string;
  user: string;

  public static builder(): TweetBuilder {
    return new TweetBuilder();
  }

}
