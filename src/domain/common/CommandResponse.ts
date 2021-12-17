export class CommandResponse {
  private readonly _isError: boolean;
  private readonly _reason: string;

  protected constructor(isError: boolean, reason: string) {
    this._isError = isError;
    this._reason = reason;
  }

  get isError(): boolean {
    return this._isError;
  }

  get isSuccess(): boolean {
    return !this._isError;
  }

  get reason(): string {
    return this._reason;
  }

  static success(): CommandResponse {
    return new CommandResponse(false, '');
  }

  static withError(error: string) {
    return new CommandResponse(true, error);
  }
}
