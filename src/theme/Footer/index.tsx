import React from 'react';
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '../../components/sections/footer-with-newsletter-form-categories-and-social-icons';
import { GitHubIcon } from '../../components/icons/social/github-icon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const currentYear = new Date().getFullYear();

  return (
    <FooterWithNewsletterFormCategoriesAndSocialIcons
      id="footer"
      className="bg-white dark:bg-black"
      cta={
        <NewsletterForm
          headline="Maradj képben"
          subheadline={
            <p>
              Iratkozz fel hírlevelünkre, hogy megkapd a legfrissebb tippeket, termékfrissítéseket és ügyféltörténeteket.
            </p>
          }
          action="#"
        />
      }
      links={
        <>
          <FooterCategory title="Navigáció">
            <FooterLink href="/kozosseg">Közösség</FooterLink>
            <FooterLink href="/rend">Rend oldal</FooterLink>
            <FooterLink href="/ebook">E-book</FooterLink>
          </FooterCategory>
          <FooterCategory title="Akadémia">
            <FooterLink href="/akademia">Akadémia főoldal</FooterLink>
            <FooterLink href="/akademia/esemenyek">Események</FooterLink>
          </FooterCategory>
          <FooterCategory title="Segítség">
            <FooterLink href="#">Gyakori kérdések</FooterLink>
            <FooterLink href="#">Kapcsolat</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={`© ${currentYear} identiGO. Minden jog fenntartva.`}
      socialLinks={
        <>
          <SocialLink href="https://github.com/identigo/identigo-docosaurus" name="GitHub">
            <GitHubIcon />
          </SocialLink>
        </>
      }
    />
  );
}
