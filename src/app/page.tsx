
import {Navbar} from "@/components/layout/navbar";
import {Footer} from "@/components/layout/footer";

import {Hero} from "@/components/home/hero";
import {Services} from "@/components/home/services";
import {Projects} from "@/components/home/projects";
import {Process} from "@/components/home/process";
import {ContactCTA} from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="light-section py-16">
          <div className="container-mcade">
            <p className="mx-auto max-w-3xl text-center text-base leading-8 text-slate-600 sm:text-lg">
              McAde Software is a software development
              and technology company focused on
              transforming ideas into innovative,
              reliable and scalable digital solutions.
            </p>
          </div>
        </section>

        <Services />

        <Projects />

        <section className="light-section section-padding">
          <div className="container-mcade">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#078F86] uppercase">
                  WHY MCADE
                </p>

                <h2 className="mt-5 text-3xl leading-tight font-bold text-[#082B55] sm:text-4xl">
                  Engineering Beyond Expectations.
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  We combine technical expertise,
                  thoughtful design and a deep
                  understanding of business needs
                  to deliver software that creates
                  real value.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Business Focus",
                    description:
                      "Solutions designed around real business needs.",
                  },
                  {
                    title: "Quality Engineering",
                    description:
                      "Maintainable, dependable software.",
                  },
                  {
                    title: "Modern Technology",
                    description:
                      "Appropriate technologies for every solution.",
                  },
                  {
                    title: "Collaborative Delivery",
                    description:
                      "Working closely with clients at every stage.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="font-semibold text-[#082B55]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Process />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
