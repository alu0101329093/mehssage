import type { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import Head from 'next/head';
import InputButton from '../components/InputButton';

const Home: NextPage<unknown> = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Mehssage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="absolute flex h-full w-full flex-1 flex-col items-center justify-center text-center">
      <div className="h-20 w-full bg-black text-white">Info</div>
      <div className="h-full w-full bg-blue-300">Mensajes</div>
      <div className="flex h-20 w-full justify-center bg-blue-400 p-1">
        <input type="text" className="flex h-full flex-1 rounded-full px-5" />
        <InputButton className="ml-1 h-full fill-blue-500" />
      </div>
    </main>
  </div>
);

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
