"use client";
import React from "react";
import Image from "next/image";
import { Timeline, Text } from "@mantine/core";
import {
  GitBranch,
  GitPullRequest,
  GitCommit,
  MessageDots,
} from "tabler-icons-react";
import "./globals.css";

const timeline = () => {
  return (
    <div className="py-5">
      <Timeline
        color="red"
        active={2}
        lineWidth={1}
        bulletSize={12}
        align="left"
      >
        <Timeline.Item title="Penn State University" bulletSize={12}>
          <h1 className="font-bold font-serif text-red-950">2006</h1>
          <Text color="dimmed" size="md">
            Program: BS [IST]
            <div>
              <br />
              <Image
                src="/images/penn-state.png"
                width={300}
                height={300}
                alt="Penn State"
              />
              <br />
            </div>
            We began our journey in 2006 with <br />
            Pennsylvania State University introducing <br /> its first 2 + 2
            credit transfer program in BS <br /> [Information Sciences and
            Technology] to
            <br /> incorporate a compelling blend of national
            <br /> and international teaching methodologies
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Penn State University" bulletSize={12}>
          <h1 className="font-bold font-serif text-red-950">2006</h1>
          <Text color="dimmed" size="md">
            Program: BS [IST]
            <div>
              <br />
              <Image
                src="/images/penn-state.png"
                width={300}
                height={300}
                alt="Penn State"
              />
              <br />
            </div>
            We began our journey in 2006 with <br />
            Pennsylvania State University introducing <br /> its first 2 + 2
            credit transfer program in BS <br /> [Information Sciences and
            Technology] to
            <br /> incorporate a compelling blend of national
            <br /> and international teaching methodologies
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Penn State University" bulletSize={12}>
          <h1 className="font-bold font-serif text-red-950">2006</h1>
          <Text color="dimmed" size="md">
            Program: BS [IST]
            <div>
              <br />
              <Image
                src="/images/penn-state.png"
                width={300}
                height={300}
                alt="Penn State"
              />
              <br />
            </div>
            We began our journey in 2006 with <br />
            Pennsylvania State University introducing <br /> its first 2 + 2
            credit transfer program in BS <br /> [Information Sciences and
            Technology] to
            <br /> incorporate a compelling blend of national
            <br /> and international teaching methodologies
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default timeline;
