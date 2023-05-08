"use client";
import { useState } from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import { Button, Overlay, Image, AspectRatio } from "@mantine/core";

export default function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <Box maw={2500} h={1600}>
      <AspectRatio ratio={5} mx="auto">
        <BackgroundImage src="https://images.unsplash.com/photo-1544931170-3ca1337cce88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
          <Center p="lg">
            <Text color="#fff" weight={800} size={60}>
              <br />
              Blogs and Events
              <br />
              <br />
            </Text>
          </Center>
        </BackgroundImage>
      </AspectRatio>
    </Box>
  );
}
