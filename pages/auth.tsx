import { GoogleAuthProvider, getAuth, EmailAuthProvider } from 'firebase/auth';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { useEffect } from 'react';
import 'firebaseui/dist/firebaseui.css';

const Auth = () => {
  useEffect(() => {
    const loadFirebaseUi = async () => {
      const firebaseui = await import('firebaseui');

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(getAuth());
      ui.start('.firebase-auth-container', {
        popupMode: true,
        signInOptions: [
          {
            provider: GoogleAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
          },
          {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
          },
        ],
        signInSuccessUrl: '/',
        credentialHelper: 'none',
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        },
      });
    };

    loadFirebaseUi().catch(console.error);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="firebase-auth-container" />
      }
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth);
