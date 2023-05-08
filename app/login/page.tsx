"use client";
import React from "react";
import { Popover } from "@mantine/core";
import Image from "next/image";
import VIIE from "../../VIIE-logo.png";
import { useState } from "react";
// Mantine Components
import { useForm, isEmail } from "@mantine/form";
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Box,
  Checkbox,
} from "@mantine/core";
import { Progress, PasswordInput, Text, Center } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";

export default function Page() {
  const form = useForm({
    initialValues: {
      email: "",
      rememberMe: false,
    },
    // functions will be used to validate values at corresponding key
    validate: {
      email: isEmail("Invalid email"),
    },
  });

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useInputState("");
  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={
          value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  return (
    <div className="flex items-center justify-center min-h-screen md:h-screen sm:bg-fixed bg-center bg-no-repeat bg-cover audi-img">
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
              <Popover
                opened={popoverOpened}
                position="bottom"
                width="target"
                transitionProps={{ transition: "pop" }}
              >
                <Popover.Target>
                  <div
                    onFocusCapture={() => setPopoverOpened(true)}
                    onBlurCapture={() => setPopoverOpened(false)}
                  >
                    <PasswordInput
                      withAsterisk
                      label="Your password"
                      placeholder="Your password"
                      value={value}
                      onChange={(event) => setValue(event.currentTarget.value)}
                    />
                  </div>
                </Popover.Target>
                <Popover.Dropdown>
                  <Progress color={color} value={strength} size={5} mb="xs" />
                  <PasswordRequirement
                    label="Includes at least 6 characters"
                    meets={value.length > 5}
                  />
                  {checks}
                </Popover.Dropdown>
              </Popover>
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

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IconCheck size="0.9rem" stroke={1.5} />
        ) : (
          <IconX size="0.9rem" stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}
