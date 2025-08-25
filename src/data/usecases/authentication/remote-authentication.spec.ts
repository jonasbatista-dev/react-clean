import { RemoteAuthentication } from './remote-authenticaion';
import { HttpPostClientSpy } from '../../test/mock-http-client';

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'http://example.com/api/auth';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
