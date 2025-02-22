"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import { Card, CardContent } from "@/components/ui/card";
import { SocialProofLogo } from "@/components/social-proof-logo";
import { Grainify } from "@/components/grainify";
import { Gradient } from "@/components/gradient";
import { Badge2 } from "@/components/badge";
import { SocialProofLogo2 } from "@/components/social-proof-logo2";

export function Section() {
  return (
    <main className="container space-y-4 p-4">
      <header className="container flex items-center justify-between gap-10 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            alt="Image"
            src="/images/talentlayer-icon.png"
            width={500}
            height={500}
            className="size-12"
          />
        </Link>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center justify-end gap-10 md:flex">
            <NavItem href="#projects" label="our projects" />
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild>
              <Link href="https://x.com/talentlayer" target="_blank" className="cursor-pointer">
                follow on X
              </Link>
            </Button>
          </div>
        </div>
        <MobileNavbar>
          <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              <MobileNavItem href="#projects" label="view all projects" />
              <MobileNavItem href="https://theintern.fun/" label="TheIntern" />
              <MobileNavItem href="https://traiders.fun/" label="Traiders.fun" />
              <MobileNavItem href="https://www.elyr.ai/" label="Elyrai" />
              <Button asChild>
                <Link href="https://x.com/talentlayer" target="_blank" className="cursor-pointer">
                  follow on X
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbar>
      </header>
      <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
        <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
          <div className="hidden cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 text-white hover:bg-secondary/60 md:flex">
            <span className="text-sm text-white">your friendly neighborhood raccoons</span>
            <ArrowRight size={16} />
          </div>
          <Image alt="Image" src="/images/talentlayer-logo-light.png" width={500} height={500} />
          <h1 className="text-1xl max-w-2xl text-center font-heading font-semibold tracking-tight sm:text-4xl lg:text-left">
            web 3 x ai developer collective
          </h1>
          <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
            {" "}
            building protocols and apps together since 2022
          </p>
          <form className="flex flex-col gap-2 text-center sm:flex-row">
            <Button size="lg" asChild className="cursor-pointer text-base">
              <Link href="https://x.com/talentlayer" target="_blank">
                follow our work
              </Link>
            </Button>
          </form>
        </div>
        <div className="relative flex-1">
          <Image
            alt="SaaS Dashboard"
            src="/images/skewskew.png"
            width={1000}
            height={698}
            priority
          />
          <div className="bt-secondary/20 absolute inset-0 -z-10 [filter:blur(180px)]" />
        </div>
      </section>
      <section id="projects" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <span className="text-center font-bold uppercase text-primary">portfolio</span>
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            our projects
          </h2>
        </div>
        <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
          our main focus is on these core projects
        </p>
        <motion.div className="columns-1 sm:columns-3">
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="relative h-60">
                <Image
                  alt="Image"
                  src="/images/theintern-icon.png"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-none tracking-tight">
                The Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                Your AI marketing intern. Create an Intern to write tweets, reply to trending posts,
                and engage with your brand.
              </p>
              {/* <div className="flex gap-2">
                <Button asChild>
                  <Link href="https://theintern.fun/" target="_blank" rel="noopener noreferrer">
                    learn more
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://x.com/theinterndotfun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="mr-2 size-4" />
                    follow
                  </Link>
                </Button>
              </div> */}
            </CardContent>
          </Card>
          <Card className="mt-5 rounded-lg border bg-card text-card-foreground shadow-sm">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="relative h-60">
                <Image
                  alt="Image"
                  src="/images/traiders-logo-colors.png"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-none tracking-tight">
                Traiders.fun
              </h3>
              <p className="text-sm text-muted-foreground">
                the global leaderboard for on-chain trading agents. compete to rank your agent and
                earn cash rewards.
              </p>
              {/* <div className="flex gap-2">
                <Button asChild>
                  <Link href="https://traiders.fun/" target="_blank" rel="noopener noreferrer">
                    learn more
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://x.com/traidersdotfun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="mr-2 size-4" />
                    follow
                  </Link>
                </Button>
              </div> */}
            </CardContent>
          </Card>
          <Card className="mt-5 rounded-lg border bg-card text-card-foreground shadow-sm">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="relative h-60">
                <Image
                  alt="Image"
                  src="/images/adfaadfsdfafdadf.png"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-none tracking-tight">Elyrai AI</h3>
              <p className="text-sm text-muted-foreground">
                a fully autonomous trading agent, live on Solana mainnet. Elyrai tweets trading
                alpha and makes trades for you.
              </p>
              {/* <div className="flex gap-2">
                <Button asChild>
                  <Link href="https://www.elyr.ai/" target="_blank" rel="noopener noreferrer">
                    learn more
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://x.com/ElyraiAgent" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 size-4" />
                    follow
                  </Link>
                </Button>
              </div> */}
            </CardContent>
          </Card>
        </motion.div>
        <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
          built in collaboration with
        </p>
        <div className="w-full columns-2 grid-cols-2 gap-10 text-yellow-500">
          <Link href="https://www.recursive.so/" target="_blank" rel="noopener noreferrer">
            <SocialProofLogo image="/images/recursive.png" />
          </Link>
          <Link
            href="https://www.noodles.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-start-2"
          >
            <SocialProofLogo image="/images/noodles.png" />
          </Link>
        </div>
      </section>
      <section className="relative isolate flex w-full flex-col gap-y-8 overflow-hidden rounded-3xl bg-card p-6 text-card-foreground md:p-12">
        <Grainify />
        <Gradient className="absolute bottom-0 translate-y-1/2" />
        <div className="absolute inset-0 -z-[1] -translate-y-1/2 translate-x-1/2 bg-[linear-gradient(0deg,_rgba(255,255,255,0)_50%,_hsl(var(--muted))_50%)] bg-[length:12px_12px] opacity-70 [clip-path:ellipse(50%_50%_at_50%_50%)]" />
        <Badge2 text="MINDSET" />
        <div className="flex flex-col gap-y-8">
          <h2 className="text-balance font-heading text-5xl tracking-tight sm:text-7xl">
            our builder philosophy&nbsp;
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl bg-background p-8 shadow-md">
              <h3 className="mb-4 font-heading text-2xl font-bold">innovate at the edges</h3>
              <p className="text-muted-foreground">
                new things that were not possible before are becoming possible daily, thanks to
                advancements in crypto and AI. we&apos;re innovating at the edges of what is
                possible today.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-8 shadow-md">
              <h3 className="mb-4 font-heading text-2xl font-bold">dev → market → dev cycle</h3>
              <p className="text-muted-foreground">
                engineer products in sprints. market in sprints. wait until we get strong market
                feedback before building too many features.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-background p-8 shadow-md">
            <div className="flex flex-col">
              <h3 className="mb-4 font-heading text-2xl font-bold">
                experimentation-driven building
              </h3>
              <p className="mb-6 text-muted-foreground">
                every product is an experiment. we launch products to test hypotheses we have on the
                market. if we get good feedback, we scale them further and eventually spin them out
                into their own companies.
              </p>
            </div>
            <Button asChild className="rounded-full">
              <Link href="https://medium.com/talentlayer" target="_blank" rel="noopener noreferrer">
                read our blog
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-10 py-24">
        <h2 className="text-center text-lg font-semibold leading-8">funded by ecosystems like</h2>
        <div className="grid w-full grid-cols-4 gap-10 sm:grid-cols-6 sm:gap-12 lg:grid-cols-5">
          <SocialProofLogo2 image="/images/1.png" />
          <SocialProofLogo2 image="/images/2.png" />
          <SocialProofLogo2 image="/images/3.png" />
          <SocialProofLogo2 image="/images/4.png" className="sm:col-start-2" />
          <SocialProofLogo2 image="/images/5.png" className="col-start-2 sm:col-start-auto" />
        </div>
      </section>
      <section className="relative isolate flex w-full flex-col gap-y-8 overflow-hidden rounded-3xl bg-accent p-6 text-accent-foreground md:p-12">
        <Grainify className="opacity-25" />
        <div className="absolute inset-0 -z-[1] rounded-3xl bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] opacity-10 [clip-path:circle(40%)]" />
        <Image
          src="/images/talentlayer-raccoon-head.png"
          alt="Image"
          width={100}
          height={100}
          className="mx-auto object-center"
        />
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-balance text-center font-heading text-5xl tracking-tight text-black sm:text-7xl">
            let&apos;s #buildinpublic together
          </h2>
        </div>
        <Button asChild className="mx-auto rounded-full bg-secondary text-white">
          <Link href="https://x.com/talentlayer" target="_blank" rel="noopener noreferrer">
            follow on X
          </Link>
        </Button>
      </section>
    </main>
  );
}
