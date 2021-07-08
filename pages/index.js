import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className={styles.cardContent}>
      <img src="/icons/layout.svg" />
      <div>
        <h3>You're logged in!</h3>
        <p>
         Check your user profile here.
        </p>
      </div>
      <div className={styles.arrow}>
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up">
    <a className={styles.cardContent}>
      <img src="/icons/user-plus.svg" />
      <div>
        <h3>Sign up for an account</h3>
        <p>
          Sign up and sign in to explore all the resources to help you on your journey.
        </p>
      </div>
      <div className={styles.arrow}>
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

// Main component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Build a website quickly</h1>
    <p className={styles.description}>Kia maia, kia ita!</p>

    <div className={styles.cards}>
      <div className={styles.card}>
        <SignedIn>
          <ClerkFeatures />
        </SignedIn>
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </div>

    </div>

  </main>
);

// Footer component
const Footer = () => (
  <footer className={styles.footer}>
    ❤️
  </footer>
);

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>everydayMāori</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
    <Main />
    <Footer />
  </div>
);

export default Home;
