import { CommandResponse } from "../common/CommandResponse";

export class PublishCommandResponse extends CommandResponse {
  static tooMuchText(): PublishCommandResponse {
    return new PublishCommandResponse(true, 'tweet length exceeded')
  }
}
