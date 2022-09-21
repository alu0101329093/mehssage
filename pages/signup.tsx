import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import type { NextPage } from 'next';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { FormEventHandler } from 'react';
import { firestoreConverter } from '../utils/firestoreConverter';

type UserInfo = {
  name: string;
};

const usersInfoRef = collection(getFirestore(), 'usersInfo').withConverter(
  firestoreConverter<UserInfo>()
);

const Signup: NextPage<unknown> = () => {
  const user = useAuthUser();
  const router = useRouter();
  const [newUser, setNewUser] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    const getUserInfo = async (id: string) => {
      const docRef = doc<UserInfo>(usersInfoRef, id);
      const docSnap = await getDoc<UserInfo>(docRef);

      if (docSnap.exists()) {
        await router.push('/');
      }
      setNewUser(true);
    };

    if (user.id) {
      console.log('searching');
      getUserInfo(user.id).catch(console.error);
    }
  }, [router, user.id]);

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const handler = async () => {
      if (user.id) {
        const usernamesQuery = query(
          usersInfoRef,
          where('name', '==', username)
        );
        const existingUsernames = await getDocs(usernamesQuery);

        if (existingUsernames.empty) {
          await setDoc(doc(usersInfoRef, user.id), {
            name: username,
          });
          await router.push('/');
        } else {
          setErrorMessage('Username already exist');
        }
      }
    };

    handler().catch(console.error);
  };

  if (newUser) {
    return (
      <form
        className="flex min-h-screen flex-col items-center justify-center py-2"
        onSubmit={onSubmit}
      >
        <label className="flex flex-col">
          Add username:
          <input
            type="text"
            className="rounded-md border-2 border-blue-400"
            onChange={(event) => {
              setUsername(event.target.value);
              setErrorMessage(undefined);
            }}
          />
        </label>
        {errorMessage && (
          <div className="font-bold text-red-600">Error: {errorMessage}</div>
        )}
        {!errorMessage && <div>&nbsp;</div>}
      </form>
    );
  }

  return <div />;
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Signup);
