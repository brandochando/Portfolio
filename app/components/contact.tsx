"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const serviceID = "service_q0pw3tf";
      const templateID = "template_qijg2my";
      const userID = "b0iZZGUFgP2azKkad";

      const result = await emailjs.send(serviceID, templateID, values, userID);
      console.log("Email sent!", result.text);
      alert("Email Sent!");
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  }

  return (
    <section className="relative overflow-hidden py-40">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
            CONTACT ME
          </h2>
          <p className="mb-8 text-gray-400"></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
                        placeholder="Your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about..."
                        className="min-h-[120px] text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const x = i * 2; // x coordinate (in percentage)
          const delay = (Math.min(x, 100 - x) / 50) * 2.5;
          return (
            <div
              key={i}
              className="wave-line"
              style={{ left: `${x}%`, animationDelay: `${delay}s` }}
            />
          );
        })}
        <style jsx>{`
          .wave-line {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 1px;
            background: linear-gradient(
              to bottom,
              transparent,
              white,
              transparent
            );
            opacity: 0;
            animation: wave 4s infinite;
          }
          @keyframes wave {
            0%,
            10%,
            90%,
            100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
