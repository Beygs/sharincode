import { useAtom } from "jotai";
import Link from "next/link";
import { showNewPostModalAtom, userAtom } from "store";
import { FSocietyMaskIcon, LampIcon, SignOutIcon } from "components/icons";
import { navItems, navItem, text, avatarContainer, avatar } from "../header.module.scss";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import NewPostModal from "components/NewPostModal";
import Image from "next/image";

const LoggedInNav = () => {
  const router = useRouter();
  const [showNewPostModal, setShowNewPostModal] = useAtom(showNewPostModalAtom);
  const [user, setUser] = useAtom(userAtom);

  const handleDisconnect = () => {
    Cookies.remove('token');
    setUser(null);
    router.push('/');
  }

  return (
    <>
      {showNewPostModal && <NewPostModal />}
      <ul className={navItems} role="navigation">
        <li>
          <button
            className={navItem}
            aria-label="Créer un nouveau snippet."
            onClick={() => setShowNewPostModal(true)}
          >
            <LampIcon />
            <span className={text}>Nouveau Snippet</span>
          </button>
        </li>
        <li>
          <Link href="#">
            <a className={navItem} aria-label="Accéder à la page de mon compte.">
              {user?.avatar
                ? (
                  <div className={avatarContainer}>
                    <Image
                      src={user.avatar}
                      width={48}
                      height={48}
                      alt=""
                      className={avatar}
                    />
                  </div>
                  )
                : <FSocietyMaskIcon />
              }
              <span className={text}>{user?.user.username}</span>
            </a>
          </Link>
        </li>
        <li>
          <button
            className={navItem}
            aria-label="Bouton de déconnexion"
            onClick={handleDisconnect}
          >
            <SignOutIcon />
            <span className={text}>Me déconnecter</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default LoggedInNav;
