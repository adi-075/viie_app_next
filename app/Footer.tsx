"use client";
import React from "react";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import Link from "next/link";
import Image from "next/image";
import viie from "../VIIE-logo.png";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], weight: "700" });

function Footer() {
  return (
    <div className="bottom-0 w-full h-10">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image src={viie} width={60} height={60} alt="VIIE Logo" />
            <div className={inter.className}>
              <h1 className="px-2 mt-2 uppercase">
                Vidyalankar Institute for <br /> International Education
              </h1>
            </div>
          </div>
          <div>
            <Text color="dark" size="sm">
              <br />© 2023 VIIE. All rights reserved.
            </Text>
          </div>
          <div>
            <a href="mailto:enquiry@viie.edu.in">
              <h1>{""}Email:enquiry@viie.edu.in</h1>
            </a>
          </div>
          <div>
            <a href="tel:+918591942613">
              <h1>{""}Contact: +91 8591942613</h1>
            </a>
          </div>
        </div>

        <Group spacing={0} position="right" noWrap>
          <ul className="flex flex-row">
            <li>
              <Link href="https://www.facebook.com/vidyalankar.VIIE">
                <ActionIcon size="lg">
                  <IconBrandFacebook size="1.05rem" stroke={1.5} />
                </ActionIcon>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/viie_college/">
                <ActionIcon size="lg">
                  <IconBrandInstagram size="1.05rem" stroke={1.5} />
                </ActionIcon>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UC7uXjF2S24FJQQgAvFqKBBA">
                <ActionIcon size="lg">
                  <IconBrandYoutube size="1.05rem" stroke={1.5} />
                </ActionIcon>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/vidyalankar-institute-for-international-education">
                <ActionIcon size="lg">
                  <IconBrandLinkedin size="1.05rem" stroke={1.5} />
                </ActionIcon>
              </Link>
            </li>
          </ul>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
