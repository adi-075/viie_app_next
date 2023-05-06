"use client";
import React from "react";
import Image from "next/image";
import VIIE from "../../VIIE-logo.png";
// Mantine Components
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Box,
  Checkbox,
} from "@mantine/core";

export default function Page() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength(
        { min: 6, max: 10 },
        "Password must be 6-10 characters long"
      ),
    },
  });

  return (
    <div class="flex items-center justify-center min-h-screen md:h-screen sm:bg-fixed bg-center bg-no-repeat bg-cover audi-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto mt-5 sm:mt-0 bg-slate-100 p-8 mx-border border-gray-300 shadow-xl">
            <div className="max-w-md w-16 mx-auto">
              <Image
                priority
                src={VIIE}
                alt="VIIE Picture"
                width={80}
                height={80}
              />
            </div>
            <div className="text-3xl font-bold text-gray-900 mt-4 text-center">
              Welcome Back
            </div>
            <div className="text-base text-gray-500 text-center">
              Please enter your details.
            </div>
            <Box
              component="form"
              maw={400}
              mx="auto"
              onSubmit={form.onSubmit(() => {})}
            >
              <br />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="someone@email.com"
                {...form.getInputProps("email")}
              />
              <br />
              <TextInput
                withAsterisk
                label="Password"
                placeholder="Password"
                {...form.getInputProps("password")}
              />
              <Checkbox
                mt="md"
                label="Remember Me"
                color="red"
                radius="xs"
                {...form.getInputProps("rememberMe", {
                  type: "checkbox",
                })}
              />
              <div className="flex justify-center items-center">
                <div>
                  <Group position="right" mt="md">
                    <Button
                      type="submit"
                      variant="light"
                      color="red"
                      uppercase
                      className="border border-red-400/50"
                    >
                      login
                    </Button>
                  </Group>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
