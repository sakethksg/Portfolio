'use client';
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import React from "react";
import { useState } from "react";
import DitherBackground from "@/components/DitherBackground";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting: formIsSubmitting, isDirty, isValid },
    reset,
    trigger
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    delayError: 300
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      // TODO: Replace with your own Web3Forms access key from https://web3forms.com
      // Sign up with ksgsaketh@gmail.com to get your access key
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setFormStatus("success");
        reset();
      } else {
        console.log("Error", responseData);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <DitherBackground />
      <main className="container mx-auto px-4 py-8 max-w-2xl mt-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p className="text-muted-foreground">
              Have a question or want to get in touch? Fill out the form below and
              I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-6">
          {formStatus === "success" && (
            <Alert className="bg-green-50 border-green-200 text-black">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Message Sent Successfully!</AlertTitle>
              <AlertDescription>
                Thank you for your message. I&apos;ll get back to you as soon as
                possible.
              </AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle>Something went wrong!</AlertTitle>
              <AlertDescription>
                There was a problem sending your message. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                {...register("name", {
                  onBlur: () => trigger("name")
                })}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                disabled={isSubmitting}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email", {
                  onBlur: () => trigger("email")
                })}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                disabled={isSubmitting}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                {...register("message", {
                  onBlur: () => trigger("message")
                })}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                disabled={isSubmitting}
                rows={5}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || (!isValid && isDirty)}
              className="w-full cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
    </>
  );
};

export default ContactPage;
