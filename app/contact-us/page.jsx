"use client";
import React from "react";
import { useState } from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import { Button, Overlay, Image, AspectRatio } from "@mantine/core";

export default function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="h-screen max-w-screen">
      <Box maw={2500} h={1600}>
        <br />
        <div className="h-full flex flex-col items-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-black font-serif">
              Find Us
            </h1>
          </div>
          <div className="py-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.824229775793!2d72.8708856!3d19.0216579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf699771b8df%3A0x3f49b4a04fc3d68c!2sVIIE%20-%20Vidyalankar%20Institute%20for%20International%20Education!5e0!3m2!1sen!2sin!4v1683522104941!5m2!1sen!2sin"
              title="Google map"
              frameBorder="0"
              width="900"
              height="450"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
