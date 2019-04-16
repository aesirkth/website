import React from "react";
import { WindowLocation } from "@reach/router";
import clsx from "clsx";

import { useSpring, animated, config } from "react-spring";

import styles from "./style.css";
import { NavbarLink } from "@components/navbarLink";
import { NavbarSocialIcons } from "./icons";
import { Column } from "@components/column";
import { useResting } from "@hooks/useResting";
import { useWindowScroll } from "@hooks/useWindowScroll";

const links = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/aesirkth/",
    icon: NavbarSocialIcons.Facebook
  },
  {
    title: "Facebook Messenger",
    link: "https://m.me/aesirkth/",
    icon: NavbarSocialIcons.Messenger
  },
  {
    title: "Instagram",
    link: "https://instagram.com/aesirkth/",
    icon: NavbarSocialIcons.Instagram
  },
  {
    title: "Twitter",
    link: "https://twitter.com/aesirkth/",
    icon: NavbarSocialIcons.Twitter
  },
  {
    title: "GitHub",
    link: "https://github.com/aesirkth/",
    icon: NavbarSocialIcons.GitHub
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/association-of-engineering-students-in-rocketry/about/",
    icon: NavbarSocialIcons.LinkedIn
  }
];

const parallaxDistance = 100;

const standardRowHeight = 48;
const transformOffset = 24;
const spaceHeight = transformOffset + standardRowHeight;

export const NavbarAntispace: React.FC = () => (
  <div style={{ marginTop: -spaceHeight }} className="navbar-antispace" />
);
export const NavbarSpace: React.FC = () => (
  <div style={{ height: spaceHeight }} className="navbar-space" />
);

const MemoNavbarLink = React.memo(NavbarLink);

export const Navbar: React.FC<{ location: WindowLocation }> = props => {
  const { resting, onRest, onStart } = useResting();

  const isPersistentlyTransformed = props.location.pathname !== "/";

  const [{ offset }, set] = useSpring(() => ({
    offset: isPersistentlyTransformed ? 1 : 0,
    config: {
      ...config.stiff
    },
    onRest,
    onStart
  }));

  useWindowScroll(
    !isPersistentlyTransformed,
    scroll => {
      if (isPersistentlyTransformed) {
        set({ offset: 1 });
        return;
      }
      set({
        offset: scroll / parallaxDistance
      });
    },
    0,
    parallaxDistance
  );

  const linksTransform = offset.interpolate((value: number) =>
    resting
      ? `translate(0, ${transformOffset * (1 - value)}px)`
      : `translate3d(0, ${transformOffset * (1 - value)}px, 0)`
  );
  const gradientOpacity = offset.interpolate((value: number) => value * 0.35);
  const helperTextOpacity = offset.interpolate((value: number) => Math.max(0.5, 1 - value));

  return (
    <>
      <nav className={styles.navbar}>
        <Column>
          <animated.div
            className={styles.flex}
            style={{
              transform: linksTransform,
              willChange: "transform"
            }}
          >
            <div
              className={clsx(styles.links, styles.socialMedia)}
              style={{
                height: standardRowHeight
              }}
            >
              <animated.div
                style={{
                  opacity: helperTextOpacity
                }}
                className={styles.followUs}
              >
                follow us
              </animated.div>
              {links.map(({ link, title, icon }) => (
                <MemoNavbarLink key={link} href={link} title={title} icon={icon} />
              ))}
            </div>
          </animated.div>
          <animated.div
            style={{
              opacity: gradientOpacity
            }}
            className={styles.gradient}
          />
        </Column>
      </nav>
      <NavbarSpace />
    </>
  );
};
