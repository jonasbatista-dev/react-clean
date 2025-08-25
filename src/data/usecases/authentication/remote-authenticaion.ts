import { HttpPostClient } from 'data/protocols/http/http-post-client';
import { AuthenticationParans } from 'domain/usercases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}
  async auth(params: AuthenticationParans): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params });
    return Promise.resolve();
  }
}
