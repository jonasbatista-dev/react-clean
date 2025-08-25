import { RemoteAuthentication } from './remote-authenticaion';
import { HttpPostClientSpy } from '../../test/mock-http-client';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};
const makeSut = (url: string = 'http://any-url.com'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'http://any-url.com';
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
