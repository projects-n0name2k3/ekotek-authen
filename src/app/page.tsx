"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { VerificationModal } from "@/components/verification-modal";
import IconEkotek from "@/assets/svg/Logo";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <IconEkotek className="h-6 w-6 text-primary" />
            <span className="font-sans text-xl font-semibold">Ekotek</span>
          </motion.div>
        </div>
      </header>

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
              Authenticate Designer Bags
              <span className="block text-primary">Instantly</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl">
              Upload photos of your luxury handbags and get instant authenticity
              verification powered by advanced AI. Detect fake designer bags
              from Louis Vuitton, Chanel, Hermès, Gucci, and more with
              professional accuracy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Authenticate My Bag
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-sans text-3xl font-bold md:text-4xl">
              Authenticity Confidence Levels
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI analyzes stitching, materials, hardware, and craftsmanship
              details
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "90-100% Authentic",
                description:
                  "High confidence authentic designer bag. All authenticity markers verified including stitching quality, hardware, leather grain, and serial numbers.",
                color: "text-success",
                bgColor: "bg-success/10",
              },
              {
                icon: AlertTriangle,
                title: "70-89% Uncertain",
                description:
                  "Moderate confidence level. Some authenticity markers detected but requires expert review for final authentication due to wear or photo quality.",
                color: "text-warning",
                bgColor: "bg-warning/10",
              },
              {
                icon: XCircle,
                title: "<70% Fake",
                description:
                  "Low confidence in authenticity. Multiple red flags detected in craftsmanship, materials, or branding indicating likely counterfeit bag.",
                color: "text-destructive",
                bgColor: "bg-destructive/10",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="mb-3 font-sans text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-12 text-center"
          >
            <div className="relative z-10">
              <h2 className="mb-4 font-sans text-3xl font-bold md:text-4xl">
                Authenticate Your Designer Bag
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Upload clear photos of your luxury handbag and get professional
                authentication results in seconds
              </p>
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="h-14 px-8 text-lg font-semibold"
              >
                Start Authentication
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Ekotek. All rights reserved.</p>
        </div>
      </footer>

      <VerificationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
